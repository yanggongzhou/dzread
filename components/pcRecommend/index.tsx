import React, { FC } from 'react';
import { EChannelCode, IBookInfo } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import RecommendList from "@/components/pcRecommend/recommendList/RecommendList";
import styles from '@/components/pcRecommend/index.module.scss';
import Breadcrumb from "@/components/common/breadcrumb";

interface IProps {
  bookInfos: IBookInfo[];
  page: number;
  pages: number;
  bookPackageId: number;
  name: string;
}

const PcRecommend: FC<IProps> = ({ bookInfos, pages, page, bookPackageId, name }) => {
  const data = [
    { title: '首页', link: "/" },
    { title: name },
  ];

  return <main className={styles.recommendWrap}>
    <Breadcrumb data={data}/>
    {bookInfos.length > 0 ?
      <div className={styles.recommendList}>
        <RecommendList bookInfos={bookInfos}/>
        {pages && pages > 1 ? <PaginationCom
          path={`/recommend/${bookPackageId}/`}
          pageNo={page}
          totalPage={pages}
          isScroll={true}
        /> : null}
      </div> :
      <PcEmpty/>}
  </main>
}

export default PcRecommend;
