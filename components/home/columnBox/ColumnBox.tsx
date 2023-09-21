import React, { FC } from "react";
import styles from "@/components/home/columnBox/ColumnBox.module.scss"
import Link from "next/link";

interface IProps {
  children?: React.ReactNode | null;
  href: string;
  title: string;
}

const ColumnBox: FC<IProps> = ({ children, href, title }) => {
  return <div className={styles.columnBox}>
    <div className={styles.columnHead}>
      <h3><Link href={href} className={styles.columnTitle} title={title}>{title}</Link></h3>
      <Link href={href} className={styles.columnLink} title={title}>
        <span>完整榜单  <i> > </i></span>
      </Link>
    </div>
    { children }
  </div>
}

export default ColumnBox;
