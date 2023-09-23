import React, { FC, useRef, useState } from "react";
import styles from "@/components/home/browseColumn/BrowseColumn.module.scss";
import { CapsuleTabs, Swiper, SwiperRef } from "antd-mobile";
import { INetHomeItem } from "@/typings/home.interface";
import Link from "next/link";
import BrowseList from "@/components/home/browseList";

interface IProps {
  smallData: INetHomeItem[];
}

const BrowseColumn: FC<IProps> = ({ smallData }) => {

  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeKey, setActiveKey] = useState("1");

  const onIndicator = (key: string) => {
    setActiveKey(key)
    swiperRef.current?.swipeTo(Number(key) - 1);
  }
  const onIndexChange = (index: number) => {
    setActiveKey(String(index + 1));
  }

  return <div className={styles.rankColumnWrap}>
    <CapsuleTabs activeKey={activeKey} onChange={(key) => onIndicator(key)}>
      <CapsuleTabs.Tab title='畅销' key='1'/>
      <CapsuleTabs.Tab title='完结' key='2'/>
      <CapsuleTabs.Tab title='新书' key='3'/>
      <CapsuleTabs.Tab title='免费' key='4'/>
      <CapsuleTabs.Tab title='悬疑' key='5'/>
    </CapsuleTabs>

    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      indicator={() => null}
      onIndexChange={onIndexChange}
    >{smallData.map((item) => (
      <Swiper.Item key={item.position}>
        <BrowseList list={item.bookList.slice(3)}/>
      </Swiper.Item>
    ))}</Swiper>

    <Link className={styles.footerLink} href={`/browse/xxxxx`}>更多{activeKey}内容</Link>
  </div>
}

export default BrowseColumn;
