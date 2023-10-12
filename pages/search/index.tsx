import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netTag } from "@/server/home";
import PcSearch from "@/components/pcSearch";
import { ownOs } from "@/utils/tools";
import WapSearch from "@/components/search";
import { IBookSearchVo } from "@/typings/browse.interface";
import { ESearchType } from "@/typings/tag.interface";

interface IProps {
  page: number;
  pages: number;
  sValue: string;
  isPc: boolean;
  bookList: IBookSearchVo[];
  isEmpty: boolean;
  searchType?: ESearchType;
}

const Search: NextPage<IProps> = ({ isPc, sValue, bookList = [], isEmpty, page, pages, searchType}) => {
  return <>
    { isPc ?
      <PcSearch
        sValue={sValue}
        bookList={bookList}
        isEmpty={isEmpty}
        pages={pages}
        page={page}/> :
      <WapSearch
        sValue={sValue}
        bookList={bookList}
        isEmpty={isEmpty}
        pages={pages}
        page={page} />}
  </>
}

export default Search;

// ssr
export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || '';
  const { searchValue = '', page = '1' } = query as { searchValue: string; page: string; };
  const { isPc } = ownOs(ua);
  const _page = Number(page) || 1;
  if (searchValue) {
    const data = await netTag({
      searchType: ESearchType.全文,
      keyword: searchValue,
      index: _page
    });

    if (data === 'BadRequest_404') {
      return { notFound: true }
    }
    if (data === 'BadRequest_500') {
      return { redirect: { destination: '/500', permanent: false } }
    }
    const { bookList = [], searchType, words = [], tagName = "", totalSize, isMore } = data;

    return {
      props: {
        page: _page,
        pages: Math.ceil(totalSize/10) || 1,
        sValue: searchValue,
        bookList,
        isEmpty: !data || (bookList.length === 0),
        isPc,
        searchType: searchType as ESearchType,
      },
    }
  }
  return {
    props: {
      page: 1,
      pages: 1,
      sValue: '',
      bookList: [],
      isEmpty: false,
      isPc,
    }
  }
}
