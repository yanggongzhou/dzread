import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/pcSearch/searchInput/SearchInput.module.scss";

interface IProps {
  onSearch: () => void;
  onCancel: () => void;
  onInput: (e: Event) => void;
  searchValue: string;
}

const SearchInput: FC<IProps> = ({ onSearch, searchValue, onCancel, onInput }) => {

  return <header className={styles.searchBox}>

    <div className={styles.searchInputBox}>
      <Image
        onClick={() => onSearch()}
        className={styles.searchIcon}
        width={24}
        height={24}
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
          width={20}
          height={20}
          src={'/images/search/cancel.png'}
          alt={'x'}
        />
      </div>}
    </div>

    <div className={styles.searchBtn} onClick={onSearch}>搜索</div>

  </header>
}

export default SearchInput;
