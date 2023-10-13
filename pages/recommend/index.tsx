import React, { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netRecommend } from "@/server/home";
import { IBookInfo } from "@/typings/home.interface";
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
  name: string;
}

const Recommend: NextPage<IProps> = ({ isPc, bookInfos = [], page, pages, bookPackageId, name }) => {
  useEffect(() => {
    // 点击浏览器刷新，返回2级书籍列表顶部
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []); // eslint-disable-line

  return <>
    {isPc ? <PcRecommend page={page} pages={pages} bookInfos={bookInfos} bookPackageId={bookPackageId} name={name}/> :
      <MRecommend page={page} pages={pages} bookInfos={bookInfos} bookPackageId={bookPackageId} name={name}/>
    }
  </>
}

// 导出异步获取数据方法
export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { bookPackageId, page = "1" } = query as { page: string; bookPackageId: string };

  const _page = Number(page) || 1;

  if (isNaN(Number(bookPackageId))) {
    return { notFound: true }
  }

  const response = await netRecommend({
    index: _page,
    size: 10,
    bookPackageId: Number(bookPackageId)
  });

  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { bookInfos = [], totalSize = 0, name = '' } = response;
  // 返回的参数将会按照 key 值赋值到 HomePage 组件的同名入参中
  return {
    props: {
      bookInfos,
      page: _page,
      pages: Math.ceil(totalSize/10) || 0,
      bookPackageId: Number(bookPackageId),
      isPc: ownOs(ua).isPc,
      name,
    }
  }
}

export default Recommend;
