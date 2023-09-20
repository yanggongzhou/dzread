import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netBook } from "@/server/home";
import PcBook from "@/components/pcBook";
import MFilm from "@/components/book";
import { isIos, ownOs } from "@/utils/ownOs";
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import BookCrumbs from "@/components/book/crumbs";
import { IChapterListItem } from "@/typings/book.interface";

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

  return <>
    <BookCrumbs bookInfo={bookInfo} isPc={isPc}/>
    { isPc ?
      <PcBook
        bookInfo={bookInfo}
        recommends={recommendList}
      /> :
      <MFilm
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
