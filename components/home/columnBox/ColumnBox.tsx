import React, { FC } from "react";
import styles from "@/components/home/columnBox/ColumnBox.module.scss"
import Link from "next/link";
import Image from "next/image";

interface IProps {
  children?: React.ReactNode | null;
  href: string;
  title: string;
  btnTxt?: string;
}

const ColumnBox: FC<IProps> = ({ children, href, title, btnTxt = "查看更多" }) => {
  return <div className={styles.columnBox}>
    <div className={styles.columnHead}>
      <h3><Link href={href} className={styles.columnTitle} title={title}>{title}</Link></h3>
      <Link href={href} className={styles.columnLink} title={title}>
        <span>{btnTxt}</span>
        <Image
          className={styles.linkIcon}
          width={48}
          height={48}
          src={'/images/home/link.png'}
          alt={''}
        />
      </Link>
    </div>
    { children }
  </div>
}

export default ColumnBox;
