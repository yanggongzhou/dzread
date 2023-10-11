import React, { FC, useEffect } from 'react'
import PcChapterUnlock from "@/components/pcReader/chapterUnlock/ChapterUnlock";
import ReaderPagination from "@/components/pcReader/readerPagination/ReaderPagination";
import Link from "next/link";
import SlideOperate from "@/components/pcReader/slideOperate/SlideOperate";
import { useAppDispatch } from "@/store";
import { EOperateType, EThemePcBg, EThemeType } from "@/typings/reader.interface";
import { setOperateType } from "@/store/modules/read.module";
import { setBookInfo } from "@/utils/storage/localstorages";
import { INetCatalogRes } from "@/typings/catalog.interface";
import { EChapterStatus, INetChapterDetailRes } from "@/typings/chapter.interface";
import styles from '@/components/pcReader/index.module.scss';

interface IProps {
  fontSize: number;
  theme: EThemeType;
  chapterInfo: INetChapterDetailRes;
  catalogData: INetCatalogRes;
}

const PcReader: FC<IProps> = (
  { chapterInfo, catalogData, fontSize, theme }
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setBookInfo({ bid: chapterInfo.bookId, cid: chapterInfo.chapterId });
  }, [chapterInfo]);

  return <main
    onClick={() => dispatch(setOperateType(EOperateType.normal))}
    style={{ backgroundColor: EThemePcBg[theme] }}
    className={styles.pcReaderWrap}>

    <SlideOperate
      theme={theme}
      bookId={chapterInfo.bookId}
      chapterId={chapterInfo.chapterId}
      chapterList={catalogData.chapterList}/>

    <div className={styles.readerBox} style={{ backgroundColor: theme }}>
      <h1 className={styles.title}>{chapterInfo.chapterName}</h1>
      <div className={styles.authorBox}>
        <div>
          书名：<Link href={`/book/${chapterInfo.bookId}`} className={styles.bookName}>{chapterInfo.bookName}</Link>
        </div>
        <div>
          作者名：<span className={styles.author}>{chapterInfo.author}</span>
        </div>
        <div>
          更新时间：<span className={styles.updateTime}>{chapterInfo.chapterUtime}</span>
        </div>
      </div>

      <div style={{ fontSize }} className={styles.content}>
        { chapterInfo.content.map((val, index) => {
          return val ? <p key={index}>{val}</p> : null;
        }) }
      </div>

      {chapterInfo.status === EChapterStatus.不免费 ?
        <PcChapterUnlock
          bookId={chapterInfo.bookId}
          chapterId={chapterInfo.chapterId}/> :
        <ReaderPagination
          bookId={chapterInfo.bookId}
          prevChapterId={chapterInfo.preChapterId}
          nextChapterId={chapterInfo.nextChapterId}
        />
      }
    </div>
  </main>
}

export default PcReader
