import React, { FC } from "react";
import Link from "next/link";
import { IRankDataVo } from "@/typings/ranking.interface";
import styles from "@/components/pcRanking/tabs/RankingTab.module.scss";

interface IProps {
  rankId: number;
  rankData: IRankDataVo[]; // 排行榜名称列表
}
const RankingTab: FC<IProps> = ({ rankId, rankData }) => {

  return <div className={styles.slideTabBox}>
    {rankData.map(item => {
      return <div key={item.rankType} className={styles.tabOneItem}>
        <h2>{ item.rankTypeName }</h2>
        <div className={styles.oneItemBox}>
          {item.subList.map(child => {
            if (rankId === child.id) {
              return <div key={child.id} className={styles.tabChild}>
                { child.name }
              </div>
            }
            return <Link key={child.id} href={`/ranking/${child.id}`} className={styles.tabChild}>
              { child.name }
            </Link>
          })}
        </div>
      </div>
    })}
  </div>
}

export default RankingTab;
