import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { ownOs } from "@/utils/tools";
import NavBar from "@/components/common/navBar/NavBar";
import ClientConfig from "@/client.config";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Download.module.scss";

interface IProps {
  bookId?: string; // 勿删，剪切板使用
  chapterId?: string;
}

const DownloadApp: NextPage<IProps> = () => {

  return <main className={styles.downloadWrap}>
    <NavBar backHref={'/'} title={ClientConfig.name} icon={'/images/download/cancel.png'}/>
    <div className={styles.logoBox}>
      <Image
        className={styles.bg}
        width={750}
        height={919}
        src={'/images/download/bg.png'}
        alt={''}
      />
      <Image
        className={styles.logo}
        width={402}
        height={402}
        src={'/images/download/logo.png'}
        alt={ClientConfig.name}
      />
    </div>

    <div className={styles.footerContainer}>
      <button className={styles.downloadBtn}>立即下载</button>
      <Link className={styles.downloadContent} href={'/'}>
        打开{ClientConfig.name}
      </Link>
    </div>
  </main>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const ua = req?.headers['user-agent'] || '';
  const { bookId = '', chapterId = '', path = '' } = query as { bookId: string; chapterId: string; path: string; };
  if (ownOs(ua).isPc) {
    if (path) {
      return {
        redirect: { destination: path, permanent: false }
      }
    }
    if (bookId) {
      return {
        redirect: { destination: chapterId ? `/chapter/${bookId}/${chapterId}` : `/book/${bookId}`, permanent: false }
      }
    }
    return { redirect: { destination: '/', permanent: false } }
  }
  // 返回的参数将会按照 key 值赋值到 Home 组件的同名入参中
  return {
    props: {
      bookId,
      chapterId,
    }
  }
}

export default DownloadApp;
