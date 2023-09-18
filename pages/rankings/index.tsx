import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netMoreBook } from "@/server/home";
import { IHomeResItem } from "typings/home.interface";
import { ownOs } from "@/utils/ownOs";
import PcMore from "@/components/pcMore";
import MMore from "@/components/more";
import Breadcrumb from "@/components/common/breadcrumb";
import PcRanking from "@/components/pcRanking";

interface IProps {
  isPc: boolean;
  moreData: IHomeResItem;
  positionName: string; // 勿删，tdk用
  pageNo: number;
  pages: number;
}

const Rankings: NextPage<IProps> = ({ isPc, moreData, pageNo, pages }) => {
  const data = [
    { title: '首页', link: "/home" },
    { title: '排行榜', link: "/rankings" },
    { title: '男生小说口碑榜' },
  ]
  return <>
    <Breadcrumb data={data} />
    {isPc ? <PcRanking pageNo={pageNo} pages={pages} moreData={moreData} /> :
      <MMore pageNo={pageNo} pages={pages} moreData={moreData}/>
    }
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', position = '' } = query;

  const response = await netMoreBook({
    name: '当前热播',
    pageNum: Number(page),
  })

  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { currentPage = 1, pages = 0, data = {} as IHomeResItem } = response;
  // 返回的参数将会按照 key 值赋值到 HomePage 组件的同名入参中
  return {
    props: {
      moreData: data,
      pageNo: currentPage,
      positionName: '当前热播',
      pages,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default Rankings;
