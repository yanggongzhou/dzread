import React, { FC, useEffect, useState } from 'react'
import NavBar from "@/components/common/navBar/NavBar";
import BookDetail from "@/components/book/bookDetail";
import BrowseList from "@/components/home/browseList";
import FirstChapter from "@/components/book/firstChapter/FirstChapter";
import CatalogBox from "@/components/book/catalogBox";
import Image from "next/image";
import { IBookInfoItem, IChapterInfo } from "@/typings/book.interface";
import { setCatalogVisible } from "@/store/modules/read.module";
import { useAppDispatch } from "@/store";
import BookTabs from "@/components/book/bookTabs/BookTabs";
import { getSessionBook, removeSessionBook, setSessionBook } from "@/utils/storage/sessionStorages";
import classNames from "classnames";
import { IBookSearchVo } from "@/typings/browse.interface";
import { netBookRe } from "@/server/home";
import styles from "@/components/book/index.module.scss";
import { INetChapterDetailRes } from "@/typings/chapter.interface";

interface IProps {
  book: IBookInfoItem;
  recommendBook: IBookSearchVo[];
  chapters: IChapterInfo[];
  chapterInfo: INetChapterDetailRes;
}

const WapBook: FC<IProps> = ({ book, chapters, recommendBook, chapterInfo }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState(recommendBook);

  const [isShowTitle, setIsShowTitle] = useState(false);
  const onScroll = (e: Event) => {
    if (window.scrollY > 37) {
      setIsShowTitle(true);
    }
    if (window.scrollY <= 37) {
      setIsShowTitle(false);
    }
  }
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(getSessionBook());
    dispatch(setCatalogVisible(false))
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      removeSessionBook();
    }
  }, []);

  const onSwap = async () => {
    setLoading(true);
    const { bookList = [] } = await netBookRe({});
    if (bookList.length > 0) {
      setList(bookList);
    }
    setLoading(false);
  }

  const tabList = [
    { value: 'book_info', label: '书籍信息', child: <>

        <FirstChapter bookInfo={book} chapterInfo={chapterInfo}/>

        <div className={styles.recommendBox}>
          <div className={styles.columnHead}>
            <h3 className={styles.columnTitle}>{'男生精选'}</h3>
            {list.length < 3 ? null : <button className={styles.columnLink} onClick={() => onSwap()}>
              <span>换一换</span>
              <Image
                className={classNames(styles.linkIcon, loading && styles.linkIconAni)}
                width={24}
                height={24}
                src={'/images/book/refresh.png'}
                alt={''}
              />
            </button>}
          </div>

          <BrowseList list={list}/>
        </div>
      </>
    },
    { value: 'catalog_info', label: '目录', child: <CatalogBox bookId={book.bookId} chapters={chapters}/>},
  ]

  return <main className={styles.bookWrap}>
    <NavBar backHref={'/'} title={isShowTitle ? book.bookName : ''}/>
    <BookDetail book={book} chapterId={chapters[0].chapterId}/>
    <BookTabs
      activeIndex={activeIndex}
      tabList={tabList}
      onChange={(ind) => {
        setSessionBook(String(ind));
        setActiveIndex(ind)
      }}
    />
  </main>
}

export default WapBook;
