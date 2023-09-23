import React, { FC } from 'react';
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import MRecommendList from "@/components/recommend/mRecommendList/MRecommendList";
import NavBar from "@/components/common/navBar/NavBar";
import DownloadBanner from "@/components/common/downloadBanner/DownloadBanner";
import styles from '@/components/recommend/index.module.scss';

interface IProps {
  bookList: IBookItem[];
  pageNo: number;
  totalPage: number;
  position: EnumPosition;
}

const MRecommend: FC<IProps> = ({ bookList = [], totalPage, pageNo, position }) => {

  return <main className={styles.moreWrap}>
    <NavBar backHref={'/'} title={"男频精选"}/>
    <DownloadBanner height={'0.1rem'}>
      {bookList.length > 0 ?
        <>
          <MRecommendList list={bookList}/>
          {totalPage && totalPage > 1 ? <MorePagination
            prevPath={`/recommend/ssxx-`}
            page={pageNo}
            totalPage={totalPage}
          /> : null}
        </> : <MEmpty/> }
    </DownloadBanner>
  </main>
}

export default MRecommend;
