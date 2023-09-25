import React, { FC } from "react";
import styles from "@/components/pcDownload/store/PcStore.module.scss";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store";
import { ELanguage } from "@/typings/home.interface";

interface IProps {
}

const PcStore: FC<IProps> = () => {

  const router = useRouter();

  const copyUrl = useAppSelector(state => {
    const bookId = state.hive.clipboard.bid;
    return `${process.env.WebDomain}/download?bookId=${bookId}&path=${process.env.WebDomain + router.asPath}`
  })

  return <div className={styles.storeBox}>
    <h3 className={styles.storeTitle}>DramaBox App</h3>
    <p className={styles.storeSub}>进入短剧世界</p>
    <div className={styles.storeContent}>
      <QRCode value={copyUrl} className={styles.qrCode}/>
      <p className={styles.copyTxt}>请使用手机扫描二维码下载。
        或复制链接，用手机浏览器打开后下载。</p>
      <CopyToClipboard text={copyUrl} onCopy={() => {
        Toast.show('已复制，请在手机浏览器中打开链接下载应用程序')
      }}>
        <p className={styles.clickToCopy}>点击复制链接</p>
      </CopyToClipboard>
    </div>
  </div>
}

export default PcStore;
