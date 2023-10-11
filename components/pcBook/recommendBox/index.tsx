import React, { FC } from "react";
import styles from "@/components/pcBook/recommendBox/index.module.scss";
import Link from "next/link";
import { onImgError } from "@/components/common/image/ImageCover";
import { IBookSearchVo } from "@/typings/browse.interface";
import Image from "next/image";

interface IProps {
  list: IBookSearchVo[];
}
const RecommendBox: FC<IProps> = ({ list }) => {

  return <div className={styles.reBox}>
    {list.map(item => {
      return <div key={item.bookId} className={styles.browseItem}>
        <Link className={styles.imgBox} href={`/book/${item.bookId}`}>
          <Image
            onError={onImgError}
            className={styles.imgItem}
            width={272}
            height={363}
            src={item.coverWap}
            placeholder="blur"
            blurDataURL={item.coverWap || '/images/defaultBook.png'}
            alt={item.bookName}
          />
        </Link>
        <Link className={styles.bookName} href={`/book/${item.bookId}`}>{item.bookName}</Link>
      </div>
    })}
  </div>
}

export default RecommendBox;
