import React, { FC } from "react";
import { Mask } from "antd-mobile";
import Image from "next/image";
import Link from "next/link";
import ImageCover from "@/components/common/image/ImageCover";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/store";
import { setCatalogVisible } from "@/store/modules/read.module";
import { INetCatalogRes } from "@/typings/catalog.interface";
import styles from '@/components/reader/modalCatalog/ModalCatalog.module.scss';
import { EIsCharge } from "@/typings/book.interface";

interface IProps {
  bookId: string;
  chapterId: string;
  catalogData: INetCatalogRes;
}

const ModalCatalog: FC<IProps> = ({ bookId, catalogData, chapterId }) => {
  const catalogVisible = useAppSelector(state => state.read.catalogVisible);
  const dispatch = useAppDispatch();
  const bookHref = `/book/${bookId}`;
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
          src={catalogData.coverWap}
          width={90}
          height={118}
          alt={catalogData.bookName}
        />
        <div className={styles.introBox}>
          <Link href={bookHref} className={styles.bookName}>{catalogData.bookName}</Link>
          <Link href={bookHref} className={styles.author}>作者：{catalogData.author}</Link>
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
        { catalogData.chapterList.map(item => {
          return <Link
            key={item.chapterId}
            replace
            onClick={() => dispatch(setCatalogVisible(false))}
            href={`/chapter/${bookId}/${item.chapterId}`}
            className={styles.catalogItem}>
            <span className={classNames(styles.itemTxt, item.isCharge == EIsCharge.收费章节 && styles.lockTxt, item.chapterId === chapterId && styles.active)}>{ item.chapterName }</span>
            {item.isCharge == EIsCharge.收费章节 ? <Image
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
