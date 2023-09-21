import React, { FC, useRef, useState } from "react";
import styles from "@/components/home/rankColumn/RankColumn.module.scss";
import { CapsuleTabs, Swiper, SwiperRef } from "antd-mobile";
import { IBookItem, INetHomeItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import Link from "next/link";

interface IProps {
  smallData: INetHomeItem[];
}

const RankList: FC<{ list: IBookItem[] }> = ({ list = [] }) => {
  return <div className={styles.rankList}>
    {list.map(item => {
      return <div className={styles.rankItem}>
        <ImageCover
          href={`/book/${item.bookId}`}
          className={styles.itemImg}
          src={item.cover}
          width={218}
          height={294}
          alt={item.bookName}
        />
        <div className={styles.itemContent}>
          <h4><Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link></h4>
          {item.author ? <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>{item.author}</Link> : null}
        </div>
      </div>
    })}
  </div>
}


const RankColumn: FC<IProps> = ({ smallData }) => {

  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeKey, setActiveKey] = useState("1");

  const onIndicator = (key: string) => {
    setActiveKey(key)
    swiperRef.current?.swipeTo(Number(key) - 1);
  }
  const onIndexChange = (index: number) => {
    setActiveKey(String(index + 1));
  }

  const items = smallData.map((item) => (
    <Swiper.Item key={item.position} className={styles.content}>
      <RankList list={item.bookList}/>
    </Swiper.Item>
  ))
  return <div className={styles.rankColumnWrap}>
    <CapsuleTabs activeKey={activeKey} onChange={(key) => onIndicator(key)}>
      <CapsuleTabs.Tab title='畅销榜' key='1'/>
      <CapsuleTabs.Tab title='完结榜' key='2'/>
      <CapsuleTabs.Tab title='新书榜' key='3'/>
      <CapsuleTabs.Tab title='免费榜' key='4'/>
    </CapsuleTabs>

    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      indicator={() => null}
      onIndexChange={onIndexChange}
    >{items}</Swiper>
  </div>
}

export default RankColumn;
