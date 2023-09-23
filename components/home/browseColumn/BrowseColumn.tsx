import React, { FC, useRef, useState } from "react";
import styles from "@/components/home/browseColumn/BrowseColumn.module.scss";
import { Swiper, SwiperRef } from "antd-mobile";
import { INetHomeItem } from "@/typings/home.interface";
import Link from "next/link";
import BrowseList from "@/components/home/browseList";
import classNames from "classnames";
import Image from "next/image";

interface IProps {
  smallData: INetHomeItem[];
}

const BrowseColumn: FC<IProps> = ({ smallData }) => {

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
    { id: 1, title: "畅销" },
    { id: 2, title: "完结" },
    { id: 3, title: "新书" },
    { id: 4, title: "免费" },
    { id: 5, title: "悬疑" }
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
    >{smallData.map((item) => (
      <Swiper.Item key={item.position} className={styles.content}>
        <BrowseList list={item.bookList.slice(3)}/>
      </Swiper.Item>
    ))}</Swiper>

    <Link className={styles.footerLink} href={`/browse/xxxxx`}>
      <span>更多{menuData[activeKey].title}内容</span>
      <Image
        className={styles.linkIcon}
        width={48}
        height={48}
        src={'/images/home/link.png'}
        alt={''}
      />
    </Link>
  </div>
}

export default BrowseColumn;
