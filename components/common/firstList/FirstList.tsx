import React, { FC } from 'react'
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import styles from '@/components/common/firstList/FirstList.module.scss'

interface IProps {
  dataSource: IBookItem[];
  priority?: boolean;
}

const FirstList: FC<IProps> = ({ dataSource = [], priority = false }) => {

  if (dataSource.length === 0) {
    return null
  }

  return <div className={styles.moreBookWrap}>
    {dataSource.map((book) => {
      const { bookId, bookName, introduction, cover, ratings = 0, firstChapterId, author } = book;
      const routerToBookInfo = `/film/${bookId}`
      const ratingStr = ratings.toFixed(1)

      return <div key={bookId} className={styles.imageItemMoreWrap}>
        <Link href={routerToBookInfo}>
          <Image
            priority={priority}
            className={styles.bookImage}
            onError={onImgError}
            placeholder="blur"
            blurDataURL={book.cover || '/images/defaultBook.png'}
            width={160}
            height={212}
            src={book.cover}
            alt={book.bookName}
          />
        </Link>
        <div className={styles.bookInfo}>
          <Link href={routerToBookInfo} className={styles.bookName}>
            {bookName}
          </Link>
          <Link href={routerToBookInfo} className={styles.moreIntro}>
            {introduction}
          </Link>

          <Link href={routerToBookInfo} className={styles.bookLine2}>
            <i>By: {author}</i>
          </Link>
          <Link href={routerToBookInfo} className={styles.bookLine2}>
            最新章节　弟７０８章　　２０２３－１０－２６
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default FirstList;
