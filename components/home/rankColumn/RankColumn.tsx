import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperRef } from "antd-mobile";
import { IRankVo } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import Link from "next/link";
import classNames from "classnames";
import { IRankBookDataVo } from "@/typings/ranking.interface";
import styles from "@/components/home/rankColumn/RankColumn.module.scss";

interface IProps {
  rankVos: IRankVo[];
}

const RankList: FC<{ list: IRankBookDataVo[] }> = ({ list = [] }) => {

  return <div className={styles.rankList}>
    {list.map((item, itemInd) => {
      return <div key={item.bookId} className={styles.rankItem}>
        <Link className={styles.rankIndex} href={`/book/${item.bookId}`}>{itemInd + 1}</Link>
        <ImageCover
          href={`/book/${item.bookId}`}
          className={styles.itemImg}
          src={item.coverWap}
          width={218}
          height={294}
          alt={item.bookName}
        />
        <h4><Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link></h4>
      </div>
    })}
  </div>
}


const RankColumn: FC<IProps> = ({ rankVos = [] }) => {

  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeKey, setActiveKey] = useState(0);

  const onIndicator = (index: number) => {
    setActiveKey(index)
    swiperRef.current?.swipeTo(index);
  }

  const onIndexChange = (index: number) => {
    setActiveKey(index);
  }


  return <div className={styles.rankColumnWrap}>

    <div className={styles.tabBox}>
      {rankVos.map((val, index) => {
        return <div
          key={val.rankId}
          className={classNames(styles.tabItem, activeKey === index && styles.active)}
          onClick={() => onIndicator(index)}>
          {val.rankName}
        </div>
      })}
    </div>
    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      indicator={() => null}
      onIndexChange={onIndexChange}
    >
      {rankVos.map((item) => (
        <Swiper.Item key={'swiper_' + item.rankId} className={styles.content}>
          <RankList list={item.bookInfos}/>
        </Swiper.Item>
      ))}
    </Swiper>
  </div>
}

export default RankColumn;
