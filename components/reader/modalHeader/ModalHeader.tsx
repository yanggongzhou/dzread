import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '@/components/reader/modalHeader/ModalHeader.module.scss';

interface IProps {
  bookName: string;
  bookId: string;
  visible: boolean;
}

const ModalHeader: FC<IProps> = ({ visible, bookId, bookName }) => {

  return <>
    <div
      style={{ top: visible ? 0 : '-1.5rem', }}
      className={styles.headerBox}>
      <Link href={`/book/${bookId}`} className={styles.backBox} replace>
        <Image
          className={styles.backIcon}
          width={48}
          height={48}
          src={'/images/common/back.png'}
          alt={''}
        />
      </Link>
      <Link href={`/book/${bookId}`} className={styles.bookName}>{bookName}</Link>
    </div>

    <div className={styles.titleBox}>
      <Link href={`/book/${bookId}`} className={styles.title}>{ bookName }</Link>
      <span>更新时间：2023-07-06 23:2</span>
    </div>
  </>
}

export default ModalHeader;
