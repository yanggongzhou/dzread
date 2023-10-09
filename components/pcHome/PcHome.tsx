import React, { FC } from "react";
import SecondList from "@/components/pcHome/secondList/SecondList";
import { EColumnType, IBookItem, INetHomeItem, ISeoBannerManageVo, ISeoColumnVo } from "@/typings/home.interface";
import SwiperArea from "@/components/pcHome/swiperArea/SwiperArea";
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import { PcEmpty } from "@/components/common/empty";
import VerticalList from "@/components/pcHome/verticalList/VerticalList";
import styles from "@/components/pcHome/index.module.scss";
import Image from "next/image";
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
            if (item.type === EColumnType.排行榜) {
              return <div key={item.id} className={styles.rankContent}>
                <h2 className={styles.titleText}>排行榜</h2>
                <VerticalList rankVos={item.rankVos?.slice(0, 3)}/>
              </div>;
            }
            if (item.type === EColumnType.分类推荐) {
              return null;
            }
            return <div key={item.id}>
              <PcHomeTitle title={item.name} href={`/recommend/${item.id}`}/>
              <div className={styles.listBox}>
                <Image
                  className={styles.listBg}
                  width={1200}
                  height={188}
                  src={'/images/home/male-bg.png'}
                  alt={''}
                />
                <SecondList
                  cao={item.bookInfos}
                  bookInfos={(item.bookInfos || [])}
                  priority={index <= 1}/>
              </div>

            </div>
          })
        }

        {bannerList.length === 0 && seoColumnVos.length === 0 ? <PcEmpty/> : null}
      </main>

    </>
  )
}

export default PcHome
