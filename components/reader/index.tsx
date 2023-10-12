import React, { FC, useEffect, useRef, useState } from 'react';
import { DotLoading, Toast } from "antd-mobile";
import { useAppSelector } from "@/store";
import ModalCatalog from "@/components/reader/modalCatalog/ModalCatalog";
import ModalControl from "@/components/reader/modalControl/ModalControl";
import ModalHeader from "@/components/reader/modalHeader/ModalHeader";
import TopGuide from "@/components/reader/topGuide/TopGuide";
import { useRouter } from "next/router";
import ContentList from "@/components/reader/contentList/ContentList";
import { netDetailChapter } from "@/server/home";
import { EThemeType } from "@/typings/reader.interface";
import { setBookInfo } from "@/utils/storage/localstorages";
import { INetCatalogRes } from "@/typings/catalog.interface";
import { EChapterStatus, INetChapterDetailRes } from "@/typings/chapter.interface";
import { EIsCharge } from "@/typings/book.interface";
import styles from '@/components/reader/index.module.scss';

interface IProps {
  fontSize: number;
  theme: EThemeType;
  chapterInfo: INetChapterDetailRes;
  catalogData: INetCatalogRes;
}

const Reader: FC<IProps> = (
  {
    chapterInfo,
    catalogData,
    fontSize,
    theme,
  }
) => {
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [contentArr, setContentArr] = useState<INetChapterDetailRes[]>([chapterInfo]);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (chapterInfo?.chapterId) {
      setBookInfo({ bid: chapterInfo.bookId, cid: chapterInfo.chapterId });
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
    if (chapterInfo.status == EChapterStatus.不免费) return;
    const domList = document.querySelectorAll('div[cid]');
    const domArr = Array.from(domList);
    const dom = domArr.find(val => {
      const itemRect = val.getBoundingClientRect()
      return ((winHeight - itemRect.bottom <=200) && itemRect.bottom > 0) || (itemRect.top > 200 && itemRect.top < winHeight)
    });
    const chapterId = dom?.attributes?.cid?.value;
    if (!chapterId) return;
    if (router.query.chapterId !== chapterId) {
      await router.replace(`/chapter/${chapterInfo.bookId}/${chapterId}`,  undefined, { shallow: true });
      setBookInfo({ bid: chapterInfo.bookId, cid: chapterId });
    }
  };

  const loadingRef = useRef<boolean>(false);

  const getChapterDetail = async (type: "next" | "prev") => {
    if (loadingRef.current) return;

    const chapterId = type === "prev" ? contentArr?.[0]?.preChapterId : contentArr?.[contentArr.length - 1]?.nextChapterId;
    if (!chapterId) {
      Toast.show(type === "prev" ? '已经是第一章' : '已经是最后一章')
      return
    }

    const chapterIsCharge = catalogData.chapterList.find(val => val.chapterId === chapterId).isCharge

    // 付费章节每章单独占一页
    if (chapterIsCharge === EIsCharge.收费章节) {
      loadingRef.current = true;
      await router.replace(`/chapter/${chapterInfo.bookId}/${chapterId}`);
      loadingRef.current = false;
      return;
    }

    loadingRef.current = true;
    setIsLoading(true);
    const response = await netDetailChapter(chapterInfo.bookId, chapterId);
    if (response !== 'BadRequest_404' && response !== 'BadRequest_500' && response) {
      setContentArr(prevState => (type === "prev" ? [response as INetChapterDetailRes, ...prevState] : [...prevState, response]));
    }
    loadingRef.current = false;
    setIsLoading(false);
  }

  return <main
    ref={mainRef}
    className={styles.readerWrap}
    style={{ backgroundColor: theme }}>

    <ModalHeader
      visible={controlVisible}
      chapterInfo={chapterInfo}/>

    <div
      className={styles.readerBox}
      ref={contentRef}>

      <TopGuide chapterInfo={chapterInfo}/>

      <ContentList
        fontSize={fontSize}
        theme={theme}
        onRefresh={() => getChapterDetail("prev")}
        list={contentArr}/>

      { isLoading ? <div className={styles.readerLoading}>
        <DotLoading />
        <span>加载中</span>
      </div> : null}

      <ModalControl chapterInfo={chapterInfo}/>

      <ModalCatalog
        bookId={chapterInfo.bookId}
        chapterId={chapterInfo.chapterId}
        catalogData={catalogData}
      />
    </div>
  </main>
}

export default Reader
