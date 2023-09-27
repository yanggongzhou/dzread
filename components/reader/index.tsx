import React, { FC, useEffect, useRef, useState } from 'react';
import { IChapterListItem, INetChapterDetailRes } from "typings/book.interface";
import { DotLoading, PullToRefresh, Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/store";
import { EDevice } from "@/store/store.interfaces";
import { IBookItem } from "@/typings/home.interface";
import { PullStatus } from "antd-mobile/es/components/pull-to-refresh";
import { debounce } from "throttle-debounce";
import { IResChapter } from "@/pages/api/chapter";
import { setControlVisible } from "@/store/modules/read.module";
import ModalCatalog from "@/components/reader/modalCatalog/ModalCatalog";
import ModalControl from "@/components/reader/modalControl/ModalControl";
import ModalHeader from "@/components/reader/modalHeader/ModalHeader";
import TopGuide from "@/components/reader/topGuide/TopGuide";
import styles from '@/components/reader/index.module.scss';

interface IProps {
  bookId: string;
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
  contentList: string[];
  chapterList: IChapterListItem[];
}

const Reader: FC<IProps> = ({ bookId, chapterInfo, bookInfo, contentList, chapterList}) => {
  const theme = useAppSelector(state => state.read.theme);
  const fontSize = useAppSelector(state => state.read.fontSize);
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [contentArr, setContentArr] = useState<IResChapter[]>([{
    nextId: chapterInfo.nextChapter?.id,
    chapterName: chapterInfo.chapterName,
    content: chapterInfo.content
  }] as IResChapter[]);
  const dispatch = useAppDispatch();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter()
  const device = useAppSelector(state => state.app.device)

  // useEffect(() => {
  //   const observer = new IntersectionObserver((e) => {
  //     e.forEach((dom) => {
  //       // isIntersecting为true则dom出现在页面上
  //       if (dom.isIntersecting) {
  //         console.log('dom.target', dom.target);
  //       }
  //     });
  //   }, {});
  //   if (contentArr.length > 0) {
  //     observer.observe(intersectionRef.current as Element)
  //   }
  //   return () => {
  //     if (intersectionRef.current) {
  //       observer.unobserve(intersectionRef.current as Element)
  //     }
  //   };
  // }, [contentArr]);

  // useEffect(() => {
  //   if(device === EDevice.mobile && contentRef.current && Reflect.has(contentRef.current, "scrollIntoView")) {
  //     (contentRef.current as HTMLDivElement)?.scrollIntoView()
  //   }
  // }, [contentList]); // eslint-disable-line

  // 拖拽竖屏阅读 Add lock to an async function to prevent parallel executions.
  const handleScrollMove = debounce(500, async () => {
    // ?设置屏幕卷曲值scrollTop
    const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let top = (contentRef.current as HTMLDivElement)?.getBoundingClientRect().top || 0;
    let height = contentRef.current?.clientHeight || 0;

    if (height + top - winHeight < 200) {
      if (!chapterInfo?.nextChapter) {
        Toast.show('已经是最后一章')
        return
      }
      if (chapterInfo?.isCharge) return;
      setIsLoading(true)
      const nextChapterId = contentArr[contentArr.length - 1]?.nextId ?? chapterInfo.nextChapter.id;
      await getChapterContent(nextChapterId);
      setIsLoading(false)
    }
  });

  const getChapterContent = async (chapterId: string) => {
    const response = await fetch(`/api/chapter?bookId=${bookId}&chapterId=${chapterId}`);
    const res = await response.json();
    setContentArr(prevState => [...prevState, res]);
  }

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

    <ModalHeader visible={controlVisible} bookId={bookId || ''} bookName={bookInfo?.bookName || ''}/>

    <div
      onTouchMove={handleScrollMove}
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

        {contentArr.map((item) => {
          return <div cid={item.nextId} key={item.nextId} style={{ fontSize }}>
            <h1 className={styles.title}>{item.chapterName}</h1>
            <div
              onClick={() => dispatch(setControlVisible(!controlVisible))}
              className={styles.content}>
              { item.content.split('\n').map((val, index) => {
                return val ? <p key={index}>{val}</p> : null;
              }) }
            </div>
            <div className={styles.downloadBox}>
              { chapterInfo?.isCharge ?
                <div
                  style={{background: `linear-gradient(180deg, transparent 0%, ${theme} 100%)`}}
                  className={styles.unlockMark}
                /> : null }
              <button className={styles.contentBtn}>打开点众阅读APP阅读本书</button>
            </div>
          </div>
        })}
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
