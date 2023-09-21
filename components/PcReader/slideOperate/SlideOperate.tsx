import React, { FC } from "react";
import Link from "next/link";
import PcSetting from "@/components/PcReader/slideOperate/Setting";
import styles from "@/components/PcReader/slideOperate/SlideOperate.module.scss";

const SlideOperate: FC = () => {

  return <>
    <div className={styles.operateBox}>
      <div>
        <Link className={styles.itemBox} href={'/'} target={'_blank'}>首页</Link>
      </div>
      <div>
        <Link className={styles.itemBox} href={'/'} target={'_blank'}>书籍详情</Link>
      </div>
      <div>
        <div className={styles.itemBox}>
          目录
        </div>
      </div>
      <div>
        <div className={styles.itemBox}>设置</div>
        <PcSetting />
      </div>
      <div>
        <div className={styles.itemBox}>
          客户端
        </div>
      </div>
    </div>


  </>
}

export default SlideOperate;
