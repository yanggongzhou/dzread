import React, { FC } from "react";
import Link from "next/link";
import { IRankDataVo } from "@/typings/ranking.interface";
import classNames from "classnames";
import { ERankSex } from "@/typings/home.interface";
import styles from "@/components/pcRanking/tabs/RankingTab.module.scss";

interface IProps {
  rankId: number;
  rankData: IRankDataVo[]; // 排行榜名称列表
  rankType: ERankSex;
}
const RankingTab: FC<IProps> = ({ rankId, rankType, rankData }) => {

  return <div className={styles.rankingTabBox}>
    <div className={styles.slideTabBox}>
      {rankData.map(item => {
        return <div key={item.rankType} className={styles.tabOneItem}>
          <div className={styles.oneItemTitle}>{ item.rankTypeName }</div>
          <div className={styles.oneItemBox}>
            {item.subList.map(child => {
              return <Link
                key={child.id}
                href={`/ranking/${item.rankType}-${child.id}-${rankType}`}
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
