import React, { FC } from "react";
import SwiperNormal from "@/components/home/swiperNormal/SwiperNormal";
import HomeTitle from "@/components/home/homeTitle/HomeTitle";
import FirstItem from "@/components/home/firstItem/FirstItem";
import { ColumnNameRoute, IBookItem, INetHomeItem } from "@/typings/home.interface";
import styles from '@/components/home/MHome.module.scss'
import { MEmpty } from "@/components/common/empty";
import MFooter from "@/components/layout/mFooter/MFooter";

interface IProps {
  bannerList: IBookItem[];
  smallData: INetHomeItem[];
}

const MHome: FC<IProps> = ({ bannerList, smallData }) => {

  return (
    <div className={styles.homeWrap}>
      {bannerList.length > 0 ? <SwiperNormal bannerList={bannerList}/> : null}

      {smallData.map((item) => {
        return <div key={item.position} className={styles.mainContent}>
          <HomeTitle title={item.position} href={`/more/${ColumnNameRoute[item.position]}`}/>
          <FirstItem dataSource={item.bookList || []}/>
        </div>
      })}

      {bannerList.length === 0 && smallData.length === 0 ? <MEmpty/> : null}

      <MFooter/>
    </div>
  )
}


export default MHome
