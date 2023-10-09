import React, { FC } from 'react';
import { Swiper } from 'antd-mobile';
import { ISeoBannerManageVo } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/home/swiperNormal/SwiperNormal.module.scss';

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
          <ImageCover
            href={`/book/${item.bookId}`}
            className={styles.contentImgBox}
            src={item.wapUrl}
            width={218}
            height={294}
            alt={item.name}
          />
        </Swiper.Item>
      ))}
    </Swiper>
  </div>
}

export default SwiperNormal;
