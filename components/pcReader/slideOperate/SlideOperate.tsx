import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import PcSetting from "@/components/pcReader/slideOperate/Setting";
import { useAppDispatch, useAppSelector } from "@/store";
import styles from "@/components/pcReader/slideOperate/SlideOperate.module.scss";
import { setOperateType } from "@/store/modules/read.module";
import { EOperateType, EThemeType } from "@/typings/reader.interface";
import classNames from "classnames";
import OperateCatalog from "@/components/pcReader/slideOperate/Catalog";
import Qrcode from "@/components/pcReader/slideOperate/Qrcode";
import Image from "next/image";
import { IChapterInfo } from "@/typings/book.interface";

interface IProps {
  bookId: string;
  chapterId: string;
  chapterList: IChapterInfo[];
  theme: EThemeType;
}

const SlideOperate: FC<IProps> = ({ chapterList, bookId, chapterId, theme }) => {
  const [scrollY, setScrollY] = useState(0);

  const onscroll = () => {
    setScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    }
  }, []);

  const copyLinkUrl = `${process.env.WebDomain}/download/?bookId=${bookId}&chapterId=${chapterId}`;
  const operateType = useAppSelector(state => state.read.operateType);
  const dispatch = useAppDispatch();

  const setType = (e: any, operate: EOperateType) => {
    dispatch(setOperateType(operate))
    e.stopPropagation();
  }

  return <div className={styles.operateBox} onClick={(e) => {e.stopPropagation()}}>
    <div className={styles.operate}>
      <Link className={styles.itemBox} style={{ backgroundColor: theme }} href={'/'} target={'_blank'}>
        <Image
          className={styles.itemIcon}
          width={24}
          height={24}
          src={'/images/reader/home.png'}
          alt={''}
        />
        <span>首页</span>
      </Link>
    </div>
    <div className={styles.operate}>
      <Link className={styles.itemBox} style={{ backgroundColor: theme }} href={`/book/${bookId}`}>
        <Image
          className={styles.itemIcon}
          width={24}
          height={24}
          src={'/images/reader/book.png'}
          alt={''}
        />
        <span>书籍详情</span>
      </Link>
    </div>
    <div className={classNames(styles.operate, operateType === EOperateType.catalog && styles.active)}>
      <div
        className={styles.itemBox}
        style={{ backgroundColor: theme }}
        onClick={(e) => setType(e, EOperateType.catalog)}>
        <Image
          className={styles.itemIcon}
          width={24}
          height={24}
          src={'/images/reader/chapter.png'}
          alt={''}
        />
        <span>目录</span>
      </div>
      {operateType === EOperateType.catalog ? <OperateCatalog bookId={bookId} chapterList={chapterList}/> : null}
    </div>
    <div className={classNames(styles.operate, operateType === EOperateType.setting && styles.active)}>
      <div
        className={styles.itemBox}
        style={{ backgroundColor: theme }}
        onClick={(e) => setType(e, EOperateType.setting)}>
        <Image
          className={styles.itemIcon}
          width={24}
          height={24}
          src={'/images/reader/setting.png'}
          alt={''}
        />
        <span>设置</span>
      </div>
      {operateType === EOperateType.setting ? <PcSetting/> : null}
    </div>
    <div className={classNames(styles.operate, operateType === EOperateType.qrcode && styles.active)}>
      <div
        className={styles.itemBox}
        style={{ backgroundColor: theme }}
        onClick={(e) => setType(e, EOperateType.qrcode)}>
        <Image
          className={styles.itemIcon}
          width={24}
          height={24}
          src={'/images/reader/client.png'}
          alt={''}
        />
        <span>客户端</span>
      </div>
      {operateType === EOperateType.qrcode ? <Qrcode url={copyLinkUrl} /> : null}
    </div>

    <div className={styles.operate} style={{ marginTop: '0.4rem', visibility: scrollY < 200 ? "hidden" : "inherit" }}>
      <div
        className={styles.itemBox}
        style={{ backgroundColor: theme }}
        onClick={() => document.body.scrollIntoView({ behavior: "smooth", start: "start" })}>
        <Image
          className={styles.itemIcon}
          width={24}
          height={24}
          src={'/images/reader/back-top.png'}
          alt={''}
        />
        <span>回到顶部</span>
      </div>
    </div>
  </div>
}

export default SlideOperate;
