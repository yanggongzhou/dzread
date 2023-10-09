import React, { FC } from 'react'
import PaginationCom from "@/components/common/paginationCom";
import RankingTab from "@/components/pcRanking/tabs/RankingTab";
import { ERankStyle, ESexType, IRankBookDataVo, IRankDataVo } from "@/typings/ranking.interface";
import styles from '@/components/pcRanking/index.module.scss';

interface IProps {
  page: number;
  pages: number; // 总页
  rankStyle: ERankStyle;
  rankType: ESexType;
  rankData: IRankDataVo[]; // 排行榜名称列表
  rankBook: IRankBookDataVo[]; // 某个排行榜对应的书籍信息data
  rankId?: number;
}

const PcRanking: FC<IProps> = (
  { rankData, rankBook, page, pages, rankStyle, rankId }
) => {

  return <main className={styles.rankWrap}>

    <RankingTab rankData={rankData} rankId={rankId}/>

    <div className={styles.rankContent}>

      <div className={styles.rankTitle}>
        都市小说
      </div>

      {/*{rankData.length === 0 ? <PcEmpty/> :*/}
      {/*  <FirstList dataSource={rankData}/>}*/}

      {pages && pages > 1 ?
        <PaginationCom
          path={`/ranking/${rankId}/`}
          pageNo={page}
          totalPage={pages}
          isScroll={true}/> : null}
    </div>
  </main>
}

export default PcRanking
