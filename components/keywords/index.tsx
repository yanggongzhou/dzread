import React, { FC } from "react";
import Link from "next/link";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";
import { ISeoKeyWords } from "@/typings/keywords.interface";
import styles from '@/components/keywords/index.module.scss';

interface IProps {
  words: ISeoKeyWords[]
  page: number;
  pages: number;
}

const WapKeywords: FC<IProps> = ({ page, pages, words }) => {
  return <main className={styles.keywordsWrap}>
    <NavBar backHref={'/'} title={'书籍标签'} />
    { words.length === 0 ?
      <MEmpty /> :
      <div className={styles.keywordBox}>
        {words.map(val => {
          return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordItem}>
            {val.name}
          </Link>
        })}
      </div>
    }

    <div className={styles.footerBox}>
      {pages && pages > 1 ? <MorePagination
        prevPath={'/keywords/'}
        page={page}
        totalPage={pages}
      /> : null}
    </div>
  </main>
}

export default WapKeywords;
