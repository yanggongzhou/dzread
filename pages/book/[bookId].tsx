import React, { useMemo } from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netBook } from "@/server/home";
import PcBook from "@/components/pcBook";
import { ownOs } from "@/utils/tools";
import { IBookInfoItem, IChapterInfo } from "@/typings/book.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import WapBook from "@/components/book";
import { getBookInfo } from "@/utils/storage/localstorages";
import { IBookSearchVo } from "@/typings/browse.interface";

interface IProps {
  isPc: boolean;
  bookId: string;
  book: IBookInfoItem;
  recommendBook: IBookSearchVo[];
  chapters: IChapterInfo[];
}

const Book: NextPage<IProps> = (
  { isPc, bookId, book, recommendBook, chapters }
) => {

  return <>
    { isPc ?
      <PcBook
        chapters={chapters}
        book={book}
        recommendBook={recommendBook}
      /> :
      <WapBook
        chapters={chapters}
        book={book}
        recommendBook={recommendBook}
      />
    }
  </>
}

export default Book;

// ssr
export const getServerSideProps: GetServerSideProps = async ({ req, query, locale }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { bookId = '' } = query as { bookId: string;};
  if (!bookId) return { notFound: true };

  const response = await netBook(bookId);

  if (response === 'BadRequest_404') {
    return { notFound: true }
  }
  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }
  const { book, chapters = [] as IChapterInfo[], recommendBook = [] } = response;


  return {
    props: {
      bookId,
      book,
      chapters,
      recommendBook,
      isPc: ownOs(ua).isPc,
    },
  }
}
