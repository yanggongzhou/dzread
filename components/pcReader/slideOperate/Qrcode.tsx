import React, { FC } from 'react';
import { IChapterListItem } from "@/typings/book.interface";
import styles from '@/components/pcReader/slideOperate/Qrcode.module.scss';
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toast } from "antd-mobile";
import Image from "next/image";
import { setOperateType } from "@/store/modules/read.module";
import { EOperateType } from "@/typings/reader.interface";
import { useAppDispatch } from "@/store";

interface IProps {
  url: string;
}

const Qrcode: FC<IProps> = ({ url}) => {
  const dispatch = useAppDispatch();
  return <div className={styles.qrCodeBox}>

    <Image
      onClick={() => dispatch(setOperateType(EOperateType.normal))}
      className={styles.cancelIcon}
      width={32}
      height={32}
      src={'/images/download/cancel.png'}
      alt={'x'}
    />
    <CopyToClipboard text={url} onCopy={() => {
      Toast.show('复制成功！')
    }}>
      <QRCode value={url} className={styles.qrCode}/>
    </CopyToClipboard>

    <p className={styles.intro}>扫码下载/打开点众阅读 <br/> 在手机上继续阅读本书</p>
  </div>
}
export default Qrcode;
