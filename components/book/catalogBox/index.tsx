import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { EIsCharge, IChapterInfo } from "@/typings/book.interface";
import classNames from "classnames";
import styles from "@/components/book/catalogBox/index.module.scss";

interface IProps {
  bookId: string;
  chapters: IChapterInfo[];
}

const CatalogBox: FC<IProps> = ({ chapters = [], bookId }) => {

  return <div className={styles.catalogBox}>
    { chapters.map(item => {
      return <Link href={`/chapter/${bookId}/${item.chapterId}`} key={item.chapterId} className={styles.catalogItem}>
        <span className={classNames(styles.itemTxt, item.isCharge == EIsCharge.收费章节 && styles.lockTxt)}>{ item.chapterName }</span>
        {item.isCharge == EIsCharge.收费章节 ? <Image
          className={styles.itemIcon}
          width={36}
          height={36}
          src={'/images/book/lock.png'}
          alt={'>'}
        /> : null }
      </Link>
    })}
  </div>
}

export default CatalogBox;
