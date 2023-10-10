import React, { FC } from 'react';
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import { useRouter } from "next/router";
import RecommendList from "@/components/pcRecommend/recommendList/RecommendList";
import styles from '@/components/pcRecommend/index.module.scss';

interface IProps {
  bookList: IBookItem[];
  pageNo: number;
  totalPage: number;
  position: EnumPosition;
}

const PcRecommend: FC<IProps> = ({ bookList, totalPage, pageNo }) => {

  const router = useRouter();

  return <main className={styles.recommendWrap}>
    {bookList.length > 0 ?
      <div className={styles.recommendList}>
        <RecommendList list={bookList}/>
        {totalPage && totalPage > 1 ? <PaginationCom
          path={`/more/xxx-`}
          pageNo={pageNo}
          totalPage={totalPage}
          isScroll={true}
        /> : null}
      </div> :
      <PcEmpty/>}
  </main>
}

export default PcRecommend;
