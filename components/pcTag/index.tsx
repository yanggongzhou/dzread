import React, { FC } from "react";
import PaginationCom from "@/components/common/paginationCom";
import Link from "next/link";
import TagBookList from "@/components/pcTag/tagBookList/TagBookList";
import { ISeoKeyWords } from "@/typings/keywords.interface";
import { IBookSearchVo } from "@/typings/browse.interface";
import styles from "@/components/pcTag/index.module.scss";
import Breadcrumb from "@/components/common/breadcrumb";

interface IProps {
  bookList: IBookSearchVo[];
  words: ISeoKeyWords[];
  page: number;
  pages: number;
  keywordId: string;
  keyword: string;
}

const PcTag: FC<IProps> = (
  { page, pages, keywordId, bookList, keyword, words}) => {

  const data = [
    { title: '首页', link: "/home" },
    { title: '关键词', link: "/keywords" },
    { title: keyword },
  ]
  return <main className={styles.tagWrap}>
    <div className={styles.headerBox}>
      <div className={styles.header}>
        <Breadcrumb data={data}/>
        <div className={styles.keywordBox}>
          <h1 className={styles.title}>{keyword}</h1>
          <p className={styles.sub}>
            点众阅读已为您找到关于<span style={{ color: "#FF5F27" }}>{keyword} &nbsp;</span>
            相关内容，包含<span style={{ color: "#FF5F27" }}>{keyword}</span>
            相关的书籍以及<span style={{ color: "#FF5F27" }}>{keyword} &nbsp;</span>
            相关的内容信息
          </p>
          <div className={styles.keywordConnect}>
            {words.length > 0 ? <>
              <p className={styles.keywordConnectTitle}>相关热门搜索词：</p>
              {words.map(val => {
                return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordConnectItem} replace>
                  {val.name}
                </Link>
              })}
            </> : null}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <TagBookList bookList={bookList} keyword={keyword}/>
      {pages && pages > 1 ? <PaginationCom
        path={`/tag/${keywordId}/`}
        pageNo={page}
        totalPage={pages}
        isScroll={true}
      /> : null}
    </div>
  </main>
}

export default PcTag
