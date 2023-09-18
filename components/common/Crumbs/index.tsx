import Link from "next/link";
import styles from "@/components/common/Crumbs/index.module.scss";
import React, { FC } from "react";
import { useAppSelector } from "@/store";
import { EnumPosition } from "@/typings/book.interface";
import Image from "next/image";

interface IProps {
  bookName: string;
  bookId?: string;
  chapterName?: string;
  isPc: boolean;
  position: EnumPosition | null;
}

const CrumbsCom: FC<IProps> = ({ position, bookName, bookId, chapterName, isPc }) => {

  // const pos = useAppSelector(state => state.app?.position);

  let pos;
  const _position = pos ?? position;
  return <div className={styles.crumbsWrapBox} style={!isPc ? { width: 0, height: 0, overflow: "hidden" } : {}}>
    <div className={styles.crumbsWrap}>
      <Link href="/" className={styles.crumbsItem}>
        首頁
        <Image
          className={styles.crumbsIcon}
          width={6}
          height={10}
          src={'/images/book/crumbs.png'}
          alt={'>'}
        />
      </Link>

      {_position && _position !== EnumPosition.排行榜 ?
        <Link
          className={styles.crumbsItem}
          href={`/more/${_position}/1`}>
          {EnumPosition[_position]}
          <Image
            className={styles.crumbsIcon}
            width={6}
            height={10}
            src={'/images/book/crumbs.png'}
            alt={'>'}
          />
        </Link> : null}

      {_position === EnumPosition.排行榜 ?
        <Link href={`/rankings`} className={styles.crumbsItem}>
          書籍排名
          <Image
            className={styles.crumbsIcon}
            width={6}
            height={10}
            src={'/images/book/crumbs.png'}
            alt={'>'}
          />
        </Link> : null}

      {chapterName && bookId ? <>
        <Link href={`/book/${bookId}`} className={styles.crumbsItem}>
          {bookName}
          <Image
            className={styles.crumbsIcon}
            width={6}
            height={10}
            src={'/images/book/crumbs.png'}
            alt={'>'}
          />
        </Link>
        <div className={styles.crumbsItemTxt}>{chapterName}</div>
      </> : <div className={styles.crumbsItemTxt}>{bookName}</div>}

    </div>
  </div>
}

export default CrumbsCom;
