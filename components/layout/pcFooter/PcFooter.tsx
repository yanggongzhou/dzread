import React, { FC, useEffect } from 'react';
import Link from "next/link";
import styles from '@/components/layout/pcFooter/PcFooter.module.scss';
import { netCommon } from "@/server/home";

interface IProps {
}

const PcFooter: FC<IProps> = () => {

  useEffect(() => {
    getCommon();
  }, []);

  const getCommon = async () => {
    const ss = await netCommon();
    console.log('ss', ss);
  }


  return <div className={styles.footerWrap}>

    <div className={styles.footerContent}>
      <p className={styles.fText}>请所有作者发布小说作品时务必遵守国家互联网信息管理办法，规定，我们拒绝任何色情小说，一经发现，即作删除！</p>
      <div className={styles.fText}>
        <span>京公网安备 11010802023944号</span>
        <Link className={styles.footerLink} href={'https://beian.miit.gov.cn/'} target={'_blank'}>京ICP备16016315号-20</Link>
        <span>京网文〔2017〕10219-1149号</span>
        <span>京ICP证111019号</span>
        <span>网络出版服务许可证：(署)网出证(京)字第27号 京ICP证111019号</span>
      </div>
      <div className={styles.fText}>
        <span>Copyright©2016-2023 All Rights Reserved</span>
        <span>北京点众科技股份有限公司版权所有</span>
      </div>
    </div>
  </div>
}

export default PcFooter
