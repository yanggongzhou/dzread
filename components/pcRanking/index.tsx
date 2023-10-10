import React, { FC } from 'react'
import PaginationCom from "@/components/common/paginationCom";
import RankingTab from "@/components/pcRanking/tabs/RankingTab";
import { ESexType, IRankBookDataVo, IRankDataVo } from "@/typings/ranking.interface";
import Breadcrumb from "@/components/common/breadcrumb";
import { PcEmpty } from "@/components/common/empty";
import RankingList from "@/components/pcRanking/list/RankingList";
import styles from '@/components/pcRanking/index.module.scss';

interface IProps {
  page: number;
  pages: number; // 总页
  rankStyle: number;
  rankType: ESexType;
  rankData: IRankDataVo[]; // 排行榜名称列表
  rankBook: IRankBookDataVo[]; // 某个排行榜对应的书籍信息data
  rankId?: number;
}


const PcRanking: FC<IProps> = (
  { rankData, rankBook, page, pages, rankStyle, rankId }
) => {

  const data = [
    { title: '首页', link: "/home" },
    { title: '排行榜', link: "/ranking" },
    { title: '都市小说' },
  ]

  return <main className={styles.rankWrap}>
    <Breadcrumb data={data}/>
    <div className={styles.container}>
      <RankingTab rankData={rankData} rankId={rankId}/>

      <div className={styles.rankContent}>
        <div className={styles.rankTitle}>都市小说</div>
        {rankBook.length === 0 ? <PcEmpty/> : <RankingList rankBook={rankBook}/>}

        {pages && pages > 1 ?
          <PaginationCom
            path={`/ranking/${rankId}/`}
            pageNo={page}
            totalPage={pages}
            isScroll={true}/> : null}
      </div>
    </div>

  </main>
}

export default PcRanking
