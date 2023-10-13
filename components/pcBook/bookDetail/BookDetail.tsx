import React, { FC } from "react";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import Link from "next/link";
import styles from "@/components/pcBook/bookDetail/BookDetail.module.scss";
import { EBookStatus2, IBookInfoItem } from "@/typings/book.interface";
import Breadcrumb from "@/components/common/breadcrumb";

interface IProps {
  book: IBookInfoItem;
}
const PcBookDetail: FC<IProps> = ({ book }) => {
  const data = [
      { title: '首页', link: "/" },
      { title: '小说分类', link: "/browse" },
      { title: '都市小说' },
    ]
  const routerToBook = `/download?${book.bookId}`;

  return <div className={styles.detailBox}>
    <Breadcrumb data={data}/>

    <div className={styles.bookInfo}>
      <Image
        onError={onImgError}
        className={styles.bookCover}
        width={272}
        height={363}
        src={book.coverWap}
        placeholder="blur"
        blurDataURL={book.coverWap || '/images/defaultBook.png'}
        alt={book.bookName}
      />

      <div className={styles.rightBox}>
        <h1>
          <Link href={routerToBook} className={styles.bookName}>
            {book.bookName}
          </Link>
        </h1>
        <Link href={routerToBook} className={styles.bookAuthor}>
          { `${book.author} · ` } { book.status === EBookStatus2.连载 ? <span style={{ color: "#FF4614" }}>连载中</span> : "已完结" }
        </Link>
        <Link href={routerToBook} className={styles.bookUtime}>
          <span style={{ color: "#FF4614", marginRight: '0.15rem' }}>最新章节：第{book.totalChapterNum}章</span>
          更新时间：{book.lastChapterUtime}
        </Link>

        {book?.bookTypeThree ? <Link className={styles.tagsBox} href={routerToBook}>
          {book?.bookTypeThree.map(val => {
            return <span key={val.id} className={styles.tagItem}>{val.name}</span>
          })}
        </Link> : null}

        <Link href={routerToBook} className={styles.intro}>
          {book.introduction}
        </Link>

        <div className={styles.numBox}>
          <div className={styles.numItem}>{book.bookScore} <span>分</span></div>
          <div className={styles.numItem}>{book.totalReadNum } <span>{book.totalReadNumUnit }</span></div>
          <div className={styles.numItem}>{book.wordSize} <span>{book.wordSizeUnit}</span></div>
        </div>

      </div>

    </div>

  </div>
}

export default PcBookDetail;
