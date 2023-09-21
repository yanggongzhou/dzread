import React, { FC, useRef, useState } from "react";
import styles from "@/components/home/browseColumn/BrowseColumn.module.scss";
import { CapsuleTabs, Swiper, SwiperRef } from "antd-mobile";
import { IBookItem, INetHomeItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import Link from "next/link";

interface IProps {
  smallData: INetHomeItem[];
}

const BrowseList: FC<{ list: IBookItem[] }> = ({ list = [] }) => {
  return <div className={styles.browseListBox}>
    {list.map(item => {
      return <div className={styles.featuredItem}>
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
          <Link className={styles.bookIntro} href={`/book/${item.bookId}`}>{item.introduction}</Link>
          <div className={styles.contentFooter}>
            {item.author ? <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>{item.author}</Link> : null}
            <Link href={`/book/${item.bookId}`} className={styles.bookType}>{`三级标签`}</Link>
          </div>
        </div>
      </div>
    })}
  </div>
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
