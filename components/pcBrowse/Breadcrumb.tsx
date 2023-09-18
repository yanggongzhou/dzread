import Link from "next/link";
import React, { CSSProperties, FC } from "react";
import Image from "next/image";
import styles from "@/components/pcBrowse/Breadcrumb.module.scss";

export interface IBreadcrumb {
  title: string;
  link?: string;
}

interface IProps {
  data: IBreadcrumb[];
  style?: CSSProperties | undefined;
}

const Breadcrumb: FC<IProps> = ({ data, style }) => {
  return <div style={style} className={styles.crumbsWrapBox}>
    <div className={styles.crumbsWrap}>
      {data.map((item, itemIndex) => {
        return <div key={item.title} className={styles.crumbItem}>
          { item?.link
            ? <Link href={item.link}>{item.title}</Link>
            : <div>{item.title}</div> }
          {data.length - 1 !== itemIndex ? <Image
            className={styles.crumbIcon}
            width={6}
            height={10}
            src={'/images/book/crumbs.png'}
            alt={'>'}
          /> : null}
        </div>
      }) }
    </div>
  </div>
}

export default Breadcrumb;
