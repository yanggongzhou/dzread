import React, { FC } from "react";
import styles from "@/components/Tag/MTag.module.scss";
import Link from "next/link";
import MTagBookList from "@/components/Tag/tagBookList/MTagBookList";
import { IKeywordItem, ITagBookItem } from "@/typings/tag.interface";
import MorePagination from "@/components/more/pagination/MorePagination";
import Image from "next/image";

interface IProps {
  relationKeywords: IKeywordItem[];
  bookList: ITagBookItem[];
  pageNo: number;
  totalPage: number;
  keywordId: string;
  keyword: string;
}

const MTag: FC<IProps> = ({ pageNo, totalPage, keywordId, bookList, keyword, relationKeywords }) => {
  return <div className={styles.tagWrap}>
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
      <h1 className={styles.moreBoxTitle}>{keyword}</h1>
    </div>
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
            return <Link key={val.id} href={`/tag/${val.id}`} replace>
              <a className={styles.keywordConnectItem}>{val.name}</a>
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
  </div>
}

export default MTag
