import React, { FC } from 'react'
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/rankings/rankList/RankList.module.scss'

interface IProps {
  dataSource: IBookItem[];
}

const RankList: FC<IProps> = ({ dataSource }) => {
  return <div className={styles.rankListBox}>
    {dataSource.map(item => {
      return <div key={item.bookId} className={styles.rankItem}>
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
          {item.author ? <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>{item.author}{` · ${item.typeTwoName}`}</Link> : null}
          <Link href={`/book/${item.bookId}`} className={styles.bookType}>{`164万热度值`}</Link>
        </div>
      </div>
    })}
  </div>
}

export default RankList;
