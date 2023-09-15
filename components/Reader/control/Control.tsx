import React, { FC } from 'react'
import styles from '@/components/Reader/control/Control.module.scss'
import { EnumBackGround, EnumTabs } from "@/typings/reader.interface";
import Setting from "@/components/Reader/control/Setting";
import Link from "next/link";
import { INetChapterDetailRes } from "@/typings/book.interface";
import { useAppContext } from "@/components/layout";
import Image from "next/image";

interface IProps {
  bookId: string;
  visible: boolean;
  changeTab: (id: EnumTabs) => void;
  tabIndex?: EnumTabs;
  chapterInfo: INetChapterDetailRes;
}

const Control: FC<IProps> = (
  {
    bookId,
    tabIndex,
    visible,
    changeTab,
    chapterInfo,
  }) => {
  const [appState] = useAppContext();
  const bottomDayTabs = [
    { id: EnumTabs.目錄, label: '目錄', icon: '/images/common/reader/catalogDay.png' },
    { id: EnumTabs.夜間, label: '夜間', icon: '/images/common/reader/moon.png' },
    { id: EnumTabs.設置, label: '設置', icon: '/images/common/reader/settingDay.png' },
  ]
  const bottomNightTabs = [
    { id: EnumTabs.目錄, label: '目錄', icon: '/images/common/reader/catalogNight.png' },
    { id: EnumTabs.日間, label: '日間', icon: '/images/common/reader/sun.png' },
    { id: EnumTabs.設置, label: '設置', icon: '/images/common/reader/settingNight.png' },
  ]
  const bottomTabs = appState.theme === EnumTabs.夜間 ? bottomNightTabs : bottomDayTabs;


  const chapterBtnStyle = {
    borderColor: appState.theme === EnumTabs.夜間 ? '#EBEBEB33' : '#EBEBEB',
    backgroundColor: appState.theme === EnumTabs.夜間 ? '#FFFFFF19' : '#F6F6F6',
    color: appState.theme === EnumTabs.夜間 ? '#FFFFFF66' : '#2F3031'
  };

  const chapterDisabledBtnStyle = {
    ...chapterBtnStyle,
    color: appState.theme === EnumTabs.夜間 ? '#FFFFFF66' : '#d1d1d2'
  }
  return <div
    className={styles.controlWrap}
    style={{
      bottom: visible ? 0 : '-5rem',
      backgroundColor: appState.theme === EnumTabs.夜間 ? EnumBackGround.night : '#FFFFFF',
      color: appState.theme === EnumTabs.夜間 ? '#FFFFFF66' : '#2F3031',
    }}>
    {tabIndex === EnumTabs.設置 && <Setting/>}
    <div
      style={{ borderTopColor: appState.theme === EnumTabs.夜間 ? 'rgba(238,234,227,0.2)' : '#EEEAE3' }}
      className={styles.chapterBtnBox}>

      {chapterInfo.preChapter && chapterInfo.preChapter.id ? <Link style={chapterBtnStyle} className={styles.chapterBtn}
                                                                   href={`/chapter/${bookId}/${chapterInfo.preChapter?.id}`}
                                                                   replace>
        上一章
      </Link> : <div style={chapterDisabledBtnStyle} className={styles.pageItem}>上一章</div>}

      {chapterInfo.nextChapter && chapterInfo.nextChapter.id ?
        <Link
          style={chapterBtnStyle}
          className={styles.chapterBtn}
          href={`/chapter/${bookId}/${chapterInfo.nextChapter?.id}`} replace>
          下一章
        </Link> : <div style={chapterDisabledBtnStyle} className={styles.pageItem}>下一章</div>}
    </div>
    <div
      className={styles.bottomTabs}>
      {bottomTabs.map(tab => {
        if (tab.id === EnumTabs.目錄) {
          return <Link
            key={tab.id}
            className={styles.tabItem}
            href={`/catalog/${bookId}/${Math.ceil(chapterInfo.chapterIndex / 18)}`}>
            <Image
              className={styles.tabIcon}
              width={44}
              height={44}
              src={tab.icon}
              alt={'>'}
            />
            <span className={appState.theme === EnumTabs.夜間 ? styles.tabLabelNight : styles.tabLabel}>{tab.label}</span>
          </Link>
        }
        return <div key={tab.id} className={styles.tabItem} onClick={() => changeTab(tab.id)}>
          <Image
            className={styles.tabIcon}
            width={44}
            height={44}
            src={(tabIndex === EnumTabs.設置 && tab.id === EnumTabs.設置) ? '/images/pline/settingActive.png' : tab.icon}
            alt={'>'}
          />
          <span
            className={tabIndex === EnumTabs.設置 && tab.id === EnumTabs.設置
              ? styles.tabLabelActive
              : (appState.theme === EnumTabs.夜間 ? styles.tabLabelNight : styles.tabLabel)}>
            {tab.label}
          </span>
        </div>
      })}
    </div>
  </div>
}
export default Control;
