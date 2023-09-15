import React, { FC } from 'react'
import styles from '@/components/layout/mHeader/mNav/index.module.scss'
import Link from "next/link";
import { Popup } from "antd-mobile";
import { useRouter } from "next/router";
import Image from "next/image";

interface IProps {
  visible: boolean;
  cancel: () => void;
}

const MNav: FC<IProps> = ({ visible, cancel }) => {
  const MenuData = [
    { id: 'index', label: "首页", link: '/' },
    { id: 'browse', label: "分类", link: '/browse/0' },
    { id: 'App', label: "APP", link: '/download' },
  ]
  const router = useRouter()

  return <Popup
    visible={visible}
    position={'left'}
    onMaskClick={() => {
      cancel()
    }}
    onClose={() => {
      cancel()
    }}
    bodyStyle={{
      backgroundColor: '#1C1C1E',
      padding: 0,
      width: '3.75rem'
    }}
  >
    <div className={styles.navHead}>
      <Image
        onClick={() => cancel()}
        className={styles.navClose}
        width={48}
        height={48}
        src={'/images/layout/m-menu-close.png'}
        alt={'close'}
      />
    </div>

    <div className={styles.navMenu}>
      {MenuData.map(val => {
        return <Link
          key={val.id}
          href={val.link}
          className={router.pathname === val.link ? styles.navItemActive : styles.navItem}
          onClick={() => cancel()}
        >
          <div className={styles.navItemTxt}>{val.label}</div>
        </Link>
      })}
    </div>
  </Popup>
}

export default MNav
