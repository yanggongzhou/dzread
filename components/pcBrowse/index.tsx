import React, { FC, useMemo } from "react";
import PaginationCom from "@/components/common/paginationCom";
import { IBookSearchVo, IBrowseParams, ITypeOneVo } from "@/typings/browse.interface";
import { PcEmpty } from "@/components/common/empty";
import PcCapsuleTabs from "@/components/pcBrowse/PcCapsuleTabs";
import BrowseList from "@/components/pcBrowse/browseList/BrowseList";
import Breadcrumb from "@/components/common/breadcrumb";
import styles from "@/components/pcBrowse/index.module.scss";

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

  const browseTitle = useMemo(() => {
    if (params.tid && params.tid !== "0" && params.id && params.id !== "0" && params.cid && params.cid !== "0") {
      const oneItem = typeOneVoList.find(one => one.categoryId == params.id);
      if (oneItem) {
        const twoItem = oneItem.typeTwoVos.find(two => two.cid == params.cid);
        if (twoItem) {
          const threeItem = twoItem.categoryMark.find(item => item.markId === params.tid);
          return threeItem ? threeItem.title + '小说' : '全部小说'
        }
        return '全部小说'
      }
      return '全部小说'
    }
    if (params.cid && params.cid !== "0" && params.id && params.id !== "0") {
      const oneItem = typeOneVoList.find(one => one.categoryId == params.id);
      if (oneItem) {
        const twoItem = oneItem.typeTwoVos.find(two => two.cid == params.cid);
        return twoItem ? twoItem.title + '小说' : '全部小说'
      }
      return '全部小说'
    }
    return '全部小说'
  }, [typeOneVoList, params]);

  const data = [
    { title: '首页', link: "/" },
    { title: '小说分类', link: "/browse/" },
    { title: browseTitle },
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
          {browseTitle}
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
