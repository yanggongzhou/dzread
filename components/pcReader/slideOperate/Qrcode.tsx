import React, { FC } from 'react';
import { IChapterListItem } from "@/typings/book.interface";
import styles from '@/components/pcReader/slideOperate/Qrcode.module.scss';
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toast } from "antd-mobile";

interface IProps {
  url: string;
}

const Qrcode: FC<IProps> = ({ url}) => {

  return <div className={styles.qrCodeBox}>
    <p className={styles.intro}>上点众阅读APP，体验流畅阅读</p>
    <QRCode value={url} className={styles.qrCode}/>
    <CopyToClipboard text={url} onCopy={() => {
      Toast.show('复制成功！')
    }}>
      <div className={styles.qrCodeLink}>复制二维码链接</div>
    </CopyToClipboard>
  </div>
}
export default Qrcode;
