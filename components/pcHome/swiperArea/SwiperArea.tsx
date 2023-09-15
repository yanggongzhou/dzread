import React, { FC, useRef } from 'react'
import styles from '@/components/pcHome/swiperArea/SwiperArea.module.scss'
import { IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import { onImgError } from "@/components/common/image/ImageCover";
import Image from "next/image";
import { Swiper, SwiperRef } from "antd-mobile";
import { useRouter } from "next/router";

interface IProps {
  bigList: IBookItem[];
}

const SwiperArea: FC<IProps> = ({ bigList = [] }) => {
  const { bookId, tags = [] } = bigList?.[0]
  const routerToBookInfo = `/film/${bookId}`
  const router = useRouter();
  const swiperRef = useRef<SwiperRef>(null);
  const items = bigList.map(ban => (
    <Swiper.Item key={ban.bookId} className={styles.content}>
      <div className={styles.contentMark} onClick={() => {
        router.push({ pathname: routerToBookInfo })
      }}/>
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
  ))

  return <div className={styles.swiperWrap}>
    <Swiper
      ref={swiperRef}
      style={{
        '--height': '2.64rem',
        '--track-padding': '0 0 0',
      }}
      indicatorProps={{
        style: {
          '--dot-size': '0.08rem',
          '--active-dot-size': '0.08rem',
          '--dot-spacing': '0.08rem',
          marginBottom: '0.1rem'
        }
      }}
      className={styles.swiperBox}
      autoplay
      loop>{items}</Swiper>
    { bigList.length > 1 ? <>
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
  </div>
}

export default SwiperArea;
