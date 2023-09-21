import React, { FC } from 'react'
import styles from '@/components/layout/mFooter/MFooter.module.scss'
import Link from "next/link";
import ClientConfig from "@/client.config";
import Image from "next/image";

interface IProps {
}

const MFooter: FC<IProps> = () => {

  return <div className={styles.footerBox}>
    <Image
      className={styles.logoBox}
      width={40}
      height={40}
      src={'/images/logo.png'}
      alt={ClientConfig.name}
    />
    <Link className={styles.fmail} href={`mailto:${ClientConfig.email}`}>
      邮箱: &nbsp;{ ClientConfig.email }
    </Link>
    <p className={styles.fText}>© {ClientConfig.name}, 版权所有</p>
    <p className={styles.fText}>{ClientConfig.companyName}</p>
  </div>
}

export default MFooter
