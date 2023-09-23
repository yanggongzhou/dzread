import React, { FC } from "react";
import { IBookItem } from "@/typings/home.interface";
import styles from "@/components/pcRecommend/recommendList/RecommendList.module.scss";
import Link from "next/link";
import Image from "next/image";

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
          <h4><Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link></h4>
          <Link className={styles.bookRate} href={`/book/${item.bookId}`}>{`9.6分`}</Link>

          <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
          <div className={styles.contentFooter}>
            {item.author ? <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>{item.author}</Link> : null}
            <Link href={`/book/${item.bookId}`} className={styles.bookType}>{`三级标签`}</Link>
            <Link href={`/book/${item.bookId}`} className={styles.bookType}>{`完结`}</Link>
            <Link href={`/book/${item.bookId}`} className={styles.bookType}>{`132万字`}</Link>
          </div>
          <div className={styles.contentFooter}>
            <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>{`最新章节 第708章`}</Link>
            <Link href={`/book/${item.bookId}`} className={styles.bookType}>{`2023-10-26`}</Link>
          </div>
        </div>
      </div>
    })}
  </div>

}

export default RecommendList;
