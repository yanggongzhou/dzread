import React, { FC, useRef, useState } from "react";
import styles from "@/components/home/rankColumn/RankColumn.module.scss";
import { Swiper, SwiperRef } from "antd-mobile";
import { IBookItem, INetHomeItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import Link from "next/link";
import classNames from "classnames";

interface IProps {
  smallData: INetHomeItem[];
}

const RankList: FC<{ list: IBookItem[] }> = ({ list = [] }) => {

  return <div className={styles.rankList}>
    {list.map((item, itemInd) => {
      return <div key={item.bookId} className={styles.rankItem}>
        <Link className={styles.rankIndex} href={`/book/${item.bookId}`}>{itemInd + 1}</Link>
        <ImageCover
          href={`/book/${item.bookId}`}
          className={styles.itemImg}
          src={item.cover}
          width={218}
          height={294}
          alt={item.bookName}
        />
        <h4><Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link></h4>
      </div>
    })}
  </div>
}


const RankColumn: FC<IProps> = ({ smallData }) => {

  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeKey, setActiveKey] = useState(0);

  const onIndicator = (index: number) => {
    setActiveKey(index)
    swiperRef.current?.swipeTo(index);
  }

  const onIndexChange = (index: number) => {
    setActiveKey(index);
  }

  const menuData = [
    { id: 1, title: "畅销榜" },
    { id: 2, title: "完结榜" },
    { id: 3, title: "新书榜" },
    { id: 4, title: "免费榜" }
  ]

  return <div className={styles.rankColumnWrap}>

    <div className={styles.tabBox}>
      {menuData.map((val, index) => {
        return <div
          key={val.id}
          className={classNames(styles.tabItem, activeKey === index && styles.active)}
          onClick={() => onIndicator(index)}>
          {val.title}
        </div>
      })}
    </div>
    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      indicator={() => null}
      onIndexChange={onIndexChange}
    >
      {smallData.map((item) => (
        <Swiper.Item key={item.position} className={styles.content}>
          <RankList list={item.bookList}/>
        </Swiper.Item>
      ))}
    </Swiper>
  </div>
}

export default RankColumn;
