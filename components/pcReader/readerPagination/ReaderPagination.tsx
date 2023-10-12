import React, { FC } from "react";
import styles from './ReaderPagination.module.scss'
import Link from "next/link";
import { setSessionBook } from "@/utils/storage/sessionStorages";

interface IProps {
  bookId: string;
  prevChapterId?: string;
  nextChapterId?: string;
}

const ReaderPagination: FC<IProps> = (
  {
    bookId,
    prevChapterId,
    nextChapterId,
  }) => {

  return <div className={styles.paginationWrap}>
    {prevChapterId ? <Link className={styles.linkItem} href={`/chapter/${bookId}/${prevChapterId}`} replace>
      上一章
    </Link> : null}

    <Link className={styles.linkItem} href={`/book/${bookId}`} onClick={() => {setSessionBook('1')}}>
      目录
    </Link>
    {nextChapterId ? <Link className={styles.linkItem} href={`/chapter/${bookId}/${nextChapterId}`} replace>
      下一章
    </Link> : null}
  </div>
}

export default ReaderPagination;
