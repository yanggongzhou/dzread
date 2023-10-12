import Link from "next/link";
import React, { CSSProperties, FC } from "react";
import { IBrowseParams, ITypeOneVo } from "@/typings/browse.interface";
import classNames from "classnames";
import styles from "@/components/pcBrowse/PcCapsuleTabs.module.scss";

interface IProps {
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
  typeOneVoList: ITypeOneVo[];
  params: IBrowseParams;
  style?: CSSProperties | undefined;
}

const PcCapsuleTabs: FC<IProps> = (
  {
    typeOneVoList,
    statusMark,
    wordType,
    style,
    params
  }) => {


  return <div style={style} className={styles.capsuleTabsBox}>
    <div className={styles.oneVoBox}>
      {typeOneVoList.map(oneVo => {
        return <Link
          key={oneVo.categoryId}
          className={classNames(styles.oneVoItem, params.id == oneVo.categoryId && styles.oneVoItemActive)}
          href={`/browse/${oneVo.categoryId}-0-0-${params.status}-${params.wordType}`}>{oneVo.categoryName}</Link>
      })}
    </div>

    <div className={styles.twoVoBox}>
      <h3>分类</h3>
      {typeOneVoList.map(oneVo => {
        return <div
          key={oneVo.categoryId}
          style={{ display: params.id == oneVo.categoryId ? "flex" : "none" }}
          className={styles.twoVoContent}>
          { oneVo.typeTwoVos.map(twoVo => {
            return <div key={twoVo.cid} className={styles.twoVoItemBox}>
              <Link className={classNames(styles.twoVoItem, params.cid === twoVo.cid && styles.twoVoItemActive)}
                href={`/browse/${params.id}-${twoVo.cid}-0-${params.status}-${params.wordType}`}>
                {twoVo.title}
              </Link>

              {twoVo.categoryMark.length !== 0 && params.cid != "0" ?
                <div
                  key={oneVo.categoryId + '_3'}
                  style={{ display: params.cid == twoVo.cid ? "flex" : "none" }}
                  className={styles.cateContent}
                >
                  {twoVo.categoryMark.map(cate => {
                    return <Link
                      key={cate.markId}
                      className={classNames(styles.cateItem, params.tid === cate.markId && styles.cateItemActive)}
                      href={`/browse/${params.id}-${params.cid}-${cate.markId}-${params.status}-${params.wordType}`}>
                      {cate.title}
                    </Link>
                  })}
                </div> : null}
            </div>
          })}

        </div>
      })}
    </div>

    <div className={styles.twoVoBox}>
      <h3>状态</h3>
      <div className={styles.twoVoContent}>
        {statusMark.map((item) => {
          return <Link
            href={`/browse/${params.id}-${params.cid}-${params.tid}-${item.markId}-${params.wordType}`}
            key={item.markId}
            className={classNames(styles.twoVoItem, item.markId == params.status && styles.twoVoItemActive)}>
            {item.title}
          </Link>
        })}
      </div>
    </div>

    <div className={styles.twoVoBox}>
      <h3>字数</h3>
      <div className={styles.twoVoContent}>
        {wordType.map((item) => {
          return <Link
            href={`/browse/${params.id}-${params.cid}-${params.tid}-${params.status}-${item.type}`}
            key={item.type}
            className={classNames(styles.twoVoItem, item.type === params.wordType && styles.twoVoItemActive)}>
            {item.name}
          </Link>
        })}
      </div>
    </div>
  </div>
}

export default PcCapsuleTabs;
