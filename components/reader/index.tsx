import React, { FC, useEffect, useRef, useState } from 'react';
import { INetChapterDetailRes } from "typings/book.interface";
import ReadHeader from "@/components/reader/readHeader/ReadHeader";
import Control from "@/components/reader/control/Control";
import ChapterUnlock from "@/components/reader/chapterUnlock/ChapterUnlock";
import { DotLoading, PullToRefresh, Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store";
import { EDevice } from "@/store/store.interfaces";
import { IBookItem } from "@/typings/home.interface";
import { PullStatus } from "antd-mobile/es/components/pull-to-refresh";
import { debounce } from "throttle-debounce";
import styles from '@/components/reader/index.module.scss';
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";

interface IProps {
  bookId: string;
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
  contentList: string[];
}

const Reader: FC<IProps> = ({ bookId, chapterInfo, bookInfo, contentList}) => {
  const theme = useAppSelector(state => state.read.theme);
  const fontSize = useAppSelector(state => state.read.fontSize);
  const [controlVisible, setControlVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setControlVisible(false);
  }, [chapterInfo]) // eslint-disable-line

  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter()
  const device = useAppSelector(state => state.app.device)

  useEffect(() => {
    if(device === EDevice.mobile && contentRef.current && Reflect.has(contentRef.current, "scrollIntoView")) {
      (contentRef.current as HTMLDivElement)?.scrollIntoView()
    }
  }, [contentList]); // eslint-disable-line

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
      Toast.show('已经是第一章')
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

  return <main
    className={styles.readerWrap}
    style={{ backgroundColor: theme }}>

    <ReadHeader visible={controlVisible} bookId={bookId || ''} bookName={bookInfo?.bookName || ''}/>

    <h2><Link href={`/book/${bookInfo.bookId}`} className={styles.headBox}>{ bookInfo.bookName }</Link></h2>

    <div
      onTouchMove={handleScrollMove}
      className={styles.readerBox}
      ref={contentRef}>
      { isLoading && <div className={styles.readerLoading}>
        <DotLoading color='#FFFFFF'/>
      </div>}

      <div className={styles.topGuide}>
        <ImageCover
          href={`/book/${bookInfo.bookId}`}
          className={styles.topGuideImg}
          src={bookInfo.cover}
          width={128}
          height={170}
          alt={bookInfo.bookName}
        />
        <div className={styles.topGuideInfo}>
          <h4>上点众阅读APP，体验流畅阅读</h4>
          <button className={styles.downloadBtn}>立即打开</button>
        </div>
      </div>

      <PullToRefresh
        renderText={(status) => <div>{statusRecord[status]}</div>}
        onRefresh={async () => {
          if(!chapterInfo.preChapter && !chapterInfo?.nextChapter) return;
          await preChapter();
        }}>
        <div style={{ fontSize }}>
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
        theme={theme}
        fontSize={fontSize}
        chapterInfo={chapterInfo}
        visible={controlVisible}/>

      { chapterInfo?.isCharge ?
        <ChapterUnlock
          bookInfo={bookInfo}
          chapterInfo={chapterInfo}
        /> : null
      }
    </div>
  </main>
}

export default Reader
