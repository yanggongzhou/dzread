import React, { FC } from "react";
import SecondList from "@/components/pcHome/secondList/SecondList";
import { IBookItem, INetHomeItem } from "@/typings/home.interface";
import SwiperArea from "@/components/pcHome/swiperArea/SwiperArea";
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import { PcEmpty } from "@/components/common/empty";
import VerticalList from "@/components/pcHome/verticalList/VerticalList";
import styles from "@/components/pcHome/index.module.scss";
interface IProps {
  bannerList: IBookItem[];
  smallData: INetHomeItem[];
}

const PcHome: FC<IProps> = ({ bannerList, smallData }) => {
  return (
    <>
      {bannerList.length > 0 ? <SwiperArea bannerList={bannerList}/> : null}
      <main className={styles.homeWrap}>
        {
          smallData.length > 0 && smallData.map((item, index) => {
            if (item?.bookList && item.bookList.length > 0) {
              return <div key={item.position}>
                <PcHomeTitle title={item.position} href={`/more/${item.position}`}/>
                <SecondList dataSource={(item.bookList || [])} priority={index <= 1}/>
              </div>
            }
            return null;
          })
        }
        <PcHomeTitle title={'排行榜'} href={`/more/rankings`}/>
        <VerticalList list={smallData[0]?.bookList}/>
        {bannerList.length === 0 && smallData.length === 0 ? <PcEmpty/> : null}
      </main>

    </>
  )
}

export default PcHome
