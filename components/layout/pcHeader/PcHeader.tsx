import React, { FC } from 'react'
import styles from '@/components/layout/pcHeader/PcHeader.module.scss'
import Image from "next/image";
import ClientConfig from "@/client.config";
import { Popover } from "antd-mobile";
import QRCode from "qrcode.react";
import PcNav from "@/components/layout/pcHeader/PcNav";
import HeaderSearch from "@/components/layout/pcHeader/Search";

interface IProps {

}

const PcSlide: FC = () => {
  return <div className={styles.slideLeft}>
    <Image
      className={styles.slideLogo}
      width={40}
      height={40}
      src={'/images/logo.png'}
      alt={ClientConfig.name}
    />
    <QRCode
      renderAs={"canvas"}
      className={styles.slideQrCode}
      value="'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'"
      />
  </div>
}

const PcHeader: FC<IProps> = () => {

  return <>
    <div className={styles.navWrap}>
      <div className={styles.navContent}>
        <PcNav />

        <HeaderSearch />

        <Popover
          content={<QRCode
            value={'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'}
            className={styles.qrCode}/>
          }
          trigger='click'
          placement='bottom'>
          <div>下载</div>
        </Popover>
      </div>
    </div>
    <div className={styles.navOccupy}/>
    <PcSlide />
  </>
}

export default PcHeader
