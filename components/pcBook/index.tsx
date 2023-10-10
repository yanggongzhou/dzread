import React, { FC } from 'react'
import styles from "@/components/pcBook/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import SecondList from "@/components/pcHome/secondList/SecondList";
import { IBookInfoItem, IChapterInfo } from "@/typings/book.interface";
import { IBookSearchVo } from "@/typings/browse.interface";

interface IProps {
  book: IBookInfoItem;
  recommendBook: IBookSearchVo[];
  chapters: IChapterInfo[];
}

const PcBook: FC<IProps> = ({ book, recommendBook = [], chapters = [] }) => {
  const routerToBook = `/download?${book.bookId}`;

  return <main className={styles.bookWrap}>
    <div className={styles.detailBox}>
      <Image
        onError={onImgError}
        className={styles.detailBookCover}
        width={272}
        height={363}
        src={book.coverWap}
        placeholder="blur"
        blurDataURL={book.coverWap || '/images/defaultBook.png'}
        alt={book.bookName}
      />

      <div className={styles.detailBoxRight}>
        <div className={styles.detailBoxRightTop}>
          <Link href={routerToBook}>
            <h1 className={styles.bookName}>{book.bookName}</h1>
          </Link>
          <Link href={routerToBook} className={styles.chapterCount}>
            {`${book.clickNum || 0} episodes`}
          </Link>

          <Link href={routerToBook} className={styles.intro}>
            {book.introduction}
          </Link>

          <div className={styles.tagsContent}>
            { (book?.tags || []).map(val => {
              return <Link key={val} href={routerToBook} className={styles.tagItem}>{val}</Link>
            })}
          </div>
        </div>

        <Link href={`/chapter/${book.bookId}/${book.firstChapterId}`} className={styles.playBtn}>
          开始阅读
        </Link>
      </div>
    </div>
    {recommendBook.length > 0 ? <div className={styles.recommendBox}>
      <h2 className={styles.titleText}>你也许也喜欢</h2>
      <SecondList bookInfos={recommendBook}/>
    </div> : null }
  </main>
}

export default PcBook;
