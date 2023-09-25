import React, { FC } from 'react';
import Link from "next/link";
import { IChapterListItem } from "@/typings/book.interface";
import styles from '@/components/pcReader/slideOperate/Catalog.module.scss';
import Image from "next/image";

interface IProps {
  bookId: string;
  chapterList: IChapterListItem[];
}

const OperateCatalog: FC<IProps> = ({ bookId, chapterList = []}) => {

  return <div className={styles.catalogBox}>
    <h4>目录</h4>
    <ul className={styles.linkBox}>
      { chapterList.map(val => {
        return <li key={val.id}>
          <Link href={`/chapter/${bookId}/${val.id}`}>
            { val.chapterName }
            {val.isCharge ? <Image
              className={styles.itemIcon}
              width={24}
              height={24}
              src={'/images/book/lock.png'}
              alt={'>'}
            /> : null}
          </Link>
        </li>
      })}
    </ul>
  </div>
}
export default OperateCatalog;
