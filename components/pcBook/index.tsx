import React, { FC } from 'react'
import styles from "@/components/pcBook/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IBookItem } from "@/typings/home.interface";
import SecondList from "@/components/pcHome/secondList/SecondList";

interface IProps {
  bookInfo: IBookItem;
  recommends: IBookItem[];
}

const PcBook: FC<IProps> = ({ bookInfo, recommends = []  }) => {
  const routerToBook = `/download?${bookInfo.bookId}`;

  return <main className={styles.bookWrap}>
    <div className={styles.detailBox}>
      <Image
        onError={onImgError}
        className={styles.detailBookCover}
        width={272}
        height={363}
        src={bookInfo.cover}
        placeholder="blur"
        blurDataURL={bookInfo.cover || '/images/defaultBook.png'}
        alt={bookInfo.bookName}
      />

      <div className={styles.detailBoxRight}>
        <div className={styles.detailBoxRightTop}>
          <Link href={routerToBook}>
            <h1 className={styles.bookName}>{bookInfo.bookName}</h1>
          </Link>
          <Link href={routerToBook} className={styles.chapterCount}>
            {`${bookInfo.chapterCount || 0} episodes`}
          </Link>

          <Link href={routerToBook} className={styles.intro}>
            {bookInfo.introduction}
          </Link>

          <div className={styles.tagsContent}>
            { (bookInfo?.tags || []).map(val => {
              return <Link key={val} href={routerToBook} className={styles.tagItem}>{val}</Link>
            })}
          </div>
        </div>

        <Link href={`/chapter/${bookInfo.bookId}/${bookInfo.firstChapterId}`} className={styles.playBtn}>
          开始阅读
        </Link>
      </div>
    </div>
    {recommends.length > 0 ? <div className={styles.recommendBox}>
      <h2 className={styles.titleText}>你也许也喜欢</h2>
      <SecondList dataSource={recommends}/>
    </div> : null }
  </main>
}

export default PcBook;
