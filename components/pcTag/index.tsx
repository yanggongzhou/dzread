import React, { FC } from "react";
import PaginationCom from "@/components/common/paginationCom";
import Link from "next/link";
import TagBookList from "@/components/pcTag/tagBookList/TagBookList";
import { IKeywordItem, ITagBookItem } from "@/typings/tag.interface";
import styles from "@/components/pcTag/index.module.scss";

interface IProps {
  bookList: ITagBookItem[];
  relationKeywords: IKeywordItem[];
  pageNo: number;
  totalPage: number;
  keywordId: string;
  keyword: string;
}

const PcTag: FC<IProps> = (
  { pageNo, totalPage, keywordId, bookList, keyword, relationKeywords}) => {


  return <div className={styles.tagWrap}>
    {keyword ? <div className={styles.keywordBox}>
      <h1 className={styles.title}>{keyword}</h1>
      <p className={styles.sub}>
        点众阅读已为您找到关于<span style={{ color: "#FF5F27" }}>{keyword} &nbsp;</span>
        相关内容，包含<span style={{ color: "#FF5F27" }}>{keyword}</span>
        相关的书籍以及<span style={{ color: "#FF5F27" }}>{keyword} &nbsp;</span>
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
    </div> : null}
    <TagBookList dataSource={bookList} keyword={keyword}/>
    {totalPage && totalPage > 1 ? <PaginationCom
      path={`/tag/${keywordId}/`}
      pageNo={pageNo}
      totalPage={totalPage}
      isScroll={true}
      /> : null}
  </div>
}

export default PcTag
