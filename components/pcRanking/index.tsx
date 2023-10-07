import React, { FC } from 'react'
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import FirstList from "@/components/common/firstList/FirstList";
import RankingTab from "@/components/pcRanking/tabs/RankingTab";
import { IBookItem } from "@/typings/home.interface";
import { IBrowseTypes } from "@/typings/browse.interface";
import styles from '@/components/pcRanking/index.module.scss'

interface IProps {
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
}

const PcRanking: FC<IProps> = ({ bookList = [], pageNo, pages, typeTwoId, types }) => {

  return <main className={styles.rankWrap}>

    <RankingTab />

    <div className={styles.rankContent}>

      <div className={styles.rankTitle}>
        都市小说
      </div>

      {bookList.length === 0 ? <PcEmpty/> :
        <FirstList dataSource={bookList}/>}

      {pages && pages > 1 ?
        <PaginationCom
          path={`/browse/${typeTwoId}/`}
          pageNo={pageNo}
          totalPage={pages}
          isScroll={true}/> : null}
    </div>
  </main>
}

export default PcRanking
