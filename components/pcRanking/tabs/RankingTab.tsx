import React, { FC } from "react";
import styles from "@/components/pcRanking/tabs/RankingTab.module.scss";
import Link from "next/link";

const RankingTab: FC = () => {
  const rankingTypeList = [
    {
      id: 'male',
      label: '男生排行榜',
      children: [
        { id: 'hot', label: '热门榜' },
        { id: 'god', label: '畅销榜' },
        { id: 'finish', label: '完本榜' },
        { id: 'good', label: '好评榜' },
        { id: 'new', label: '新书榜' },
        { id: 'old', label: '经典榜' },
      ]
    },
    {
      id: 'female',
      label: '女生排行榜',
      children: [
        { id: 'hot', label: '热门榜' },
        { id: 'god', label: '畅销榜' },
        { id: 'finish', label: '完本榜' },
        { id: 'good', label: '好评榜' },
        { id: 'new', label: '新书榜' },
        { id: 'old', label: '经典榜' },
      ]
    },
    {
      id: 'publish',
      label: '出版排行榜',
      children: [
        { id: 'hot', label: '热门榜' },
        { id: 'god', label: '畅销榜' },
        { id: 'finish', label: '完本榜' },
        { id: 'good', label: '好评榜' },
        { id: 'new', label: '新书榜' },
        { id: 'old', label: '经典榜' },
      ]
    },
  ]

  return <div className={styles.slideTabBox}>
    {rankingTypeList.map(item => {
      return <div key={item.id} className={styles.tabOneItem}>
        <h2>{ item.label }</h2>
        <div className={styles.oneItemBox}>
          {item.children.map(child => {
            return <Link key={child.id} href={`/ranking/${child.id}`} className={styles.tabChild}>
              { child.label }
            </Link>
          })}
        </div>
      </div>
    })}
  </div>
}

export default RankingTab;
