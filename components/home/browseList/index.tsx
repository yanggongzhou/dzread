import React, { FC } from "react";
import ImageCover from "@/components/common/image/ImageCover";
import Link from "next/link";
import { EBookStatus, IBookSearchVo } from "@/typings/browse.interface";
import styles from "@/components/home/browseList/index.module.scss";


const BrowseList: FC<{ list: IBookSearchVo[] }> = ({ list = [] }) => {

  return <div className={styles.browseListBox}>
    {list.map(item => {
      return <div key={item.bookId} className={styles.browseItem}>
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

          <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
            {[
              item.author,
              item?.bookTypeThree ? item?.bookTypeThree?.[0]?.name : void 0,
              item?.status === EBookStatus.完结 ? '连载' : '完结',
              item?.hot ? item?.hot + '人在读' : void 0
            ].filter(val => val).join(' · ')}
          </Link>
        </div>
      </div>
    })}
  </div>
}

export default BrowseList;
