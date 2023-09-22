import React, { FC, useState } from "react";
import { SideBar, Tabs } from "antd-mobile";
import Link from "next/link";
import Image from "next/image";
import { IBrowseTypes } from "@/typings/browse.interface";
import styles from "@/components/rankings/rankType/RankType.module.scss";
import classNames from 'classnames'

interface IProps {
  types: IBrowseTypes[];
  typeTwoId: number;
}

const RankType: FC<IProps> = ({ typeTwoId, types, isShowBox }) => {

  const [activeKey, setActiveKey] = useState('key1')

  return <div className={styles.slideBox}>
    <SideBar activeKey={activeKey} onChange={setActiveKey}>
      {types.map(item => (
        <SideBar.Item key={item.id} title={item.name} />
      ))}
    </SideBar>
  </div>
}

export default RankType;
