import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import React, { useMemo } from "react";
import { netHome, netHomeData } from "@/server/home";
import {
  EnumPosition,
  IBookItem,
  INetHomeItem,
  ISeoBannerManageVo,
  ISeoColumnVo
} from "@/typings/home.interface";
import PcHome from "@/components/pcHome/PcHome";
import { ownOs } from "@/utils/tools";
import WapHome from "@/components/home";
import { EDevice } from "@/store/store.interfaces";

interface IProps {
  isPc: boolean;
  homeData: INetHomeItem[];
  bannerList: ISeoBannerManageVo[];
  seoColumnVos: ISeoColumnVo[]
}

const Home: NextPage<IProps> = ({ isPc, homeData = [], bannerList, seoColumnVos }) => {
  const bannerdata = useMemo<IBookItem[]>(() => {
    const bannerData = homeData.find(item => item.position === EnumPosition.顶部banner);
    if (bannerData) {
      return bannerData?.bookList ?? [] as IBookItem[];
    }
    return [] as IBookItem[];
  }, [homeData]);


  return <>
    {isPc ?
      <PcHome smallData={homeData} bannerList={bannerdata}/> :
      <WapHome
        smallData={homeData}
        bannerList={bannerList}
        seoColumnVos={seoColumnVos}
      />
    }
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

  const response = await netHome(ownOs(ua).isPc ? EDevice.pc : EDevice.wap);
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { seoBannerManageVos, seoColumnVos, seoChannelListVos, } = response;
  return {
    props: {
      homeData,
      bannerList: seoBannerManageVos,
      seoColumnVos,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default Home
