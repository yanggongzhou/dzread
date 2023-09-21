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
    { id: 'App', label: "排行榜", link: '/rankings' },
  ]

  const rankingTypeList = [
    {
      id: 'male',
      label: '男生排行榜',
      children: [
        { id: 'hot', label: '热门榜' },
        { id: 'god', label: '畅销榜' },
        { id: 'finish', label: '完本榜' },
        { id: 'good', label: '好评榜' },
        { id: 'new', label: '新书榜' },
        { id: 'old', label: '经典榜' },
      ]
    },
    {
      id: 'female',
      label: '女生排行榜',
      children: [
        { id: 'hot', label: '热门榜' },
        { id: 'god', label: '畅销榜' },
        { id: 'finish', label: '完本榜' },
        { id: 'good', label: '好评榜' },
        { id: 'new', label: '新书榜' },
        { id: 'old', label: '经典榜' },
      ]
    },
    {
      id: 'publish',
      label: '出版排行榜',
      children: [
        { id: 'hot', label: '热门榜' },
        { id: 'god', label: '畅销榜' },
        { id: 'finish', label: '完本榜' },
        { id: 'good', label: '好评榜' },
        { id: 'new', label: '新书榜' },
        { id: 'old', label: '经典榜' },
      ]
    },
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
        if (val.id === "browse") {
          return (
            <div className={styles.browseBox} key={val.id}>
              <Link href={val.link} className={(router.asPath === val.link || router.asPath.includes(val.id)) ? styles.navItemActive : styles.navItem}>
                <div className={styles.navItemLabel}>{val.label}</div>
              </Link>
              <div className={styles.browsePop}>
                {rankingTypeList.map(item => {
                  return <div key={item.id} className={styles.tabOneItem}>
                    <h2>{ item.label }</h2>
                    <div className={styles.oneItemBox}>
                      {item.children.map(child => {
                        return <Link key={child.id} href={`/ranking/${child.id}`} className={styles.tabChild}>
                          { child.label }
                        </Link>
                      })}
                    </div>
                  </div>
                })}
              </div>
            </div>
          )
        }

        return <Link key={val.id} href={val.link} className={(router.asPath === val.link || router.asPath.includes(val.id)) ? styles.navItemActive : styles.navItem}>
          <div className={styles.navItemLabel}>{val.label}</div>
        </Link>
      }) }
    </div>
  </div>
}

export default PcNav
