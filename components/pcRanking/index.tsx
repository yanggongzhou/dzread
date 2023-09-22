import React, { FC } from 'react'
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import PaginationCom from "@/components/common/paginationCom";
import Link from "next/link";
import { PcEmpty } from "@/components/common/empty";
import Image from "next/image";
import FirstList from "@/components/common/firstList/FirstList";
import { useRouter } from "next/router";
import RankingTab from "@/components/pcRanking/tabs/RankingTab";
import styles from '@/components/pcRanking/index.module.scss'
import { IBookItem, INetHomeItem } from "@/typings/home.interface";
import { IBrowseTypes } from "@/typings/browse.interface";
import PcCapsuleTabs from "@/components/pcBrowse/PcCapsuleTabs";

interface IProps {
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
}

const PcRanking: FC<IProps> = ({ bookList = [], pageNo, pages, typeTwoId, types }) => {

  const router = useRouter();

  return <div className={styles.browseWrap}>

    <RankingTab />

    <div className={styles.browseContent}>

      <div className={styles.browseTitle}>
        都市小说
      </div>

      {bookList.length === 0 ? <PcEmpty/> :
        <FirstList dataSource={bookList}/>}

      {pages && pages > 1 ?
        <PaginationCom
          path={`/browse/${typeTwoId}/`}
          onJumpChange={(page) => {
            router.push(`/browse/${typeTwoId}/${page}`)
          }}
          pageNo={pageNo}
          totalPage={pages}
          isScroll={true}/> : null}
    </div>
  </div>
}

export default PcRanking
