import React, { useMemo } from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netBook, netListChapter } from "@/server/home";
import PcBook from "@/components/pcBook";
import { ownOs } from "@/utils/ownOs";
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import { IChapterListItem } from "@/typings/book.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import WapBook from "@/components/book";
import { getBookInfo } from "@/utils/localstorages";

interface IProps {
  isPc: boolean;
  bookId: string;
  bookInfo: IBookItem;
  recommendList: IBookItem[];
  lastChapter: IChapterListItem;
  position: EnumPosition | null;
  chapterList: IChapterListItem[];
}

const Book: NextPage<IProps> = (
  { isPc, bookId, bookInfo, recommendList, chapterList, position }
) => {

  const pathCid = useMemo(() => {
    const list = getBookInfo();
    const book = list.find(val => val.bid === bookInfo.bookId);
    if (book) {
      return book.cid ?? bookInfo.firstChapterId;
    }
    return bookInfo.firstChapterId;
  }, [bookInfo]);

  const data = [
    { title: '首页', link: "/home" },
    { title: '??', link: "/ranking" },
    { title: bookInfo.bookName }
  ]
  return <>
    <Breadcrumb data={data} style={isPc ? {} : { width: 0, height: 0, display: "none" }} />
    { isPc ?
      <PcBook
        bookInfo={bookInfo}
        recommends={recommendList}
      /> :
      <WapBook
        pathCid={pathCid}
        chapterList={chapterList}
        bookInfo={bookInfo}
      />
    }
  </>
}

export default Book;

// ssr
export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { bookId = '' } = query as { bookId: string;};

  const response = await netBook(bookId);
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { bookInfo = {} as IBookItem, alsoLook = [], lastChapter = {} as IChapterListItem, position = null } = response;
  const responseList = await netListChapter({
    bookId,
    pageNo: 1,
    pageSize: 2000,
  });
  if (responseList === 'BadRequest_404') {
    return { notFound: true }
  }
  if (responseList === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { data = [] } = responseList;

  return {
    props: {
      chapterList: data,
      bookId,
      bookInfo,
      lastChapter,
      recommendList: alsoLook,
      isPc: ownOs(ua).isPc,
      position
    },
  }
}
