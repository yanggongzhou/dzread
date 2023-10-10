import React, { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netMoreBook } from "@/server/home";
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import { ownOs } from "@/utils/tools";
import PcRecommend from "@/components/pcRecommend";
import Breadcrumb from "@/components/common/breadcrumb";
import MRecommend from "@/components/recommend";

interface IProps {
  isPc: boolean;
  bookList: IBookItem[];
  pageNo: number;
  totalPage: number;
  position: EnumPosition;
}

const Recommend: NextPage<IProps> = ({ isPc, bookList = [], pageNo, totalPage, position }) => {
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
    {isPc ? <PcRecommend pageNo={pageNo} totalPage={totalPage} bookList={bookList} position={position} /> :
      <MRecommend pageNo={pageNo} totalPage={totalPage} bookList={bookList} position={position}/>
    }
  </>
}

// 导出异步获取数据方法
export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { position = '', page = "1" } = query;

  const _page = Number(page) | 1;
  const _position = position.split('-')[0] || '??';

  const response = await netMoreBook({
    position: 1,
    pageNo: _page,
  })
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { pageNo = 1, data = [], totalPage = 0 } = response;
  // 返回的参数将会按照 key 值赋值到 HomePage 组件的同名入参中
  return {
    props: {
      bookList: data,
      pageNo,
      totalPage,
      position: Number(position),
      isPc: ownOs(ua).isPc,
    }
  }
}

export default Recommend;
