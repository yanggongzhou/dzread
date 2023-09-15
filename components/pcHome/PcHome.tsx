import React, { FC } from "react";
import SecondList from "@/components/pcHome/secondList/SecondList";
import { ColumnNameRoute, IBookItem, IHomeResItem } from "@/typings/home.interface";
import SwiperArea from "@/components/pcHome/swiperArea/SwiperArea";
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import { PcEmpty } from "@/components/common/empty";
import VerticalList from "@/components/pcHome/verticalList/VerticalList";

interface IProps {
  bigList: IBookItem[];
  smallData: IHomeResItem[];
}

const PcHome: FC<IProps> = ({ bigList, smallData }) => {
  return (
    <>
      {bigList.length > 0 ? <SwiperArea bigList={bigList}/> : null}
      {
        smallData.length > 0 && smallData.map((item, index) => {
          if (item?.items && item.items.length > 0) {
            return <div key={item.id}>
              <PcHomeTitle title={item.name} href={`/more/${ColumnNameRoute[item.name]}`}/>
              <SecondList dataSource={(item.items || []).slice(0, 5)} priority={index <= 1}/>
            </div>
          }
          return null;
        })
      }
      <PcHomeTitle title={'排行榜'} href={`/more/rankings`}/>
      <VerticalList list={smallData[0].items}/>
      {bigList.length === 0 && smallData.length === 0 ? <PcEmpty/> : null}
    </>
  )
}

export default PcHome
