import React, { FC } from 'react';
import Link from "next/link";
import styles from '@/components/pcReader/slideOperate/Catalog.module.scss';
import Image from "next/image";
import { setOperateType } from "@/store/modules/read.module";
import { EOperateType } from "@/typings/reader.interface";
import { useAppDispatch } from "@/store";
import { EIsCharge, IChapterInfo } from "@/typings/book.interface";

interface IProps {
  bookId: string;
  chapterList: IChapterInfo[];
}

const OperateCatalog: FC<IProps> = ({ bookId, chapterList = []}) => {

  const dispatch = useAppDispatch();

  return <div className={styles.catalogBox}>
    <h4>目录</h4>
    <Image
      onClick={() => dispatch(setOperateType(EOperateType.normal))}
      className={styles.cancelIcon}
      width={32}
      height={32}
      src={'/images/download/cancel.png'}
      alt={'x'}
    />
    <div className={styles.linkBox}>
      { chapterList.map(val => {
        return <Link
          key={val.chapterId}
          className={styles.linkItem}
          href={`/chapter/${bookId}/${val.chapterId}`}
          replace
          onClick={() => dispatch(setOperateType(EOperateType.normal))}>
          { val.chapterName }
          {val.isCharge === EIsCharge.收费章节 ? <Image
            className={styles.itemIcon}
            width={24}
            height={24}
            src={'/images/book/lock.png'}
            alt={'>'}
          /> : null}
        </Link>
      })}
    </div>
  </div>
}
export default OperateCatalog;
