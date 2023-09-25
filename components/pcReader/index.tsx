import React, { FC } from 'react'
import { IChapterListItem, INetChapterDetailRes } from "typings/book.interface";
import PcChapterUnlock from "@/components/pcReader/chapterUnlock/ChapterUnlock";
import ReaderPagination from "@/components/pcReader/readerPagination/ReaderPagination";
import Link from "next/link";
import { IBookItem } from "@/typings/home.interface";
import SlideOperate from "@/components/pcReader/slideOperate/SlideOperate";
import styles from '@/components/pcReader/index.module.scss';
import { useAppDispatch, useAppSelector } from "@/store";
import { EOperateType } from "@/typings/reader.interface";
import { setOperateType } from "@/store/modules/read.module";

interface IProps {
  bookId: string;
  contentList: string[];
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
  chapterList: IChapterListItem[];
}

const PcReader: FC<IProps> = (
  { bookId, contentList, chapterInfo, bookInfo, chapterList }
) => {

  const theme = useAppSelector(state => state.read.theme);
  const fontSize = useAppSelector(state => state.read.fontSize);
  const dispatch = useAppDispatch();

  return <main
    onClick={() => dispatch(setOperateType(EOperateType.normal))}
    style={{ backgroundColor: theme }}
    className={styles.pcReaderWrap}>

    <SlideOperate bookId={bookId} chapterId={chapterInfo.id} chapterList={chapterList}/>

    <div className={styles.readerBox}>
      <h1 className={styles.title}>{chapterInfo.chapterName}</h1>
      <div className={styles.authorBox}>
        <div>
          书名：<Link href={`/book/${bookId}`} className={styles.bookName}>{bookInfo?.bookName}</Link>
        </div>
        <div>
          作者名：<span className={styles.author}>{bookInfo?.author}</span>
        </div>
        <div>
          更新时间：<span className={styles.updateTime}>{'2023-07-17 14:28:56'}</span>
        </div>
      </div>

      <div style={{ fontSize }} className={styles.content}>
        {/*{chapterContent}*/}
        { contentList.map((val, index) => {
          return val ? <p key={index}>{val}</p> : null;
        }) }
      </div>

      {chapterInfo?.isCharge ?
        <PcChapterUnlock
          bookId={bookId}
          chapterId={chapterInfo.id}/> :
        <ReaderPagination
          chapterIndex={chapterInfo.chapterIndex}
          chapterCount={chapterInfo.bookInfo.chapterCount}
          bookId={bookId}
          prevChapterId={chapterInfo.preChapter?.id}
          nextChapterId={chapterInfo.nextChapter?.id}
        />
      }
    </div>
  </main>
}

export default PcReader
