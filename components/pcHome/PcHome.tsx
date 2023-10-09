import React, { FC } from "react";
import SecondList from "@/components/pcHome/secondList/SecondList";
import { IBookItem, INetHomeItem, ISeoBannerManageVo, ISeoColumnVo } from "@/typings/home.interface";
import SwiperArea from "@/components/pcHome/swiperArea/SwiperArea";
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import { PcEmpty } from "@/components/common/empty";
import VerticalList from "@/components/pcHome/verticalList/VerticalList";
import styles from "@/components/pcHome/index.module.scss";
interface IProps {
  bannerList: ISeoBannerManageVo[];
  seoColumnVos: ISeoColumnVo[]
}

const PcHome: FC<IProps> = ({ bannerList, seoColumnVos }) => {
  return (
    <>
      {bannerList.length > 0 ? <SwiperArea bannerList={bannerList}/> : null}
      <main className={styles.homeWrap}>
        {
          seoColumnVos[0].seoColumnManageVos.length > 0 && seoColumnVos[0].seoColumnManageVos.map((item, index) => {
            if (item.name) {
              return <div key={item.id}>
                <PcHomeTitle title={item.name} href={`/recommend/${item.id}`}/>
                {/*<SecondList dataSource={(item.bookList || [])} priority={index <= 1}/>*/}
              </div>
            }
            return null;
          })
        }
        {/*<PcHomeTitle title={'排行榜'} href={`/more/ranking`}/>*/}
        {/*<VerticalList list={smallData[0]?.bookList}/>*/}
        {bannerList.length === 0 && seoColumnVos.length === 0 ? <PcEmpty/> : null}
      </main>

    </>
  )
}

export default PcHome
