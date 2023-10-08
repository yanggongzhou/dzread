import React, { FC } from 'react'
import Link from "next/link";
import { IRankBookDataVo } from "@/typings/ranking.interface";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/ranking/rankBookList/RankBookList.module.scss';

interface IProps {
  rankBook: IRankBookDataVo[];
}

const RankBookList: FC<IProps> = ({ rankBook = [] }) => {
  return <div className={styles.rankListBox}>
    {rankBook.map((item, itemInd) => {
      return <div key={item.bookId} className={styles.rankItem}>
        <Link className={styles.rankIndex} href={`/book/${item.bookId}`}>{itemInd + 1}</Link>
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
            <h4><Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link></h4>
            {item.threeTypeTag.length > 0 ?
              <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>{item.threeTypeTag.join(' · ')}</Link>
              : null}
          </div>
          <Link href={`/book/${item.bookId}`} className={styles.bookType}>{item.num}</Link>
        </div>
      </div>
    })}
  </div>
}

export default RankBookList;
