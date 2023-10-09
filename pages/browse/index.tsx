import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import React from "react";
import { netBrowse } from "@/server/home";
import { ownOs } from "@/utils/tools";
import MBrowse from "@/components/browse";
import PcBrowse from "@/components/pcBrowse";
import { IBookSearchVo, ITypeOneVo } from "@/typings/browse.interface";
import Breadcrumb from "@/components/common/breadcrumb";

interface IProps {
  isPc: boolean;
  page: number;
  pages: number;
  books: IBookSearchVo[];
  typeOneVoList: ITypeOneVo[];
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
}

const Browse: NextPage<IProps> = (
  {
    isPc,
    page,
    pages,
    books,
    typeOneVoList,
    statusMark,
    wordType,
    params
  }) => {
  const data = [
    { title: '首页', link: "/home" },
    { title: '小说分类', link: "/browse/0" },
    { title: '都市小说' },
  ]
  return <>
    <Breadcrumb data={data} style={isPc ? {} : { width: 0, height: 0, display: "none" }}/>
    {isPc ?
      <PcBrowse
        page={page}
        types={typeOneVoList}
        bookList={books}
        pages={pages}
        params={params}
      /> :
      <MBrowse
        page={page}
        typeOneVoList={typeOneVoList}
        books={books}
        pages={pages}
        statusMark={statusMark}
        wordType={wordType}
      />}
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', types } = query as { page: string; types?: string; };


  const params = {
    id: void 0, // 一级分类id，如果有cid，将不会按照这个传
    cid: void 0, // 二级分类id，如果有tid，将不会按照这个传
    tid: void 0, // 三级分类id，如果有三级id就查三级id不查二级id的
    status: void 0,
    wordType: void 0,
  }
  if (types) {
    const typeArr = types.split('-');
    params.id = typeArr[0];
    params.cid = typeArr[1];
    params.tid = typeArr[2];
    params.status = typeArr[3];
    params.wordType = typeArr[4];
  }
  const response = await netBrowse({
    ...params,
    index: page, // 书籍页码，默认1
    size: '10',
  })
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }

  const { books = [], totalSize = 0, typeOneVoList = [], statusMark = [], wordType = [] } = response;

  return {
    props: {
      books,
      page: Number(page) || 1,
      pages: Math.ceil(totalSize/10) || 0,
      typeOneVoList,
      statusMark,
      wordType,
      isPc: ownOs(ua).isPc,
    }
  }
}

export default Browse;
