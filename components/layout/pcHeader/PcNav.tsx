import React, { FC } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ClientConfig from "@/client.config";
import classNames from "classnames";
import styles from '@/components/layout/pcHeader/PcNav.module.scss';

interface IProps {

}

const PcNav: FC<IProps> = () => {

  const router = useRouter();

  const MenuData = [
    { id: 'index', label: "首页", link: '/' },
    { id: 'browse', label: "分类", link: '/browse' },
    { id: 'ranking', label: "排行榜", link: '/ranking' },
  ]

  return <div className={styles.navLeft}>
    <Link href={'/'} title={ClientConfig.name}>
      <Image
        quality={100}
        className={styles.logoTxtBox}
        width={118}
        height={40}
        src={'/images/home/pc-logo-txt.png'}
        alt={ClientConfig.name}
      />
    </Link>

    <div className={styles.navBox}>
      { MenuData.map(val => {
        return <Link
          key={val.id}
          href={val.link}
          className={classNames(
            styles.navItem,
            (router.asPath === val.link || router.asPath.includes(val.id)) && styles.active)
          }>
          {val.label}
        </Link>
      }) }
    </div>
  </div>
}

export default PcNav
