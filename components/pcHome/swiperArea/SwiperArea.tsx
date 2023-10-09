import React, { FC, useRef } from 'react';
import { ISeoBannerManageVo } from "@/typings/home.interface";
import Link from "next/link";
import { onImgError } from "@/components/common/image/ImageCover";
import Image from "next/image";
import { Swiper, SwiperRef } from "antd-mobile";
import { useRouter } from "next/router";
import QRCode from "qrcode.react";
import styles from '@/components/pcHome/swiperArea/SwiperArea.module.scss';
import classNames from "classnames";

interface IProps {
  bannerList: ISeoBannerManageVo[];
}

const SwiperArea: FC<IProps> = ({ bannerList = [] }) => {

  const router = useRouter();
  const swiperRef = useRef<SwiperRef | null>(null);
  const onIndicator = (index: number) => {
    swiperRef.current?.swipeTo(index);
  }

  return <div className={styles.swiperWrap}>
    <div className={styles.container}>
      <Swiper
        ref={swiperRef}
        className={styles.swiperBox}
        autoplayInterval={2000}
        autoplay
        loop
        style={{
          '--track-padding': '0 0 0',
        }}
        indicator={(total, current) => {
          return <div className={styles.indicatorBox}>
            { Array.from({ length: total }, (v,i) =>{
              return <div
                key={i}
                className={styles.indicatorItemBox}
                onClick={() => onIndicator(i)}>
                <div className={classNames(styles.indicatorItem, current === i && styles.indicatorActive)}/>
              </div>
            })}
          </div>}}
      >
        {bannerList.map(ban => (
          <Swiper.Item key={ban.bookId} className={styles.content}>
            <div className={styles.contentMark} onClick={() => {
              router.push({ pathname: `/book/${ban.bookId}` })
            }}>
            </div>
            <Link href={`/book/${ban.bookId}`}>
              <Image
                src={ban.pcUrl}
                className={styles.contentImg}
                onError={onImgError}
                placeholder="blur"
                blurDataURL={ban.pcUrl || '/images/defaultBook.png'}
                priority
                width={1200}
                height={310}
                alt={ban.name}
              />
            </Link>
          </Swiper.Item>
        ))}
      </Swiper>

      <div className={styles.markQrCodeBox}>
        <QRCode
          renderAs={"canvas"}
          className={styles.markQrCode}
          value="'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'"
        />
        <p>扫码下载</p>
      </div>

    </div>
  </div>
}

export default SwiperArea;
