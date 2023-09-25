import React, { FC, useMemo } from "react";
import styles from '@/components/reader/chapterUnlock/ChapterUnlock.module.scss'
import Link from "next/link";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { INetChapterDetailRes } from "typings/book.interface";
import { useAppSelector } from "@/store";
import useHiveLog from "@/hooks/useHiveLog";
import { isIos } from "@/utils/ownOs";
import ClientConfig from "@/client.config";
import { useAppContext } from "@/components/layout";
import { IBookItem } from "@/typings/home.interface";
import Image from "next/image";

const androidLink = ClientConfig.android.link;

interface IProps {
  chapterInfo: INetChapterDetailRes;
  bookInfo: IBookItem;
}

const ChapterUnlock: FC<IProps> = ({ bookInfo, chapterInfo }) => {
  const [appState] = useAppContext();
  const copyText = useAppSelector(state => state.hive.copyText);
  const clipboard = useAppSelector(state => state.hive.clipboard);
  const HiveLog = useHiveLog();

  const iosLink = useMemo(() => {
    if (Reflect.has(ClientConfig.ios, 'deeplink')) {
      return Reflect.get(ClientConfig.ios, 'deeplink') + copyText
    } else {
      return ClientConfig.ios.link
    }
  }, [copyText]);

  return <div
    style={{ background: `linear-gradient(180deg, transparent 0%, ${appState.background} 20%, ${appState.background})` }}
    className={styles.unlockWrap}>
    <div className={styles.logoBox}>
      <Image
        className={styles.logoIcon}
        width={144}
        height={144}
        src={'/images/logo.png'}
        alt={''}
      />
      <p>解鎖更多章節，馬上下載“{ClientConfig.name}”APP</p>
      <p>獲取此書更多精彩小說內容</p>
    </div>
    <Link rel={'nofollow'} href={isIos(clipboard.ua) ? iosLink : androidLink}>
      <CopyToClipboard text={copyText} onCopy={() => {
        // HiveLog.trackDownload('BookReaderDownloadButton_Click', {
        //   bookId: bookInfo.bookId,
        //   bookName: bookInfo.bookName,
        //   chapterId: chapterInfo.id,
        //   chapterName: chapterInfo.chapterName,
        // })
        // netIpUa(copyText)
      }}>
        <div className={styles.iconBox}>立即下載</div>
      </CopyToClipboard>
    </Link>

  </div>
}

export default ChapterUnlock;
