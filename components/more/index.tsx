import React, { FC } from 'react'
import styles from '@/components/more/index.module.scss'
import { ColumnNameRoute, INetHomeItem } from "@/typings/home.interface";
import Link from "next/link";
import { MEmpty } from "@/components/common/empty";
import MorePagination from "@/components/more/pagination/MorePagination";
import Image from "next/image";
import MFirstList from "@/components/home/firstList/FirstList";

interface IProps {
  moreData: INetHomeItem;
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
        <MFirstList dataSource={moreData.items}/>
        {pages && pages > 1 ? <MorePagination
          prevPath={`/more/${ColumnNameRoute[moreData.name]}/`}
          page={pageNo}
          totalPage={pages}
        /> : null}
      </> : <MEmpty/> }
  </div>
}

export default MMore;
