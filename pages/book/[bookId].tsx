import React, { useMemo } from "react";
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from "next";
import { netBook, netDetailChapter } from "@/server/home";
import PcBook from "@/components/pcBook";
import { ownOs } from "@/utils/tools";
import { IBookInfoItem, IChapterInfo } from "@/typings/book.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import WapBook from "@/components/book";
import { getBookInfo } from "@/utils/storage/localstorages";
import { IBookSearchVo } from "@/typings/browse.interface";
import { INetChapterDetailRes } from "@/typings/chapter.interface";

interface IProps {
  isPc: boolean;
  book: IBookInfoItem;
  recommendBook: IBookSearchVo[];
  chapters: IChapterInfo[];
  chapterInfo: INetChapterDetailRes;
}

const Book: NextPage<IProps> = (
  { isPc, book, recommendBook, chapters, chapterInfo }
) => {

  return <>
    { isPc ?
      <PcBook
        chapterInfo={chapterInfo}
        chapters={chapters}
        book={book}
        recommendBook={recommendBook}
      /> :
      <WapBook
        chapterInfo={chapterInfo}
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

  const chapterInfo = await netDetailChapter(bookId, chapters[0].chapterId);

  if (chapterInfo === 'BadRequest_404') {
    return { notFound: true }
  }
  if (chapterInfo === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }

  const content = [];
  let length = 0;

  chapterInfo.content.forEach(val => {
    if ((length + val.length) > 100 && length < 100) {
      content.push(val.slice(1, (100 - length)) + '...');
    }
    length += val.length;
    if (length < 100) {
      content.push(val);
    }
  });

  return {
    props: {
      book,
      chapters,
      recommendBook,
      chapterInfo: {
        ...chapterInfo,
        content,
      },
      isPc: ownOs(ua).isPc,
    },
  }
}
