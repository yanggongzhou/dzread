import React, { FC } from 'react';
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/home/firstList/FirstList.module.scss';

interface IProps {
  dataSource: IBookItem[];
}

const MFirstList: FC<IProps> = ({ dataSource }) => {

  return <div className={styles.firstListBox}>
    {dataSource.map(item => {
      return <div key={item.bookId} className={styles.firstItem}>
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
      </div>
    })}
  </div>
}

export default MFirstList;
