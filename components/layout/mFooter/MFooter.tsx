import React, { FC } from 'react'
import styles from '@/components/layout/mFooter/MFooter.module.scss'
import Link from "next/link";
import ClientConfig from "@/client.config";
import Image from "next/image";

interface IProps {
}

const MFooter: FC<IProps> = () => {

  return <div className={styles.footerBox}>
    <Link href={'/privacy'} className={styles.agreementItem}>
      <span>隐私政策</span>
      <Image
        className={styles.agreementIcon}
        width={24}
        height={24}
        src={'/images/layout/link.png'}
        alt={'more'}
      />
    </Link>
    <Link href={'/terms'} className={styles.agreementItem}>
      <span>用户协议</span>
      <Image
        className={styles.agreementIcon}
        width={24}
        height={24}
        src={'/images/layout/link.png'}
        alt={'more'}
      />
    </Link>

    <div className={styles.footerContent}>
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
  </div>
}

export default MFooter
