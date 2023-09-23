import React, { FC, useState } from "react";
import ClientConfig from "@/client.config";
import Image from "next/image";
import styles from "@/components/home/mHeader/MHeader.module.scss";
import classNames from "classnames";
import Link from "next/link";

interface IProps {
}

const MHeader: FC<IProps> = () => {
  const menuData = [
    { id: 1, title: "男生" },
    { id: 2, title: "女生" },
    { id: 3, title: "出版" }
  ]

  const [menuId, setMenuId] = useState(1);

  return <div className={styles.headerBox}>
    <header className={styles.headerContent}>
      <Image
        className={styles.logoBox}
        width={200}
        height={68}
        src={'/images/home/logo-txt.png'}
        alt={ClientConfig.name}
      />
      <button className={styles.downloadBtn}>打开APP</button>
    </header>

    <div className={styles.navContainer}>
      <div className={styles.navMenu}>
        {menuData.map((val) => {
          return <div
            key={val.id}
            className={classNames(styles.navItem, menuId === val.id && styles.active)}
            onClick={() => setMenuId(val.id)}>
            {val.title}
          </div>
        })}
      </div>

      <Link href={'/so'} className={styles.searchBox}>
        <Image
          className={styles.searchIcon}
          width={48}
          height={48}
          src={'/images/home/search.png'}
          alt={''}
        />
      </Link>
    </div>
  </div>
}

export default MHeader;
