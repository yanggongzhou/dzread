import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { IBookItem } from "@/typings/home.interface";
import styles from "@/components/book/catalogBox/index.module.scss";
import classNames from "classnames";
import { IChapterListItem } from "@/typings/book.interface";

interface IProps {
  chapterList: IChapterListItem[];
  bookInfo: IBookItem;
}

const CatalogBox: FC<IProps> = ({ bookInfo, chapterList = [] }) => {

  return <div className={styles.catalogBox}>
    { chapterList.map(item => {
      return <Link href={`/chapter/${bookInfo.bookId}/${item.id}`} key={item.id} className={styles.catalogItem}>
        <span className={classNames(styles.itemTxt, item.isCharge && styles.lockTxt)}>{ item.chapterName }</span>
        {item.isCharge ? <Image
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
