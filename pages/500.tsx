import React, { useEffect, useState } from 'react'
import styles from '@/styles/404.module.scss';
import Link from "next/link";
import { NextPage } from "next";
import { useAppSelector } from '@/store';
import { EDevice } from "@/store/store.interfaces";
import Image from "next/image";

interface IProps {
}

const Custom500: NextPage<IProps> = () => {
  const device = useAppSelector(state => state.app.device)
  const [isShow, setIsShow] = useState(false); // 兼容：默认展示M端, pc端显示会有闪M的页面
  useEffect(() => {
    setIsShow(true)
  }, []);
  return <>

    {device === EDevice.pc ? <div className={styles.pc404Wrap}>
      <Image
        className={styles.pcEmptyImg}
        width={320}
        height={240}
        src={'/images/404/500.png'}
        placeholder="blur"
        blurDataURL={'/images/404/500.png'}
        alt={'500'}
      />
      <p className={styles.pcIntro}>抱歉，页面出现错误</p>
      <Link href="/" className={styles.pcBack}>返回首页</Link>
    </div> : null}

    {device === EDevice.wap && isShow ? <div className={styles.m404Wrap}>
      <Image
        className={styles.emptyImg}
        width={320}
        height={240}
        src={'/images/404/500.png'}
        placeholder="blur"
        blurDataURL={'/images/404/500.png'}
        alt={'500'}
      />
      <p className={styles.mIntro}>抱歉，页面出现错误</p>
      <Link href="/" className={styles.mBack}>返回首页</Link>
    </div> : null}
  </>
}

export default Custom500;
