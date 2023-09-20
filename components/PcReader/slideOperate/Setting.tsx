import React, { FC } from 'react'
import styles from '@/components/PcReader/slideOperate/Setting.module.scss'
import { EThemeType } from "typings/reader.interface";
import Image from "next/image";
import { useAppContext } from "@/components/layout";

interface IProps {
}

const PcSetting: FC<IProps> = () => {
  const [appState, setAppState] = useAppContext();
  const addSize = () => {
    if (appState.fontSize < 48){
      const fontSize = appState.fontSize + 1;
      setAppState(pre => ({...pre,  fontSize}))
    }
  }
  const cutSize = () => {
    if (appState.fontSize > 12){
      const fontSize = appState.fontSize - 1;
      setAppState(pre => ({...pre,  fontSize}))
    }
  }


  const changeBg = (pBackground: EThemeType) => {
    setAppState(pre => ({...pre,  pBackground}));

  }

  const backgroundColorTab = [
    { backgroundColor: EThemeType.default1 },
    { backgroundColor: EThemeType.default2 },
    { backgroundColor: EThemeType.default3 },
    { backgroundColor: EThemeType.default4 },
    { backgroundColor: EThemeType.default5 },
  ]

  return <div className={styles.settingBox}>
    <div className={styles.settingTitle}>设置</div>
    <div className={styles.controlBg}>
      <div className={styles.sizeTitle}>背景</div>
      <div className={styles.bgBox}>
        { backgroundColorTab.map(({ backgroundColor }) => {
          return <div
            key={backgroundColor}
            className={styles.bg}
            style={{ backgroundColor } }
            onClick={() => changeBg(backgroundColor)}>
            { appState.pBackground === backgroundColor ?
              <Image
                className={styles.bgChecked}
                width={48}
                height={48}
                src={'/images/reader/pcSizeChecked.png'}
                alt={''}
              /> : null}
          </div>
        }) }
      </div>
    </div>
    <div className={styles.controlSize}>
      <div className={styles.sizeTitle}>字体</div>
      <div className={styles.sizeBox}>
        <div className={styles.size} onClick={() => addSize()}>A+</div>
        <div> { appState.fontSize } </div>
        <div className={styles.size} onClick={() => cutSize()}>A-</div>
      </div>
    </div>
  </div>
}
export default PcSetting;
