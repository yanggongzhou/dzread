import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperRef } from "antd-mobile";
import { IBookTypeVo } from "@/typings/home.interface";
import Link from "next/link";
import BrowseList from "@/components/home/browseList";
import classNames from "classnames";
import Image from "next/image";
import styles from "@/components/home/browseColumn/BrowseColumn.module.scss";

interface IProps {
  bookTypeVos: IBookTypeVo[];
}

const BrowseColumn: FC<IProps> = ({ bookTypeVos }) => {

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
      {bookTypeVos.map((val, index) => {
        return <div
          key={val.classifyCode}
          className={classNames(styles.tabItem, activeKey === index && styles.active)}
          onClick={() => onIndicator(index)}>
          {val.classifyName}
        </div>
      })}
    </div>
    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      indicator={() => null}
      onIndexChange={onIndexChange}
    >{bookTypeVos.map((item) => (
      <Swiper.Item key={'swiper_' + item.classifyCode} className={styles.content}>
        <BrowseList list={item.books}/>
      </Swiper.Item>
    ))}</Swiper>

    <Link className={styles.footerLink} href={`/browse/xxxxx`}>
      <span>更多{bookTypeVos[activeKey].classifyName}内容</span>
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
