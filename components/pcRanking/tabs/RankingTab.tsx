import React, { FC } from "react";
import Link from "next/link";
import { IRankDataVo } from "@/typings/ranking.interface";
import styles from "@/components/pcRanking/tabs/RankingTab.module.scss";
import classNames from "classnames";

interface IProps {
  rankId: number;
  rankData: IRankDataVo[]; // 排行榜名称列表
}
const RankingTab: FC<IProps> = ({ rankId, rankData }) => {

  return <div className={styles.rankingTabBox}>
    <div className={styles.slideTabBox}>
      {rankData.map(item => {
        return <div key={item.rankType} className={styles.tabOneItem}>
          <div className={styles.oneItemTitle}>{ item.rankTypeName }</div>
          <div className={styles.oneItemBox}>
            {item.subList.map(child => {
              return <Link
                key={child.id}
                href={`/ranking/${child.id}`}
                className={classNames(styles.tabChild, rankId===child.id && styles.tabChildActive)}>
                { child.name }
              </Link>
            })}
          </div>
        </div>
      })}
    </div>
  </div>
}

export default RankingTab;
