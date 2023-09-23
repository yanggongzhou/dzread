import Link from "next/link";
import styles from "@/components/book/crumbs/index.module.scss";
import React, { FC } from "react";
import Image from "next/image";
import { IBookItem } from "@/typings/home.interface";

interface IProps {
  bookInfo: IBookItem;
  isPc?: boolean;
}

const CatalogBox: FC<IProps> = ({ bookInfo, isPc }) => {

  const typeTwoId = bookInfo.typeTwoIds?.[0] || 0;
  let typeTwoName: string | undefined = '全部'
  if (bookInfo.typeTwoNames?.[0] && bookInfo.typeTwoNames?.[0] !== 'all') {
    typeTwoName = bookInfo.typeTwoNames?.[0]
  }

  return <div className={styles.crumbsWrap} style={isPc ? { display: 'none' } : {}}>
    <Link href="/" className={styles.crumbsItem}>
      首页
      <Image
        className={styles.crumbsIcon}
        width={48}
        height={48}
        src={'/images/layout/link.png'}
        alt={'>'}
      />
    </Link>
    <Link className={styles.crumbsItem} href={`/browse/${typeTwoId}`}>
      {typeTwoName}
      <Image
        className={styles.crumbsIcon}
        width={48}
        height={48}
        src={'/images/layout/link.png'}
        alt={'>'}
      />
    </Link>
    <div className={styles.crumbsItemTxt}>{bookInfo.bookName}</div>
  </div>
}

export default CatalogBox;
