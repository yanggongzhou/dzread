import React, { FC } from 'react'
import Link from "next/link";
import { INetChapterDetailRes } from "@/typings/book.interface";
import Image from "next/image";
import styles from '@/components/reader/control/Control.module.scss';
import classNames from "classnames";
import { setFontSize, setTheme } from "@/store/modules/read.module";
import { EThemeType } from "@/typings/reader.interface";
import { useAppDispatch, useAppSelector } from "@/store";

interface IProps {
  bookId: string;
  visible: boolean;
  chapterInfo: INetChapterDetailRes;
  theme: EThemeType;
  fontSize: number;
}

const Control: FC<IProps> = (
  {
    bookId,
    visible,
    chapterInfo,
    theme,
    fontSize,
  }) => {

  const backgroundList = [
    EThemeType.default1,
    EThemeType.default2,
    EThemeType.default3,
    EThemeType.default4,
    EThemeType.default5,
  ]
  const dispatch = useAppDispatch();

  const addSize = () => {
    if (fontSize < 30){
      dispatch(setFontSize(fontSize + 2))
    }
  }
  const cutSize = () => {
    if (fontSize > 16){
      dispatch(setFontSize(fontSize - 2))
    }
  }

  return <div
    className={styles.controlWrap}
    style={{
      bottom: visible ? 0 : '-4rem',
    }}>

    <div className={styles.controlSize}>
      <div className={styles.sizeTitle}>字號</div>
      <div className={styles.sizeBox}>
        <div className={classNames(styles.size, fontSize <= 16 && styles.sizeDisabled)} onClick={() => cutSize()}>
          A -
        </div>
        <div className={styles.sizeDefault}>{fontSize}</div>
        <div className={classNames(styles.size, fontSize >= 30 && styles.sizeDisabled)} onClick={() => addSize()}>
          A +
        </div>
      </div>
    </div>
    <div className={styles.controlBg}>
      <div className={styles.bgTitle}>背景</div>
      <div className={styles.bgBox}>
        { backgroundList.map(backgroundColor => {
          return <div
            key={backgroundColor}
            className={classNames(styles.bg, theme === backgroundColor && styles.bgActive )}
            style={{ backgroundColor }}
            onClick={() => dispatch(setTheme(backgroundColor)) }/>
        }) }
      </div>
    </div>

    <div className={styles.chapterBtnBox}>
      {chapterInfo.preChapter && chapterInfo.preChapter.id ?
        <Link
          className={styles.chapterBtn}
          href={`/chapter/${bookId}/${chapterInfo.preChapter?.id}`}
          replace>
        上一章
      </Link> : <div className={styles.pageItem}>上一章</div>}

      <Link
        className={styles.catalogItem}
        href={`/catalog/${bookId}/${Math.ceil(chapterInfo.chapterIndex / 18)}`}>
        <Image
          className={styles.tabIcon}
          width={44}
          height={44}
          src={'/images/reader/catalog.png'}
          alt={''}
        />
        <span className={styles.tabLabel}>目录</span>
      </Link>

      {chapterInfo.nextChapter && chapterInfo.nextChapter.id ?
        <Link
          className={styles.chapterBtn}
          href={`/chapter/${bookId}/${chapterInfo.nextChapter?.id}`} replace>
          下一章
        </Link> : <div className={styles.pageItem}>下一章</div>}
    </div>

  </div>
}
export default Control;
