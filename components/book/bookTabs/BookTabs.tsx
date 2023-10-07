import React, { FC, useRef } from "react";
import classNames from "classnames";
import { Swiper, SwiperRef } from "antd-mobile";
import styles from "@/components/book/bookTabs/BookTabs.module.scss";

interface IProps {
  tabList: { value: string; label: string; child: React.ReactNode | null }[];
  onChange: (index: number) => void;
  activeIndex: number;
}

const BookTabs: FC<IProps> = ({ tabList, activeIndex, onChange }) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const onTabChange = (index: number) => {
    onChange(index);
    if (swiperRef.current) {
      swiperRef.current?.swipeTo(index);
    }
  }
  return <>
    <div className={styles.navMenu}>
      { tabList.map((item, index) => {
        return (
          <div
            key={item.value}
            className={classNames(styles.navItem, index === activeIndex && styles.active)}
            onClick={() => onTabChange(index)}
          >
            {item.label}
          </div>
        )
      }) }
    </div>

    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      indicator={() => null}
      onIndexChange={onChange}
    >
      {tabList.map((item, index) => (
        <Swiper.Item
          key={item.value}
          style={index === activeIndex ? {} : {height: 0}}
          className={styles.content}>
          {item.child}
        </Swiper.Item>
      ))}
    </Swiper>
  </>
}

export default BookTabs;
