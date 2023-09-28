import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { ownOs } from "@/utils/ownOs";
import { netKeywordTag } from "@/server/home";
import PcTag from "@/components/PcTag";
import WapTag from "@/components/tag";
import { IKeywordItem, ITagBookItem } from "@/typings/tag.interface";
import Breadcrumb from "@/components/common/breadcrumb";

interface IProps {
  bookList: ITagBookItem[];
  keywordList: IKeywordItem[];
  isPc: boolean;
  currentPage: number;
  pages: number;
  keywordId: string;
  keyword: string;
}

const ConvergencePage: NextPage<IProps> = (
  { isPc, currentPage, pages = 0, keywordId, keyword, bookList, keywordList = [] }) => {
  const data = [
    { title: '首页', link: "/home" },
    { title: '关键词', link: "/keywords" },
    { title: keyword },
  ]
  return <>
    <Breadcrumb data={data} style={isPc ? {} : { width: 0, height: 0, display: "none" }}/>
    {isPc ?
      <PcTag
        relationKeywords={keywordList}
        pageNo={currentPage}
        totalPage={pages}
        keywordId={keywordId}
        keyword={keyword}
        bookList={bookList}/> :
      <WapTag
        relationKeywords={keywordList}
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
    pageNo: Number(page),
    pageSize: 30,
  })

  if (response === 'BadRequest_404' || !response) {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { bookList, keywordList = [], keyword, } = response;

  const { pageNo = 1, totalPage = 0, data = [] } = bookList

  return {
    props: {
      bookList: data,
      keywordList,
      isPc: ownOs(ua).isPc,
      currentPage: pageNo,
      pages: totalPage,
      keywordId,
      keyword: (keyword.keyword || "").trim(),
    }
  }
}
