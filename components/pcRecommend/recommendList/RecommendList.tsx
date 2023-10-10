import React, { FC } from "react";
import { IBookInfo } from "@/typings/home.interface";
import Link from "next/link";
import Image from "next/image";
import { EBookStatus } from "@/typings/browse.interface";
import styles from "@/components/pcRecommend/recommendList/RecommendList.module.scss";

interface IProps {
  bookInfos: IBookInfo[];
}

const RecommendList: FC<IProps> = ({ bookInfos }) => {

  return <div className={styles.recommendBox}>
    {bookInfos.map(item => {
      return <div key={item.bookId} className={styles.recommendItem}>
        <Link href={`/book/${item.bookId}`} className={styles.imgBox}>
          <Image
            className={styles.img}
            width={160}
            height={213}
            src={item?.coverWap}
            placeholder={"blur"}
            blurDataURL={item?.coverWap || '/images/defaultBook.png'}
            alt={item?.bookName}
          />
        </Link>
        <div className={styles.itemContent}>
          <Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link>
          <Link className={styles.bookRate} href={`/book/${item.bookId}`}>{`9.6分`}</Link>
          <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
          <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
            {[item.author, item.threeTypeTag?.[0], item?.status === EBookStatus.完结 ? '连载' : '完结', item.clickNum].filter(val => val).join(' · ')}
          </Link>
          <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
            {`最新章节: 第${item.lastChapterId}章   ${item.lastChapterUtime}`}
          </Link>
        </div>
      </div>
    })}
  </div>

}

export default RecommendList;
