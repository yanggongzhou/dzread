import React, { FC } from "react";
import ImageCover from "@/components/common/image/ImageCover";
import ClientConfig from "@/client.config";
import styles from "@/components/reader/topGuide/TopGuide.module.scss";

interface IProps {
  bookId: string;
  cover: string;
  bookName: string;
}

const TopGuide: FC<IProps> = ({ bookId, bookName, cover }) => {
  return <div className={styles.topGuide}>
    <ImageCover
      href={`/book/${bookId}`}
      className={styles.topGuideImg}
      src={cover}
      width={128}
      height={170}
      alt={bookName}
    />
    <div className={styles.topGuideInfo}>
      <p>上{ClientConfig.name}APP</p>
      <p>体验流畅阅读</p>
    </div>
    <button className={styles.downloadBtn}>立即打开</button>
  </div>
}

export default TopGuide;
