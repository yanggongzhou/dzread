import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { ownOs } from "@/utils/tools";
import { netKeys } from "@/server/home";
import PcKeywords from "@/components/pcKeywords";
import WapKeywords from "@/components/keywords";
import { ISeoKeyWords } from "@/typings/keywords.interface";

interface IProps {
  isPc: boolean;
  words: ISeoKeyWords[]
  page: number;
  pages: number;
}

const KeywordsPage: NextPage<IProps> = ({ isPc, page, pages = 0, words = [] }) => {

  return <>
    {isPc ?
      <PcKeywords words={words} page={page} pages={pages}/>
      : <WapKeywords words={words} page={page} pages={pages}/>}
  </>
}

export default KeywordsPage;

export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1' } = query as { page: string; };

  const response = await netKeys(Number(page) || 1)

  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  if (response === 'BadRequest_404' || !response) {
    return { notFound: true }
  }

  const { words = [], totalSize } = response;

  return {
    props: {
      isPc: ownOs(ua).isPc,
      words,
      page: Number(page) || 1,
      pages: Math.ceil(totalSize/page) || 0,
    }
  }
}
