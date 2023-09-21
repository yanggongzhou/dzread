import React, { FC } from "react";
import SwiperNormal from "@/components/home/swiperNormal/SwiperNormal";
import { IBookItem, INetHomeItem } from "@/typings/home.interface";
import { MEmpty } from "@/components/common/empty";
import MFooter from "@/components/layout/mFooter/MFooter";
import MHeader from "@/components/home/mHeader/MHeader";
import FeaturedList from "@/components/home/featuredList/FeaturedList";
import ColumnBox from "@/components/home/columnBox/ColumnBox";
import Link from "next/link";
import RankColumn from "@/components/home/rankColumn/RankColumn";
import BrowseColumn from "@/components/home/browseColumn/BrowseColumn";
import styles from '@/components/home/MHome.module.scss';

interface IProps {
  bannerList: IBookItem[];
  smallData: INetHomeItem[];
}

const MHome: FC<IProps> = ({ bannerList, smallData }) => {

  return (
    <div className={styles.homeWrap}>
      <MHeader/>

      {bannerList.length > 0 ? <SwiperNormal bannerList={bannerList}/> : null}

      <nav className={styles.navBtnBox}>
        <Link href={'/ranking'} className={styles.navBtn}>排行榜</Link>
        <Link href={'/ranking'} className={styles.navBtn}>分类</Link>
      </nav>

      <ColumnBox href={`/more/xxx`} title={"男生精选"}>
        <FeaturedList list={smallData[1].bookList}/>
      </ColumnBox>

      <ColumnBox href={`/more/xxx`} title={"排行榜"}>
        <RankColumn smallData={[smallData[1], smallData[2], smallData[3], smallData[1]]}/>
      </ColumnBox>

      <ColumnBox href={`/more/xxx`} title={"分类推荐"}>
        <BrowseColumn smallData={[smallData[1], smallData[2], smallData[3], smallData[1]]}/>
      </ColumnBox>

      {bannerList.length === 0 && smallData.length === 0 ? <MEmpty/> : null}

      <MFooter/>
    </div>
  )
}


export default MHome
