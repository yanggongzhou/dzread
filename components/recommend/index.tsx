import React, { FC } from 'react';
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import MRecommendList from "@/components/recommend/mRecommendList/MRecommendList";
import styles from '@/components/recommend/index.module.scss';
import NavBar from "@/components/recommend/navBar/NavBar";
import DownloadBanner from "@/components/common/downloadBanner/DownloadBanner";

interface IProps {
  bookList: IBookItem[];
  pageNo: number;
  totalPage: number;
  position: EnumPosition;
}

const MRecommend: FC<IProps> = ({ bookList = [], totalPage, pageNo, position }) => {

  return <div className={styles.moreWrap}>
    <NavBar backHref={'/'} title={"男频精选"}/>
    <DownloadBanner height={10}>
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
  </div>
}

export default MRecommend;
