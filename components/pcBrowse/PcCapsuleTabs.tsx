import Link from "next/link";
import React, { CSSProperties, FC } from "react";
import Image from "next/image";
import styles from "@/components/pcBrowse/PcCapsuleTabs.module.scss";
import { CapsuleTabs } from "antd-mobile";
import { ITypeOneVo } from "@/typings/browse.interface";
import classNames from "classnames";


interface IProps {
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
  typeOneVoList: ITypeOneVo[];
  params: any;
  style?: CSSProperties | undefined;
}

const PcCapsuleTabs: FC<IProps> = ({ typeOneVoList, statusMark, wordType, style }) => {

  var typeTwoId = '';

  return <div style={style} className={styles.capsuleTabsBox}>
    <CapsuleTabs defaultActiveKey='1'>
      {typeOneVoList.map(val => {
        return <CapsuleTabs.Tab title={val.categoryName} key={val.categoryId}>
          分类
          <div className={styles.tabsBox}>
            {val.typeTwoVos.map((item) => {
              return <Link
                href={`/browse/${item.cid}`}
                key={item.cid}
                className={classNames(styles.tabItem, item.cid === typeTwoId && styles.tabItemActive)}>
                {item.title}
              </Link>
            })}
          </div>
        </CapsuleTabs.Tab>
      })}
    </CapsuleTabs>
    <div>
      状态
      <div className={styles.tabsBox}>
        {statusMark.map((item) => {
          return <Link
            href={`/browse/${item.markId}`}
            key={item.markId}
            className={classNames(styles.tabItem, item.markId === 'xxxx' && styles.tabItemActive)}>
            {item.title}
          </Link>
        })}
      </div>
    </div>

    <div>
      字数
      <div className={styles.tabsBox}>
        {wordType.map((item) => {
          return <Link
            href={`/browse/${item.type}`}
            key={item.type}
            className={classNames(styles.tabItem, item.type === 'xxxx' && styles.tabItemActive)}>
            {item.name}
          </Link>
        })}
      </div>
    </div>
  </div>
}

export default PcCapsuleTabs;
