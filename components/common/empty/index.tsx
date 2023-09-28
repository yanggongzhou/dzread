import React, { FC } from "react";
import styles from '@/components/common/empty/index.module.scss'
import Image from "next/image";

export const PcEmpty: FC = () => {

  return <div className={styles.emptyBox}>
    <Image
      className={styles.emptyIcon}
      width={320}
      height={240}
      src={'/images/common/empty.png'}
      placeholder="blur"
      blurDataURL={'/images/common/empty.png'}
      alt={'没找到内容'}
    />
    <div className={styles.emptyIntro}>
      没找到内容
    </div>
  </div>
}

export const MEmpty: FC = () => {
  return <div className={styles.mEmptyBox}>
    <Image
      className={styles.emptyIcon}
      width={320}
      height={320}
      src={'/images/common/empty.png'}
      placeholder="blur"
      blurDataURL={'/images/common/empty.png'}
      alt={'没找到内容'}
    />
    <div className={styles.emptyIntro}>
      暂时没有数据，去看看其他内容吧
    </div>
  </div>
}
