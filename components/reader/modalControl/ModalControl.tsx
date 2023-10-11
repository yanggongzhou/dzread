import React, { FC } from 'react'
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { setCatalogVisible, setControlVisible, setFontSize, setTheme } from "@/store/modules/read.module";
import { EThemeType } from "@/typings/reader.interface";
import { useAppDispatch, useAppSelector } from "@/store";
import { INetChapterDetailRes } from "@/typings/chapter.interface";
import styles from '@/components/reader/modalControl/ModalControl.module.scss';

interface IProps {
  chapterInfo: INetChapterDetailRes;
}

const ModalControl: FC<IProps> = ({ chapterInfo }) => {

  const backgroundList = [
    EThemeType.default1,
    EThemeType.default2,
    EThemeType.default3,
    EThemeType.default4,
  ]

  const dispatch = useAppDispatch();
  const controlVisible = useAppSelector(state => state.read.controlVisible);
  const theme = useAppSelector(state => state.read.theme);
  const fontSize = useAppSelector(state => state.read.fontSize);

  const openCatalog = () => {
    dispatch(setCatalogVisible(true));
    dispatch(setControlVisible(false));
  }
  const addSize = () => {
    if (fontSize < 30) {
      dispatch(setFontSize(fontSize + 2))
    }
  }
  const cutSize = () => {
    if (fontSize > 16) {
      dispatch(setFontSize(fontSize - 2))
    }
  }

  return <div
    className={styles.controlWrap}
    style={{ bottom: controlVisible ? 0 : '-4rem' }}>

    <div className={styles.controlSize}>
      <div className={styles.sizeTitle}>字號</div>
      <div className={styles.sizeBox}>
        <div className={classNames(styles.size, fontSize <= 16 && styles.sizeDisabled)} onClick={() => cutSize()}>
          缩小
        </div>
        <div className={styles.sizeDefault}>{fontSize}</div>
        <div className={classNames(styles.size, fontSize >= 30 && styles.sizeDisabled)} onClick={() => addSize()}>
          放大
        </div>
      </div>
    </div>

    <div className={styles.controlBg}>
      <div className={styles.bgTitle}>背景</div>
      <div className={styles.bgBox}>
        {backgroundList.map(backgroundColor => {
          return <div
            key={backgroundColor}
            className={classNames(styles.bg, theme === backgroundColor && styles.bgActive)}
            style={{ backgroundColor }}
            onClick={() => dispatch(setTheme(backgroundColor))}>
            {theme === backgroundColor ? <Image
              className={styles.bgIcon}
              width={48}
              height={48}
              src={'/images/reader/wap-checked.png'}
              alt={''}
            /> : null}
          </div>
        })}
      </div>
    </div>

    <div className={styles.chapterBtnBox}>
      {chapterInfo.preChapterId ?
        <Link
          className={styles.chapterBtn}
          href={`/chapter/${chapterInfo.bookId}/${chapterInfo.preChapterId}`}
          replace>
          <Image
            className={styles.backIcon}
            width={48}
            height={48}
            src={'/images/common/back.png'}
            alt={''}
          />
          <span>上一章</span>
        </Link> : <div className={styles.pageItem}>
          <Image
            className={styles.backIcon}
            width={36}
            height={36}
            src={'/images/common/back.png'}
            alt={''}
          />
          <span>上一章</span>
        </div>}

      <div
        onClick={() => openCatalog()}
        className={styles.catalogItem}>
        <Image
          className={styles.tabIcon}
          width={36}
          height={36}
          src={'/images/reader/catalog.png'}
          alt={''}
        />
        <span>目录</span>
      </div>

      {chapterInfo.nextChapterId ?
        <Link
          className={styles.chapterBtn}
          href={`/chapter/${chapterInfo.bookId}/${chapterInfo.nextChapterId}`} replace>
          <span>下一章</span>
          <Image
            className={styles.nextIcon}
            width={36}
            height={36}
            src={'/images/common/back.png'}
            alt={''}
          />
        </Link> : <div className={styles.pageItem}>
          <span>下一章</span>
          <Image
            className={styles.nextIcon}
            width={36}
            height={36}
            src={'/images/common/back.png'}
            alt={''}
          />
        </div>}
    </div>

  </div>
}
export default ModalControl;
