import React, { FC } from 'react';
import { EnumPosition, IBookItem } from "@/typings/home.interface";
import Link from "next/link";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/recommend/pagination/MorePagination";
import Image from "next/image";
import MRecommendList from "@/components/recommend/mRecommendList/MRecommendList";
import styles from '@/components/recommend/index.module.scss';
import NavBar from "@/components/recommend/navBar/NavBar";

interface IProps {
  bookList: IBookItem[];
  pageNo: number;
  totalPage: number;
  position: EnumPosition;
}

const MRecommend: FC<IProps> = ({ bookList = [], totalPage, pageNo, position }) => {

  const back = () => {

  }
  return <div className={styles.moreWrap}>
    <NavBar backHref={'/'} title={"男频精选"}/>
    {bookList.length > 0 ?
      <>
        <MRecommendList list={bookList}/>
        {totalPage && totalPage > 1 ? <MorePagination
          prevPath={`/recommend/ssxx-`}
          page={pageNo}
          totalPage={totalPage}
        /> : null}
      </> : <MEmpty/> }
  </div>
}

export default MRecommend;
