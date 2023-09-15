import React, { FC } from "react";
import styles from '@/components/pcDownload/index.module.scss';
import PcStore from "@/components/pcDownload/store/PcStore";
import Image from "next/image";

interface IProps {
}

const PcDownload: FC<IProps> = () => {

  return <div className={styles.downloadWrap}>
    <div className={styles.downloadHeader}>
      <h3 className={styles.downloadTitle}>DramaBox - 追剧，电视，精彩故事</h3>
      <div className={styles.downloadContent}>
        在通勤、午餐时间或长时间工作学习后想放鬆吗？
        那就来试试我们的APP吧！
        热播爽剧追不停，随时随地嗨翻天！
        从独立电影到屡获殊荣的电视剧，我们为您提供多样的选择和持续更新的作品，总有精彩的内容吸引你！
      </div>
    </div>

    <div className={styles.downloadMain}>
      <Image
        className={styles.downloadCover}
        width={520}
        height={520}
        src={'/images/download/p-cover.png'}
        placeholder="blur"
        blurDataURL={'/images/download/p-cover.png'}
        alt={''}
      />
      <PcStore />
    </div>
  </div>
}

export default PcDownload;
