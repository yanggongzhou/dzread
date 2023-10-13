import React, { FC } from 'react'
import styles from '@/components/pcHome/secondList/SecondList.module.scss'
import { IBookInfo } from "@/typings/home.interface";
import Link from "next/link";
import { onImgError } from "@/components/common/image/ImageCover";
import Image from "next/image";

interface IProps {
  bookInfos: IBookInfo[];
  priority?: boolean;
}

const SecondList: FC<IProps> = ({ bookInfos = [], priority = false }) => {

  if (bookInfos.length === 0) {
    return null
  }

  return <div className={styles.secondListWrap}>
    {bookInfos.map((book) => {
      const routerToBookInfo = `/book/${book.bookId}`;

      return <div key={book.bookId} className={styles.secondListBox}>
        <Link href={routerToBookInfo} className={styles.bookImage}>
          <Image
            priority={priority}
            className={styles.imageItem}
            onError={onImgError}
            placeholder="blur"
            blurDataURL={book.coverWap || '/images/defaultBook.png'}
            width={130}
            height={172}
            src={book.coverWap}
            alt={book.bookName}
          />
        </Link>

        <Link href={routerToBookInfo} className={styles.bookName}>
          {book.bookName}
        </Link>
        <Link href={routerToBookInfo} className={styles.bookIntro}>
          {book.introduction}
        </Link>
        <Link href={routerToBookInfo} className={styles.bookAuthor}>
          {[book.author, book?.bookTypeThree?.[0]?.name].filter(val => val).join(' · ')}
        </Link>
      </div>
    })}
  </div>
}

export default SecondList;
