import React, { FC, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";
import BrowseType from "@/components/browse/browseType/BrowseType";
import DownloadBanner from "@/components/common/downloadBanner/DownloadBanner";
import { setIsShowBrowse } from "@/store/modules/app.module";
import { useAppDispatch } from "@/store";
import MRecommendList from "@/components/recommend/mRecommendList/MRecommendList";
import { IBookSearchVo, IBrowseParams, ITypeTwoVo } from "@/typings/browse.interface";
import styles from "@/components/browse/index.module.scss";

interface IProps {
  page: number;
  pages: number;
  books: IBookSearchVo[];
  typeTwoVos: ITypeTwoVo[];
  statusMark: { title: string; markId: string }[]; // 书籍状态栏(四级)
  wordType: { name: string; type: string }[];// 分类书籍字数筛选
  params: IBrowseParams;
}

const MBrowse: FC<IProps> = (
  {
    page,
    pages,
    books,
    typeTwoVos,
    statusMark,
    wordType,
    params,
  }
) => {
  const browseRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (browseRef.current && Reflect.has(browseRef.current, "scrollTop")) {
      Reflect.set(browseRef.current, "scrollTop", 0)
    }
  }, [router]);

  const [isShowBox, setIsShowBox] = useState(true);
  const dispatch = useAppDispatch()
  const onScroll = (e: Event) => {
    if (window.scrollY > 10) {
      dispatch(setIsShowBrowse(false));
      setIsShowBox(false);
    }
    if (window.scrollY <= 5) {
      dispatch(setIsShowBrowse(true));
      setIsShowBox(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, []);

  return (<main className={styles.browseWrap}>

    <NavBar backHref={'/'} title={"小说分类"}/>

    <BrowseType
      isShowBox={isShowBox}
      typeTwoVos={typeTwoVos}
      statusMark={statusMark}
      wordType={wordType}
      params={params}
    />

    <div className={styles.browseContentMark}/>

    <DownloadBanner height={'0.1rem'}>
      <div className={styles.browseContent} ref={browseRef}>
        {books.length > 0 ? <>
          <MRecommendList bookInfos={books}/>
          {pages && pages > 1 ? <MorePagination
            prevPath={`/browse/${params?.id}-${params?.cid}-${params?.tid}-${params?.status}-${params?.wordType}/`}
            page={page}
            totalPage={pages}
          /> : null}
        </> : <MEmpty/>}
      </div>
    </DownloadBanner>
  </main>)
}

export default MBrowse;
