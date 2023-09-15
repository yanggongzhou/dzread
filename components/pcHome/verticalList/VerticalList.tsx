import React, { FC } from "react";
import { IBookItem } from "@/typings/home.interface";
import styles from "@/components/pcHome/verticalList/VerticalList.module.scss";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";

interface IProps {
  list: IBookItem[];
}
const VerticalItem: FC<IProps> = ({ list }) => {

  return <div className={styles.verticalItemBox}>
    {list.map((book, bookInd) => {
      const routerToBookInfo = `/film/${book.bookId}`

      return <div key={book.bookId} className={styles.itemBox}>
        <Link href={routerToBookInfo} className={styles.imageBox}>
          <Image
            className={styles.bookImage}
            onError={onImgError}
            placeholder="blur"
            blurDataURL={book.cover || '/images/defaultBook.png'}
            width={60}
            height={80}
            src={book.cover}
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
              <span>{book.viewCount} </span> 影响力值
          </Link>
          <div className={styles.tagBox}>
            {(book?.tags || []).map(val => {
              return <div key={val} className={styles.tagItem}>{val}</div>
            })}
          </div>
        </div>
      </div>
    })}
  </div>
}

const VerticalList: FC<IProps> = ({ list }) => {

  return <div className={styles.verticalListBox}>
    <VerticalItem key={1} list={list}/>
    <VerticalItem key={2} list={list}/>
    <VerticalItem key={3} list={list}/>
  </div>
}


export default VerticalList;
