import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { addListen, removeListen } from "@/utils/rem";
import { ownOs } from "@/utils/ownOs";
import PcHeader from "@/components/layout/pcHeader/PcHeader";
import PcFooter from "@/components/layout/pcFooter/PcFooter";
import useLogParams from "@/hooks/useLogParams";
import { useAppDispatch, useAppSelector } from "@/store";
import { setDevice } from "@/store/modules/app.module";
import { EDevice } from "@/store/store.interfaces";
import MHeader from "@/components/home/mHeader/MHeader";
import styles from "@/components/layout/index.module.scss"
import { EnumBackGround, EnumFontSize, EnumTabs } from "typings/reader.interface";
import { Router } from "next/dist/client/router";

interface IProps {
  children: React.ReactNode;
  pageProps: any
  router: Router
}

interface IAppState {
  theme: EnumTabs;
  fontSize: EnumFontSize;
  background: EnumBackGround;
}

const Context = createContext([{}, {}] as [IAppState, React.Dispatch<React.SetStateAction<IAppState>>]);


const DLayout: FC<IProps> = ({ children, pageProps, router }) => {
  const [appState, setAppState] = useState<IAppState>({
    theme: EnumTabs.日間,
    fontSize: EnumFontSize.normal,
    background: EnumBackGround.default1,
  });
  const device = useAppSelector(state => state.app.device);
  const dispatch = useAppDispatch();
  const [domVisible, setDomVisible] = useState(false);

  // 页面曝光 打点参数初始化
  useLogParams(pageProps);

  useEffect(() => {
    setDomVisible(true)
    setRemScript();
    addListen(setRemScriptListen);
    return () => {
      removeListen(setRemScriptListen)
    }
  },[]) // eslint-disable-line

  // 设置rem字体大小并判断设备 初始化
  const setRemScript = () => {
    const clientWidth = window.innerWidth || document.documentElement.clientWidth;
    const { isPc } = ownOs(window.navigator.userAgent);
    dispatch(setDevice(isPc ? EDevice.pc : EDevice.mobile));
    if (isPc) {
      document.documentElement.style.fontSize = '80px';
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
      document.documentElement.style.fontSize = '80px';
    } else {
      document.documentElement.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
  }
  if ((Reflect.has(pageProps, 'isPc') && Reflect.get(pageProps, 'isPc')) || (device === EDevice.pc && domVisible)) {
    return (
      <Context.Provider value={[appState, setAppState]}>
        { router.pathname !== '/chapter/[bookId]/[chapterId]' ?
          <>
            <PcHeader />
            <main className={styles.pcWrap}>
              {children}
            </main>
            <PcFooter />
          </> :
          <main>
            {children}
          </main>
        }
      </Context.Provider>
    )
  }

  return (
    <>
      <Context.Provider value={[appState, setAppState]}>
        <main className={styles.mWrap}>
          {children}
        </main>
      </Context.Provider>
    </>
  );
}

export default DLayout

export const useAppContext = () => {
  return useContext(Context);
}
