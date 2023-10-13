import React, { FC } from 'react';
import { EChannelCode, IBookInfo } from "@/typings/home.interface";
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
  code: EChannelCode;
}

const MRecommend: FC<IProps> = ({ bookInfos, pages, page, bookPackageId, code }) => {

  return <main className={styles.moreWrap}>
    <NavBar backHref={'/'} title={code == EChannelCode.男生 ? "男生精选" : "女生精选" }/>
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
