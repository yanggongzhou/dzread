import React, { FC } from 'react'
import styles from '@/components/more/index.module.scss'
import HomeTitle from "@/components/home/homeTitle/HomeTitle";
import { ColumnNameRoute, IHomeResItem } from "@/typings/home.interface";
import Link from "next/link";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/more/pagination/MorePagination";
import FirstItem from "@/components/home/firstItem/FirstItem";
import Image from "next/image";

interface IProps {
  moreData: IHomeResItem;
  pageNo: number;
  pages: number;
}

const MMore: FC<IProps> = ({ moreData, pages, pageNo }) => {

  return <div className={styles.moreWrap}>

    <div className={styles.crumbsBox}>
      <Link href="/" className={styles.crumbsActiveItem}>
        首页
      </Link>
      <Image
        className={styles.crumbsIcon}
        width={16}
        height={16}
        src={'/images/home/pc-more.png'}
        alt={'>'}
      />
      <div className={styles.crumbsItem}>{moreData.name}</div>
    </div>
    {moreData.items && moreData.items.length > 0 ?
      <>
        <HomeTitle title={moreData?.name || ''} />
        <FirstItem dataSource={moreData.items}/>
        {pages && pages > 1 ? <MorePagination
          prevPath={`/more/${ColumnNameRoute[moreData.name]}/`}
          page={pageNo}
          totalPage={pages}
        /> : null}
      </> : <MEmpty/> }
  </div>
}

export default MMore;
