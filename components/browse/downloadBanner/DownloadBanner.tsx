import React, { FC, useEffect, useRef, useState } from "react";
import styles from "@/components/browse/downloadBanner/DownloadBanner.module.scss";
import Image from "next/image";

interface IProps {
  isFooter: boolean;
}

const DownloadBanner: FC<IProps> = ({ isFooter }) => {
  return <>
    <div className={isFooter ? styles.downloadFooter : styles.downloadBox}>
      <div className={styles.downloadContent}>
        <Image
          className={styles.logoIcon}
          width={144}
          height={144}
          src={'/images/logo.png'}
          alt={''}
        />
        <div className={styles.intro}>
          <p className={styles.text1}>{isFooter ? '安装点众阅读客户端' : '下载点众阅读，体验流畅阅读'}</p>
          {isFooter ? <p className={styles.text2}>查看更多优质好书</p> : null}
        </div>

        {isFooter ? <button className={styles.btn}>下载</button> : null}
      </div>
    </div>
  </>
}

export default DownloadBanner;
