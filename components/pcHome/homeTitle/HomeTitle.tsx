import React, { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from '@/components/pcHome/homeTitle/HomeTitle.module.scss';

interface IProps {
  title: string;
  href?: string;
  isMore?: boolean; // 是否显示跳转链接
}

const PcHomeTitle: FC<IProps> = ({ title, href }) => {

  return <Link className={styles.moreBox} href={href}>
    <h2 className={styles.titleText}>{title}</h2>
    <Image
      className={styles.moreIcon}
      width={18}
      height={18}
      src={'/images/home/more.png'}
      alt={''}
    />
  </Link>
}

export default PcHomeTitle
