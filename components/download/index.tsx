import React, { FC } from "react";
import styles from '@/components/download/index.module.scss'
import ClientConfig from "@/client.config";
import Link from "next/link";
import Image from "next/image";
import { netIpUa } from "@/server/clientLog";
import useHiveLog from "@/hooks/useHiveLog";
import NavBar from "@/components/common/navBar/NavBar";

interface IProps {
  isApple: boolean;
}

const MDownload: FC<IProps> = ({ isApple }) => {
  const HiveLog = useHiveLog();

  return <main className={styles.downloadWrap}>
    <NavBar backHref={'/'} title={ClientConfig.name}/>
    <Image
      className={styles.downloadCover}
      width={100}
      height={100}
      src={'/images/logo.png'}
      alt={ClientConfig.name}
    />
    <h1>{ClientConfig.name}</h1>
    <p>好看到停不下来</p>
    <div className={styles.footerContainer}>
      <button className={styles.downloadBtn}>立即下载</button>
      <Link className={styles.downloadContent} href={'/'}>
        打开{ClientConfig.name}
        <Image
          className={styles.icon}
          width={24}
          height={24}
          src={'/images/home/link.png'}
          alt={ClientConfig.name}
        />
      </Link>
    </div>
  </main>
}

export default MDownload;
