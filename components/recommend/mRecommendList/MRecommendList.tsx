import React, { FC } from 'react'
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/recommend/mRecommendList/MRecommendList.module.scss';

interface IProps {
  list: IBookItem[];
}

const MRecommendList: FC<IProps> = ({ list }) => {
  return <div className={styles.recommendBox}>
    {list.map(item => {
      return <div key={item.bookId} className={styles.recommendItem}>
        <ImageCover
          href={`/book/${item.bookId}`}
          className={styles.itemImg}
          src={item.cover}
          width={218}
          height={294}
          alt={item.bookName}
        />
        <div className={styles.itemContent}>
          <h4><Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link></h4>
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

export default MRecommendList;
