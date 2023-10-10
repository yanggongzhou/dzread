import React, { FC } from "react";
import { IBookItem } from "@/typings/home.interface";
import styles from "@/components/pcRecommend/recommendList/RecommendList.module.scss";
import Link from "next/link";
import Image from "next/image";
import { EBookStatus } from "@/typings/browse.interface";

interface IProps {
  list: IBookItem[];
}

const RecommendList: FC<IProps> = ({ list }) => {

  return <div className={styles.recommendBox}>
    {list.map(item => {
      return <div key={item.bookId} className={styles.recommendItem}>
        <Link href={`/book/${item.bookId}`} className={styles.imgBox}>
          <Image
            className={styles.img}
            width={160}
            height={213}
            src={item?.cover}
            placeholder={"blur"}
            blurDataURL={item?.cover || '/images/defaultBook.png'}
            alt={item?.bookName}
          />
        </Link>
        <div className={styles.itemContent}>
          <Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link>
          <Link className={styles.bookRate} href={`/book/${item.bookId}`}>{`9.6分`}</Link>
          <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
          <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
            {[item.author, item.tagV3?.[0], item?.status === EBookStatus.完结 ? '连载' : '完结', item.clickNum].filter(val => val).join(' · ')}
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
