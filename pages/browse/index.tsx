import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import React from "react";
import { netBrowse } from "@/server/home";
import { ownOs } from "@/utils/tools";
import MBrowse from "@/components/browse";
import PcBrowse from "@/components/pcBrowse";
import { IBookSearchVo, IBrowseParams, ITypeOneVo, ITypeTwoVo } from "@/typings/browse.interface";

interface IProps {
  isPc: boolean;
  page: number;
  pages: number;
  books: IBookSearchVo[];
  typeOneVoList: ITypeOneVo[];
  typeTwoVos: ITypeTwoVo[];
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
  params: IBrowseParams;
}

const Browse: NextPage<IProps> = (
  {
    isPc,
    page,
    pages,
    books,
    typeOneVoList,
    typeTwoVos,
    statusMark,
    wordType,
    params,
  }) => {

  return <>

    {isPc ?
      <PcBrowse
        page={page}
        typeOneVoList={typeOneVoList}
        books={books}
        pages={pages}
        statusMark={statusMark}
        wordType={wordType}
        params={params}
      /> :
      <MBrowse
        page={page}
        typeTwoVos={typeTwoVos}
        books={books}
        pages={pages}
        statusMark={statusMark}
        wordType={wordType}
        params={params}
      />}
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', types } = query as { page: string; types?: string; };


  const params = {
    id: '0', // 一级分类id，如果有cid，将不会按照这个传
    cid: '0', // 二级分类id，如果有tid，将不会按照这个传
    tid: '0', // 三级分类id，如果有三级id就查三级id不查二级id的
    status: '0',
    wordType: '0',
  }
  if (types) {
    const typeArr = types.split('-');
    params.id = typeArr[0];
    params.cid = typeArr[1] || '0';
    params.tid = typeArr[2] || '0';
    params.status = typeArr[3] || '0';
    params.wordType = typeArr[4] || '0';
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

  const { books = [], totalSize = 0, typeOneVoList = [] as ITypeOneVo[], statusMark = [], wordType = [] } = response;
  if(!params.id || params.id === '0') {
    params.id = '2' // ERankVoSex.男生
  }

  const typeTwoVos = typeOneVoList.find(item => item.categoryId == params.id)?.typeTwoVos || typeOneVoList[0].typeTwoVos || []

  return {
    props: {
      books,
      page: Number(page) || 1,
      pages: Math.ceil(totalSize/10) || 0,
      typeOneVoList,
      typeTwoVos,
      statusMark,
      wordType,
      isPc: ownOs(ua).isPc,
      params
    }
  }
}

export default Browse;
