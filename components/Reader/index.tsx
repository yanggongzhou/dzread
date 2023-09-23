import React, { FC, useEffect, useRef, useState } from 'react';
import { INetChapterDetailRes } from "typings/book.interface";
import HeaderBack from "@/components/Reader/headerBack/HeaderBack";
import Control from "@/components/Reader/control/Control";
import { EnumBackGround, EnumTabs } from "typings/reader.interface";
import ChapterUnlock from "@/components/Reader/chapterUnlock/ChapterUnlock";
import { DotLoading, PullToRefresh, Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store";
import { EDevice } from "@/store/store.interfaces";
import { IBookItem } from "@/typings/home.interface";
import { useAppContext } from "@/components/layout";
import { PullStatus } from "antd-mobile/es/components/pull-to-refresh";
import { debounce } from "throttle-debounce";
import styles from '@/components/Reader/index.module.scss';
// import { useLockFn } from "ahooks";

interface IProps {
  bookId: string;
  chapterContent: string;
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
  contentList: string[];
}

const Reader: FC<IProps> = ({ bookId, chapterContent, chapterInfo, bookInfo, contentList}) => {
  const [appState, setAppState] = useAppContext();
  const [tabIndex, setTabIndex] = useState<EnumTabs>();
  const [controlVisible, setControlVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setControlVisible(false);
  }, [chapterInfo]) // eslint-disable-line

  const changeTab = (id: EnumTabs) => {
    setTabIndex(id);
    if (id === EnumTabs.日間) {
      setAppState(pre => ({ ...pre, theme: id,  background: EnumBackGround.default1 }));
    }
    if (id === EnumTabs.夜間) {
      setAppState(pre => ({ ...pre, theme: id,  background: EnumBackGround.night }));
    }

    if (id === EnumTabs.目錄) {
      setControlVisible(false);
    }
  }
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter()
  const device = useAppSelector(state => state.app.device)

  useEffect(() => {
    if(device === EDevice.mobile && contentRef.current && Reflect.has(contentRef.current, "scrollIntoView")) {
      (contentRef.current as HTMLDivElement)?.scrollIntoView()
    }
  }, [chapterContent]); // eslint-disable-line

  // 拖拽竖屏阅读 Add lock to an async function to prevent parallel executions.
  const handleScrollMove = debounce(500, async () => {
    // ?设置屏幕卷曲值scrollTop
    const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let top = (contentRef.current as HTMLDivElement)?.getBoundingClientRect().top || 0;
    let height = contentRef.current?.clientHeight || 0;

    if (height + top - winHeight < 10) {
      if (!chapterInfo?.nextChapter) {
        Toast.show('已经是最后一章')
        return
      }
      if (chapterInfo?.isCharge) return;
      setIsLoading(true)
      await router.replace({ pathname: `/chapter/${bookInfo.bookId}/${chapterInfo.nextChapter.id}` }, undefined, { scroll: true });
      setIsLoading(false)
    }
  })

  const preChapter = async () => {
    if (!chapterInfo.preChapter) {
      Toast.show('已經是第壹章')
      return
    }
    setIsLoading(true)
    await router.replace(`/chapter/${bookInfo.bookId}/${chapterInfo.preChapter.id}`);
    setIsLoading(false)
  }

  const statusRecord: Record<PullStatus, string> = {
    pulling: '释放阅读上一章',
    canRelease: '释放阅读上一章',
    refreshing: '加载中...',
    complete: '',
  }

  return <div
    className={styles.bookWrap}
    style={{
      // overflowY: unlockVisible ? 'hidden' : 'auto',
      backgroundColor: appState.background,
      color: appState.theme === EnumTabs.夜間 ? '#FFFFFF66' : '#2F3031',
    }}>

    <HeaderBack visible={controlVisible} bookId={bookId || ''} bookName={bookInfo?.bookName || ''}/>

    <div
      onTouchMove={handleScrollMove}
      className={styles.readerWrap}
      ref={contentRef}>
      { isLoading && <div className={styles.readerLoading}>
        <DotLoading color='#FFFFFF'/>
      </div>}

      <PullToRefresh
        renderText={(status) => <div>{statusRecord[status]}</div>}
        // renderText={() => null}
        onRefresh={async () => {
          if(!chapterInfo.preChapter && !chapterInfo?.nextChapter){
            return;
          }
          await preChapter();
        }}
      >
        <div style={{ fontSize: 20 }}>
          <h1 className={styles.title}>{chapterInfo.chapterName}</h1>
          <div
            onClick={() => setControlVisible(!controlVisible)}
            className={styles.content}>
            {/*{chapterContent}*/}
            { contentList.map((val, index) => {
              return val ? <p key={index}>{val}</p> : null;
            }) }
          </div>
        </div>
      </PullToRefresh>


      <Control
        bookId={bookId}
        chapterInfo={chapterInfo}
        tabIndex={tabIndex}
        visible={controlVisible}
        changeTab={(id) => changeTab(id)}/>
      { chapterInfo?.isCharge ?
        <ChapterUnlock
          bookInfo={bookInfo}
          chapterInfo={chapterInfo}
          theme={appState.theme}/> : null
      }
    </div>
  </div>
}

export default Reader
