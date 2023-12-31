import React, { FC, useEffect } from "react";
import { addListen, removeListen } from "@/utils/listens";
import { ownOs } from "@/utils/tools";
import PcHeader from "@/components/layout/pcHeader/PcHeader";
import PcFooter from "@/components/layout/pcFooter/PcFooter";
import useLogParams from "@/hooks/useLogParams";
import { useAppDispatch } from "@/store";
import { setDevice } from "@/store/modules/app.module";
import { EDevice } from "@/store/store.interfaces";
import { Router } from "next/dist/client/router";
import NProgress from "nprogress";

interface IProps {
  children: React.ReactNode;
  pageProps: any
  router: Router
}

const DLayout: FC<IProps> = ({ children, pageProps, router }) => {

  const dispatch = useAppDispatch();
  // 页面曝光 打点参数初始化
  useLogParams(pageProps);

  useEffect(() => {
    setRemScript();
    nprogressEve();
    addListen(setRemScriptListen);
    return () => {
      removeListen(setRemScriptListen)
    }
  }, []) // eslint-disable-line

  const nprogressEve = () => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  };

  // 设置rem字体大小并判断设备 初始化
  const setRemScript = () => {
    const clientWidth = window.innerWidth || document.documentElement.clientWidth;
    const { isPc } = ownOs(window.navigator.userAgent);
    dispatch(setDevice(isPc ? EDevice.pc : EDevice.wap));
    if (isPc) {
      document.documentElement.style.fontSize = '90px';
    } else {
      document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
  }
  // 监听
  const setRemScriptListen = () => {
    const clientWidth = window.innerWidth || document.documentElement.clientWidth
    const { isPc } = ownOs(window.navigator.userAgent)
    if (isPc) {
      // if (clientWidth >= 1366 && clientWidth <= 1800) {
      //   document.documentElement.style.fontSize = 100 * (clientWidth / 1700) + 'px';
      // }
      // document.documentElement.style.fontSize = '90px';
    } else {
      document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
  }
  if ((Reflect.has(pageProps, 'isPc') && Reflect.get(pageProps, 'isPc')) && router.pathname !== '/chapter/[bookId]/[chapterId]') {
    return (
      <>
        <PcHeader/>
        {children}
        <PcFooter/>
      </>
    )
  }
  return children;
}

export default DLayout;
