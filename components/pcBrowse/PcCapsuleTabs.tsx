import Link from "next/link";
import React, { CSSProperties, FC } from "react";
import Image from "next/image";
import styles from "@/components/pcBrowse/PcCapsuleTabs.module.scss";
import { CapsuleTabs } from "antd-mobile";
import { IBrowseTypes } from "@/typings/browse.interface";

export interface ICapsuleTab {
  title: string;
  id: number;
  children: IBrowseTypes[];
}

interface IProps {
  data: ICapsuleTab[];
  typeTwoId: number;
  style?: CSSProperties | undefined;
}

const PcCapsuleTabs: FC<IProps> = ({ data, typeTwoId, style }) => {


  const statusList = [
    { id:1, name: "全部" },
    { id:2, name: "完本" },
    { id:3, name: "连载" }
  ]
  const fontList = [
    { id:1, name: "全部" },
    { id:2, name: "100万字以下" },
    { id:3, name: "100万-300万字" },
    { id:4, name: "300万字以上" }
  ]

  return <div style={style} className={styles.capsuleTabsBox}>
    <CapsuleTabs defaultActiveKey='1'>
      {data.map(val => {
        return <CapsuleTabs.Tab title={val.title} key={val.id}>
          分类
          <div className={styles.tabsBox}>
            {val.children.map((item) => {
              const typeName = item.id === 0 ? '全部' : item.name;
              if (item.id === typeTwoId) {
                return <div key={item.id} className={styles.tabItemActive}>{typeName}</div>
              }
              return <Link href={`/browse/${item.id}`} key={item.id} className={styles.tabItem}>
                {typeName}
              </Link>
            })}
          </div>
        </CapsuleTabs.Tab>
      })}
    </CapsuleTabs>
    <div>
      状态
      <div className={styles.tabsBox}>
        {statusList.map((item) => {
          if (item.id === 1) {
            return <div key={item.id} className={styles.tabItemActive}>{item.name}</div>
          }
          return <Link href={`/browse/${item.id}`} key={item.id} className={styles.tabItem}>
            {item.name}
          </Link>
        })}
      </div>
    </div>

    <div>
      字数
      <div className={styles.tabsBox}>
        {fontList.map((item) => {
          if (item.id === 1) {
            return <div key={item.id} className={styles.tabItemActive}>{item.name}</div>
          }
          return <Link href={`/browse/${item.id}`} key={item.id} className={styles.tabItem}>
            {item.name}
          </Link>
        })}
      </div>
    </div>
  </div>
}

export default PcCapsuleTabs;
