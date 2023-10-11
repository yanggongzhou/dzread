import React, { FC } from 'react'
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";
import { EBookStatus } from "@/typings/browse.interface";
import { IBookInfo } from "@/typings/home.interface";
import styles from '@/components/recommend/mRecommendList/MRecommendList.module.scss';

interface IProps {
  bookInfos: IBookInfo[];
}

const MRecommendList: FC<IProps> = ({ bookInfos }) => {

  return <div className={styles.recommendBox}>
    {bookInfos.map(item => {
      return <div key={item.bookId} className={styles.recommendItem}>
        <Link className={styles.bookRate} href={`/book/${item.bookId}`}>{ item.scoreNum + `分`}</Link>
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
            <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
          </div>

          <div>
            <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
              {[item.author, item?.bookTypeThreeMap?.[0], item?.status === EBookStatus.完结 ? '连载' : '完结', item.clickNum].filter(val => val).join(' · ')}
            </Link>
            <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
              {`最新章节: 第${item.lastChapterId}章   ${item.lastChapterUtime}`}
            </Link>
          </div>

        </div>
      </div>
    })}
  </div>
}

export default MRecommendList;
