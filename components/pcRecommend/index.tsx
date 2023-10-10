import React, { FC } from 'react';
import { IBookInfo } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import RecommendList from "@/components/pcRecommend/recommendList/RecommendList";
import styles from '@/components/pcRecommend/index.module.scss';

interface IProps {
  bookInfos: IBookInfo[];
  page: number;
  pages: number;
  bookPackageId: number;
}

const PcRecommend: FC<IProps> = ({ bookInfos, pages, page, bookPackageId }) => {

  return <main className={styles.recommendWrap}>
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
