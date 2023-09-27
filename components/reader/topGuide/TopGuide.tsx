import React, { FC } from "react";
import ImageCover from "@/components/common/image/ImageCover";
import { IBookItem } from "@/typings/home.interface";
import styles from "@/components/reader/topGuide/TopGuide.module.scss";

interface IProps {
  bookInfo: IBookItem;
}

const TopGuide: FC<IProps> = ({ bookInfo }) => {
  return <div className={styles.topGuide}>
    <ImageCover
      href={`/book/${bookInfo.bookId}`}
      className={styles.topGuideImg}
      src={bookInfo.cover}
      width={128}
      height={170}
      alt={bookInfo.bookName}
    />
    <div className={styles.topGuideInfo}>
      <p>上点众阅读APP</p>
      <p>体验流畅阅读</p>
    </div>
    <button className={styles.downloadBtn}>立即打开</button>
  </div>
}

export default TopGuide;
