import React, { FC } from 'react'
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";
import { IBookInfo } from "@/typings/home.interface";
import { EBookStatus2 } from "@/typings/book.interface";
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
              {[item.author,
                item?.bookTypeThree ? item?.bookTypeThree?.[0]?.name : void 0,
                item?.status === EBookStatus2.连载 ? '连载' : '完结',
                item?.hot].filter(val => val).join(' · ')}
            </Link>
            <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
              {`最新章节: ${item.lastChapterName}  ${item.lastChapterUtime}`}
            </Link>
          </div>

        </div>
      </div>
    })}
  </div>
}

export default MRecommendList;
