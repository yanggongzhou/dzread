import React, { FC, useEffect, useState } from 'react'
import styles from "@/components/pcBook/index.module.scss";
import Link from "next/link";
import { IBookInfoItem, IChapterInfo } from "@/typings/book.interface";
import { IBookSearchVo } from "@/typings/browse.interface";
import PcBookDetail from "@/components/pcBook/bookDetail/BookDetail";
import ClientConfig from "@/client.config";
import QRCode from "qrcode.react";
import PcBookTabs from "@/components/pcBook/tabs/PcBookTabs";
import { getSessionBook, removeSessionBook, setSessionBook } from "@/utils/storage/sessionStorages";
import RecommendBox from "@/components/pcBook/recommendBox";
import Image from "next/image";
import classNames from "classnames";
import { netBookRe } from "@/server/home";
import { INetChapterDetailRes } from "@/typings/chapter.interface";

interface IProps {
  book: IBookInfoItem;
  recommendBook: IBookSearchVo[];
  chapters: IChapterInfo[];
  chapterInfo: INetChapterDetailRes;
}

const PcBook: FC<IProps> = ({ book, recommendBook = [], chapters = [], chapterInfo }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(recommendBook);
  useEffect(() => {
    setActiveIndex(getSessionBook());
    // return () => {
    //   removeSessionBook();
    // }
  }, []);

  const onSwap = async () => {
    setLoading(true);
    const { bookList = [] } = await netBookRe({});
    if (bookList.length > 0) {
      setList(bookList);
    }
    setLoading(false);
  }

  return <main className={styles.bookWrap}>
    <div className={styles.bookBox}>
      <PcBookDetail book={book}/>
    </div>
    <div className={styles.container}>
      <div className={styles.btnBox}>
        <Link href={`/chapter/${book.bookId}/${chapters[0].chapterId}`} className={styles.readBtn}>开始阅读</Link>
        <div className={styles.phoneBtn}>
          <span>手机扫码读本书</span>
          <div className={styles.slideBox}>
            <p className={styles.slideTitle}>{ClientConfig.name}手机版</p>
            <QRCode
              renderAs={"canvas"}
              className={styles.slideQrCode}
              value="'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'"
            />
          </div>
        </div>
      </div>

      <div className={styles.contentBox}>
        <PcBookTabs
          chapterInfo={chapterInfo}
          chapters={chapters}
          bookInfo={book}
          activeIndex={activeIndex}
          onChange={(ind) => {
            setSessionBook(String(ind));
            setActiveIndex(ind)
          }}
        />
        {list.length > 0 ? <div className={styles.recommendBox}>
          <div className={styles.titleBox}>
            <h3 className={styles.title}>同类热门书</h3>
            {list.length < 3 ? null : <button className={styles.columnLink} onClick={() => onSwap()}>
              <span>换一换</span>
              <Image
                className={classNames(styles.linkIcon, loading && styles.linkIconAni)}
                width={13}
                height={13}
                src={'/images/book/refresh.png'}
                alt={''}
              />
            </button>}
          </div>
          <RecommendBox list={list}/>
        </div> : null }
      </div>


    </div>
  </main>
}

export default PcBook;
