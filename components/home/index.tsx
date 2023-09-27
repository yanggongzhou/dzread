import React, { FC } from "react";
import SwiperNormal from "@/components/home/swiperNormal/SwiperNormal";
import { IBookItem, INetHomeItem } from "@/typings/home.interface";
import { MEmpty } from "@/components/common/empty";
import MFooter from "@/components/home/mFooter/MFooter";
import MHeader from "@/components/home/mHeader/MHeader";
import FeaturedList from "@/components/home/featuredList/FeaturedList";
import ColumnBox from "@/components/home/columnBox/ColumnBox";
import Link from "next/link";
import RankColumn from "@/components/home/rankColumn/RankColumn";
import BrowseColumn from "@/components/home/browseColumn/BrowseColumn";
import styles from '@/components/home/index.module.scss';
import Image from "next/image";

interface IProps {
  bannerList: IBookItem[];
  smallData: INetHomeItem[];
}

const WapHome: FC<IProps> = ({ bannerList, smallData }) => {

  return (
    <main className={styles.homeWrap}>
      <MHeader/>
      {bannerList.length > 0 ? <SwiperNormal bannerList={bannerList}/> : null}
      <div className={styles.container}>
        <div className={styles.navBtnBox}>
          <Link href={'/rankings'} className={styles.navItem} title="排行榜">
            <Image
              className={styles.navIcon}
              width={64}
              height={62}
              src={'/images/home/rank.png'}
              alt={'排行榜'}
            />
            排行榜
          </Link>
          <Link href={'/browse/0'} className={styles.navItem} title="分类">
            <Image
              className={styles.navIcon}
              width={64}
              height={62}
              src={'/images/home/browse.png'}
              alt={'分类'}
            />
            分类
          </Link>
        </div>

        <ColumnBox href={`/recommend/male-1`} title={"男生精选"} btnTxt={"更多精选"}>
          <FeaturedList list={smallData[1].bookList}/>
        </ColumnBox>

        <ColumnBox href={`/rankings`} title={"排行榜"} btnTxt={"完整榜单"}>
          <RankColumn smallData={[smallData[1], smallData[2], smallData[3], smallData[1]]}/>
        </ColumnBox>

        <ColumnBox href={`/browse/0`} title={"分类推荐"} btnTxt={"全部分类"}>
          <BrowseColumn smallData={[smallData[1], smallData[2], smallData[3], smallData[1]]}/>
        </ColumnBox>

        {bannerList.length === 0 && smallData.length === 0 ? <MEmpty/> : null}
      </div>

      <MFooter/>
    </main>
  )
}


export default WapHome
