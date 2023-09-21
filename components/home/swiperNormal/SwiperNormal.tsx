import React, { FC } from 'react';
import { Swiper } from 'antd-mobile';
import { IBookItem } from "@/typings/home.interface";
import ImageCover from "@/components/common/image/ImageCover";
import styles from '@/components/home/swiperNormal/SwiperNormal.module.scss';

interface IProps {
  bannerList: IBookItem[];
}

const SwiperNormal: FC<IProps> = ({ bannerList }) => {
  const items = bannerList.map((item) => (
    <Swiper.Item key={item.bookId} className={styles.content}>
      <ImageCover
        href={`/book/${item.bookId}`}
        className={styles.contentImgBox}
        src={item.cover}
        width={218}
        height={294}
        alt={item.bookName}
      />
    </Swiper.Item>
  ))
  return <Swiper
    autoplayInterval={2000}
    style={{
      '--height': '3.16rem',
    }}
    indicatorProps={{
      style: {
        '--dot-spacing': '0.08rem',
      }
    }}
    trackOffset={2}
    slideSize={96}
    className={styles.swiperBox}
    autoplay
    loop>{items}</Swiper>
}

export default SwiperNormal;
