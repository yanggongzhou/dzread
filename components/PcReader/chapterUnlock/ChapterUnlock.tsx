import React, { FC } from "react";
import styles from './ChapterUnlock.module.scss'
import QRCode from "qrcode.react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Toast } from "antd-mobile";
import useHiveLog from "@/hooks/useHiveLog";
import Image from "next/image";

interface IProps {
  bid: string;
  cid: string;
  lastFreeChapterId: string;
}

const PcChapterUnlock: FC<IProps> = ({ bid, cid, lastFreeChapterId }: IProps) => {
  const HiveLog = useHiveLog();

  const copyLinkUrl = `${process.env.WebDomain}/download/?bookId=${bid}&lastFreeChapterId=${lastFreeChapterId}&chapterId=${cid}`;
  return <div className={styles.unlockWrap}>
    <div className={styles.logoBox}>
      <Image
        className={styles.appLock}
        width={24}
        height={24}
        src={'/images/pline/appLock.png'}
        alt={''}
      />
      <p className={styles.text1}>未解鎖章節</p>
      <p className={styles.text2}>想要觀看更多精彩內容</p>
      <p className={styles.text3}>下載 APP 解鎖更多精彩章節</p>
      <div className={styles.qrCodeWrap}>
        <div className={styles.qrCodeBox}>
          <QRCode value={copyLinkUrl} className={styles.qrCode}/>
          <p className={styles.qrCodeIntro}>掃碼或復製鏈接到手機瀏覽器進行下載</p>
          <CopyToClipboard text={copyLinkUrl} onCopy={() => {
            HiveLog.track('ssr_copyLink', { link: copyLinkUrl })
            Toast.show('复制成功！')
          }}>
            <div className={styles.qrCodeLink}>點擊復製鏈接</div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  </div>
}

export default PcChapterUnlock;
