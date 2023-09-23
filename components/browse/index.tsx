import React, { FC, useEffect, useRef, useState } from "react";
import { IBookItem } from "@/typings/home.interface";
import { IBrowseTypes } from "@/typings/browse.interface";
import { useRouter } from "next/router";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";
import BrowseType from "@/components/browse/browseType/BrowseType";
import DownloadBanner from "@/components/common/downloadBanner/DownloadBanner";
import { setIsShowBrowse } from "@/store/modules/app.module";
import { useAppDispatch } from "@/store";
import MRecommendList from "@/components/recommend/mRecommendList/MRecommendList";
import styles from "@/components/browse/index.module.scss";

interface IProps {
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
}

const MBrowse: FC<IProps> = ({ bookList = [], pageNo, pages, typeTwoId, types }) => {
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

    <NavBar backHref={'/'} title={"男生小说分类"}/>

    <BrowseType isShowBox={isShowBox} typeTwoId={typeTwoId} types={types}/>

    <DownloadBanner height={'0.1rem'}>
      {bookList.length > 0 ? <div className={styles.browseContent} ref={browseRef}>
        <MRecommendList list={bookList} />
        {pages && pages > 1 ? <MorePagination
          prevPath={`/browse/${typeTwoId}/`}
          page={pageNo}
          totalPage={pages}
        /> : null}
      </div> : <MEmpty />}
    </DownloadBanner>
  </main>)
}

export default MBrowse;
