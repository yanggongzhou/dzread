import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netMoreBook } from "@/server/home";
import { ColumnNameRouteReversion, EHomeName, IHomeResItem } from "@/typings/home.interface";
import { ownOs } from "@/utils/ownOs";
import PcMore from "@/components/pcMore";
import MMore from "@/components/more";

interface IProps {
  isPc: boolean;
  moreData: IHomeResItem;
  positionName: string; // 勿删，tdk用
  pageNo: number;
  pages: number;
}

const More: NextPage<IProps> = ({ isPc, moreData, pageNo, pages }) => {
  return <>
    {isPc ? <PcMore pageNo={pageNo} pages={pages} moreData={moreData} /> :
      <MMore pageNo={pageNo} pages={pages} moreData={moreData}/>
    }
  </>
}

// 导出异步获取数据方法
export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', position = '' } = query;
  let name = '';
  if (position && Reflect.has(ColumnNameRouteReversion, position as EHomeName)) {
    name = Reflect.get(ColumnNameRouteReversion, position as EHomeName)
  } else {
    return { notFound: true }
  }
  const response = await netMoreBook({
    name,
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
      positionName: name,
      pages,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default More;
