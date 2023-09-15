import React, { FC, useEffect, useRef, useState } from "react";
import { Dropdown, DropdownRef } from "antd-mobile";
import styles from "@/components/browse/detail/DropMenu.module.scss";
import Link from "next/link";
import { IBrowseTypes } from "@/typings/browse.interface";
import Image from "next/image";
import { useAppSelector } from "@/store";

interface IProps {
  types: IBrowseTypes[];
  typeTwoId: number;
}

const DropMenu: FC<IProps> = ({ types, typeTwoId }) => {
  const dropdownRef = useRef<DropdownRef | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const isPopChange = useAppSelector(state => state.app.isPopChange)

  useEffect(() => {
    if (dropdownRef.current && Reflect.get(dropdownRef.current, 'close')) {
      dropdownRef.current?.close()
    }
  }, [isPopChange]);

  useEffect(() => {
    if (activeRef.current && activeKey) {
      setTimeout(() => {
        (activeRef.current as HTMLDivElement)?.scrollIntoView({ block: "start", behavior: "smooth", inline: "center" })
      }, 300)
    }
  }, [activeKey]);

  return (<Dropdown
    getContainer={() => document.getElementById('browse_box') as HTMLElement}
    // ref={dropdownRef}
    arrow={null}
    onChange={(key) => {
      setActiveKey(key)
    }}
    className={styles.dropdownBox}
  >
    <Dropdown.Item
      forceRender
      key='sorter'
      title={
        <Image
          className={styles.menuTitleIcon}
          width={40}
          height={40}
          src={'/images/browse/more.png'}
          alt={'more'}
        />
      }>
      <div className={styles.menuBox}>

        <div className={styles.menuHead}>
          <span>分类</span>
          <Image
            onClick={() => {
              dropdownRef.current?.close()
            }}
            className={styles.menuHeadIcon}
            width={40}
            height={40}
            src={'/images/browse/more.png'}
            alt={'close'}
          />
        </div>

        <div className={styles.menuContent}>
          {types.map((item) => {
            const typeName = item.id === 0 ? '全部' : item.name;
            if (typeTwoId === item.id) {
              return <div key={item.id} ref={activeRef} className={styles.menuActiveItem}
                          onClick={() => dropdownRef.current?.close()}>{typeName}</div>
            }
            return <Link
              key={item.id}
              href={`/browse/${item.id}`}
              className={styles.menuItem}
              onClick={() => dropdownRef.current?.close()}>
              {typeName}
            </Link>
          })}
        </div>
      </div>
    </Dropdown.Item>
  </Dropdown>)
}

export default DropMenu;
