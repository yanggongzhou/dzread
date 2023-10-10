import React, { FC } from 'react'
import { setControlVisible } from "@/store/modules/read.module";
import { useAppDispatch, useAppSelector } from "@/store";
import styles from "@/components/reader/contentList/ContentList.module.scss";
import { PullToRefresh } from "antd-mobile";
import { PullStatus } from "antd-mobile/es/components/pull-to-refresh";
import classNames from "classnames";
import { EThemeType } from "@/typings/reader.interface";
import { INetChapterDetailRes } from "@/typings/chapter.interface";
import { EIsCharge } from "@/typings/book.interface";

interface IProps {
  onRefresh: () => void;
  list: INetChapterDetailRes[];
  fontSize: number;
  theme: EThemeType;
}

const statusRecord: Record<PullStatus, string> = {
  pulling: '释放阅读上一章',
  canRelease: '释放阅读上一章',
  refreshing: '加载中...',
  complete: '',
}

const ContentList: FC<IProps> = ({ onRefresh, list, fontSize, theme }) => {
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const dispatch = useAppDispatch();

  return (
    <PullToRefresh
      renderText={(status) => <div>{statusRecord[status]}</div>}
      onRefresh={onRefresh}>
      { list.map((item, itemInd) => {
        return <div
          cid={item?.chapterInfo.chapterId}
          key={item.chapterInfo.chapterId + '_' + itemInd}
          style={{ fontSize }}
          className={classNames(styles.contentBox, item.chapterInfo.isCharge === EIsCharge.收费章节 && styles.contentChargeBox)}>
          <h1 className={styles.title}>{item.chapterInfo.chapterName}</h1>
          <div
            onClick={() => dispatch(setControlVisible(!controlVisible))}
            className={styles.content}>
            { item.chapterInfo.content.map((val, index) => {
              return val ? <p key={index}>{val}</p> : null;
            }) }
          </div>
          <div
            style={item.chapterInfo.isCharge === EIsCharge.收费章节 ? { background: `linear-gradient(180deg, transparent 0%, ${theme} 33%, ${theme} 100%)` } : {}}
            className={item.chapterInfo.isCharge === EIsCharge.收费章节 ? styles.unlockBox : styles.downloadBox}>
            <button className={styles.contentBtn}>打开点众阅读APP阅读本书</button>
          </div>
        </div>}
      )}
    </PullToRefresh>
  )
}

export default ContentList;
