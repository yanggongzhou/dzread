import React, { FC } from 'react';
import { IBookInfo } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import Link from "next/link";
import styles from '@/components/home/featuredList/FeaturedList.module.scss';

interface IProps {
  bookInfos: IBookInfo[];
}

const FeaturedList: FC<IProps> = ({ bookInfos = [] }) => {

  return <div className={styles.featuredContainer}>
    <div className={styles.featuredBox}>
      {bookInfos.map(item => {
        return <div key={item.bookId} className={styles.featuredItem}>
          <ImageCover
            href={`/book/${item.bookId}`}
            className={styles.itemImg}
            src={item.coverWap}
            width={218}
            height={294}
            alt={item.bookName}
          />
          <div className={styles.itemContent}>
            <div>
              <h4>
                <Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link>
              </h4>
              <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
            </div>
            <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
              {[item.author, item.threeTypeTag[0]].filter(val => val).join(' · ')}
            </Link>
          </div>
        </div>
      })}
    </div>
  </div>
}

export default FeaturedList;
