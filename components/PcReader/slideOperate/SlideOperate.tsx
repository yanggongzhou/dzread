import React, { FC } from "react";
import Link from "next/link";
import PcSetting from "@/components/PcReader/slideOperate/Setting";
import styles from "@/components/PcReader/slideOperate/SlideOperate.module.scss";

const SlideOperate: FC = () => {

  return <>
    <ul className={styles.operateBox}>
      <li>
        <Link className={styles.itemBox} href={'/'} target={'_blank'}>首页</Link>
      </li>
      <li>
        <Link className={styles.itemBox} href={'/'} target={'_blank'}>书籍详情</Link>
      </li>
      <li>
        <div className={styles.itemBox}>
          目录
        </div>
      </li>
      <li>
        <div className={styles.itemBox}>设置</div>
        <PcSetting />
      </li>
      <li>
        <div className={styles.itemBox}>
          客户端
        </div>
      </li>
    </ul>


  </>
}

export default SlideOperate;
