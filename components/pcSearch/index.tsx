import React, { FC, useState } from "react";
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import { IBookSearchVo } from "@/typings/browse.interface";
import TagBookList from "@/components/pcTag/tagBookList/TagBookList";
import SearchInput from "@/components/pcSearch/searchInput/SearchInput";
import { useRouter } from "next/router";
import { Toast } from "antd-mobile";
import styles from '@/components/pcSearch/index.module.scss';

interface IProps {
  page: number;
  pages: number;
  sValue: string;
  bookList: IBookSearchVo[];
  isEmpty: boolean;
}

const PcSearch: FC<IProps> = (
  {sValue, bookList = [], isEmpty, pages, page }) => {

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

  return <main className={styles.pcSearchWrap}>
    <SearchInput
      searchValue={searchValue}
      onSearch={onSearch}
      onInput={(e) => {
        // @ts-ignore
        setSearchValue(e.target.value)
      }}
      onCancel={() => setSearchValue('')}
    />

    <TagBookList bookList={bookList} keyword={sValue}/>
    {pages && pages > 1 ?
      <PaginationCom
        path={`/search/`}
        query={`?searchValue=${sValue}`}
        pageNo={page}
        totalPage={pages}
        isScroll={true}
      /> : null}

    { isEmpty && <PcEmpty/>}
  </main>
}

export default PcSearch;
