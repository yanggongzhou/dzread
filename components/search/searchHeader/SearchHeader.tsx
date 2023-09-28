import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/search/searchHeader/SearchHeader.module.scss";

interface IProps {
  onSearch: () => void;
  onCancel: () => void;
  onInput: (e: Event) => void;
  searchValue: string;
}

const SearchHeader: FC<IProps> = ({ onSearch, searchValue, onCancel, onInput }) => {

  return <header className={styles.searchBox}>
    <Link href="/" className={styles.backBox}>
      <Image
        className={styles.backIcon}
        width={48}
        height={48}
        src={'/images/common/back.png'}
        alt={'<'}
      />
    </Link>

    <div className={styles.searchInputBox}>
      <Image
        onClick={() => onSearch()}
        className={styles.searchIcon}
        width={36}
        height={36}
        src={'/images/search/search.png'}
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
          onInput={onInput}
          className={styles.searchInput}
          placeholder={'请输入书籍名或作者名'}/>
      </form>

      {!!searchValue && <div className={styles.cancelBox} onClick={() => onCancel()}>
        <Image
          className={styles.cancelIcon}
          width={32}
          height={32}
          src={'/images/search/cancel.png'}
          alt={'x'}
        />
      </div>}
    </div>

    <div className={styles.searchBtn} onClick={onSearch}>搜索</div>

  </header>
}

export default SearchHeader;
