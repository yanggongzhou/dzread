import React, { FC } from "react";
import SwiperNormal from "@/components/home/swiperNormal/SwiperNormal";
import { EChannelCode, EColumnType, ISeoBannerManageVo, ISeoColumnVo } from "@/typings/home.interface";
import MHeader from "@/components/home/mHeader/MHeader";
import FeaturedList from "@/components/home/featuredList/FeaturedList";
import ColumnBox from "@/components/home/columnBox/ColumnBox";
import Link from "next/link";
import RankColumn from "@/components/home/rankColumn/RankColumn";
import BrowseColumn from "@/components/home/browseColumn/BrowseColumn";
import Image from "next/image";
import { MEmpty } from "@/components/common/empty";
import MFooter from "@/components/home/mFooter/MFooter";
import { useAppSelector } from "@/store";
import styles from '@/components/home/index.module.scss';

interface IProps {
  bannerList: ISeoBannerManageVo[];
  seoColumnVos: ISeoColumnVo[]
}

const WapHome: FC<IProps> = ({ bannerList, seoColumnVos }) => {


  const code = useAppSelector(state => state.app.code);

  return (
    <main className={styles.homeWrap}>
      <MHeader
        seoColumnVos={seoColumnVos}
      />
      {bannerList.length > 0 ? <SwiperNormal bannerList={bannerList}/> : null}

      {seoColumnVos.map(column => {
        if (column.code === EChannelCode.首页) return null;
        return <div
          key={column.code}
          style={code !== column.code ? { display: 'none' } : {}}
          className={styles.container}>
          <div className={styles.navBtnBox}>
            <Link href={'/ranking'} className={styles.navItem} title="排行榜">
              <Image
                className={styles.navIcon}
                width={64}
                height={62}
                src={'/images/home/rank.png'}
                alt={'排行榜'}
              />
              排行榜
            </Link>
            <Link href={`/browse/${column.code}-0-0-0-0`} className={styles.navItem} title="分类">
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
          {column.seoColumnManageVos.map(manage => {
            if (manage.type === EColumnType.排行榜) {
              return <ColumnBox key={manage.id} href={`/ranking`} title={manage.name} btnTxt={"完整榜单"}>
                <RankColumn rankVos={manage?.rankVos}/>
              </ColumnBox>
            }

            if (manage.type === EColumnType.分类推荐) {
              return <ColumnBox key={manage.id} href={`/browse/${column.code}-0-0-0-0`} title={manage.name} btnTxt={"全部分类"}>
                <BrowseColumn bookTypeVos={manage.bookTypeVos}/>
              </ColumnBox>
            }

            return <ColumnBox key={manage.id} href={`/recommend/${code}-${manage.bookPackageId}`} title={manage.name}
                              btnTxt={"更多精选"}>
              <FeaturedList bookInfos={manage?.bookInfos}/>
            </ColumnBox>
          })}

          {bannerList.length === 0 && seoColumnVos.length === 0 ? <MEmpty/> : null}
        </div>
      })}
      <MFooter/>
    </main>
  )
}


export default WapHome
