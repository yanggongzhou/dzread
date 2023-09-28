import React, { FC } from "react";
import { IChapterListItem } from "typings/book.interface";
import { IBookItem } from "@/typings/home.interface";
import { Mask } from "antd-mobile";
import Image from "next/image";
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCatalogVisible } from "@/store/modules/read.module";
import styles from '@/components/reader/modalCatalog/ModalCatalog.module.scss';

interface IProps {
  chapterId: string;
  chapterList: IChapterListItem[];
  bookInfo: IBookItem;
}

const ModalCatalog: FC<IProps> = ({ bookInfo, chapterList, chapterId }) => {
  const catalogVisible = useAppSelector(state => state.read.catalogVisible);
  const dispatch = useAppDispatch();
  const bookHref = `/book/${bookInfo.bookId}`;
  return <>
    <Mask
      visible={catalogVisible}
      onMaskClick={() => dispatch(setCatalogVisible(false))}
      color='rgba(0,0,0,0.65)'
    />
    <div
      style={{ bottom: catalogVisible ? 0 : '-12rem' }}
      className={styles.catalogBox}>
      <div className={styles.bookBox}>
        <ImageCover
          href={bookHref}
          className={styles.bookCover}
          src={bookInfo.cover}
          width={90}
          height={118}
          alt={bookInfo.bookName}
        />
        <div className={styles.introBox}>
          <Link href={bookHref} className={styles.bookName}>{bookInfo.bookName}</Link>
          <Link href={bookHref} className={styles.author}>作者：{bookInfo.author}</Link>
        </div>
        <Link className={styles.moreIconBox} href={bookHref} replace>
          <Image
            className={styles.moreIcon}
            width={24}
            height={24}
            src={'/images/home/link.png'}
            alt={''}
          />
        </Link>
      </div>

      <div className={styles.list}>
        { chapterList.map(item => {
          return <Link
            replace
            onClick={() => dispatch(setCatalogVisible(false))}
            href={`/chapter/${bookInfo.bookId}/${item.id}`}
            key={item.id}
            className={styles.catalogItem}>
            <span className={classNames(styles.itemTxt, item.isCharge && styles.lockTxt, item.id === chapterId && styles.active)}>{ item.chapterName }</span>
            {item.isCharge ? <Image
              className={styles.itemIcon}
              width={36}
              height={36}
              src={'/images/book/lock.png'}
              alt={''}
            /> : null }
          </Link>
        })}
      </div>
      <div className={styles.downloadBox}>
        <button className={styles.downloadBtn}>打开点众阅读APP阅读本书</button>
      </div>
    </div>
  </>
}

export default ModalCatalog;
