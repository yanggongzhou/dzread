import React, { FC } from 'react'
import styles from './index.module.css'
import { INetChapterDetailRes } from "typings/book.interface";
import PcChapterUnlock from "@/components/PcReader/chapterUnlock/ChapterUnlock";
import ReaderPagination from "@/components/PcReader/readerPagination/ReaderPagination";
import Link from "next/link";
import Image from "next/image";
import { IBookItem } from "@/typings/home.interface";
import SlideOperate from "@/components/PcReader/slideOperate/SlideOperate";

interface IProps {
  bookId: string;
  chapterContent: string;
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
}

const PcReader: FC<IProps> = ({ bookId, chapterContent, chapterInfo,bookInfo}) => {

  return <div className={ styles.pcBookWrap }>
    <SlideOperate/>

    <div className={styles.readerWrap}>
      <div>
        <div className={styles.bookCoverBox}>
          <Image
            className={styles.bookCover}
            width={160}
            height={213}
            src={bookInfo?.cover}
            placeholder={"blur"}
            blurDataURL={bookInfo?.cover || '/images/defaultBook.png'}
            alt={bookInfo?.bookName}
          />
          <Link href={`/book/${bookId}`} className={styles.bookName}>
            {bookInfo?.bookName}
          </Link>
          <div className={styles.author}>{bookInfo?.author} 著</div>
        </div>
      </div>
      <h1 className={styles.title}>{chapterInfo.chapterName}</h1>

      <div className={styles.content}>{chapterContent}</div>
      <ReaderPagination
        chapterIndex={chapterInfo.chapterIndex}
        chapterCount={chapterInfo.bookInfo.chapterCount}
        bookId={bookId}
        prevChapterId={chapterInfo.preChapter?.id}
        nextChapterId={chapterInfo.nextChapter?.id}
      />
      { chapterInfo?.isCharge ? <PcChapterUnlock lastFreeChapterId={chapterInfo.lastFreeChapterId} bid={bookId} cid={chapterInfo.id}/> : null }
    </div>
  </div>
}

export default PcReader
