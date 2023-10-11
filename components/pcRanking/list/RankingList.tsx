import React, { FC } from 'react'
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IRankBookDataVo } from "@/typings/ranking.interface";
import styles from '@/components/pcRanking/list/RankingList.module.scss';

interface IProps {
  rankBook: IRankBookDataVo[];
  priority?: boolean;
}

const RankingList: FC<IProps> = ({ rankBook = [], priority = false }) => {

  if (rankBook.length === 0) {
    return null
  }

  return <div className={styles.listBox}>
    {rankBook.map((book, index) => {

      const routerToBookInfo = `/book/${book.bookId}`

      return <div key={book.bookId} className={styles.itemBox}>
        <Link href={routerToBookInfo} className={styles.bookIndex}>
          {index + 1}
        </Link>

        <Link href={routerToBookInfo} className={styles.imageBox}>
          <Image
            priority={priority}
            className={styles.bookImage}
            onError={onImgError}
            placeholder="blur"
            blurDataURL={book.coverWap || '/images/defaultBook.png'}
            width={160}
            height={212}
            src={book.coverWap}
            alt={book.bookName}
          />
        </Link>

        <div className={styles.bookInfo}>

          <Link href={routerToBookInfo} className={styles.bookName}>
            <span>{book.bookName}</span>
            <span className={styles.bookRate}>{book.num}</span>
          </Link>
          <Link href={routerToBookInfo} className={styles.bookIntro}>
            {book.introduction}
          </Link>

          <Link href={routerToBookInfo} className={styles.tagBox}>
            {(book.bookTypeThreeMap || []).map(val => {
              return <span className={styles.tagItem} key={val}>{val}</span>
            })}
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default RankingList;
