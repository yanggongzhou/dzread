import React, { FC } from "react";
import Link from "next/link";
import { IBookInfoItem } from "@/typings/book.interface";
import styles from "@/components/pcBook/firstChapter/PcFirstChapter.module.scss";
import { INetChapterDetailRes } from "@/typings/chapter.interface";

interface IProps {
  bookInfo: IBookInfoItem;
  chapterInfo: INetChapterDetailRes;
}

const PcFirstChapter: FC<IProps> = ({ bookInfo, chapterInfo }) => {

  return <div className={styles.firstChapterBox}>

    <div className={styles.updateCatalogTitle}>
      <span>最新章节</span>
      <span>更新时间：{bookInfo.lastChapterUtime}</span>
    </div>
    <div className={styles.updateCatalog}>
      <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十一章</Link>
      <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十er章</Link>
      <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十san章</Link>
    </div>

    {chapterInfo ? <div className={styles.firstChapter}>
      <h4>{chapterInfo?.chapterName}</h4>
      {chapterInfo.content.map((val, index) => {
        return <p key={val + index}>{val}</p>
      })}
    </div> : null}
    <Link href={`/chapter/${bookInfo.bookId}/${chapterInfo?.chapterId}`} className={styles.chapterLink}>
      剩余未加载内容，点击继续阅读
    </Link>
  </div>
}

export default PcFirstChapter;
