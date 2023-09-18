import React, { FC } from 'react'
import styles from '@/components/pcMore/index.module.scss'
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import { IHomeResItem } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import Link from "next/link";
import { PcEmpty } from "@/components/common/empty";
import Image from "next/image";
import FirstList from "@/components/common/firstList/FirstList";
import { useRouter } from "next/router";
import RankingTab from "@/components/pcRanking/tabs/RankingTab";

interface IProps {
  moreData: IHomeResItem;
  pageNo: number;
  pages: number;
}

const PcRanking: FC<IProps> = ({ moreData, pages, pageNo }) => {
  const router = useRouter();
  return <>
    <div className={styles.rankingWrap}>
      <RankingTab />
      <div className={styles.rankingContent}>
        {moreData?.items && moreData.items.length > 0 ?
          <>
            <PcHomeTitle title={moreData.name} />
            <div className={styles.moreBookList}>
              <FirstList dataSource={moreData.items} />
              {pages && pages > 1 ? <PaginationCom
                path={`/more/${moreData.name}/`}
                pageNo={pageNo}
                totalPage={pages}
                isScroll={true}
                onJumpChange={(page) => {
                  router.push(`/rankings/${moreData.name}/${page}`)
                }}/> : null}
            </div>
          </> : <PcEmpty/>}
      </div>
    </div>
  </>
}

export default PcRanking
