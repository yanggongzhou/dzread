import React, { FC } from 'react'
import styles from '@/components/layout/pcHeader/PcHeader.module.scss'
import Image from "next/image";
import ClientConfig from "@/client.config";
import QRCode from "qrcode.react";
import PcNav from "@/components/layout/pcHeader/PcNav";
import HeaderSearch from "@/components/layout/pcHeader/Search";
import { useRouter } from "next/router";

interface IProps {

}

const PcSlide: FC = () => {
  return <div className={styles.slideLeft}>
    <Image
      className={styles.slideLogo}
      width={64}
      height={66}
      src={'/images/logo.png'}
      alt={ClientConfig.name}
    />

    <div className={styles.qrCodeBox}>
      <Image
        className={styles.qrCodeIcon}
        width={40}
        height={40}
        src={'/images/home/qrcode.png'}
        alt={ClientConfig.name}
      />
      <span>手机版</span>

      <div className={styles.slideBox}>
        <p className={styles.slideTitle}>{ClientConfig.name}手机版</p>
        <QRCode
          renderAs={"canvas"}
          className={styles.slideQrCode}
          value="'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'"
        />
      </div>
    </div>
  </div>
}

const PcHeader: FC<IProps> = () => {

  const router = useRouter();

  return <>
    <div className={styles.navWrap}>
      <div className={styles.navContent}>
        <PcNav />
        <div className={styles.rightBox}>
          <HeaderSearch />
          <div className={styles.downloadBtn}>
            <span>下载</span>
            <div className={styles.downloadPop}>
              <div className={styles.popContent}>
                <div className={styles.popTitle}>手机版</div>
                <p>扫码下载手机APP</p>
                <QRCode
                  renderAs={"canvas"}
                  value={'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'}
                  className={styles.qrCode}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {router.pathname !== '/chapter/[bookId]/[chapterId]' ? <PcSlide/> : null}
  </>
}

export default PcHeader
