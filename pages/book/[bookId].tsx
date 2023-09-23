import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netBook } from "@/server/home";
import PcBook from "@/components/pcBook";
import { ownOs } from "@/utils/ownOs";
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import { IChapterListItem } from "@/typings/book.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import MBook from "@/components/book";

interface IProps {
  isPc: boolean;
  bookId: string;
  bookInfo: IBookItem;
  recommendList: IBookItem[];
  lastChapter: IChapterListItem;
  position: EnumPosition | null;
}

const Book: NextPage<IProps> = (
  { isPc, bookId, bookInfo, recommendList, lastChapter, position }
) => {

  const data = [
    { title: '首页', link: "/home" },
    { title: '??', link: "/rankings" },
    { title: bookInfo.bookName }
  ]
  return <>
    <Breadcrumb data={data} style={isPc ? {} : { width: 0, height: 0, display: "none" }} />
    { isPc ?
      <PcBook
        bookInfo={bookInfo}
        recommends={recommendList}
      /> :
      <MBook
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

  return {
    props: {
      bookId,
      bookInfo,
      lastChapter,
      recommendList: alsoLook,
      isPc: ownOs(ua).isPc,
      position
    },
  }
}
