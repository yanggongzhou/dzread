import React from "react";
import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { netDetailChapter } from "@/server/home";
import { INetChapterDetailRes } from "@/typings/book.interface";
import PcReader from "@/components/PcReader";
import { ownOs } from "@/utils/ownOs";
import { IBookItem } from "@/typings/home.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import Reader from "@/components/reader";

interface IProps {
  isPc: boolean;
  bookId: string;
  bookInfo: IBookItem;
  chapterInfo: INetChapterDetailRes;
  chapterContent: string;
  contentList: string[];
}

const delDomTag = (str: string = '', replaceTxt: string) => {
  const name = replaceTxt ? replaceTxt.replace(/\s*/g,"") : '';
  if (!str) return '';
  // 去除样式 去除标题
  return str.replace(name, '').replace(replaceTxt, '')
    .replace(/style=/g, "s=");
}

const Chapter: NextPage<IProps> = ({ isPc, bookId, chapterContent, bookInfo, chapterInfo, contentList }) => {
  const data = [
    { title: '首页', link: "/home" },
    { title: '??', link: "/rankings" },
    { title: bookInfo.bookName, link: `/book/${bookId}` },
    { title: chapterInfo.chapterName },
  ]
  return <>
    <Breadcrumb data={data} style={{ width: 0, height: 0, display: "none" }} />
    {isPc ?
      <PcReader
        chapterContent={chapterContent}
        bookId={bookId}
        bookInfo={bookInfo}
        chapterInfo={chapterInfo}/> :
      <Reader
        contentList={contentList}
        chapterContent={chapterContent}
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
    },
  }
}
