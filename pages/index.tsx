import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import React from "react";
import { netHomeData } from "@/server/home";
import { EHomeStyle, IBookItem, IHomeResItem } from "@/typings/home.interface";
import PcHome from "@/components/pcHome/PcHome";
import MHome from "@/components/home/MHome";
import { ownOs } from "@/utils/ownOs";

interface IProps {
  isPc: boolean;
  bigList: IBookItem[];
  smallData: IHomeResItem[];
}

const Home: NextPage<IProps> = ({ isPc, bigList = [], smallData }) => {

  return <>
    {isPc ? <PcHome smallData={smallData} bigList={bigList}/> : <MHome smallData={smallData} bigList={bigList}/>}
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ req}): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const homeData = await netHomeData();

  if (homeData === 'BadRequest_404' || !homeData) {
    return { notFound: true }
  }
  if (homeData === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const bigList = (homeData.find(item => item.style === EHomeStyle.big)?.items || []).slice(0, 3);
  const smallData = homeData.filter(item => item.style === EHomeStyle.small)
  // 返回的参数将会按照 key 值赋值到 Home 组件的同名入参中
  return {
    props: {
      bigList,
      smallData,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default Home
