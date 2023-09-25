import React, { FC } from "react";
import styles from '@/components/reader/headerBack/HeaderBack.module.css'
import Link from "next/link";
import Image from "next/image";
import { EThemeType } from "@/typings/reader.interface";

interface IProps {
  bookName: string;
  bookId: string;
  visible: boolean;
  theme: EThemeType;
}

const HeaderBack: FC<IProps> = ({ visible, theme, bookId, bookName }) => {

  return <div
    style={{
      top: visible ? 0 : '-1.5rem',
      backgroundColor: theme,
    }}
    className={styles.moreBox}>
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

export default HeaderBack;
