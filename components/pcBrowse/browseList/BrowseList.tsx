import React, { FC } from 'react'
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IBookSearchVo } from "@/typings/browse.interface";
import styles from '@/components/pcBrowse/browseList/BrowseList.module.scss';

interface IProps {
  books: IBookSearchVo[];
  priority?: boolean;
}

const BrowseList: FC<IProps> = ({ books = [], priority = false }) => {

  if (books.length === 0) {
    return null
  }

  return <div className={styles.listBox}>
    {books.map(book => {

      const routerToBookInfo = `/book/${book.bookId}`

      return <div key={book.bookId} className={styles.itemBox}>

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
            <span className={styles.bookRate}>{book.scoreNum}</span>
          </Link>
          <Link href={routerToBookInfo} className={styles.bookIntro}>
            {book.introduction}
          </Link>

          <Link href={routerToBookInfo} className={styles.tagBox}>
            {(book.bookTypeThree || []).map(val => {
              return <span className={styles.tagItem} key={val.id}>{val.name}</span>
            })}
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default BrowseList;
