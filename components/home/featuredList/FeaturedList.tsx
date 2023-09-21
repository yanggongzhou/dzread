import React, { FC } from 'react';
import { IBookItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/home/featuredList/FeaturedList.module.scss';
import Link from "next/link";

interface IProps {
  list: IBookItem[];
}

const FeaturedList: FC<IProps> = ({ list }) => {
  return <ul className={styles.featuredBox}>
    {list.map(item => {
      return <li className={styles.featuredItem}>
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
          </div>
        </div>
      </li>
    })}
  </ul>
}

export default FeaturedList;
