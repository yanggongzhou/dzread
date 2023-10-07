import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netBrowse } from "@/server/home";
import { ownOs } from "@/utils/ownOs";
import Breadcrumb from "@/components/common/breadcrumb";
import { IBookItem } from "@/typings/home.interface";
import { IBrowseTypes } from "@/typings/browse.interface";
import PcRanking from "@/components/pcRanking";
import WapRanking from "@/components/ranking";

interface IProps {
  isPc: boolean;
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
  typeTwoName: string;
}

const RankingPage: NextPage<IProps> = (
  { isPc, types, bookList, pageNo, pages, typeTwoId }) => {
  const data = [
    { title: '首页', link: "/home" },
    { title: '小说分类', link: "/browse/0" },
    { title: '都市小说' },
  ]
  return <>
    <Breadcrumb data={data} style={isPc ? {} : { width: 0, height: 0, display: "none" }}/>
    {isPc ?
      <PcRanking
        pageNo={pageNo}
        types={types}
        bookList={bookList}
        pages={pages}
        typeTwoId={typeTwoId}
      /> :
      <WapRanking
        pageNo={pageNo}
        types={types}
        bookList={bookList}
        pages={pages}
        typeTwoId={typeTwoId}
      />}
  </>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { page = '1', typeTwoId = 0 } = query;

  const response = await netBrowse({
    typeTwoId: Number(typeTwoId) || 0,
    pageNo: Number(page),
    pageSize: 15
  })
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { currentPage = 1, pages = 0, bookList = [], types = [] } = response;
  if (bookList.length !== 0 || types.length !== 0) {
    types.unshift({ id: 0, name: 'all', replaceName: 'all', checked: false });
  }
  const typeItem = types.find(val => val.id === Number(typeTwoId));
  const typeTwoName = typeItem && typeItem.name ? typeItem.name : "all";

  return {
    props: {
      types,
      bookList,
      pageNo: currentPage,
      pages,
      isPc: ownOs(ua).isPc,
      typeTwoName,
      typeTwoId: Number(typeTwoId),
    }
  }
}

export default RankingPage;
