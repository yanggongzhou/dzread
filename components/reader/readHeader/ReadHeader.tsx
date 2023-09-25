import React, { FC } from "react";
import styles from '@/components/reader/readHeader/ReadHeader.module.scss'
import Link from "next/link";
import Image from "next/image";

interface IProps {
  bookName: string;
  bookId: string;
  visible: boolean;
}

const ReadHeader: FC<IProps> = ({ visible, bookId, bookName }) => {
  return <div
    style={{
      top: visible ? 0 : '-1.5rem',
    }}
    className={styles.headerBox}>
    <Link href={`/book/${bookId}`} className={styles.headerLeft} replace>
      <Image
        className={styles.backIcon}
        width={48}
        height={48}
        src={'/images/common/back.png'}
        alt={''}
      />
      <span>返回</span>
    </Link>
    <Link href={`/book/${bookId}`} className={styles.headerRight}>{bookName}</Link>
  </div>
}

export default ReadHeader;
