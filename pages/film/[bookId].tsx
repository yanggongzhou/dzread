import React from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netBook } from "@/server/home";
import PcFilm from "@/components/pcFilm";
import MFilm from "@/components/film";
import { isIos, ownOs } from "@/utils/ownOs";
import { IBookItem } from "@/typings/home.interface";
import BookCrumbs from "@/components/film/crumbs";

interface IProps {
  isPc: boolean;
  bookId: string;
  bookInfo: IBookItem;
  firstChapterId: string;
  isApple: boolean;
  languages: any[]; // tdk需要， 勿删
  recommends: IBookItem[];
}

const Book: NextPage<IProps> = (
  { isPc, bookInfo, firstChapterId, isApple, recommends }
) => {

  return <>
    <BookCrumbs bookInfo={bookInfo} isPc={isPc}/>
    { isPc ?
      <PcFilm
        firstChapterId={firstChapterId}
        bookInfo={bookInfo}
        recommends={recommends}
      /> :
      <MFilm
        isApple={isApple}
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

  const response = await netBook({ bookId });
  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { book = {}, chapter, languages = [], recommends = [] } = response;

  return {
    props: {
      isPc: ownOs(ua).isPc,
      bookId,
      bookInfo: book as IBookItem,
      firstChapterId: chapter?.id || '',
      isApple: isIos(ua),
      recommends,
      languages
    },
  }
}
