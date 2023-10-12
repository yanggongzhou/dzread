import React, { FC } from "react";
import styles from "@/components/pcBrowse/index.module.scss";
import PaginationCom from "@/components/common/paginationCom";
import { IBookSearchVo, IBrowseParams, ITypeOneVo } from "@/typings/browse.interface";
import { PcEmpty } from "@/components/common/empty";
import PcCapsuleTabs from "@/components/pcBrowse/PcCapsuleTabs";
import { useRouter } from "next/router";
import BrowseList from "@/components/pcBrowse/browseList/BrowseList";
import Breadcrumb from "@/components/common/breadcrumb";

interface IProps {
  page: number;
  pages: number;
  books: IBookSearchVo[];
  typeOneVoList: ITypeOneVo[];
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
  params: IBrowseParams;
}

const PcBrowse: FC<IProps> = (
  {
    page,
    pages,
    books,
    typeOneVoList,
    statusMark,
    wordType,
    params,
  }
) => {

  const router = useRouter();
  const data = [
    { title: '首页', link: "/home" },
    { title: '小说分类', link: "/browse/0" },
    { title: '都市小说' },
  ]
  return <main className={styles.browseWrap}>
    <Breadcrumb data={data}/>
    <div className={styles.container}>
      <PcCapsuleTabs
        wordType={wordType}
        statusMark={statusMark}
        typeOneVoList={typeOneVoList}
        params={params}
      />

      <div className={styles.browseContent}>

        <div className={styles.browseTitle}>
          都市小说
        </div>

        {books.length === 0 ? <PcEmpty/> :
          <BrowseList books={books}/>
        }

        {pages && pages > 1 ?
          <PaginationCom
            path={`/browse/${params?.id || 'null'}-${params?.cid || 'null'}-${params?.tid || 'null'}-${params?.status || 'null'}-${params?.wordType || 'null'}/`}
            pageNo={page}
            totalPage={pages}
            isScroll={true}/> : null}
      </div>
    </div>

  </main>
}

export default PcBrowse;
