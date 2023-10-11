import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import React, { useMemo } from "react";
import { netHome } from "@/server/home";
import { EChannelCode, ISeoBannerManageVo, ISeoColumnVo } from "@/typings/home.interface";
import PcHome from "@/components/pcHome/PcHome";
import { ownOs } from "@/utils/tools";
import WapHome from "@/components/home";
import { EDevice } from "@/store/store.interfaces";

interface IProps {
  isPc: boolean;
  bannerList: ISeoBannerManageVo[];
  seoColumnVos: ISeoColumnVo[]
}

const Home: NextPage<IProps> = ({ isPc, bannerList, seoColumnVos }) => {

  const _seoColumnManageVos = useMemo(() => {
    const data = seoColumnVos.find(val => val.code === EChannelCode.首页);
    return data?.seoColumnManageVos || [];
  }, [seoColumnVos]);

  return <>
    {isPc ?
      <PcHome bannerList={bannerList} seoColumnManageVos={_seoColumnManageVos}/> :
      <WapHome bannerList={bannerList} seoColumnVos={seoColumnVos}/>
    }
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ req}): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const isPc = ownOs(ua).isPc;
  const response = await netHome(ownOs(ua).isPc ? EDevice.pc : EDevice.wap);
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { seoBannerManageVos, seoColumnVos = [], seoChannelListVos, } = response;

  return {
    props: {
      bannerList: seoBannerManageVos,
      seoColumnVos,
      isPc,
    }
  }
}

export default Home
