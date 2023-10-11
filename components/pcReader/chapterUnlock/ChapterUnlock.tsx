import React, { FC } from "react";
import QRCode from "qrcode.react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Modal, Toast } from "antd-mobile";
import styles from '@/components/pcReader/chapterUnlock/ChapterUnlock.module.scss';

interface IProps {
  bookId: string;
  chapterId: string;
}

const PcChapterUnlock: FC<IProps> = ({ bookId, chapterId }: IProps) => {
  // const HiveLog = useHiveLog();

  const copyLinkUrl = `${process.env.WebDomain}/download/?bookId=${bookId}&chapterId=${chapterId}`;
  return <div className={styles.unlockBox}>
    <button
      className={styles.downloadBtn}
      onClick={() => {
        Modal.show({
          content: (<div className={styles.qrCodeBox}>
            <p className={styles.intro}>上点众阅读APP，体验流畅阅读</p>
            <QRCode value={copyLinkUrl} className={styles.qrCode}/>
            <CopyToClipboard text={copyLinkUrl} onCopy={() => {
              // HiveLog.track('ssr_copyLink', { link: copyLinkUrl })
              Toast.show('复制成功！')
            }}>
              <div className={styles.qrCodeLink}>复制二维码链接</div>
            </CopyToClipboard>
          </div>),
          closeOnMaskClick: true,
          showCloseButton: true,
        })
      }}
    >下载点众阅读APP，看后续精彩内容</button>
  </div>
}

export default PcChapterUnlock;
