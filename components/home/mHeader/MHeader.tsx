import React, { FC } from "react";
import ClientConfig from "@/client.config";
import Image from "next/image";
import styles from "@/components/home/mHeader/MHeader.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { EChannelCode, ISeoColumnVo } from "@/typings/home.interface";
import { useAppDispatch, useAppSelector } from "@/store";
import { setChannelCode } from "@/store/modules/app.module";

interface IProps {
  seoColumnVos: ISeoColumnVo[];
}

const MHeader: FC<IProps> = ({ seoColumnVos }) => {
  const dispatch = useAppDispatch();

  const code = useAppSelector(state => state.app.code);

  const changeTab = (code: EChannelCode) => {
    dispatch(setChannelCode(code));
  }

  return <div className={styles.headerBox}>
    <header className={styles.headerContent}>
      <Image
        priority
        className={styles.logoBox}
        width={200}
        height={68}
        src={'/images/home/logo-txt.png'}
        alt={ClientConfig.name}
      />
      <button className={styles.downloadBtn}>打开APP</button>
    </header>

    <div className={styles.navContainer}>
      <div className={styles.navMenu}>
        {seoColumnVos.map((val) => {
          // @ts-ignore
          if (!([EChannelCode.男生, EChannelCode.女生, EChannelCode.出版].includes(val.code))) return null;
          return <div
            key={val.code}
            className={classNames(styles.navItem, code === val.code && styles.active)}
            onClick={() => changeTab(val.code)}>
            {val.code === EChannelCode.男生 ? "男生" : null}
            {val.code === EChannelCode.女生 ? "女生" : null}
            {val.code === EChannelCode.出版 ? "出版" : null}
          </div>
        })}
      </div>

      <Link href={'/search'} className={styles.searchBox}>
        <Image
          className={styles.searchIcon}
          width={48}
          height={48}
          src={'/images/home/search.png'}
          alt={''}
        />
      </Link>
    </div>
  </div>
}

export default MHeader;
