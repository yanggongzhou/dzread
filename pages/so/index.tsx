import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netSearch } from "@/server/home";
import { IBookItem } from "typings/home.interface";
import PcSearch from "@/components/PcSearch/PcSearch";
import { ownOs } from "@/utils/ownOs";
import MSearch from "@/components/Search";

interface IProps {
  total: number;
  current: number;
  pages: number;
  isPc: boolean;
  sValue: string;
  bookList: IBookItem[];
  isEmpty: boolean;
}

const SoPage: NextPage<IProps> = ({ isPc, sValue, bookList = [], isEmpty, current, pages, total}) => {
  return <>
    { isPc ?
      <PcSearch sValue={sValue} bookList={bookList} isEmpty={isEmpty} pages={pages} current={current} total={total}/> :
      <MSearch sValue={sValue} bookList={bookList} isEmpty={isEmpty} pages={pages} current={current} />}
  </>
}

export default SoPage;

// ssr
export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || '';
  const { searchValue = '', page = '1'} = query as { searchValue: string; page: string; };
  const { isPc } = ownOs(ua);
  if (searchValue) {
    const data = await netSearch(searchValue);
    if (data === 'BadRequest_404') {
      return { notFound: true }
    }
    if (data === 'BadRequest_500') {
      return { redirect: { destination: '/500', permanent: false } }
    }
    const { records = [], current = 1, pages = 1, total = 0 } = data || {};
    return {
      props: {
        total,
        current,
        pages,
        sValue: searchValue,
        bookList: records,
        isEmpty: !data || (records.length === 0),
        isPc,
      },
    }
  }
  return {
    props: {
      total: 0,
      current: 1,
      pages: 1,
      sValue: '',
      bookList: [],
      isEmpty: false,
      isPc,
    }
  }
}
