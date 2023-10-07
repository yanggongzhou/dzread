import React, { FC, useEffect, useRef, useState } from 'react';
import { IChapterListItem, INetChapterDetailRes } from "typings/book.interface";
import { DotLoading, Toast } from "antd-mobile";
import { useAppSelector } from "@/store";
import { IBookItem } from "@/typings/home.interface";
import ModalCatalog from "@/components/reader/modalCatalog/ModalCatalog";
import ModalControl from "@/components/reader/modalControl/ModalControl";
import ModalHeader from "@/components/reader/modalHeader/ModalHeader";
import TopGuide from "@/components/reader/topGuide/TopGuide";
import { useRouter } from "next/router";
import ContentList from "@/components/reader/contentList/ContentList";
import { netDetailChapter } from "@/server/home";
import { EThemeType } from "@/typings/reader.interface";
import styles from '@/components/reader/index.module.scss';
import { setBookInfo } from "@/utils/localstorages";

interface IProps {
  fontSize: number;
  theme: EThemeType;
  bookId: string;
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
  chapterList: IChapterListItem[];
}

const Reader: FC<IProps> = (
  { bookId, chapterInfo, bookInfo,  chapterList, fontSize, theme}
) => {
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [contentArr, setContentArr] = useState<INetChapterDetailRes[]>([chapterInfo]);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (chapterInfo.id) {
      setBookInfo({ bid: bookId, cid: chapterInfo.id });
      setContentArr([chapterInfo]);
      if (contentRef.current && Reflect.has(contentRef.current, "scrollIntoView")) {
        // @ts-ignore
        contentRef.current.scrollIntoView()
      }
    }
  }, [chapterInfo]);

  useEffect(() => {
    if(mainRef.current) {
      (mainRef.current as HTMLDivElement)?.addEventListener('scroll', onScroll)
    }
    return () => {
      if(mainRef.current) {
        (mainRef.current as HTMLDivElement)?.removeEventListener('scroll', onScroll)
      }
    }
  }, []); // eslint-disable-line
  const [bottom, setBottom] = useState(1000);
  const onScroll = () => {
    if (contentRef.current) {
      const _bottom = (contentRef.current as HTMLDivElement)?.getBoundingClientRect().bottom;
      if (_bottom || typeof _bottom === "number") {
        setBottom(_bottom)
      }
    }
  }

  useEffect(() => {
    if (contentRef.current) {
      handleScrollMove()
    }
  }, [bottom])

  // 拖拽竖屏阅读 Add lock to an async function to prevent parallel executions.
  const handleScrollMove = async () => {
    // ?设置屏幕卷曲值scrollTop
    const winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (bottom - winHeight <= 100) {
      // console.log('more chapter')
      // await router.replace(`/chapter/${bookId}/${nextId}`);
      await getChapterDetail("next")
    }
    // 付费章节每章单独占一页
    if (chapterInfo.isCharge) return;
    const domList = document.querySelectorAll('div[cid]');
    const domArr = Array.from(domList);
    const dom = domArr.find(val => {
      const itemRect = val.getBoundingClientRect()
      return ((winHeight - itemRect.bottom <=200) && itemRect.bottom > 0) || (itemRect.top > 200 && itemRect.top < winHeight)
    });
    const chapterId = dom?.attributes?.cid?.value;
    if (!chapterId) return;
    if (router.query.chapterId !== chapterId) {
      await router.replace(`/chapter/${bookId}/${chapterId}`,  undefined, { shallow: true });
      setBookInfo({ bid: bookId, cid: chapterId });
    }
  };

  const loadingRef = useRef<boolean>(false);
  const getChapterDetail = async (type: "next" | "prev") => {
    if (loadingRef.current) return;

    const chapter = type === "prev" ? contentArr?.[0]?.preChapter : contentArr?.[contentArr.length - 1]?.nextChapter;
    if (!chapter?.id) {
      Toast.show(type === "prev" ? '已经是第一章' : '已经是最后一章')
      return
    }

    // 付费章节每章单独占一页
    if (chapter?.isCharge) {
      loadingRef.current = true;
      await router.replace(`/chapter/${bookId}/${chapter.id}`);
      loadingRef.current = false;
      return;
    }

    loadingRef.current = true;
    setIsLoading(true);
    const chapterData = await netDetailChapter(bookId, chapter?.id);
    if (chapterData !== 'BadRequest_404' && chapterData !== 'BadRequest_500' && chapterData) {
      setContentArr(prevState => type === "prev" ? [chapterData, ...prevState] : [...prevState, chapterData]);
    }
    loadingRef.current = false;
    setIsLoading(false);
  }

  return <main
    ref={mainRef}
    className={styles.readerWrap}
    style={{ backgroundColor: theme }}>

    <ModalHeader visible={controlVisible} bookId={bookId || ''} bookName={bookInfo?.bookName || ''}/>

    <div
      className={styles.readerBox}
      ref={contentRef}>

      <TopGuide bookInfo={bookInfo}/>

      <ContentList
        fontSize={fontSize}
        theme={theme}
        onRefresh={() => getChapterDetail("prev")}
        list={contentArr}/>

      { isLoading ? <div className={styles.readerLoading}>
        <DotLoading />
        <span>加载中</span>
      </div> : null}

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
