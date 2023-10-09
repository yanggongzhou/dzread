import React, { FC, useEffect, useState } from "react";
import { Tabs } from "antd-mobile";
import Link from "next/link";
import Image from "next/image";
import { EBookStatus, ITypeOneVo } from "@/typings/browse.interface";
import { useAppDispatch, useAppSelector } from "@/store";
import { setIsShowBrowse } from "@/store/modules/app.module";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "@/components/browse/browseType/BrowseType.module.scss";

interface IProps {
  typeOneVoList: ITypeOneVo[];
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
  isShowBox: boolean;
}

interface IParams {
  id: string | number; // 一级分类id，如果有cid，将不会按照这个传
  cid: string; // 二级分类id，如果有tid，将不会按照这个传
  tid: string; // 三级分类id，如果有三级id就查三级id不查二级id的
  status: EBookStatus | 0;
  wordType: string;
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
  const [isShowMore2, setIsShowMore2] = useState(false);

  const router = useRouter();
  const [params, setParams] = useState<IParams>({
    id: typeOneVoList[0].categoryId,
    cid: typeOneVoList?.[0]?.typeTwoVos?.[0]?.cid || '0',
    tid: '0',
    status: 0,
    wordType: '0',
  });

  useEffect(() => {
    const { types } = router.query as { types?: string; }
    if (types) {
      const typeArr = types.split('-');
      setParams({
        id: typeArr[0] || typeOneVoList[0].categoryId,
        cid: typeArr[1] || typeOneVoList?.[0]?.typeTwoVos?.[0]?.cid || '0',
        tid: typeArr[2] || '0',
        status: Number(typeArr[3]) ? Number(typeArr[3]) as EBookStatus : 0,
        wordType: typeArr[4] || '0',
      })
    }
  }, [router.query]);

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
          {typeOneVoList[0].typeTwoVos.map((item) => {
            return <Tabs.Tab
              key={item.cid}
              title={
                <Link href={`/browse/${params.id}-${item.cid}-${params.tid}-${params.status}-${params.wordType}`}>
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
      <div className={styles.tabBox} style={{ paddingTop: '0.2rem'}}>
        <Tabs
          className={isShowMore2 ? styles.tabContentMore : styles.tabContent}
          activeLineMode={'fixed'}
          activeKey={params.tid}
        >
          {typeOneVoList[0].typeTwoVos[0].categoryMark.map((item) => {
            return <Tabs.Tab
              key={item.type}
              title={
                <Link href={`/browse/${params.id}-${params.cid}-${item.type}-${params.status}-${params.wordType}`}>
                  {item.name}
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
