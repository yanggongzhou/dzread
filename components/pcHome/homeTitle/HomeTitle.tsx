import React, { FC } from 'react'
import styles from '@/components/pcHome/homeTitle/HomeTitle.module.scss'
import Link from "next/link";
import Image from "next/image";

interface IProps {
  title: string;
  href?: string;
  isMore?: boolean; // 是否显示跳转链接
}

const PcHomeTitle: FC<IProps> = ({ title, href }) => {

  return <div className={styles.titleWrap}>
    <div className={styles.titleBox}>
      <h2 className={styles.titleText}>{title}</h2>
    </div>

    {href ? <Link className={styles.moreBox} href={href}>
      More
      <Image
        className={styles.moreIcon}
        width={16}
        height={16}
        src={'/images/common/more.png'}
        alt={''}
      />
      <Image
        className={styles.moreActiveIcon}
        width={16}
        height={16}
        src={'/images/home/pc-more-active.png'}
        alt={''}
      />
    </Link> : null}
  </div>
}

export default PcHomeTitle
