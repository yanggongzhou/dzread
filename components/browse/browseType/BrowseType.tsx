import React, { FC, useState } from "react";
import { Tabs } from "antd-mobile";
import Link from "next/link";
import Image from "next/image";
import { IBrowseParams, ITypeTwoVo } from "@/typings/browse.interface";
import { useAppDispatch, useAppSelector } from "@/store";
import { setIsShowBrowse } from "@/store/modules/app.module";
import classNames from "classnames";
import styles from "@/components/browse/browseType/BrowseType.module.scss";

interface IProps {
  typeTwoVos: ITypeTwoVo[];
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
  isShowBox: boolean;
  params: IBrowseParams;
}

const BrowseType: FC<IProps> = (
  {
    typeTwoVos,
    statusMark,
    wordType,
    isShowBox,
    params
  }
) => {
  const isShowBrowse = useAppSelector(state => state.app.isShowBrowse);
  const dispatch = useAppDispatch()
  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);


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
          activeKey={params.cid}
        >
          {typeTwoVos.map((item) => {
            return <Tabs.Tab
              key={item.cid}
              title={
                <Link href={`/browse/${params.id}-${item.cid}-${item.cid === "0" ? "0" : params.tid}-${params.status}-${params.wordType}`}>
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

      {params.cid === "0" ? null : <>
        { typeTwoVos.map(twoVo => {
          return <div key={twoVo.cid} className={styles.tabBox} style={{ paddingTop: '0.2rem', display: params.cid === twoVo.cid ? "block" : 'none' }}>
            <Tabs
              className={isShowMore2 ? styles.tabContentMore : styles.tabContent}
              activeLineMode={'fixed'}
              activeKey={params.tid}
            >
              <Tabs.Tab
                key={'0'}
                title={
                  <Link href={`/browse/${params.id}-${params.cid}-0-${params.status}-${params.wordType}`}>
                    全部
                  </Link>
                }/>

              {twoVo.categoryMark.map((item) => {
                return <Tabs.Tab
                  key={item.markId}
                  title={
                    <Link href={`/browse/${params.id}-${params.cid}-${item.markId}-${params.status}-${params.wordType}`}>
                      {item.title}
                    </Link>
                  }/>
              })}
            </Tabs>
            <Image
              onClick={() => setIsShowMore2(!isShowMore2)}
              className={classNames(styles.moreIcon, isShowMore2 && styles.moreIconActive)}
              width={24}
              height={24}
              src={'/images/browse/extend.png'}
              alt={'more'}
            />
          </div>
        })}
      </>}

      <div className={styles.statusBox}>
        { statusMark.map(val => {
          return (
            <Link
              key={val.markId}
              href={`/browse/${params.id}-${params.cid}-${params.tid}-${val.markId}-${params.wordType}`}
              className={classNames(styles.item, params.status == val.markId && styles.active)}>
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
              href={`/browse/${params.id}-${params.cid}-${params.tid}-${params.status}-${val.type}`}
              className={classNames(styles.item, params.wordType === val.type && styles.active)}>
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
