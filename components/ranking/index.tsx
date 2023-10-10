import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/router";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import NavBar from "@/components/common/navBar/NavBar";
import Link from "next/link";
import classNames from "classnames";
import RankBookList from "@/components/ranking/rankBookList/RankBookList";
import RankDownloadBanner from "@/components/ranking/rankBanner/DownloadBanner";
import { ESexType, IFastRankStyleVo, IRankBookDataVo, ISeoRankVo } from "@/typings/ranking.interface";
import styles from "@/components/ranking/index.module.scss";

interface IProps {
  page: number;
  pages: number; // 总页
  rankStyle: number;
  rankType: ESexType;
  subList: ISeoRankVo[]; // 排行榜名称列表
  rankBook: IRankBookDataVo[]; // 某个排行榜对应的书籍信息data
  rankId?: number;
}

const WapRanking: FC<IProps> = (
  {
    subList,
    rankBook,
    page,
    pages,
    rankStyle,
    rankId,
    rankType
  }
) => {
  const rankRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (rankRef.current && Reflect.has(rankRef.current, "scrollTop")) {
      Reflect.set(rankRef.current, "scrollTop", 0)
    }
  }, [router]);
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

  const styleList: IFastRankStyleVo[] = useMemo(() => {
    const data = subList.find(item => item.id === rankId)
    if (data) {
      return data.styleList || [];
    }
    return [];
  }, [subList, rankId]);

  return (<>
    <NavBar backHref={'/'} title={rankType === ESexType.Male ? "男生小说排行榜" : "女生小说排行榜"}/>
    <main className={styles.rankWrap}>
      <nav className={styles.slideBox}>
        {subList.map(item => (
          <Link
            key={item.id}
            href={`/ranking/${rankType}-${item.id}-${rankStyle}`}
            title={item.name}
            className={classNames(styles.slideItem, rankId === item.id && styles.active)}>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className={styles.mainBox}>
        <div className={styles.rankDateBox}>
          <div className={styles.rankDate}>
            {styleList.length > 0 ? styleList.map(val => {
              return <Link
                key={val.style}
                className={classNames(styles.rankDateItem, rankStyle === val.style && styles.active)}
                href={`/ranking/${rankType}-${rankId || 'null'}-${val.style}`}>
                {val.styleName}
              </Link>
            }) : null}
          </div>
        </div>
        {rankBook.length > 0 ?
          <div className={styles.rankContent} ref={rankRef}>
            <RankBookList rankBook={rankBook}/>
            {pages && pages > 1 ? <MorePagination
              prevPath={`/ranking/${rankType}-${rankId || 'null'}-${rankStyle}/`}
              page={page}
              totalPage={pages}
            /> : null}
            <div style={{ width: 1, height: 10 }} ref={intersectionRef}/>
          </div>
          : <MEmpty/>}

        <RankDownloadBanner isFooter={isFooter}/>
      </div>
    </main>
  </>)
}

export default WapRanking;
