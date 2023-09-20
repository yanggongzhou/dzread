import React, { FC, useRef } from 'react'
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
  const items = bannerList.map(ban => (
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
  ));

  const onIndicator = (index: number) => {
    swiperRef.current?.swipeTo(index);
  }

  return <div className={styles.swiperWrap}>
    <Swiper
      ref={swiperRef}
      className={styles.swiperBox}
      autoplayInterval={2000}
      autoplay
      loop
      style={{
        '--height': '2.64rem',
        '--track-padding': '0 0 0',
      }}
      indicator={(total, current) => (
        <div className={styles.indicatorBox}>
          { Array.from({ length: total }, (v,i) =>
            <div
              key={i}
              style={current === i ? { backgroundColor: "red" } : {backgroundColor: "grey"}}
              className={styles.indicatorItem}
              onClick={() => onIndicator(i)}
            >{i}</div>
          ) }
        </div>
      )}
      >{items}</Swiper>
    { bannerList.length > 1 ? <>
      <div className={styles.arrowLeft} onClick={() => {
        swiperRef.current?.swipePrev()
      }}>
        <Image
          src={'/images/home/arrow-left.png'}
          className={styles.arrowLeftIcon}
          width={48}
          height={48}
          alt={""}
        />
      </div>
      <div className={styles.arrowRight} onClick={() => {
        swiperRef.current?.swipeNext()
      }}>
        <Image
          src={'/images/home/arrow-left.png'}
          className={styles.arrowRightIcon}
          width={48}
          height={48}
          alt={""}
        />
      </div>
    </> : null }
    <QRCode
      renderAs={"canvas"}
      className={styles.markQrCode}
      value="'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'"
    />
  </div>
}

export default SwiperArea;
