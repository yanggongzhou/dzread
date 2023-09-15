import React, { FC, useEffect, useRef } from "react";
import styles from "@/components/browse/index.module.scss";
import { IBookItem } from "@/typings/home.interface";
import { Tabs } from "antd-mobile";
import Link from "next/link";
import MorePagination from "@/components/more/pagination/MorePagination";
import DropMenu from "@/components/browse/detail/DropMenu";
import { IBrowseTypes } from "@/typings/browse.interface";
import { useRouter } from "next/router";
import { MEmpty } from "@/components/common/empty";
import FirstItem from "@/components/home/firstItem/FirstItem";

interface IProps {
  bookList: IBookItem[];
  types: IBrowseTypes[];
  pageNo: number;
  pages: number;
  typeTwoId: number;
}

const MBrowse: FC<IProps> = ({ bookList, pageNo, pages, typeTwoId, types }) => {
  const browseRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (browseRef.current && Reflect.has(browseRef.current, "scrollTop")) {
      Reflect.set(browseRef.current, "scrollTop", 0)
    }
  }, [router])
  return (<div className={styles.browseBox} id='browse_box'>

    <div className={styles.tabBox}>
      <Tabs
        className={styles.tabContent}
        activeLineMode={'fixed'}
        activeKey={String(typeTwoId)}
      >
        {types.map((item) => {
          const typeName = item.id === 0 ? '全部' : item.name;
          return <Tabs.Tab title={<Link href={`/browse/${item.id}`}>
              {typeName}
            </Link>}
            key={item.id}/>
        })}
      </Tabs>
      <DropMenu types={types} typeTwoId={typeTwoId}/>
    </div>

    {bookList.length > 0 ? <div className={styles.browseContent}>
      <div className={styles.browseContent2} ref={browseRef}>
        <FirstItem dataSource={bookList} />
        {pages && pages > 1 ? <MorePagination
          prevPath={`/browse/${typeTwoId}/`}
          page={pageNo}
          totalPage={pages}
        /> : null}
      </div>
    </div> : <MEmpty />}
  </div>)
}

export default MBrowse;
