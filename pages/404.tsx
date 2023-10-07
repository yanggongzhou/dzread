import React, { useEffect, useState } from 'react'
import styles from '@/styles/404.module.scss';
import Link from "next/link";
import { NextPage } from "next";
import { useAppSelector } from '@/store';
import { EDevice } from "@/store/store.interfaces";
import Image from "next/image";

interface IProps {
}

const Custom404: NextPage<IProps> = () => {
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
        src={'/images/404/404.png'}
        placeholder="blur"
        blurDataURL={'/images/404/404.png'}
        alt={'404'}
      />
      <p className={styles.pcIntro}>页面不存在，请检查页面链接</p>
      <Link href="/" className={styles.pcBack}>返回首页</Link>
    </div> : null}

    {device === EDevice.mobile && isShow ? <div className={styles.m404Wrap}>
      <Image
        className={styles.emptyImg}
        width={320}
        height={240}
        src={'/images/404/404.png'}
        placeholder="blur"
        blurDataURL={'/images/404/404.png'}
        alt={'404'}
      />
      <p className={styles.mIntro}>页面不存在，请检查页面链接</p>
      <Link href="/" className={styles.mBack}>返回首页</Link>
    </div> : null}
  </>
}

export default Custom404;
