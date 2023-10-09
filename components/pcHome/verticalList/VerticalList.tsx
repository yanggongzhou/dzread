import React, { FC } from "react";
import { IRankVo } from "@/typings/home.interface";
import styles from "@/components/pcHome/verticalList/VerticalList.module.scss";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IRankBookDataVo } from "@/typings/ranking.interface";

interface IProps {
  rankVos: IRankVo[];
}
const VerticalItem: FC<{ list: IRankBookDataVo[] }> = ({ list }) => {

  return <div className={styles.verticalItemBox}>
    {list.map((book, bookInd) => {
      const routerToBookInfo = `/book/${book.bookId}`

      return <div key={book.bookId} className={styles.itemBox}>
        <Link href={routerToBookInfo} className={styles.imageBox}>
          <Image
            className={styles.bookImage}
            onError={onImgError}
            placeholder="blur"
            blurDataURL={book.coverWap || '/images/defaultBook.png'}
            width={60}
            height={80}
            src={book.coverWap}
            alt={book.bookName}
          />
        </Link>
        <Link href={routerToBookInfo}>
          <i className={bookInd > 2 ? styles.bookIndex : styles.bookRow1}>{bookInd + 1}</i>
        </Link>

        <div className={styles.rightColumn}>
          <h3 className={styles.bookName}>
            <Link href={routerToBookInfo}>{book.bookName}</Link>
          </h3>
          <Link href={routerToBookInfo} className={styles.viewCountDisplay}>
              <span>{book.num} </span> 影响力值
          </Link>
          <div className={styles.tagBox}>
            {(book?.threeTypeTag || []).map(val => {
              return <div key={val} className={styles.tagItem}>{val}</div>
            })}
          </div>
        </div>
      </div>
    })}
  </div>
}

const VerticalList: FC<IProps> = ({ rankVos = [] }) => {

  return <div className={styles.verticalListBox}>
    { rankVos.map(rank => {
      return <VerticalItem key={1} list={rank.bookInfos.slice(0, 3)}/>
    }) }
  </div>
}


export default VerticalList;
