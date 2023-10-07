import React, { FC, useState } from "react";
import { SideBar } from "antd-mobile";
import { IBrowseTypes } from "@/typings/browse.interface";
import styles from "@/components/ranking/rankType/RankType.module.scss";

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
