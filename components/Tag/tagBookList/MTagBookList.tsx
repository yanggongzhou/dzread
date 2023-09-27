import React, { FC } from 'react'
import Link from "next/link";
import { printKeyword } from "@/components/PcTag/tagBookList/TagBookList";
import Image from "next/image";
import { ITagBookItem } from "@/typings/tag.interface";
import styles from '@/components/Tag/tagBookList/MTagBookList.module.scss'

interface IProps {
  dataSource: ITagBookItem[];
  keyword: string;
}

const MTagBookList: FC<IProps> = ({dataSource, keyword}) => {

  return <div className={styles.bookListWrap}>
    {dataSource && dataSource.length > 0 ? dataSource.map((book, bookInd) => {
      const { bookId, bookName, introduction, cover, author, tag, typeTwoName = 'all', replacedBookName, writeStatus } = book;
      const bookNameDom = printKeyword(bookName, keyword)
      const introDom = printKeyword(introduction, keyword)
      const linkUrl = `/book_info/${bookId}/${typeTwoName || 'all'}/${replacedBookName || 'null'}`;
      const authorDom = printKeyword(author + (writeStatus ? ` · ${writeStatus}` : ''), keyword)

      return <div key={bookId + bookInd} className={styles.imageItem1Wrap}>
        <Link
          className={styles.bookImageBox}
          href={linkUrl}>
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
          <Link
            className={styles.bookName}
            dangerouslySetInnerHTML={{__html: bookNameDom}}
            href={linkUrl}
          />
          <Link
            className={styles.intro}
            dangerouslySetInnerHTML={{__html: introDom}}
            href={linkUrl}/>

          <Link
            href={linkUrl}
            className={styles.author}
            dangerouslySetInnerHTML={{ __html: authorDom }}
          />
        </div>
      </div>
    }) : null}
  </div>
}

export default MTagBookList;
