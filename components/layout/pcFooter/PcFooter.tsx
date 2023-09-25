import React, { FC } from 'react'
import styles from '@/components/layout/pcFooter/PcFooter.module.scss'
import Link from "next/link";
import ClientConfig from "@/client.config";

interface IProps {
}

const PcFooter: FC<IProps> = () => {

  return <div className={styles.footerWrap}>
    <div className={styles.footerContent}>

      <div className={styles.footerText}>
        <p className={styles.fText}>© {ClientConfig.name}, 版权所有&nbsp;&nbsp;{ClientConfig.companyName}</p>

      </div>

      <div className={styles.footerLink}>
        <Link href={'/terms'} className={styles.otherBtn}>
          用户协议
        </Link>
        <Link href={'/privacy'} className={styles.otherBtn}>
          隐私政策
        </Link>
      </div>
    </div>
  </div>
}

export default PcFooter
