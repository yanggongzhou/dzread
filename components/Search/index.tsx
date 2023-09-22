import React, { FC, useState } from "react";
import styles from '@/components/Search/index.module.scss'
import { IBookItem } from "typings/home.interface";
import Link from "next/link";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";
import Image from "next/image";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/more/pagination/MorePagination";
import BookList from "@/components/common/bookList/BookList";

interface IProps {
  current: number;
  pages: number;
  sValue: string;
  bookList?: IBookItem[];
  isEmpty: boolean;
}

const MSearch: FC<IProps> = ({ sValue, bookList = [], isEmpty, current, pages }) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState(sValue);

  const onSearch = () => {
    if (!searchValue) {
      Toast.show('请输入书籍名或作者名');
      return;
    }
    // 失去焦点，移动端用来收起软键盘
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    router.replace({ pathname: '/search', query: { searchValue } })
  }

  return <div className={styles.searchWrap}>
    <div className={styles.searchBox}>
      <Link href="/">
        <Image
          className={styles.backIcon}
          width={48}
          height={48}
          src={'/images/common/search/backIcon.png'}
          alt={''}
        />
      </Link>

      <div className={styles.searchInputBox}>
        <Image
          onClick={() => onSearch()}
          className={styles.searchIcon}
          width={48}
          height={48}
          src={'/images/search/searchIcon.png'}
          alt={''}
        />

        <form className={styles.searchForm} action="javascript: return true;" autoComplete="on">
          <input
            type="search"
            value={searchValue}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                e.preventDefault();
                onSearch()
              }
            }}
            onInput={(e) => {
              // @ts-ignore
              setSearchValue(e.target.value)
            }}
            className={styles.searchInput}
            placeholder={'请输入书籍名或作者名'}/>
        </form>

        {!!searchValue && <div className={styles.cancelBox} onClick={() => setSearchValue('')}>
          <Image
            className={styles.cancelIcon}
            width={48}
            height={48}
            src={'/images/common/search/search-cancel.png'}
            alt={''}
          />
        </div>}
      </div>
    </div>
    {bookList?.length > 0 ? <div className={styles.searchList}>
      <BookList dataSource={bookList}/>

      {pages && pages > 1 ?
        <MorePagination
          prevPath={`/search/`}
          query={`?searchValue=${sValue}`}
          page={current}
          totalPage={pages}
        /> : null }
    </div> : null}

    {isEmpty ? <MEmpty/> : null}
  </div>
}

export default MSearch;