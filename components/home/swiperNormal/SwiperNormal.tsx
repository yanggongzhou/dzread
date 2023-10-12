import React, { FC } from 'react';
import { Swiper } from 'antd-mobile';
import { ISeoBannerManageVo } from "@/typings/home.interface";
import { onBannerError } from "@/components/common/image/ImageCover";
import styles from '@/components/home/swiperNormal/SwiperNormal.module.scss';
import Link from "next/link";
import Image from "next/image";

interface IProps {
  bannerList: ISeoBannerManageVo[];
}

const SwiperNormal: FC<IProps> = ({ bannerList }) => {

  return <div className={styles.swiperWrap}>
    <Swiper
      autoplayInterval={2000}
      style={{
        '--height': '2.94rem',
      }}
      indicatorProps={{
        style: {
          '--dot-spacing': '0.1rem',
        }
      }}
      className={styles.swiperBox}
      autoplay
      loop>
      {bannerList.map((item) => (
        <Swiper.Item key={item.bookId} className={styles.content}>
          <Link href={`/book/${item.bookId}`}>
            <Image
              src={item.wapUrl}
              className={styles.contentImgBox}
              onError={onBannerError}
              placeholder="blur"
              blurDataURL={item.wapUrl || '/images/common/banner-default.png'}
              priority
              width={702}
              height={254}
              alt={item.name}
            />
          </Link>
        </Swiper.Item>
      ))}
    </Swiper>
  </div>
}

export default SwiperNormal;
