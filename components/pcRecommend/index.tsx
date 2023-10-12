import React, { FC } from 'react';
import { EChannelCode, IBookInfo } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import RecommendList from "@/components/pcRecommend/recommendList/RecommendList";
import styles from '@/components/pcRecommend/index.module.scss';

interface IProps {
  bookInfos: IBookInfo[];
  page: number;
  pages: number;
  bookPackageId: number;
  code: EChannelCode;
}

const PcRecommend: FC<IProps> = ({ bookInfos, pages, page, bookPackageId, code }) => {

  return <main className={styles.recommendWrap}>
    {bookInfos.length > 0 ?
      <div className={styles.recommendList}>
        <RecommendList bookInfos={bookInfos}/>
        {pages && pages > 1 ? <PaginationCom
          path={`/recommend/${code}-${bookPackageId}/`}
          pageNo={page}
          totalPage={pages}
          isScroll={true}
        /> : null}
      </div> :
      <PcEmpty/>}
  </main>
}

export default PcRecommend;
