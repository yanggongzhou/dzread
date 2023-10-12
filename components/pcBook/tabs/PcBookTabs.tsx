import React, { FC } from "react";
import classNames from "classnames";
import styles from "@/components/pcBook/tabs/PcBookTabs.module.scss";
import PcFirstChapter from "@/components/pcBook/firstChapter/PcFirstChapter";
import { IBookInfoItem, IChapterInfo } from "@/typings/book.interface";
import PcCatalogBox from "@/components/pcBook/catalogBox";
import { INetChapterDetailRes } from "@/typings/chapter.interface";

interface IProps {
  onChange: (index: number) => void;
  activeIndex: number;
  bookInfo: IBookInfoItem;
  chapters: IChapterInfo[];
  chapterInfo: INetChapterDetailRes;
}


const PcBookTabs: FC<IProps> = ({ onChange, activeIndex, bookInfo, chapters, chapterInfo }) => {
  const tabList = [
    { value: 'book_info', label: '书籍信息', child: <PcFirstChapter chapterInfo={chapterInfo} bookInfo={bookInfo}/>
    },
    { value: 'catalog_info', label: '目录', child: <PcCatalogBox bookId={bookInfo.bookId} chapters={chapters}/>  },
  ]

  return <div className={styles.tabsBox}>
    <div className={styles.navMenu}>
      { tabList.map((item, index) => {
        return (
          <div
            key={item.value}
            className={classNames(styles.navItem, index === activeIndex && styles.active)}
            onClick={() => onChange(index)}>
            {item.label}
          </div>
        )
      }) }
    </div>
    <div className={styles.tabContent}>
      { tabList.map((item, index) => {
        return <div key={item.value} style={{display: activeIndex === index ? "block" : 'none' }}>
          {item.child}
        </div>
      }) }
    </div>
  </div>
}

export default PcBookTabs;
