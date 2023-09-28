import React, { FC } from "react";
import Link from "next/link";
import PaginationCom from "@/components/common/paginationCom";
import { IKeywordItem } from "@/typings/tag.interface";
import { PcEmpty } from "@/components/common/empty";
import styles from '@/components/pcKeywords/index.module.scss'

interface IProps {
  keywordList: IKeywordItem[]
  pageNo: number;
  totalPage: number;
}

const pcKeywords: FC<IProps> = ({ pageNo, totalPage, keywordList }) => {

  return <main className={styles.keywordsWrap}>

    { keywordList.length === 0 ? <PcEmpty />:
      <div className={styles.keywordBox}>
      {keywordList.map(val => {
        return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordItem}>
          {val.keyword}
        </Link>
      })}
    </div>}
    {totalPage && totalPage > 1 ? <PaginationCom
      path={'/keywords/'}
      pageNo={pageNo}
      totalPage={totalPage}
      isScroll={true}
    /> : null}
  </main>
}

export default pcKeywords;
