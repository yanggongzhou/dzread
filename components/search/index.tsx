import React, { FC, useState } from "react";
import { IBookItem } from "typings/home.interface";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import MTagBookList from "@/components/tag/tagBookList/MTagBookList";
import SearchHeader from "@/components/search/searchHeader/SearchHeader";
import styles from '@/components/search/index.module.scss';

interface IProps {
  current: number;
  pages: number;
  sValue: string;
  bookList?: IBookItem[];
  isEmpty: boolean;
}

const WapSearch: FC<IProps> = ({ sValue, bookList = [], isEmpty, current, pages }) => {
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

  return <main className={styles.searchWrap}>
    <SearchHeader
      searchValue={searchValue}
      onSearch={onSearch}
      onInput={(e) => {
        // @ts-ignore
        setSearchValue(e.target.value)
      }}
      onCancel={() => setSearchValue('')}
    />

    {bookList?.length > 0 ? <div className={styles.searchList}>

      <div className={styles.noSearchTxt}>
        暂无搜索结果，为您推荐以下热门书籍：
      </div>

      <MTagBookList keyword={sValue} dataSource={bookList}/>

      {pages && pages > 1 ?
        <div className={styles.footerBox}>
          <MorePagination
            prevPath={`/search/`}
            query={`?searchValue=${sValue}`}
            page={current}
            totalPage={pages}
          />
        </div> : null}
    </div> : null}


    {isEmpty ? <MEmpty/> : null}
  </main>
}

export default WapSearch;
