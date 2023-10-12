import React, { FC } from "react";
import Link from "next/link";
import MTagBookList from "@/components/tag/tagBookList/MTagBookList";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";
import styles from "@/components/tag/index.module.scss";
import ClientConfig from "@/client.config";
import { IBookSearchVo } from "@/typings/browse.interface";
import { ISeoKeyWords } from "@/typings/keywords.interface";
import { ESearchType } from "@/typings/tag.interface";

interface IProps {
  bookList: IBookSearchVo[];
  words: ISeoKeyWords[];
  page: number;
  pages: number;
  keywordId: string;
  keyword: string;
}

const WapTag: FC<IProps> = ({ page, pages, keywordId, bookList, keyword, words, searchType }) => {
  return <main className={styles.tagWrap}>

    <NavBar backHref={'/'} title={keyword} />

    <h1 className={styles.title}>{keyword}</h1>
    <p className={styles.sub}>
      {ClientConfig.name}已为您找到关于<span style={{ color: "#FA3123" }}>{keyword}</span>
      相关内容，包含<span style={{ color: "#FA3123" }}>{keyword}</span>
      相关的书籍以及<span style={{ color: "#FA3123" }}>{keyword}</span>
      相关的内容信息
    </p>
    <div className={styles.keywordConnect}>
      {words.length > 0 ? <>
        <h3 className={styles.connectTitle}>相关热门搜索词：</h3>
        <div className={styles.connectBox}>
          {words.map(val => {
            return <Link key={val.id} href={`/tag/${val.id}`} className={styles.connectItem} replace>
              <p>{val.name}</p>
            </Link>
          })}
        </div>
      </> : null}
    </div>

    <MTagBookList keyword={keyword} bookList={bookList}/>

    {pages && pages > 1 ? <div className={styles.footerBox}>
      <MorePagination
        prevPath={`/tag/${keywordId}/`}
        page={page}
        totalPage={pages}
      />
    </div> : null}


  </main>
}

export default WapTag
