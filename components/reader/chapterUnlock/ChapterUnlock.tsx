import React, { FC } from "react";
import styles from '@/components/reader/chapterUnlock/ChapterUnlock.module.scss'
import { INetChapterDetailRes } from "typings/book.interface";
import { IBookItem } from "@/typings/home.interface";

interface IProps {
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
}

const ChapterUnlock: FC<IProps> = ({ bookInfo, chapterInfo }) => {

  return <div className={styles.unlockBox}>
    <button className={styles.downloadBtn}>打开点众阅读APP体验流畅阅读</button>
  </div>
}

export default ChapterUnlock;
