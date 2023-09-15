import React, { FC } from "react";
import styles from './HeaderBack.module.css'
import { EnumTabs } from "typings/reader.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "@/components/layout";
import Image from "next/image";

interface IProps {
  bookName: string;
  bookId: string;
  visible: boolean;
}

const HeaderBack: FC<IProps> = ({ bookId, bookName }) => {
  const [appState] = useAppContext();
  const router = useRouter()
  return <div
    style={{
      backgroundColor: appState.background,
      borderBottomColor: appState.theme === EnumTabs.夜間 ? '#EEEAE31A' : '#EEEAE3FF'
    }}
    className={styles.moreBox}>
    <Link href={`/book/${bookId}`} className={styles.headerLeft} replace>
      <Image
        className={appState.theme === EnumTabs.夜間 ? styles.backBlackIcon : styles.backIcon}
        width={48}
        height={48}
        src={appState.theme === EnumTabs.夜間 ? '/images/common/more/goBack.png' : '/images/common/search/backIcon.png'}
        alt={''}
      />
      <span style={{ color: appState.theme === EnumTabs.夜間 ? '#FFFFFF99' : '#2F3031' }}>返迴</span>
    </Link>

    <Link
      href={`/book/${bookId}`}
      className={styles.headerRight}
      style={{ color: appState.theme === EnumTabs.夜間 ? '#FFFFFF' : '#2F3031' }}>
      {bookName}
    </Link>
  </div>
}

export default HeaderBack;
