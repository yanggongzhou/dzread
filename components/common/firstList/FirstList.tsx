import React, { FC } from 'react'
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IRankBookDataVo } from "@/typings/ranking.interface";
import styles from '@/components/common/firstList/FirstList.module.scss';

interface IProps {
  dataSource: IRankBookDataVo[];
  priority?: boolean;
}

const FirstList: FC<IProps> = ({ dataSource = [], priority = false }) => {

  if (dataSource.length === 0) {
    return null
  }

  return <div className={styles.moreBookWrap}>
    {dataSource.map((book, index) => {

      const routerToBookInfo = `/book/${book.bookId}`

      return <div key={book.bookId} className={styles.imageItemMoreWrap}>
        <Link href={routerToBookInfo} className={styles.bookIndex}>
          {index + 1}
        </Link>

        <Link href={routerToBookInfo}>
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
            {book.bookName}
          </Link>
          <Link href={routerToBookInfo} className={styles.moreIntro}>
            {book.introduction}
          </Link>

          <Link href={routerToBookInfo} className={styles.tagBox}>
            {(book.threeTypeTag || []).map(val => {
              return <span className={styles.tagItem} key={val}>{val}</span>
            })}
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default FirstList;
