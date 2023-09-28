import React, { FC } from "react";
import styles from './PcSearch.module.scss'
import { IBookItem } from "typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import FirstList from "@/components/common/firstList/FirstList";
import { useRouter } from "next/router";
import { PcEmpty } from "@/components/common/empty";

interface IProps {
  total: number;
  current: number;
  pages: number;
  sValue: string;
  bookList?: IBookItem[];
  isEmpty: boolean;
}

const PcSearch: FC<IProps> = (
  {sValue, bookList = [], isEmpty, pages, current}) => {

  const router = useRouter();

  return <div className={styles.pcSearchWrap}>
    <div className={styles.pcSearchBox}>
      <FirstList dataSource={bookList}/>
    </div>

    {pages && pages > 1 ?
      <PaginationCom
        path={`/search/`}
        query={`?searchValue=${sValue}`}
        pageNo={current}
        totalPage={pages}
        isScroll={true}
      /> : null}

    { isEmpty && <PcEmpty/>}
  </div>
}

export default PcSearch;
