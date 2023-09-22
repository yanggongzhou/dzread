import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/components/common/downloadBanner/DownloadBanner.module.scss";

/**
 * WAP端引导下载按钮：
 * 样式：悬浮于内容底部
 * 当内容上滑到底部时，吸底显示。显示内容有：logo、引导下载文案、下载按钮
 */

interface IProps {
  height: string | number; // 距离底部距离
  children: React.ReactNode;
}

const DownloadBanner: FC<IProps> = ({ height, children }) => {
  const [isFooter, setIsFooter] = useState(false);
  const intersectionRef = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((dom) => {
        // isIntersecting为true则dom出现在页面上
        setIsFooter(dom.isIntersecting)
      });
    }, {});
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current as Element)
    }
    return () => {
      if (intersectionRef.current) {
        observer.unobserve(intersectionRef.current as Element)
      }
    };
  }, []);

  return <>
    <div className={isFooter ? styles.downloadFooter : styles.downloadBox}>
      <div className={styles.downloadContent}>
        <Image
          className={styles.logoIcon}
          width={144}
          height={144}
          src={'/images/logo.png'}
          alt={''}
        />
        <div className={styles.intro}>
          <p className={styles.text1}>{isFooter ? '安装点众阅读客户端' : '下载点众阅读，体验流畅阅读'}</p>
          {isFooter ? <p className={styles.text2}>查看更多优质好书</p> : null}
        </div>

        {isFooter ? <button className={styles.btn}>下载</button> : null}
      </div>
    </div>
    {children}
    <div style={{ width: 1, height, }} ref={intersectionRef} />
  </>
}

export default DownloadBanner;
