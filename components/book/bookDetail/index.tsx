import React, { FC } from "react";
import Image from "next/image";
import { IBookItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import { Ellipsis } from "antd-mobile";
import styles from "@/components/book/bookDetail/index.module.scss";

interface IProps {
  bookInfo: IBookItem;
}

const BookDetail: FC<IProps> = ({ bookInfo }) => {

  return <>
    <div className={styles.detailBox}>
      <ImageCover
        href={`/chapter/${bookInfo.bookId}/${bookInfo.firstChapterId}`}
        className={styles.bookCover}
        src={bookInfo.cover}
        width={172}
        height={228}
        alt={bookInfo.bookName}
      />
      <div className={styles.bookContent}>
        <div>
          {bookInfo.bookName ? <h1 className={styles.bookName}>{bookInfo.bookName}</h1> : null}
          <p className={styles.bookStatus}>明日今生 · 青春文学· 连载中</p>
          <p className={styles.bookChapter}>最新章节：第3457章</p>
        </div>
        <p className={styles.updateTime}>更新时间：2023-09-18 19:3</p>
      </div>
    </div>
    <div className={styles.numBox}>
      <div className={styles.numItem}>{bookInfo.ratings || 0} <span>分</span></div>
      <div className={styles.numItem}>{bookInfo.viewCountDisplay.replace('萬', '')} <span>万阅读人数</span></div>
      <div className={styles.numItem}>{'64'} <span>万字数</span></div>
    </div>

    {bookInfo.introduction ? <div className={styles.introBox}>
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
        content={bookInfo.introduction} />

      <button className={styles.downloadBtn}>打开点众阅读APP阅读本书</button>
    </div> : null}
  </>
}

export default BookDetail;
