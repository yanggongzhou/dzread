import React, { FC } from 'react'
import styles from './BookList.module.css'
import { IBookItem } from "typings/home.interface";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  dataSource: IBookItem[];
}

const BookList: FC<IProps> = ({dataSource}) => {
  return <div className={styles.bookListWrap}>
    {dataSource && dataSource.length > 0 && dataSource.map((book) => {
      const { bookId, bookName, author, introduction, cover, replacedBookName, typeTwoName = 'all' } = book;
      const routerToBookInfo = `/book_info/${bookId}/${typeTwoName || 'all'}/${replacedBookName || 'null'}`
      return <div key={bookId} className={styles.imageItem1Wrap}>
        <Link href={routerToBookInfo}>
          <Image
            className={styles.bookImage}
            width={130}
            height={172}
            src={cover}
            placeholder={"blur"}
            blurDataURL={cover || '/images/defaultBook.png'}
            alt={bookName}
          />
        </Link>
        <div className={styles.bookInfo}>

          <h2 className={styles.bookName}>
            <Link href={routerToBookInfo}>
              {bookName}
            </Link>
          </h2>
          <p className={styles.author}>
            <Link href={routerToBookInfo}>
              {author}
            </Link>
          </p>
          <Link href={routerToBookInfo} className={styles.intro}>
            {introduction}
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default BookList;
