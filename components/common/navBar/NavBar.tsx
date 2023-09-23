import React, { FC } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from '@/components/common/navBar/NavBar.module.scss';

interface IProps {
  backHref: string;
  title?: string;
}

const NavBar: FC<IProps> = ({ title = '', backHref }) => {

  const back = () => {

  }
  return <header className={styles.navBarBox}>
    <Link href={backHref} className={styles.backBox}>
      <Image
        className={styles.backIcon}
        width={48}
        height={48}
        src={'/images/search/backIcon.png'}
        alt={''}
      />
    </Link>
    <h1>{title}</h1>
  </header>
}

export default NavBar;
