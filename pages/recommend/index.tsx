import React, { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netRecommend } from "@/server/home";
import { EChannelCode, IBookInfo } from "@/typings/home.interface";
import { ownOs } from "@/utils/tools";
import PcRecommend from "@/components/pcRecommend";
import Breadcrumb from "@/components/common/breadcrumb";
import MRecommend from "@/components/recommend";

interface IProps {
  isPc: boolean;
  bookInfos: IBookInfo[];
  page: number;
  pages: number;
  bookPackageId: number;
  code: EChannelCode;
}

const Recommend: NextPage<IProps> = ({ isPc, bookInfos = [], page, pages, bookPackageId, code }) => {
  useEffect(() => {
    // 点击浏览器刷新，返回2级书籍列表顶部
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []); // eslint-disable-line

  const data = [
    { title: '首页', link: "/home" },
    { title: '男频精选' },
  ]
  return <>
    <Breadcrumb data={data} style={isPc ? {} : { width: 0, height: 0, display: "none" }} />
    {isPc ? <PcRecommend page={page} pages={pages} bookInfos={bookInfos} bookPackageId={bookPackageId} code={code}/> :
      <MRecommend page={page} pages={pages} bookInfos={bookInfos} bookPackageId={bookPackageId} code={code}/>
    }
  </>
}

// 导出异步获取数据方法
export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = "1", bookPackageId } = query as { page: string; bookPackageId: string };
  const code = bookPackageId.split('-')[0]
  const _bookPackageId = bookPackageId.split('-')[1]
  const _page = Number(page) | 1;
  if (isNaN(Number(code)) || isNaN(Number(_bookPackageId))) {
    return { notFound: true }
  }

  const response = await netRecommend({
    id: Number(code),
    index: _page,
    size: 10,
    bookPackageId: Number(_bookPackageId)
  })
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { bookInfos = [], totalSize = 0 } = response;
  // 返回的参数将会按照 key 值赋值到 HomePage 组件的同名入参中
  return {
    props: {
      bookInfos,
      page: _page,
      pages: Math.ceil(totalSize/10) || 0,
      bookPackageId: Number(_bookPackageId),
      code: Number(code) || EChannelCode.男生,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default Recommend;
