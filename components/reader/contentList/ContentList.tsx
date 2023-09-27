import { FC } from "react";
import React  from 'react'
import { setControlVisible } from "@/store/modules/read.module";
import { useAppDispatch, useAppSelector } from "@/store";
import { IChapterInfo } from "@/typings/book.interface";
import styles from "@/components/reader/contentList/ContentList.module.scss";

interface IProps {
  list: IChapterInfo[];
}
const ContentList: FC<IProps> = ({ list }) => {
  const fontSize = useAppSelector(state => state.read.fontSize);
  const theme = useAppSelector(state => state.read.theme);
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const dispatch = useAppDispatch();

  return (
    <>
      { list.map(item => {
        return <div cid={item.id} key={item.id} style={{ fontSize }}>
          <h1 className={styles.title}>{item.chapterName}</h1>
          <div
            onClick={() => dispatch(setControlVisible(!controlVisible))}
            className={styles.content}>
            { item.content.split('\n').map((val, index) => {
              return val ? <p key={index}>{val}</p> : null;
            }) }
          </div>
          <div className={styles.downloadBox}>
            { item.isCharge ?
              <div
                style={{background: `linear-gradient(180deg, transparent 0%, ${theme} 100%)`}}
                className={styles.unlockMark}
              /> : null }
            <button className={styles.contentBtn}>打开点众阅读APP阅读本书</button>
          </div>
        </div>
      })}

    </>
  )
}

export default ContentList;
