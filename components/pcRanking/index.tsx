import React, { FC, useMemo } from 'react'
import PaginationCom from "@/components/common/paginationCom";
import RankingTab from "@/components/pcRanking/tabs/RankingTab";
import { IFastRankStyleVo, IRankBookDataVo, IRankDataVo } from "@/typings/ranking.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import { PcEmpty } from "@/components/common/empty";
import RankingList from "@/components/pcRanking/list/RankingList";
import { ERankSex } from "@/typings/home.interface";
import Link from "next/link";
import classNames from "classnames";
import styles from '@/components/pcRanking/index.module.scss';

interface IProps {
  page: number;
  pages: number; // 总页
  rankStyle: number;
  rankType: ERankSex;
  rankData: IRankDataVo[]; // 排行榜名称列表
  rankBook: IRankBookDataVo[]; // 某个排行榜对应的书籍信息data
  rankId?: number;
}


const PcRanking: FC<IProps> = (
  { rankData, rankBook, page, pages, rankStyle, rankId, rankType }
) => {

  const data = [
    { title: '首页', link: "/" },
    { title: '排行榜', link: "/ranking" },
    { title: '都市小说' },
  ]

  const styleList: IFastRankStyleVo[] = useMemo(() => {
    const data = rankData.find(val => val.rankType === rankType);
    if (data) {
      const obj = data.subList.find(item => item.id === rankId)
      if (obj) {
        return obj.styleList || [];
      }
      return [];
    }
    return [];
  }, [rankData, rankId]);

  return <main className={styles.rankWrap}>
    <Breadcrumb data={data}/>
    <div className={styles.container}>
      <RankingTab rankData={rankData} rankId={rankId} rankType={rankType}/>

      <div className={styles.rankContent}>
        <div className={styles.rankTitle}>
          <h3>都市小说</h3>
          <div className={styles.rankDate}>
            {styleList.length > 0 ? styleList.map(val => {
              return <Link
                key={val.style}
                className={classNames(styles.rankDateItem, rankStyle === val.style && styles.active)}
                href={`/ranking/${rankType}-${rankId || 'null'}-${val.style}`}>
                {val.styleName}
              </Link>
            }) : null}
          </div>
        </div>
        {rankBook.length === 0 ? <PcEmpty/> : <RankingList rankBook={rankBook}/>}

        {pages && pages > 1 ?
          <PaginationCom
            path={`/ranking/${rankType}-${rankId}-${rankType}`}
            pageNo={page}
            totalPage={pages}
            isScroll={true}/> : null}
      </div>
    </div>

  </main>
}

export default PcRanking
