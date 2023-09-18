import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { ownOs } from "@/utils/ownOs";
import { netKeywords } from "@/server/home";
import PcKeywords from "@/components/PcKeywords/PcKeywords";
import MKeywords from "@/components/Keywords/MKeywords";
import { ESearchType } from "typings/sitemap.interface";
import { IKeywordItem } from "@/typings/tag.interface";

interface IProps {
  keywordList: IKeywordItem[]
  isPc: boolean;
  currentPage: number;
  totalPage: number;
}

const KeywordsPage: NextPage<IProps> = ({ isPc, currentPage, totalPage = 0, keywordList = [] }) => {

  return <>
    {isPc ?
      <PcKeywords keywordList={keywordList} pageNo={currentPage} totalPage={totalPage}/>
      : <MKeywords keywordList={keywordList} pageNo={currentPage} totalPage={totalPage}/>}
  </>
}

export default KeywordsPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1' } = query as { page: string; };

  const res = await netKeywords({
    pageNum: Number(page),
    pageSize: 300,
    searchType: ESearchType.ALL
  })

  if (res === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  if (res === 'BadRequest_404' || !res) {
    return { notFound: true }
  }

  const { data = [], currentPage = 1, pages = 1 } = res;
  return {
    props: {
      keywordList: data,
      isPc: ownOs(ua).isPc,
      currentPage,
      totalPage: pages,
    }
  }
}
