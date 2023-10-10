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
import styles from '@/components/reader/index.module.scss';
import { setBookInfo } from "@/utils/storage/localstorages";
import { INetCatalogRes } from "@/typings/catalog.interface";
import { INetChapterDetailRes, IReadInfo } from "@/typings/chapter.interface";
import { EIsCharge } from "@/typings/book.interface";

interface IProps {
  fontSize: number;
  theme: EThemeType;
  chapterData: INetChapterDetailRes;
  catalogData: INetCatalogRes;
  chapterInfo: IReadInfo
}

const Reader: FC<IProps> = (
  {
    chapterData,
    catalogData,
    fontSize,
    theme,
  }
) => {
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const [isLoading, setIsLoading] = useState(false);
  const [contentArr, setContentArr] = useState<INetChapterDetailRes[]>([chapterData]);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (chapterData?.chapterInfo?.chapterId) {
      setBookInfo({ bid: chapterData.bookId, cid: chapterData.chapterInfo.chapterId });
      setContentArr([chapterData]);
      if (contentRef.current && Reflect.has(contentRef.current, "scrollIntoView")) {
        // @ts-ignore
        contentRef.current.scrollIntoView()
      }
    }
  }, [chapterData]);

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
    if (chapterData?.chapterInfo?.isCharge === EIsCharge.收费章节) return;
    const domList = document.querySelectorAll('div[cid]');
    const domArr = Array.from(domList);
    const dom = domArr.find(val => {
      const itemRect = val.getBoundingClientRect()
      return ((winHeight - itemRect.bottom <=200) && itemRect.bottom > 0) || (itemRect.top > 200 && itemRect.top < winHeight)
    });
    const chapterId = dom?.attributes?.cid?.value;
    if (!chapterId) return;
    if (router.query.chapterId !== chapterId) {
      await router.replace(`/chapter/${chapterData.bookId}/${chapterId}`,  undefined, { shallow: true });
      setBookInfo({ bid: chapterData.bookId, cid: chapterId });
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

    const chapterIsCharge = 'sssssssss'; // catalogData.chapterList.find(val => val.chapterId === c)

    // 付费章节每章单独占一页
    if (chapterIsCharge === EIsCharge.收费章节) {
      loadingRef.current = true;
      await router.replace(`/chapter/${chapterData.bookId}/${chapterId}`);
      loadingRef.current = false;
      return;
    }

    loadingRef.current = true;
    setIsLoading(true);
    const response = await netDetailChapter(chapterData.bookId, chapterId);
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
      update={chapterData.sysTime}
      bookId={chapterData.bookId}
      bookName={catalogData.bookName}/>

    <div
      className={styles.readerBox}
      ref={contentRef}>

      <TopGuide
        bookId={chapterData.bookId}
        bookName={catalogData.bookName}
        cover={catalogData.coverWap}
      />

      <ContentList
        fontSize={fontSize}
        theme={theme}
        onRefresh={() => getChapterDetail("prev")}
        list={contentArr}/>

      { isLoading ? <div className={styles.readerLoading}>
        <DotLoading />
        <span>加载中</span>
      </div> : null}

      <ModalControl chapterData={chapterData}/>

      <ModalCatalog
        bookId={chapterData.bookId}
        chapterId={chapterData?.chapterInfo?.chapterId}
        catalogData={catalogData}
      />
    </div>
  </main>
}

export default Reader
