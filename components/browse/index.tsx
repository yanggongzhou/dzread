import React, { FC, useEffect, useRef, useState } from "react";
import styles from "@/components/browse/index.module.scss";
import { IBookItem } from "@/typings/home.interface";
import { IBrowseTypes } from "@/typings/browse.interface";
import { useRouter } from "next/router";
import { MEmpty } from "@/components/common/empty";
import MFirstList from "@/components/home/firstList/FirstList";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/recommend/navBar/NavBar";
import BrowseType from "@/components/browse/browseType/BrowseType";
import DownloadBanner from "@/components/browse/downloadBanner/DownloadBanner";
import { setIsShowBrowse } from "@/store/modules/app.module";
import { useAppDispatch } from "@/store";

interface IProps {
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
}

const MBrowse: FC<IProps> = ({ bookList, pageNo, pages, typeTwoId, types }) => {
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

  const [isFooter, setIsFooter] = useState(false);
  const intersectionRef = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((dom) => {
        // isIntersecting为true则dom出现在页面上
        setIsFooter(dom.isIntersecting)
      });
    }, {});
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current as Element)
    }
    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current as Element)
      }
    };
  }, []);

  return (<div className={styles.browseWrap}>
    <NavBar backHref={'/'} title={"男生小说分类"}/>

    <BrowseType isShowBox={isShowBox} typeTwoId={typeTwoId} types={types}/>

    {bookList.length > 0 ? <div className={styles.browseContent}>
      <div className={styles.browseContent2} ref={browseRef}>
        <MFirstList dataSource={bookList} />
        {pages && pages > 1 ? <MorePagination
          prevPath={`/browse/${typeTwoId}/`}
          page={pageNo}
          totalPage={pages}
        /> : null}
      </div>
    </div> : <MEmpty />}
    <DownloadBanner isFooter={isFooter} />
    <div style={{ width: '0.2rem', height: 1 }} ref={intersectionRef} />
  </div>)
}

export default MBrowse;
