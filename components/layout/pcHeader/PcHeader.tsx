import React, { FC, useEffect, useState } from 'react'
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

  const [scrollY, setScrollY] = useState(0);

  const onscroll = () => {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    }
  }, []);


  return <div className={styles.slideLeftBox}>
    <div className={styles.slideLeft}>
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

    {scrollY > 200 ? <div
      className={styles.itemBox}
      onClick={() => document.body.scrollIntoView({ behavior: "smooth", start: "start" })}>
      <Image
        className={styles.itemIcon}
        width={24}
        height={24}
        src={'/images/reader/back-top.png'}
        alt={''}
      />
      <span>回到顶部</span>
    </div> : null}
  </div>
}

const PcHeader: FC<IProps> = () => {

  const router = useRouter();

  return <>
    <div className={styles.navWrap} style={router.pathname !== '/' ? { backgroundColor: '#F7F7F8'} : {}}>
      <div className={styles.navContent}>
        <PcNav />
        <div className={styles.rightBox}>
          { router.pathname.includes('/search') ? null : <HeaderSearch/>}
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
