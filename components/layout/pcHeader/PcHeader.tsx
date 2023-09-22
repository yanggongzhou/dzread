import React, { FC } from 'react'
import styles from '@/components/layout/pcHeader/PcHeader.module.scss'
import Image from "next/image";
import ClientConfig from "@/client.config";
import { Popover } from "antd-mobile";
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
      width={40}
      height={40}
      src={'/images/logo.png'}
      alt={ClientConfig.name}
    />
    <Popover
      trigger={"hover"}
      content={<QRCode
        renderAs={"canvas"}
        className={styles.slideQrCode}
        value="'https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/components.html#resize-manager'"
      />}
      placement='left'>
      <div className={styles.qrCodeBox}>
        <Image
          className={styles.qrCodeIcon}
          width={40}
          height={40}
          src={'/images/home/qrcode.png'}
          alt={ClientConfig.name}
        />
        <span>手机版</span>
      </div>
    </Popover>
  </div>
}

const PcHeader: FC<IProps> = () => {

  const router = useRouter();

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
    {router.pathname !== '/chapter/[bookId]/[chapterId]' ? <PcSlide/> : null}
  </>
}

export default PcHeader
