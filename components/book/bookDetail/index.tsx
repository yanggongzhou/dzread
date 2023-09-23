import React, { FC } from "react";
import Image from "next/image";
import { IBookItem } from "@/typings/home.interface";
import { onImgError } from "@/components/common/image/ImageCover";
import { Ellipsis } from "antd-mobile";
import styles from "@/components/book/bookDetail/index.module.scss";

interface IProps {
  bookInfo: IBookItem;
}

const BookDetail: FC<IProps> = ({ bookInfo }) => {


  return <>
    <div className={styles.detailBox}>
      <Image
        onError={onImgError}
        className={styles.bookCover}
        width={280}
        height={378}
        src={bookInfo.cover}
        placeholder="blur"
        blurDataURL={bookInfo.cover || '/images/defaultBook.png'}
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
          ww
        </div>}
        collapseText={
          <div className={styles.collapseText}>
            收起
          </div>
        }
        content={bookInfo.introduction} />

      <button className={styles.downloadBtn}>打开点众阅读APP阅读本书</button>
    </div> : null}
  </>
}

export default BookDetail;