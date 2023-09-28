import React, { FC } from 'react'
import Link from "next/link";
import { printKeyword } from "@/components/pcTag/tagBookList/TagBookList";
import { ITagBookItem } from "@/typings/tag.interface";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/tag/tagBookList/MTagBookList.module.scss'

interface IProps {
  dataSource: ITagBookItem[];
  keyword: string;
}

const MTagBookList: FC<IProps> = ({ dataSource, keyword }) => {

  return <div className={styles.tagListBox}>
    {dataSource && dataSource.length > 0 ? dataSource.map((book, bookInd) => {
      const {
        bookId,
        bookName,
        introduction,
        cover,
        author,
        typeTwoName = 'all',
        replacedBookName,
        writeStatus
      } = book;
      const bookNameDom = printKeyword(bookName, keyword)
      const introDom = printKeyword(introduction, keyword)
      const linkUrl = `/book_info/${bookId}/${typeTwoName || 'all'}/${replacedBookName || 'null'}`;
      const authorDom = printKeyword(author + (writeStatus ? ` · ${writeStatus}` : '') + (` · 1.2w人阅读`), keyword)

      return <div key={bookId + bookInd} className={styles.listItem}>
        <ImageCover
          href={linkUrl}
          className={styles.bookCover}
          src={cover}
          width={130}
          height={172}
          alt={bookName}
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
