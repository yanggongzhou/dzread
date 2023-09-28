import { FC } from "react";
import React  from 'react'
import { setControlVisible } from "@/store/modules/read.module";
import { useAppDispatch, useAppSelector } from "@/store";
import { INetChapterDetailRes } from "@/typings/book.interface";
import styles from "@/components/reader/contentList/ContentList.module.scss";
import { PullToRefresh } from "antd-mobile";
import { PullStatus } from "antd-mobile/es/components/pull-to-refresh";

interface IProps {
  onRefresh: () => void;
  list: INetChapterDetailRes[];
}

const statusRecord: Record<PullStatus, string> = {
  pulling: '释放阅读上一章',
  canRelease: '释放阅读上一章',
  refreshing: '加载中...',
  complete: '',
}

const ContentList: FC<IProps> = ({ onRefresh, list }) => {
  const fontSize = useAppSelector(state => state.read.fontSize);
  const theme = useAppSelector(state => state.read.theme);
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const dispatch = useAppDispatch();

  return (
    <PullToRefresh
      renderText={(status) => <div>{statusRecord[status]}</div>}
      onRefresh={onRefresh}>
      { list.map(item => {
        return <div cid={item.id} key={item.id} style={item.isCharge ? { fontSize, minHeight: "100vh" } : { fontSize }}>
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
    </PullToRefresh>
  )
}

export default ContentList;
