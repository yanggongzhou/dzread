import React, { FC } from 'react'
import styles from '@/components/layout/pcHeader/PcNav.module.scss'
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ClientConfig from "@/client.config";

interface IProps {

}


const PcNav: FC<IProps> = () => {
  const router = useRouter();
  const MenuData = [
    { id: 'index', label: "首页", link: '/' },
    { id: 'browse', label: "分类", link: '/browse/0' },
    { id: 'App', label: "排行榜", link: '/download' },
  ]

  return <div className={styles.navLeft}>
    <Link href={'/'} className={styles.logoTxtBox}>
      <Image
        className={styles.logoTxt}
        width={40}
        height={40}
        src={'/images/logo.png'}
        alt={ClientConfig.name}
      />
      <span>点众阅读</span>
    </Link>
    <div className={styles.navBox}>
      { MenuData.map(val => {
        return <Link key={val.id} href={val.link} className={(router.asPath === val.link || router.asPath.includes(val.id)) ? styles.navItemActive : styles.navItem}>
          <div className={styles.navItemLabel}>{val.label}</div>
        </Link>
      }) }
    </div>
  </div>
}

export default PcNav
