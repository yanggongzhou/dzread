import React, { FC } from 'react';
import { IBookItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/home/featuredList/FeaturedList.module.scss';
import Link from "next/link";

interface IProps {
  list: IBookItem[];
}

const FeaturedList: FC<IProps> = ({ list }) => {

  return <div className={styles.featuredContainer}>
    <div className={styles.featuredBox}>
      {list.map(item => {
        return <div key={item.bookId} className={styles.featuredItem}>
          <ImageCover
            href={`/book/${item.bookId}`}
            className={styles.itemImg}
            src={item.cover}
            width={218}
            height={294}
            alt={item.bookName}
          />
          <div className={styles.itemContent}>
            <div>
              <h4>
                <Link className={styles.bookName} href={`/book/${item.bookId}`}>
                  {item.bookName}
                </Link>
              </h4>
              <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
            </div>
            {item.author ?
              <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
                {`${ item.author } · ${'三级标签'}`}
              </Link> : null}
          </div>
        </div>
      })}
    </div>
  </div>
}

export default FeaturedList;
