import React, { FC } from "react";
import ImageCover from "@/components/common/image/ImageCover";
import ClientConfig from "@/client.config";
import { INetChapterDetailRes } from "@/typings/chapter.interface";
import styles from "@/components/reader/topGuide/TopGuide.module.scss";

interface IProps {
  chapterInfo: INetChapterDetailRes;
}

const TopGuide: FC<IProps> = ({ chapterInfo }) => {
  return <div className={styles.topGuide}>
    <ImageCover
      href={`/book/${chapterInfo.bookId}`}
      className={styles.topGuideImg}
      src={chapterInfo.coverWap}
      width={128}
      height={170}
      alt={chapterInfo.bookName}
    />
    <div className={styles.topGuideInfo}>
      <p>上{ClientConfig.name}APP</p>
      <p>体验流畅阅读</p>
    </div>
    <button className={styles.downloadBtn}>立即打开</button>
  </div>
}

export default TopGuide;
