import React, { FC } from "react";
import styles from "@/components/Tag/MTag.module.scss";
import Link from "next/link";
import MTagBookList from "@/components/Tag/tagBookList/MTagBookList";
import { IKeywordItem, ITagBookItem } from "@/typings/tag.interface";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";

interface IProps {
  relationKeywords: IKeywordItem[];
  bookList: ITagBookItem[];
  pageNo: number;
  totalPage: number;
  keywordId: string;
  keyword: string;
}

const MTag: FC<IProps> = ({ pageNo, totalPage, keywordId, bookList, keyword, relationKeywords }) => {
  return <main className={styles.tagWrap}>

    <NavBar backHref={'/'} title={keyword} />

    <div className={styles.keywordBox}>
      <h1 className={styles.title}>{keyword}</h1>
      <p className={styles.sub}>
        点众阅读已为您找到关于<span style={{ color: "#FF5F27" }}>{keyword}</span>
        相关内容，包含<span style={{ color: "#FF5F27" }}>{keyword}</span>
        相关的书籍以及<span style={{ color: "#FF5F27" }}>{keyword}</span>
        相关的内容信息
      </p>
      <div className={styles.keywordConnect}>
        {relationKeywords.length > 0 ? <>
          <p className={styles.keywordConnectTitle}>相关热门搜索词：</p>
          {relationKeywords.map(val => {
            return <Link key={val.id} href={`/tag/${val.id}`} className={styles.keywordConnectItem} replace>
              {val.keyword}
            </Link>
          })}
        </> : null}
      </div>
    </div>
    <MTagBookList keyword={keyword} dataSource={bookList}/>
    {totalPage && totalPage > 1 ? <MorePagination
      prevPath={`/tag/${keywordId}/`}
      page={pageNo}
      totalPage={totalPage}
    /> : null}
  </main>
}

export default MTag
