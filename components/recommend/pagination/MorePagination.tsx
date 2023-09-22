import React, { FC } from "react";
import styles from '@/components/recommend/pagination/MorePagination.module.css'
import Link from "next/link";
import { Toast } from "antd-mobile";

interface IProps {
  prevPath: string;
  page: string | number;
  totalPage: number;
  query?: string;
}

const MorePagination: FC<IProps> = ({ prevPath, totalPage, page, query = '' }) => {
  const prevPage = Number(page) - 1;
  const nextPage = Number(page) + 1;

  return <div className={styles.paginationWrap} style={query ? { padding: '0.24rem 0' } : {}}>
    {prevPage && prevPage > 0 ? <Link href={prevPath + prevPage + query} replace scroll className={styles.linkItem}>
       上一页
      </Link> :
      <div
        onClick={() => {
          Toast.show('当前已在第一页')
        }}
        className={styles.pageItem}
      >上一页</div>}
    <div className={styles.middleItem}>{page}/{totalPage}</div>
    {Number(page) < totalPage ? <Link href={prevPath + nextPage + query} replace scroll className={styles.linkItem}>
        下一页
      </Link> :
      <div
        onClick={() => {
          Toast.show('当前已在最后一页')
        }}
        className={styles.pageItem}>
        下一页
      </div>}
  </div>
}

export default MorePagination;
