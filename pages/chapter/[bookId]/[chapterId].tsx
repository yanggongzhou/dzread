import React from "react";
import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { netDetailChapter, netListChapter } from "@/server/home";
import { IChapterListItem, INetChapterDetailRes } from "@/typings/book.interface";
import PcReader from "@/components/pcReader";
import { ownOs } from "@/utils/ownOs";
import { IBookItem } from "@/typings/home.interface";
import Reader from "@/components/reader";

interface IProps {
  isPc: boolean;
  bookId: string;
  bookInfo: IBookItem;
  chapterInfo: INetChapterDetailRes;
  chapterContent: string;
  contentList: string[];
  chapterList: IChapterListItem[];
}

const delDomTag = (str: string = '', replaceTxt: string) => {
  const name = replaceTxt ? replaceTxt.replace(/\s*/g,"") : '';
  if (!str) return '';
  // 去除样式 去除标题
  return str.replace(name, '').replace(replaceTxt, '')
    .replace(/style=/g, "s=");
}

const Chapter: NextPage<IProps> = (
  { isPc, bookId, chapterContent, bookInfo, chapterInfo, contentList, chapterList }
) => {

  return <>
    {isPc ?
      <PcReader
        chapterList={chapterList}
        contentList={contentList}
        bookId={bookId}
        bookInfo={bookInfo}
        chapterInfo={chapterInfo}/> :
      <Reader
        chapterList={chapterList}
        contentList={contentList}
        bookId={bookId}
        bookInfo={bookInfo}
        chapterInfo={chapterInfo}/>
    }
  </>
}

export default Chapter;

// ssr
export const getServerSideProps: GetServerSideProps = async ({ req, query }): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || ''
  const { bookId, chapterId = '' } = query as { bookId: string, chapterId: string };
  const _chapterId = chapterId === '0' ? undefined : chapterId;
  const chapterInfo = await netDetailChapter(bookId, _chapterId);
  if (chapterInfo === 'BadRequest_404') {
    return { notFound: true }
  }
  if (chapterInfo === 'BadRequest_500' || !chapterInfo) {
    return { redirect: { destination: '/500', permanent: false } }
  }

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
  const { data = [], totalPage = 0 } = responseList;

  const chapterContent = chapterInfo && chapterInfo.content ? delDomTag(chapterInfo.content, chapterInfo.chapterName || '') : '';

  const contentList = chapterContent.split('\n')
  return {
    props: {
      bookInfo: chapterInfo.bookInfo || {} as IBookItem,
      chapterInfo,
      chapterContent,
      contentList,
      bookId,
      isPc: ownOs(ua).isPc,
      chapterList: data,
    },
  }
}
