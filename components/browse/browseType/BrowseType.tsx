import React, { FC, useState } from "react";
import { Tabs } from "antd-mobile";
import Link from "next/link";
import Image from "next/image";
import { ITypeOneVo } from "@/typings/browse.interface";
import styles from "@/components/browse/browseType/BrowseType.module.scss";
import { useAppDispatch, useAppSelector } from "@/store";
import { setIsShowBrowse } from "@/store/modules/app.module";
import classNames from "classnames";

interface IProps {
  typeOneVoList: ITypeOneVo[];
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
  isShowBox: boolean;
}

const BrowseType: FC<IProps> = (
  {
    typeOneVoList,
    statusMark,
    wordType,
    isShowBox
  }
) => {

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
          activeKey={String('xsxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')}
        >
          {typeOneVoList[0].typeTwoVos.map((item) => {
            return <Tabs.Tab
              key={item.cid}
              title={
                <Link href={`/browse/${item.cid}`}>
                  {item.title}
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
        { statusMark.map(val => {
          return (
            <Link
              key={val.markId}
              href={'/browse/0/1'}
              className={classNames(styles.item, styles.active)}>
              {val.title}
            </Link>
          )
        }) }
      </div>
      <div className={styles.statusBox}>
        { wordType.map(val => {
          return (
            <Link
              key={val.type}
              href={'/browse/0/1'}
              className={classNames(styles.item, styles.active)}>
              {val.name}
            </Link>
          )
        }) }
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
