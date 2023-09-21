import React, { FC } from 'react'
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import { PcEmpty } from "@/components/common/empty";
import { useRouter } from "next/router";
import styles from '@/components/pcRecommend/index.module.scss';
import RecommendList from "@/components/pcRecommend/recommendList/RecommendList";

interface IProps {
  bookList: IBookItem[];
  pageNo: number;
  totalPage: number;
  position: EnumPosition;
}

const PcRecommend: FC<IProps> = ({ bookList, totalPage, pageNo }) => {
  const router = useRouter()
  return <div className={styles.recommendWrap}>
    {bookList.length > 0 ?
      <div className={styles.recommendList}>
        <RecommendList list={bookList}/>
        {/*<FirstList dataSource={moreData.items} />*/}
        {totalPage && totalPage > 1 ? <PaginationCom
          onJumpChange={(page) => {
            router.push(`/recommend/xxx-${page}`)
          }}
          path={`/more/xxx-`}
          pageNo={pageNo}
          totalPage={totalPage}
          isScroll={true}
        /> : null}
      </div> :
      <PcEmpty/>}
  </div>
}

export default PcRecommend;
