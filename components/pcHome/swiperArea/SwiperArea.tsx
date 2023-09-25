import React, { FC, useRef, useState } from 'react'
import styles from '@/components/pcHome/swiperArea/SwiperArea.module.scss'
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import { onImgError } from "@/components/common/image/ImageCover";
import Image from "next/image";
import { Swiper, SwiperRef } from "antd-mobile";
import { useRouter } from "next/router";
import QRCode from "qrcode.react";

interface IProps {
  bannerList: IBookItem[];
}

const SwiperArea: FC<IProps> = ({ bannerList = [] }) => {
  const { bookId, tags = [] } = bannerList?.[0]
  const routerToBookInfo = `/book/${bookId}`
  const router = useRouter();
  const swiperRef = useRef<SwiperRef | null>(null);
  const onIndicator = (index: number) => {
    swiperRef.current?.swipeTo(index);
  }
  const [swiperIndex, setSwiperIndex] = useState(0);

  return <div className={styles.swiperWrap}>
    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      autoplayInterval={2000}
      autoplay
      loop
      style={{
        '--height': '2.2rem',
        '--track-padding': '0 0 0',
      }}
      indicator={(total, current) => {
        setSwiperIndex(current);
        return <div className={styles.indicatorBox}>
          { Array.from({ length: total }, (v,i) =>{
            if (current === i ) {
              return <Image
                key={i}
                src={'/images/home/swiper-in.svg'}
                className={styles.indicatorIcon}
                width={48}
                height={48}
                alt={""}
              />
            }
            return <div
              key={i}
              className={styles.indicatorItem}
              onClick={() => onIndicator(i)}/>
          })}
        </div>}}>

      {bannerList.map(ban => (
        <Swiper.Item key={ban.bookId} className={styles.content}>
          <div className={styles.contentMark} onClick={() => {
            router.push({ pathname: routerToBookInfo })
          }}>
          </div>
          <Link href={routerToBookInfo}>
            <Image
              src={ban.cover}
              className={styles.contentImg}
              onError={onImgError}
              placeholder="blur"
              blurDataURL={ban.cover || '/images/defaultBook.png'}
              priority
              width={1300}
              height={400}
              alt={ban.bookName}
            />
          </Link>
        </Swiper.Item>
      ))}
    </Swiper>
    <QRCode
      renderAs={"canvas"}
      className={styles.markQrCode}
      value="'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'"
    />
    <Image
      src={bannerList[swiperIndex].cover}
      className={styles.imgBlur}
      onError={onImgError}
      placeholder="blur"
      blurDataURL={bannerList[swiperIndex].cover || '/images/defaultBook.png'}
      priority
      width={1300}
      height={400}
      alt={bannerList[swiperIndex].bookName}
    />
  </div>
}

export default SwiperArea;
