import React, { FC, useEffect, useState } from 'react'
import ClientConfig from "@/client.config";
import Head from "next/head";
import { useRouter } from "next/router";
import { TDK } from "@/components/layout/tdk";
import Script from "next/script";

const { googleCode, baiduCode } = ClientConfig;

export const pathnameData = {
  browse: '/browse/[typeTwoId]',
  more: '/more/[position]',
  book: '/book/[bookId]',
  download: '/download',
  error404: '/404',
  error500: '/500',
  agreementPrivacy: '/privacy',
  agreementUser: '/terms',
  chapter: "/chapter/[bookId]/[chapterId]"
}

const HeadNormal: FC<any> = ({ pageProps = {} }) => {
  const router = useRouter();
  const getTdk = (): { title: string; keywords: string; description: string; } => {
    if (router.pathname === '/') {
      return TDK.index
    } else if (router.pathname.includes('/more/[position]')) {
      const positionName = pageProps.positionName || '';
      return TDK.more({ ...router.query, positionName })
    } else if (router.pathname.includes('/browse/[typeTwoId]')) {
      const  _typeTwoName = pageProps.typeTwoId === 0 ? '全部' : pageProps.typeTwoName;
      return TDK.browse({ ...router.query, typeTwoName: _typeTwoName })
    } else {
      try {
        for(const item in pathnameData) {
          // @ts-ignore
          if (router.pathname.includes(pathnameData[item]) && TDK && TDK[item]) {
            // @ts-ignore
            const tdkItem = TDK[item]
            return typeof tdkItem === 'function' ? tdkItem({ ...router.query, ...pageProps }) : tdkItem
          }
        }
      } catch (e) {
        return TDK.index;
      }
    }
    return TDK.index;
  }
  const [pageTdk, setPageTdk] = useState(() => getTdk());

  useEffect(() => {
    setPageTdk(getTdk())
  },[router]); // eslint-disable-line

  return <>
    <Head>
      <title>{pageTdk.title || ClientConfig.name}</title>
      <meta key="keywords" name="keywords" content={pageTdk.keywords}/>
      {pageTdk.description ? <meta key="description" name="description" content={pageTdk.description}/> : null}
      <meta key="httpEquiv" httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
      {/*防止xss攻击*/}
      <meta key="httpEquiv2" httpEquiv="Content-Security-Policy"/>
      {/*iOS 尝试检测文本内容中的电话号码、电子邮件地址和其他数据并将其转换为链接，从而导致水合不匹配。*/}
      <meta name="format-detection" content="telephone=no, date=no, email=no, address=no"/>
      <link rel="icon" href={'/favicon.ico'}/>
      <link rel="canonical" href={process.env.WebDomain + (router.asPath === '/' ? '' : router.asPath)}/>
    </Head>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      id={'google_sdk'}
      strategy={"afterInteractive"}
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s){
    t=b.createElement(e);
    t.defer=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://www.googletagmanager.com/gtag/js?id=${googleCode}');
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${googleCode}');`,
      }}
    />
    <Script
      id={"baidu_hm"}
      strategy={"beforeInteractive"}
      dangerouslySetInnerHTML={{
        __html: `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?${baiduCode}";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();`
      }}
    />
  </>
}

export default HeadNormal;


