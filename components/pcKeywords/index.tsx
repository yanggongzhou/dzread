import React, { FC } from "react";
import Link from "next/link";
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import { ISeoKeyWords } from "@/typings/keywords.interface";
import styles from '@/components/pcKeywords/index.module.scss';

interface IProps {
  words: ISeoKeyWords[]
  page: number;
  pages: number;
}

const pcKeywords: FC<IProps> = ({ page, pages, words }) => {

  return <main className={styles.keywordsWrap}>

    { words.length === 0 ? <PcEmpty />:
      <div className={styles.keywordBox}>
      {words.map(val => {
        return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordItem}>
          {val.name}
        </Link>
      })}
    </div>}
    {pages && pages > 1 ? <PaginationCom
      path={'/keywords/'}
      pageNo={page}
      totalPage={pages}
      isScroll={true}
    /> : null}
  </main>
}

export default pcKeywords;
