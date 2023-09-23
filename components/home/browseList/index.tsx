import React, { FC } from "react";
import { IBookItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import Link from "next/link";
import styles from "@/components/home/browseList/index.module.scss";

const BrowseList: FC<{ list: IBookItem[] }> = ({ list = [] }) => {

  return <div className={styles.browseListBox}>
    {list.map(item => {
      return <div key={item.bookId} className={styles.browseItem}>
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

          {item.author ?
            <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
              {`${item.author} · ${'三级标签'} · ${'完结'} · ${'阅读人数'}`}
            </Link> : null}
        </div>
      </div>
    })}
  </div>
}

export default BrowseList;
