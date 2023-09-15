import React, { FC } from "react";
import styles from '@/components/download/index.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useAppSelector } from "@/store";
import ClientConfig from "@/client.config";
import Link from "next/link";
import Image from "next/image";
import { netIpUa } from "@/server/clientLog";
import useHiveLog from "@/hooks/useHiveLog";

interface IProps {
  isApple: boolean;
}

const MDownload: FC<IProps> = ({ isApple }) => {
  const clipboard = useAppSelector(state => state.hive.clipboard)
  const copyText = useAppSelector(state => state.hive.copyText);
  const shopLink =  useAppSelector(state => {
    if (isApple) {
      return ClientConfig.ios.deeplink + state.hive.copyText;
    }
    return ClientConfig.android.link;
  });

  const HiveLog = useHiveLog();

  return <div className={styles.downloadWrap}>
    <div className={styles.downloadHead}>
      DramaBox - 追剧，电视，精彩故事
    </div>
    <Image
      className={styles.downloadCover}
      width={440}
      height={440}
      src={'/images/download/cover.png'}
      placeholder="blur"
      blurDataURL={'/images/download/cover.png'}
      alt={ClientConfig.name}
    />
    <Link href={shopLink}>
      <CopyToClipboard text={copyText} onCopy={() => {
        netIpUa(clipboard)
        HiveLog.trackDownload('turnPage_click', { book_ID: clipboard.bid, chapter_id: clipboard.cid })
      }}>
        <div className={styles.downloadBtn}>
          <Image
            className={styles.downloadBtnIcon}
            width={48}
            height={48}
            src={isApple ? '/images/download/ios.png' : '/images/download/android.png'}
            alt={ClientConfig.name}
          />
          <span>下载</span>
        </div>
      </CopyToClipboard>
    </Link>
    <div className={styles.downloadContent}>
      在通勤、午餐时间或长时间工作学习后想放鬆吗？
      那就来试试我们的APP吧！
      热播爽剧追不停，随时随地嗨翻天！
      从独立电影到屡获殊荣的电视剧，我们为您提供多样的选择和持续更新的作品，总有精彩的内容吸引你！
    </div>
  </div>
}

export default MDownload;
