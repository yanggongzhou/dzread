import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { ownOs } from "@/utils/tools";
import { netTag } from "@/server/home";
import PcTag from "@/components/PcTag";
import WapTag from "@/components/tag";
import { ESearchType } from "@/typings/tag.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import { IBookSearchVo } from "@/typings/browse.interface";
import { ISeoKeyWords } from "@/typings/keywords.interface";

interface IProps {
  bookList: IBookSearchVo[];
  words: ISeoKeyWords[];
  isPc: boolean;
  page: number;
  pages: number;
  keywordId: string;
  keyword: string;
}

const TagPage: NextPage<IProps> = (
  { isPc, page, pages = 0, keywordId, keyword, bookList, words = [] }) => {
  const data = [
    { title: '首页', link: "/home" },
    { title: '关键词', link: "/keywords" },
    { title: keyword },
  ]
  return <>
    <Breadcrumb data={data} style={isPc ? {} : { width: 0, height: 0, display: "none" }}/>
    {isPc ?
      <PcTag
        words={words}
        page={page}
        pages={pages}
        keywordId={keywordId}
        keyword={keyword}
        bookList={bookList}/> :
      <WapTag
        words={words}
        page={page}
        pages={pages}
        keywordId={keywordId}
        keyword={keyword}
        bookList={bookList}/>}
  </>
}

export default TagPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', keywordId } = query as { page: string; keywordId: string; };

  const response = await netTag({
    searchType: ESearchType.标签,
    tagId: Number(keywordId),
    index: Number(page) || 1,
  })

  if (response === 'BadRequest_404' || !response) {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { bookList = [], searchType, words = [], tagName = "", totalSize, isMore } = response;

  return {
    props: {
      isPc: ownOs(ua).isPc,
      page: Number(page) || 1,
      pages: Math.ceil(totalSize/300) || 1,
      keywordId,
      keyword: (tagName || "").trim && (tagName || "").trim() || "",
      bookList,
      words,
    }
  }
}
