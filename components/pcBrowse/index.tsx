import React, { FC } from "react";
import styles from "@/components/pcBrowse/index.module.scss";
import { IBookItem } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import { IBrowseTypes } from "@/typings/browse.interface";
import { PcEmpty } from "@/components/common/empty";
import PcCapsuleTabs from "@/components/pcBrowse/PcCapsuleTabs";
import FirstList from "@/components/common/firstList/FirstList";
import { useRouter } from "next/router";

interface IProps {
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
}

const PcBrowse: FC<IProps> = ({ bookList = [], pageNo, pages, typeTwoId, types }) => {
  const data = [
    { id: 1, title: "男生", children: types },
    { id: 2, title: "女生", children: types },
    { id: 3, title: "出版", children: types }
  ]
  const router = useRouter();

  return <div className={styles.browseWrap}>

    <PcCapsuleTabs data={data} typeTwoId={typeTwoId}/>

    <div className={styles.browseContent}>

      <div className={styles.browseTitle}>
        都市小说
      </div>

      {bookList.length === 0 ? <PcEmpty/> :
        <FirstList dataSource={bookList}/>}

      {pages && pages > 1 ?
        <PaginationCom
          path={`/browse/${typeTwoId}/`}
          pageNo={pageNo}
          totalPage={pages}
          isScroll={true}/> : null}
    </div>
  </div>
}

export default PcBrowse;
