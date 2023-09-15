import React, { FC } from "react";
import styles from './ReaderPagination.module.css'
import Link from "next/link";

interface IProps {
  bookId: string;
  chapterIndex: number;
  prevChapterId?: string;
  nextChapterId?: string;
  chapterCount?: string | number;
}

const ReaderPagination: FC<IProps> = (
  {
    bookId,
    chapterIndex,
    chapterCount,
    prevChapterId,
    nextChapterId,
  }) => {

  return <div className={styles.paginationWrap}>
    {prevChapterId ? <Link className={styles.linkItem} href={`/chapter/${bookId}/${prevChapterId}`} replace>
      上一章
    </Link> : <div className={styles.pageItem}>上一章</div>}

    <Link className={styles.linkItem} href={`/catalog/${bookId}/${Math.ceil(chapterIndex / 18)}`}>
      {/*<a className={styles.linkItem}>{chapterIndex}/{chapterCount}</a>*/}
      目錄
    </Link>

    {nextChapterId ? <Link className={styles.linkItem} href={`/chapter/${bookId}/${nextChapterId}`} replace>
      下一章
    </Link> : <div className={styles.pageItem}>下一章</div>}
  </div>
}

export default ReaderPagination;
