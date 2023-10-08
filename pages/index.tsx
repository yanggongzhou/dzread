import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import React, { useMemo } from "react";
import { netHomeData } from "@/server/home";
import { EnumPosition, IBookItem, INetHomeItem } from "@/typings/home.interface";
import PcHome from "@/components/pcHome/PcHome";
import { ownOs } from "@/utils/tools";
import WapHome from "@/components/home";

interface IProps {
  isPc: boolean;
  homeData: INetHomeItem[];
}

const Home: NextPage<IProps> = ({ isPc, homeData = [] }) => {
  const bannerList = useMemo<IBookItem[]>(() => {
    const bannerData = homeData.find(item => item.position === EnumPosition.顶部banner);
    if (bannerData) {
      return bannerData?.bookList ?? [] as IBookItem[];
    }
    return [] as IBookItem[];
  }, [homeData]);


  return <>
    {isPc ? <PcHome smallData={homeData} bannerList={bannerList}/> : <WapHome smallData={homeData} bannerList={bannerList}/>}
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
  // 返回的参数将会按照 key 值赋值到 Home 组件的同名入参中
  return {
    props: {
      homeData,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default Home
