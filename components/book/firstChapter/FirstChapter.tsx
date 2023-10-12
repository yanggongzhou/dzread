import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IBookInfoItem } from "@/typings/book.interface";
import styles from "@/components/book/firstChapter/FirstChapter.module.scss";
import { INetChapterDetailRes } from "@/typings/chapter.interface";

interface IProps {
  bookInfo: IBookInfoItem;
  chapterInfo: INetChapterDetailRes;
}

const FirstChapter: FC<IProps> = ({ bookInfo, chapterInfo }) => {

  return <div className={styles.firstChapterBox}>

    <div className={styles.updateCatalogTitle}>
      <span>最新章节</span>
      <span>更新时间：2023-07-06 23:2</span>
    </div>
    <div className={styles.updateCatalog}>
      <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十一章</Link>
      <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十er章</Link>
      <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十san章</Link>
    </div>

    <div className={styles.firstChapter}>
      <h4>{chapterInfo.chapterName}</h4>
      { chapterInfo.content.map((val, index) => {
        return <p key={index}>{val}</p>
      }) }
      <div className={styles.mark}/>
    </div>
    <Link href={`/chapter/${bookInfo.bookId}/${chapterInfo.chapterId}`} className={styles.chapterLink}>
      剩余未加载内容，点击继续阅读
      <Image
        className={styles.icon}
        width={24}
        height={24}
        src={'/images/book/more.png'}
        alt={''}
      />
    </Link>
  </div>
}

export default FirstChapter;
