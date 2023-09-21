import React, { FC, useState } from "react";
import ClientConfig from "@/client.config";
import Image from "next/image";
import styles from "@/components/home/mHeader/MHeader.module.scss";

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
        width={40}
        height={40}
        src={'/images/logo.png'}
        alt={ClientConfig.name}
      />
      <button className={styles.downloadBtn}>下载</button>
    </header>

    <div className={styles.navMenu}>
      {menuData.map((val) => {
        return <div key={val.id} className={menuId === val.id ? styles.navItemActive : styles.navItem} onClick={() => setMenuId(val.id)}>
          {val.title}
        </div>
      })}
    </div>
  </div>
}

export default MHeader;
