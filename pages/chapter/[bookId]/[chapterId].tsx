import React, { useEffect, useState } from "react";
import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { netDetailChapter, netListChapter } from "@/server/home";
import { IChapterListItem, INetChapterDetailRes } from "@/typings/book.interface";
import PcReader from "@/components/pcReader";
import { ownOs } from "@/utils/tools";
import { IBookItem } from "@/typings/home.interface";
import Reader from "@/components/reader";
import { EThemeType } from "@/typings/reader.interface";
import { useAppDispatch, useAppSelector } from "@/store";
import { setFontSize, setTheme } from "@/store/modules/read.module";

interface IProps {
  setting: { fontSize: number; theme: EThemeType; };
  isPc: boolean;
  bookId: string;
  bookInfo: IBookItem;
  chapterInfo: INetChapterDetailRes;
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
  { setting, isPc, bookId, bookInfo, chapterInfo, contentList, chapterList }
) => {
  const dispatch = useAppDispatch();
  const [isPrint, setIsPrint] = useState(true);
  const theme = useAppSelector(state => isPrint ? setting.theme : state.read.theme);
  const fontSize = useAppSelector(state => isPrint ? setting.fontSize : state.read.fontSize);

  useEffect(() => {
    dispatch(setTheme(setting.theme));
    dispatch(setFontSize(setting.fontSize));
    setIsPrint(false);
  }, []);

  return <>
    {isPc ?
      <PcReader
        theme={theme}
        fontSize={fontSize}
        chapterList={chapterList}
        contentList={contentList}
        bookId={bookId}
        bookInfo={bookInfo}
        chapterInfo={chapterInfo}/> :
      <Reader
        theme={theme}
        fontSize={fontSize}
        chapterList={chapterList}
        bookId={bookId}
        bookInfo={bookInfo}
        chapterInfo={chapterInfo}/>
    }
  </>
}

export default Chapter;

// ssr
export const getServerSideProps: GetServerSideProps = async (
  { req, query, res }
): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || '';

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

  const chapterContent = chapterInfo && chapterInfo.content ? delDomTag(chapterInfo.content, chapterInfo.chapterName || '') : '';

  const contentList = chapterContent.split('\n');

  if (chapterInfo.isCharge) {
    chapterInfo.content = chapterInfo.content.slice(0, 200) + ' ...... ';
  }
  const setting = {
    theme: EThemeType.default1,
    fontSize: 18
  };
  if (req.cookies?.Dz_read_setting) {
    try {
      const { theme, fontSize } = JSON.parse(decodeURIComponent(req.cookies.Dz_read_setting));
      if (theme) {
        setting.theme = theme;
      }
      if (fontSize) {
        setting.fontSize = fontSize
      }
    } catch (e) {}
  }

  return {
    props: {
      setting,
      chapterList: responseList.data || [] as IChapterListItem[],
      bookInfo: chapterInfo.bookInfo || {} as IBookItem,
      chapterInfo,
      contentList,
      bookId,
      isPc: ownOs(ua).isPc
    },
  }
}
