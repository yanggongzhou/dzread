import React, { FC } from "react";
import Image from "next/image";
import { IBookInfoItem } from "@/typings/book.interface";
import ImageCover from "@/components/common/image/ImageCover";
import { Ellipsis } from "antd-mobile";
import styles from "@/components/book/bookDetail/index.module.scss";

interface IProps {
  chapterId: string;
  book: IBookInfoItem;
}

const BookDetail: FC<IProps> = ({ book, chapterId }) => {

  return <>
    <div className={styles.detailBox}>
      <ImageCover
        href={`/chapter/${book.bookId}/${chapterId}`}
        className={styles.bookCover}
        src={book.coverWap}
        width={172}
        height={228}
        alt={book.bookName}
      />
      <div className={styles.bookContent}>
        <div>
          {book.bookName ? <h1 className={styles.bookName}>{book.bookName}</h1> : null}
          <p className={styles.bookStatus}>{book.tagList?.join(' · ')}</p>
          <p className={styles.bookChapter}>最新章节：第{book.totalChapterNum}章</p>
        </div>
        <p className={styles.updateTime}>更新时间：{book.lastChapterUtime}</p>
      </div>
    </div>
    <div className={styles.numBox}>
      <div className={styles.numItem}>{book.scoreNum} <span>{book.scoreNumUnit}</span></div>
      <div className={styles.numItem}>{book.clickNum } <span>xxxxxxxx</span></div>
      <div className={styles.numItem}>{book.totalWordSize} <span>xxxxxxx字数</span></div>
    </div>

    {book.introduction ? <div className={styles.introBox}>
      <Ellipsis
        rows={5}
        className={styles.introEllipsis}
        direction='end'
        expandText={<div className={styles.expandText}>
          <Image
            className={styles.expandIcon}
            width={24}
            height={24}
            src={'/images/browse/extend.png'}
            alt={''}
          />
        </div>}
        collapseText={
          <div className={styles.collapseText}>
            <Image
              className={styles.collapseIcon}
              width={24}
              height={24}
              src={'/images/browse/extend.png'}
              alt={''}
            />
          </div>
        }
        content={book.introduction} />

      <button className={styles.downloadBtn}>打开点众阅读APP阅读本书</button>
    </div> : null}
  </>
}

export default BookDetail;
