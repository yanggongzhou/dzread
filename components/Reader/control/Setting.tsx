import React, { FC } from 'react'
import styles from '@/components/Reader/control/Control.module.scss'
import { EnumBackGround, EnumFontSize, EnumTabs } from "@/typings/reader.interface";
import { useAppContext } from "@/components/layout";

interface IProps {}

const Setting: FC<IProps> = () => {
  const [appState, setAppState] = useAppContext();
  const fontSizeTab = [
    { id: EnumFontSize.small, label: '小號', fontSize: '0.2rem' },
    { id: EnumFontSize.normal, label: '默認', fontSize: '0.24rem' },
    { id: EnumFontSize.big, label: '大號', fontSize: '0.28rem' },
  ]
  const backgroundColorTab = [
    { id: EnumBackGround.default1, backgroundColor: '#F6F6F6',  },
    { id: EnumBackGround.default2, backgroundColor: '#FFF0DF' },
    { id: EnumBackGround.default3, backgroundColor: '#DAE6C5' },
  ]

  return (<>
    <div className={styles.controlSize}>
      <div className={styles.sizeTitle}>字號</div>
      <div className={styles.sizeBox}>
        { fontSizeTab.map(({ id, fontSize, label }) => {
          return <div
            key={id}
            className={appState.fontSize === id ? styles.sizeActive : (appState.theme === EnumTabs.夜間 ? styles.sizeNight : styles.size)}
            style={{ fontSize, }}
            onClick={() => setAppState(pre => ({...pre,  fontSize: id})) }>
            {label}
          </div>
        }) }
      </div>
    </div>
    <div className={styles.controlBg}>
      <div className={styles.sizeTitle}>背景</div>
      <div className={styles.bgBox}>
        { backgroundColorTab.map(({ id, backgroundColor }) => {
          return <div
            key={id}
            className={appState.background === id ? styles.bgActive : styles.bg}
            style={{ backgroundColor }}
            onClick={() => setAppState(pre => ({...pre, theme: EnumTabs.日間, background: id})) }/>
        }) }
      </div>
    </div>
  </>)
}
export default Setting;
