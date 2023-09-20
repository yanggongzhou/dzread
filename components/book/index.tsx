import React, { FC, useState } from 'react'
import styles from "@/components/book/index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IBookItem } from "@/typings/home.interface";
import { netIpUa } from "@/server/clientLog";
import { useAppSelector } from "@/store";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useHiveLog from "@/hooks/useHiveLog";

interface IProps {
  bookInfo: IBookItem;
}

const MBook: FC<IProps> = ({ bookInfo }) => {
  const clipboard = useAppSelector(state => state.hive.clipboard)
  const copyText = useAppSelector(state => state.hive.copyText);

  const HiveLog = useHiveLog();
  const {
    bookId,
    bookName,
    introduction
  } = bookInfo;

  const [isShowMore, setIsShowMore] = useState(false);
  const onMore = () => {
    setIsShowMore(true)
  }

  return <div className={styles.detailBox}>
    <Image
      onError={onImgError}
      className={styles.bookCover}
      width={280}
      height={378}
      src={bookInfo.cover}
      placeholder="blur"
      blurDataURL={bookInfo.cover || '/images/defaultBook.png'}
      alt={bookInfo.bookName}
    />

    {bookName ? <h1 className={styles.bookName}>{bookName}</h1> : null}

    {bookInfo?.tags && bookInfo?.tags.length > 0 ? <div className={styles.tagBox}>
      {(bookInfo?.tags || []).map(val => {
        return <div key={val} className={styles.tagItem}>{val}</div>
      })}
    </div> : null}

    <div className={styles.footerBox}>
      <CopyToClipboard text={copyText} onCopy={() => {
        netIpUa(clipboard)
        HiveLog.trackDownload('turnPage_click', { book_ID: bookId, chapter_id: 0 })
      }}>
        <Link className={styles.footerBtn} href={'/xxx'}>
          <Image
            className={styles.playIcon}
            width={48}
            height={48}
            src={'/images/book/play-icon2.png'}
            alt={''}
          />
          <span>play</span>
        </Link>
      </CopyToClipboard>
    </div>

    {introduction ? <div className={styles.introBox}>
      <p className={styles.introTitle}>introduction</p>
      <p className={isShowMore ? styles.introTextMore : styles.introText}>{introduction}</p>
      {!isShowMore ? <div className={styles.introMore} onClick={() => onMore()}>more</div> : null}
    </div> : null}

  </div>
}

export default MBook;
