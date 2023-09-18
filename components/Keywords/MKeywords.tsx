import React, { FC } from "react";
import styles from '@/components/Keywords/MKeywords.module.scss'
import Link from "next/link";
import MorePagination from "@/components/more/pagination/MorePagination";
import { IKeywordItem } from "@/typings/tag.interface";
import { MEmpty } from "@/components/common/empty";
import Image from "next/image";

interface IProps {
  keywordList: IKeywordItem[]
  pageNo: number;
  totalPage: number;
}


const MKeywords: FC<IProps> = ({ pageNo, totalPage, keywordList }) => {
  const data = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#']
  return <div className={styles.keywordsWrap}>
    <nav className={styles.tagLetter}>
      {data.map(item => {
        return <Link className={styles.letter} key={item} href={`/keywords/${item}`}>{item}</Link>
      })}
    </nav>

    <div className={styles.moreBox}>
      <Link href="/" className={styles.moreBack}>
        <Image
          className={styles.backIcon}
          width={48}
          height={48}
          src={'/images/common/search/backIcon.png'}
          alt={''}
        />
      </Link>
      <h1 className={styles.moreBoxTitle}>Keyword Summary</h1>
    </div>
    { keywordList.length === 0 ?
      <MEmpty /> :
      <div className={styles.keywordBox}>
        {keywordList.map(val => {
          return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordItem}>
            {val.name}
          </Link>
        })}
      </div>
    }
    {totalPage && totalPage > 1 ? <MorePagination
      prevPath={'/keywords/'}
      page={pageNo}
      totalPage={totalPage}
    /> : null}
  </div>
}

export default MKeywords;
