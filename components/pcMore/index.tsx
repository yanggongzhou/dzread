import React, { FC } from 'react'
import styles from '@/components/pcMore/index.module.scss'
import PcHomeTitle from "@/components/pcHome/homeTitle/HomeTitle";
import { IHomeResItem } from "@/typings/home.interface";
import PaginationCom from "@/components/common/paginationCom";
import Link from "next/link";
import SecondList from "@/components/pcHome/secondList/SecondList";
import { PcEmpty } from "@/components/common/empty";
import Image from "next/image";
import FirstList from "@/components/common/firstList/FirstList";

interface IProps {
  moreData: IHomeResItem;
  pageNo: number;
  pages: number;
}

const PcMore: FC<IProps> = ({ moreData, pages, pageNo }) => {

  return <>
    <div className={styles.moreContent}>

      {moreData?.items && moreData.items.length > 0 ?
        <>
          <PcHomeTitle title={moreData.name} />
          <div className={styles.moreBookList}>
            <FirstList dataSource={moreData.items} />
            {pages && pages > 1 ? <PaginationCom
              path={`/more/${moreData.name}/`}
              pageNo={pageNo}
              totalPage={pages}
              isScroll={true}
            /> : null}
          </div>
        </> : <PcEmpty/>}
    </div>
  </>
}

export default PcMore
