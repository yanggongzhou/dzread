import React, { FC } from 'react'
import styles from '@/components/layout/pcFooter/PcFooter.module.scss'
import Link from "next/link";
import ClientConfig from "@/client.config";

interface IProps {
}

const PcFooter: FC<IProps> = () => {

  return <div className={styles.footerWrap}>
    <div className={styles.footerText}>
      <p className={styles.fText}>请所有作者发布小说作品时务必遵守国家互联网信息管理办法，规定，我们拒绝任何色情小说，一经发现，即作删除！</p>
      <p>
        京公网安备 11010802023944号｜
        <Link className={styles.footerLink} href={'https://beian.miit.gov.cn/'} target={'_blank'}>京ICP备16016315号-20</Link>
      </p>
      <p>京网文〔2017〕10219-1149号｜京ICP证111019号</p>
      <p>网络出版服务许可证：(署)网出证(京)字第27号 京ICP证111019号</p>
      <p>Copyright©2016-2023 All Rights Reserved</p>
      <p>北京点众科技股份有限公司版权所有</p>
    </div>
  </div>
}

export default PcFooter
