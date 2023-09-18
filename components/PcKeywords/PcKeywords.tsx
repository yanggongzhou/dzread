import React, { FC } from "react";
import styles from '@/components/PcKeywords/PcKeywords.module.scss'
import Link from "next/link";
import PaginationCom from "@/components/common/paginationCom";
import { IKeywordItem } from "@/typings/tag.interface";
import { useRouter } from "next/router";
import { PcEmpty } from "@/components/common/empty";

interface IProps {
  keywordList: IKeywordItem[]
  pageNo: number;
  totalPage: number;
}

const PcKeywords: FC<IProps> = ({ pageNo, totalPage, keywordList }) => {
  const router = useRouter();
  const data = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#']

  return <div className={styles.keywordsWrap}>
    <nav className={styles.tagLetter}>
      {data.map(item => {
        return <Link className={styles.letter} key={item} href={`/keywords/${item}`}>{item}</Link>
      })}
    </nav>
    { keywordList.length === 0 ? <PcEmpty />:
      <div className={styles.keywordBox}>
      {keywordList.map(val => {
        return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordItem}>
          {val.name}
        </Link>
      })}
    </div>}
    {totalPage && totalPage > 1 ? <PaginationCom
      path={'/keywords/'}
      pageNo={pageNo}
      totalPage={totalPage}
      isScroll={true}
      onJumpChange={(page) => {
        router.push(`/keywords/${page}`)
      }}
    /> : null}
  </div>
}

export default PcKeywords;
