import React, { FC } from "react";
import PaginationCom from "@/components/common/paginationCom";
import FirstList from "@/components/common/firstList/FirstList";
import { PcEmpty } from "@/components/common/empty";
import styles from '@/components/pcSearch/index.module.scss'
import { IBookSearchVo } from "@/typings/browse.interface";

interface IProps {
  total: number;
  current: number;
  pages: number;
  sValue: string;
  bookList?: IBookSearchVo[];
  isEmpty: boolean;
}

const PcSearch: FC<IProps> = (
  {sValue, bookList = [], isEmpty, pages, current}) => {


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
