import React, { FC } from "react";
import Link from "next/link";
import PcSetting from "@/components/pcReader/slideOperate/Setting";
import { useAppDispatch, useAppSelector } from "@/store";
import styles from "@/components/pcReader/slideOperate/SlideOperate.module.scss";
import { setOperateType } from "@/store/modules/read.module";
import { EOperateType } from "@/typings/reader.interface";
import classNames from "classnames";
import OperateCatalog from "@/components/pcReader/slideOperate/Catalog";
import { IChapterListItem } from "@/typings/book.interface";
import Qrcode from "@/components/pcReader/slideOperate/Qrcode";

interface IProps {
  bookId: string;
  chapterId: string;
  chapterList: IChapterListItem[];
}

const SlideOperate: FC<IProps> = ({ chapterList, bookId, chapterId }) => {

  const copyLinkUrl = `${process.env.WebDomain}/download/?bookId=${bookId}&chapterId=${chapterId}`;

  const operateType = useAppSelector(state => state.read.operateType);
  const dispatch = useAppDispatch();

  const setType = (e: any, operate: EOperateType) => {
    dispatch(setOperateType(operate))
    e.stopPropagation();
  }

  return <div className={styles.operateBox} onClick={(e) => {e.stopPropagation()}}>
    <div className={styles.operate}>
      <Link className={styles.itemBox} href={'/'} target={'_blank'}>首页</Link>
    </div>
    <div className={styles.operate}>
      <Link className={styles.itemBox} href={'/'} target={'_blank'}>书籍详情</Link>
    </div>
    <div className={classNames(styles.operate, operateType === EOperateType.catalog && styles.active)}>
      <div
        className={styles.itemBox}
        onClick={(e) => setType(e, EOperateType.catalog)}>
        目录
      </div>
      {operateType === EOperateType.catalog ? <OperateCatalog bookId={bookId} chapterList={chapterList}/> : null}
    </div>
    <div className={classNames(styles.operate, operateType === EOperateType.setting && styles.active)}>
      <div
        className={styles.itemBox}
        onClick={(e) => setType(e, EOperateType.setting)}>
        设置
      </div>
      {operateType === EOperateType.setting ? <PcSetting/> : null}
    </div>
    <div className={classNames(styles.operate, operateType === EOperateType.qrcode && styles.active)}>
      <div
        className={styles.itemBox}
        onClick={(e) => setType(e, EOperateType.qrcode)}>
        客户端
      </div>
      {operateType === EOperateType.qrcode ? <Qrcode url={copyLinkUrl} /> : null}
    </div>
  </div>
}

export default SlideOperate;
