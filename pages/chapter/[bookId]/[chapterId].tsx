import React, { useEffect, useState } from "react";
import type { NextPage } from 'next'
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { netCatalog, netDetailChapter, netListChapter } from "@/server/home";
import PcReader from "@/components/pcReader";
import { ownOs } from "@/utils/tools";
import Reader from "@/components/reader";
import { EThemeType } from "@/typings/reader.interface";
import { useAppDispatch, useAppSelector } from "@/store";
import { setFontSize, setTheme } from "@/store/modules/read.module";
import { INetChapterDetailRes } from "@/typings/chapter.interface";
import { INetCatalogRes } from "@/typings/catalog.interface";

interface IProps {
  setting: { fontSize: number; theme: EThemeType; };
  isPc: boolean;
  chapterData: INetChapterDetailRes;
  catalogData: INetCatalogRes;
}

const Chapter: NextPage<IProps> = (
  { setting, isPc, chapterData, catalogData }
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
        chapterData={chapterData}
        catalogData={catalogData}
        chapterInfo={chapterData.chapterInfo}
      />
    }
  </>
}

export default Chapter;

// ssr
export const getServerSideProps: GetServerSideProps = async (
  { req, query, res }
): Promise<GetServerSidePropsResult<IProps>> => {
  const ua = req?.headers['user-agent'] || '';

  const { bookId = '', chapterId = '' } = query as { bookId: string, chapterId: string };

  if (!chapterId) {
    return { redirect: { destination: bookId ? `/book/${bookId}` : '/', permanent: false } };
  }
  const response = await netDetailChapter(bookId, chapterId);

  if (response === 'BadRequest_404' || !response) {
    return { notFound: true }
  }

  if (response === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
  }

  const catalogData = await netCatalog({
    bookId,
    startIndex: 1,
    endIndex: 2000,
  });
  if (catalogData === 'BadRequest_404') {
    return { notFound: true }
  }
  if (catalogData === 'BadRequest_500') {
    return { redirect: { destination: '/500', permanent: false } }
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
      catalogData,
      chapterData: response,
      isPc: ownOs(ua).isPc
    },
  }
}
