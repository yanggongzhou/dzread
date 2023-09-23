import React, { FC, useEffect, useRef, useState } from "react";
import { IBookItem } from "@/typings/home.interface";
import { IBrowseTypes } from "@/typings/browse.interface";
import { useRouter } from "next/router";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";
import styles from "@/components/rankings/index.module.scss";
import { SideBar } from "antd-mobile";
import Link from "next/link";
import classNames from "classnames";
import RankList from "@/components/rankings/rankList/RankList";
import RankDownloadBanner from "@/components/rankings/rankBanner/DownloadBanner";

interface IProps {
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
}

const MRankings: FC<IProps> = ({ bookList = [], pageNo, pages, typeTwoId, types }) => {
  const rankRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (rankRef.current && Reflect.has(rankRef.current, "scrollTop")) {
      Reflect.set(rankRef.current, "scrollTop", 0)
    }
  }, [router]);

  const [isMouth, setIsMouth] = useState(false);

  const [activeKey, setActiveKey] = useState('key1')


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

  return (<div className={styles.rankWrap}>
    <NavBar backHref={'/'} title={"男生小说排行榜"}/>

    <div className={styles.slideBox}>
      <SideBar style={{
        '--width': "1.42rem",
        '--item-border-radius': "0.02rem",
      }} activeKey={activeKey} onChange={setActiveKey}>
        {types.map(item => (
          <SideBar.Item key={item.id} title={item.name} />
        ))}
      </SideBar>
    </div>

    <div className={styles.mainBox}>
      <div className={styles.rankDateBox}>
        <div className={styles.rankDate}>
          <Link className={classNames(styles.rankDateItem, !isMouth && styles.active)} href={'/'}>日榜</Link>
          <Link className={classNames(styles.rankDateItem, isMouth && styles.active)} href={'/'}>月榜</Link>
        </div>
      </div>
      {bookList.length > 0 ?
        <div className={styles.rankContent} ref={rankRef}>
          <RankList dataSource={bookList} />
          {pages && pages > 1 ? <MorePagination
            prevPath={`/browse/${typeTwoId}/`}
            page={pageNo}
            totalPage={pages}
          /> : null}
          <div style={{ width: 1, height: 10 }} ref={intersectionRef} />
        </div>
        : <MEmpty />}

      <RankDownloadBanner isFooter={isFooter} />

    </div>
  </div>)
}

export default MRankings;
