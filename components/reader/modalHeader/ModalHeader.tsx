import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { INetChapterDetailRes } from "@/typings/chapter.interface";
import styles from '@/components/reader/modalHeader/ModalHeader.module.scss';

interface IProps {
  chapterInfo: INetChapterDetailRes;
  visible: boolean;
}

const ModalHeader: FC<IProps> = ({ visible, chapterInfo }) => {

  return <>
    <div
      style={{ top: visible ? 0 : '-1.5rem', }}
      className={styles.headerBox}>
      <Link href={`/book/${chapterInfo.bookId}`} className={styles.backBox} replace>
        <Image
          className={styles.backIcon}
          width={48}
          height={48}
          src={'/images/common/back.png'}
          alt={''}
        />
      </Link>
      <Link href={`/book/${chapterInfo.bookId}`} className={styles.bookName}>{chapterInfo.bookName}</Link>
    </div>

    <div className={styles.titleBox}>
      <Link href={`/book/${chapterInfo.bookId}`} className={styles.title}>{ chapterInfo.bookName }</Link>
      <span>更新时间：{chapterInfo.chapterUtime}</span>
    </div>
  </>
}

export default ModalHeader;
