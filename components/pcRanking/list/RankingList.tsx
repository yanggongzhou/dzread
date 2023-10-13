import React, { FC } from 'react'
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IRankBookDataVo } from "@/typings/ranking.interface";
import styles from '@/components/pcRanking/list/RankingList.module.scss';

interface IProps {
  rankBook: IRankBookDataVo[];
  priority?: boolean;
}

const RankingList: FC<IProps> = ({ rankBook = [], priority = false }) => {

  if (rankBook.length === 0) {
    return null
  }

  const rankColors = [
    { color: "#E0B20A", icon: '/images/ranking/rank0.png'},
    { color: "#98B2CE", icon: '/images/ranking/rank1.png'},
    { color: "#CB857C", icon: '/images/ranking/rank2.png'},
    { color: "#B1B1B1", icon: '/images/ranking/rank3.png'}
  ]

  return <div className={styles.listBox}>
    {rankBook.map((book, index) => {

      const routerToBookInfo = `/book/${book.bookId}`

      return <div key={book.bookId} className={styles.itemBox}>
        <Link href={routerToBookInfo} className={styles.bookIndex}>
          <Image
            className={styles.rankIcon}
            width={27}
            height={32}
            src={index > 2 ? rankColors[3].icon : rankColors[index].icon}
            alt={book.bookName}
          />
          <span style={{ color: index > 2 ? rankColors[3].color : rankColors[index].color }}>{index + 1}</span>
        </Link>

        <Link href={routerToBookInfo} className={styles.imageBox}>
          <Image
            priority={priority}
            className={styles.bookImage}
            onError={onImgError}
            placeholder="blur"
            blurDataURL={book.coverWap || '/images/defaultBook.png'}
            width={160}
            height={212}
            src={book.coverWap}
            alt={book.bookName}
          />
        </Link>

        <div className={styles.bookInfo}>

          <Link href={routerToBookInfo} className={styles.bookName}>
            <span>{book.bookName}</span>
            <span className={styles.bookRate}>{book.commentScore}</span>
          </Link>
          <Link href={routerToBookInfo} className={styles.bookIntro}>
            {book.introduction}
          </Link>

          {book.bookTypeThree ? <Link href={routerToBookInfo} className={styles.tagBox}>
            {(book.bookTypeThree || []).map(val => {
              return <span className={styles.tagItem} key={val.id}>{val.name}</span>
            })}
          </Link> : null}
        </div>
      </div>
    })}
  </div>
}

export default RankingList;
