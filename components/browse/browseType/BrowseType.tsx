import React, { FC, useEffect, useState } from "react";
import { Tabs } from "antd-mobile";
import Link from "next/link";
import Image from "next/image";
import { IBrowseTypes } from "@/typings/browse.interface";
import styles from "@/components/browse/browseType/BrowseType.module.scss";
import { useAppDispatch, useAppSelector } from "@/store";
import { setIsShowBrowse } from "@/store/modules/app.module";
import classNames from "classnames";

interface IProps {
  types: IBrowseTypes[];
  typeTwoId: number;
  isShowBox: boolean;
}

const BrowseType: FC<IProps> = ({ typeTwoId, types, isShowBox }) => {

  const isShowBrowse = useAppSelector(state => state.app.isShowBrowse);
  const dispatch = useAppDispatch()
  const [isShowMore, setIsShowMore] = useState(false);

  return <div
    style={isShowBox && isShowBrowse ? { position: "sticky" } : { position: "fixed" }}
    className={styles.dropdownBox}>
    <div
      style={isShowBrowse ? { display: "block" } : { display: "none" }}
      className={styles.browseBox}
    >
      <div className={styles.tabBox}>
        <Tabs
          className={isShowMore ? styles.tabContentMore : styles.tabContent}
          activeLineMode={'fixed'}
          activeKey={String(typeTwoId)}
        >
          {types.map((item) => {
            const typeName = item.id === 0 ? '全部' : item.name;
            return <Tabs.Tab
              key={item.id}
              title={
                <Link href={`/browse/${item.id}`}>
                  {typeName}
                </Link>
              }/>
          })}
        </Tabs>
        <Image
          onClick={() => setIsShowMore(!isShowMore)}
          className={classNames(styles.moreIcon, isShowMore && styles.moreIconActive)}
          width={24}
          height={24}
          src={'/images/browse/extend.png'}
          alt={'more'}
        />
      </div>
      <div className={styles.statusBox}>
        <Link
          style={{ color: "#FF375F", borderColor: 'inherit' }}
          className={styles.item} href={'/'}>全部</Link>
        <Link className={styles.item} href={'/browse/0/1'}>完结</Link>
        <Link className={styles.item} href={'/'}>连载</Link>
      </div>
      <div className={styles.statusBox}>
        <Link
          style={{ color: "#FF375F", borderColor: 'inherit' }}
          className={styles.item} href={'/'}>全部</Link>
        <Link className={styles.item} href={'/'}>50万字以下</Link>
        <Link className={styles.item} href={'/'}>50-100万字</Link>
        <Link className={styles.item} href={'/'}>100-300万字</Link>
        <Link className={styles.item} href={'/'}>300万字以上</Link>
      </div>
    </div>


    <div className={styles.dropdownTitle} onClick={() => {
      dispatch(setIsShowBrowse(true));
    }}>
      <span>全部</span>
      <Image
        className={styles.titleIcon}
        width={40}
        height={40}
        src={'/images/browse/extend.png'}
        alt={'more'}
      />
    </div>
  </div>
}

export default BrowseType;
