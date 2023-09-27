import React, { FC, useEffect, useRef, useState } from 'react';
import { IChapterInfo, IChapterListItem, INetChapterDetailRes } from "typings/book.interface";
import { DotLoading, PullToRefresh, Toast } from "antd-mobile";
import { useAppSelector } from "@/store";
import { IBookItem } from "@/typings/home.interface";
import { PullStatus } from "antd-mobile/es/components/pull-to-refresh";
import ModalCatalog from "@/components/reader/modalCatalog/ModalCatalog";
import ModalControl from "@/components/reader/modalControl/ModalControl";
import ModalHeader from "@/components/reader/modalHeader/ModalHeader";
import TopGuide from "@/components/reader/topGuide/TopGuide";
import styles from '@/components/reader/index.module.scss';
import { useRouter } from "next/router";
import ContentList from "@/components/reader/contentList/ContentList";
import { throttle } from "@/utils/tools";

interface IProps {
  bookId: string;
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
  contentList: string[];
  chapterList: IChapterListItem[];
}

const Reader: FC<IProps> = ({ bookId, chapterInfo, bookInfo, contentList, chapterList}) => {
  const theme = useAppSelector(state => state.read.theme);
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [contentArr, setContentArr] = useState<IChapterInfo[]>([{
    id: chapterInfo.id,
    chapterName: chapterInfo.chapterName,
    content: chapterInfo.content,
    nextId: chapterInfo.nextChapter?.id,
    prevId: chapterInfo.preChapter?.id,
    isCharge: chapterInfo.isCharge,
  }]);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (contentArr.length > 0) {
      const nextId = contentArr[contentArr.length - 1].nextId;
      const prevId = contentArr[contentArr.length - 1].prevId;
      if (nextId === chapterInfo.id || prevId === chapterInfo.id) {
        const index = contentArr.findIndex(val => val.id === chapterInfo.id);
        if (index !== -1) {
          return;
        }
        const pushData = {
          id: chapterInfo.id,
          chapterName: chapterInfo.chapterName,
          content: chapterInfo.content,
          nextId: chapterInfo.nextChapter?.id,
          prevId: chapterInfo.preChapter?.id,
          isCharge: chapterInfo.isCharge,
        };
        setContentArr(prevState => nextId === chapterInfo.id ? [...prevState, pushData] : [pushData, ...prevState]);
      }
    }
  }, [chapterInfo]);

  useEffect(() => {
    if(mainRef.current) {
      (mainRef.current as HTMLDivElement)?.addEventListener('scroll', handleScrollMove)
    }
    return () => {
      if(mainRef.current) {
        (mainRef.current as HTMLDivElement)?.removeEventListener('scroll', handleScrollMove)
      }
    }
  }, [contentList]); // eslint-disable-line


  const loadingRef = useRef<boolean>(false);
  // 拖拽竖屏阅读 Add lock to an async function to prevent parallel executions.
  const handleScrollMove = async () => {
    // ?设置屏幕卷曲值scrollTop
    const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let bottom = (contentRef.current as HTMLDivElement)?.getBoundingClientRect().bottom || 0;

    if (bottom - winHeight <= 150) {
      if (!chapterInfo?.nextChapter) {
        Toast.show('已经是最后一章')
        return
      }
      console.log('more chapter')
      if (loadingRef.current) return;
      loadingRef.current = true;
      await router.replace(`/chapter/${bookId}/${chapterInfo.nextChapter?.id}`);
      loadingRef.current = false;
    } else {
      const domList = document.querySelectorAll('div[cid]');
      const domArr = Array.from(domList);
      const dom = domArr.find(val => val.getBoundingClientRect().top > 0 && val.getBoundingClientRect().top <= 200)
      const chapterId = dom?.attributes?.cid?.value;
      console.log('replace exit chapter', dom, chapterId)
      if (!chapterId) return;
      if (router.query.chapterId !== chapterId) {
        if (loadingRef.current) return;
        loadingRef.current = true;
        await router.replace(`/chapter/${bookId}/${chapterId}`);
        loadingRef.current = false;
      }
    }
  };

  // const getChapterContent = async (chapterId: string) => {
  //   const response = await fetch(`/api/chapter?bookId=${bookId}&chapterId=${chapterId}`);
  //   const res = await response.json();
  //   setContentArr(prevState => [...prevState, res]);
  // }

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
    ref={mainRef}
    className={styles.readerWrap}
    style={{ backgroundColor: theme }}>

    <ModalHeader visible={controlVisible} bookId={bookId || ''} bookName={bookInfo?.bookName || ''}/>

    <div
      onScroll={handleScrollMove}
      className={styles.readerBox}
      ref={contentRef}>

      { isLoading ? <div className={styles.readerLoading}>
        <DotLoading color='#FFFFFF'/>
      </div> : null}

      <TopGuide bookInfo={bookInfo}/>

      <PullToRefresh
        renderText={(status) => <div>{statusRecord[status]}</div>}
        onRefresh={async () => {
          if(!chapterInfo.preChapter && !chapterInfo?.nextChapter) return;
          await preChapter();
        }}>
        <ContentList list={contentArr}/>
      </PullToRefresh>

      <ModalControl bookId={bookId} chapterInfo={chapterInfo}/>

      <ModalCatalog
        chapterId={chapterInfo.id}
        chapterList={chapterList}
        chapterInfo={chapterInfo}
        bookInfo={bookInfo}
      />
    </div>
  </main>
}

export default Reader
