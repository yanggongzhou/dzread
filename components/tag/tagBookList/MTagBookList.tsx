import React, { FC } from 'react'
import Link from "next/link";
import { printKeyword } from "@/components/pcTag/tagBookList/TagBookList";
import ImageCover from "@/components/common/image/ImageCover";
import { IBookSearchVo } from "@/typings/browse.interface";
import styles from '@/components/tag/tagBookList/MTagBookList.module.scss';

interface IProps {
  bookList: IBookSearchVo[];
  keyword: string;
}

const MTagBookList: FC<IProps> = ({ bookList = [], keyword }) => {

  return <div className={styles.tagListBox}>
    {bookList.length > 0 ? bookList.map((book, bookInd) => {

      const bookNameDom = printKeyword(book.bookName, keyword)
      const introDom = printKeyword(book.introduction || '', keyword)
      const linkUrl = `/book/${book.bookId}`;
      const authorDom = printKeyword(book.author + (book.writeStatus ? ` · ${book.writeStatus}` : '') + (` · 1.2w人阅读`), keyword)

      return <div key={book.bookId + bookInd} className={styles.listItem}>
        <ImageCover
          href={linkUrl}
          className={styles.bookCover}
          src={book.coverWap}
          width={130}
          height={172}
          alt={book.bookName}
        />
        <div className={styles.bookInfo}>
          <div>
            <Link
              className={styles.bookName}
              dangerouslySetInnerHTML={{ __html: bookNameDom }}
              href={linkUrl}
            />
            <Link
              className={styles.intro}
              dangerouslySetInnerHTML={{ __html: introDom }}
              href={linkUrl}/>
          </div>
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
