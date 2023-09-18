import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { ownOs } from "@/utils/ownOs";
import { netKeywordTag } from "@/server/home";
import PcTag from "@/components/PcTag/PcTag";
import MTag from "@/components/Tag/MTag";
import { IKeywordItem, ITagBookItem } from "@/typings/tag.interface";
import Breadcrumb from "@/components/common/breadcrumb";


interface IProps {
  bookList: ITagBookItem[];
  relationKeywords: IKeywordItem[];
  isPc: boolean;
  currentPage: number;
  pages: number;
  keywordId: string;
  keyword: string;
}

const ConvergencePage: NextPage<IProps> = (
  { isPc, currentPage, pages = 0, keywordId, keyword, bookList, relationKeywords = [] }) => {
  const data = [
    { title: '首页', link: "/home" },
    { title: '关键词', link: "/keywords" },
    { title: keyword },
  ]
  return <>
    <Breadcrumb data={data}/>
    {isPc ?
      <PcTag
        relationKeywords={relationKeywords}
        pageNo={currentPage}
        totalPage={pages}
        keywordId={keywordId}
        keyword={keyword}
        bookList={bookList}/> :
      <MTag
        relationKeywords={relationKeywords}
        pageNo={currentPage}
        totalPage={pages}
        keywordId={keywordId}
        keyword={keyword}
        bookList={bookList}/>}
  </>
}

export default ConvergencePage;

export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', keywordId } = query as { page: string; keywordId: string; };
  const response = await netKeywordTag({
    id: keywordId,
    pageNum: Number(page),
    pageSize: 30,
  })

  if (response === 'BadRequest_404' || !response) {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { books = [], relationKeywords = [], keyword = '', pages = 0, currentPage = 1, keyStatus } = response;

  if (keyStatus === 0) {
    return { notFound: true }
  }

  return {
    props: {
      bookList: books,
      relationKeywords,
      isPc: ownOs(ua).isPc,
      currentPage,
      pages,
      keywordId,
      keyword: keyword.trim(),
    }
  }
}
