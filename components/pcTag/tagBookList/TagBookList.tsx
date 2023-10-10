import React, { FC } from 'react'
import Link from "next/link";
import Image from "next/image";
import { IBookSearchVo } from "@/typings/browse.interface";
import styles from '@/components/pcTag/tagBookList/TagBookList.module.scss';

interface IProps {
  bookList: IBookSearchVo[];
  keyword: string;
}

export const printKeyword = (content: string, keyword: string) => {
  if (!keyword || !content) return content;
  const index = content.indexOf(keyword);
  const c = index > -1 ? content.substr(index, keyword.length) : '';
  const res = `<span style="color: #FF5F27">${c}</span>`
  const regS = new RegExp(keyword, 'gi')
  return content.replace(regS, res) || content
}

export const printKeywordBookName = (content: string, keyword: string) => {
  if (!keyword) return content;
  const _keyword = `<span style="color: #FF5F27">${keyword.split('').join('<span style="color: #333333">*</span>')}</span>`
  const contentArr = content.split(keyword).map(val => {
    return val.split('').join('*')
  })
  return contentArr.join(`*${_keyword}*`) || content
}

const TagBookList: FC<IProps> = ({bookList, keyword}) => {

  return <div className={styles.moreBookWrap}>
    { bookList.map((book, bookInd) => {
      const { bookName, introduction = '', author } = book;
      const bookNameDom = printKeyword(bookName, keyword)
      const introDom = printKeyword(introduction, keyword)
      const linkUrl = `/book/${book.bookId}`;
      const authorDom = printKeyword(`By: ${author} ${book.writeStatus ? ` · ${book.writeStatus}` : ''}`, keyword)

      return <div key={book.bookId + bookInd} className={styles.imageItemMoreWrap}>
        <Link href={linkUrl} className={styles.bookImageBox}>
          <Image
            className={styles.bookImage}
            width={150}
            height={200}
            src={book.coverWap}
            placeholder={"blur"}
            blurDataURL={book.coverWap || '/images/defaultBook.png'}
            alt={book.bookName}
          />
        </Link>

        <div className={styles.bookInfo}>
          <div className={styles.bookNameBox}>
            <Link
              className={styles.bookName}
              dangerouslySetInnerHTML={{ __html: bookNameDom }}
              href={linkUrl}/>
          </div>
          <Link
            href={linkUrl}
            className={styles.bookAuthor}
            dangerouslySetInnerHTML={{ __html: authorDom }}
          />

          {/*{typeTwoNames[0] ? <Link href={browseLink} className={styles.bookTypeTwoName}>*/}
          {/*  {typeTwoNames[0]}*/}
          {/*</Link> : null}*/}

          <Link
            href={linkUrl}
            className={styles.intro}
            dangerouslySetInnerHTML={{__html: introDom}} />
        </div>
      </div>
    })}
  </div>
}

export default TagBookList;
