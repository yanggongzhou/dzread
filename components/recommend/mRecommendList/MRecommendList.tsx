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
        <Link className={styles.bookRate} href={`/book/${item.bookId}`}>{ item.ratings + `分`}</Link>
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
            <h4><Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link></h4>
            <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
          </div>

          <div>
            {item.author ?
              <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
                {`${item.author} · ${'三级标签'} · ${'完结'} · ${'阅读人数'}`}
              </Link> : null}

            {item.author ?
              <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
                {`最新章节: 第${item.chapterCount}章   ${'2023-10-26'}`}
              </Link> : null}
          </div>

        </div>
      </div>
    })}
  </div>
}

export default MRecommendList;
