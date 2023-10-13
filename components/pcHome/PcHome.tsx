import React, { FC } from "react";
import SecondList from "@/components/pcHome/secondList/SecondList";
import { EColumnType, ERankSex, ISeoBannerManageVo, ISeoColumnManage } from "@/typings/home.interface";
import SwiperArea from "@/components/pcHome/swiperArea/SwiperArea";
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import { PcEmpty } from "@/components/common/empty";
import VerticalList from "@/components/pcHome/verticalList/VerticalList";
import Image from "next/image";
import styles from "@/components/pcHome/index.module.scss";
import { ERankVoSex } from "@/typings/ranking.interface";

interface IProps {
  bannerList: ISeoBannerManageVo[];
  seoColumnManageVos: ISeoColumnManage[]
}

const PcHome: FC<IProps> = ({ bannerList, seoColumnManageVos = [] }) => {
  return (
    <>
      {bannerList.length > 0 ? <SwiperArea bannerList={bannerList}/> : null}
      <main className={styles.homeWrap}>
        {
          seoColumnManageVos.length > 0 && seoColumnManageVos.map((item, index) => {
            if (item.type === EColumnType.排行榜) {
              return <div key={item.id} className={styles.rankColumn}>
                <div className={styles.rankContent}>
                  <h2 className={styles.titleText}>{item.name}</h2>
                  <VerticalList rankVos={item.rankVos?.slice(0, 3)} rankSex={item.rankSex}/>
                </div>
              </div>;
            }
            if (item.type === EColumnType.分类推荐) {
              return null;
            }
            return <div key={item.id} className={styles.bookColumn}>
              <PcHomeTitle title={item.name} href={`/recommend/${item.bookPackageId}`}/>
              <div className={styles.listBox}>
                {item.sex === ERankVoSex.男频 ? <Image
                  className={styles.listBg}
                  width={1200}
                  height={188}
                  src={'/images/home/male-bg.png'}
                  alt={''}
                /> : null}
                {item.sex === ERankVoSex.女频 ? <Image
                  className={styles.listBg}
                  width={1200}
                  height={188}
                  src={'/images/home/female-bg.png'}
                  alt={''}
                /> : null}
                {item.sex !== ERankVoSex.男频 && item.sex !== ERankVoSex.女频 ? <div className={styles.listBg2}/> : null}
                <SecondList
                  bookInfos={(item.bookInfos || [])}
                  priority={index <= 1}/>
              </div>

            </div>
          })
        }

        {bannerList.length === 0 && seoColumnManageVos.length === 0 ? <PcEmpty/> : null}
      </main>

    </>
  )
}

export default PcHome
