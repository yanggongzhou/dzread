import React, { FC } from 'react';
import { EnumPosition, IBookInfo, IBookItem } from "@/typings/home.interface";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import MRecommendList from "@/components/recommend/mRecommendList/MRecommendList";
import NavBar from "@/components/common/navBar/NavBar";
import DownloadBanner from "@/components/common/downloadBanner/DownloadBanner";
import styles from '@/components/recommend/index.module.scss';

interface IProps {
  bookInfos: IBookInfo[];
  page: number;
  pages: number;
  bookPackageId: number;
}

const MRecommend: FC<IProps> = ({ bookInfos, pages, page, bookPackageId }) => {

  return <main className={styles.moreWrap}>
    <NavBar backHref={'/'} title={"男频精选"}/>
    <DownloadBanner height={'0.1rem'}>
      {bookInfos.length > 0 ?
        <>
          <MRecommendList bookInfos={bookInfos}/>
          {pages && pages > 1 ? <MorePagination
            prevPath={`/recommend/${bookPackageId}/`}
            page={page}
            totalPage={pages}
          /> : null}
        </> : <MEmpty/> }
    </DownloadBanner>
  </main>
}

export default MRecommend;
