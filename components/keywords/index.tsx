import React, { FC } from "react";
import Link from "next/link";
import { IKeywordItem } from "@/typings/tag.interface";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";
import styles from '@/components/keywords/index.module.scss'

interface IProps {
  keywordList: IKeywordItem[]
  pageNo: number;
  totalPage: number;
}

const WapKeywords: FC<IProps> = ({ pageNo, totalPage, keywordList }) => {
  return <main className={styles.keywordsWrap}>
    <NavBar backHref={'/'} title={'书籍标签'} />
    { keywordList.length === 0 ?
      <MEmpty /> :
      <div className={styles.keywordBox}>
        {keywordList.map(val => {
          return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordItem}>
            {val.keyword}
          </Link>
        })}
      </div>
    }

    <div className={styles.footerBox}>
      {totalPage && totalPage > 1 ? <MorePagination
        prevPath={'/keywords/'}
        page={pageNo}
        totalPage={totalPage}
      /> : null}
    </div>
  </main>
}

export default WapKeywords;
