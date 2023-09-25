import React, { FC } from 'react'
import styles from '@/components/pcReader/slideOperate/Setting.module.scss'
import { EThemeType } from "typings/reader.interface";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store";
import { setFontSize, setTheme } from "@/store/modules/read.module";

interface IProps {
}

const PcSetting: FC<IProps> = () => {
  const theme = useAppSelector(state => state.read.theme);
  const fontSize = useAppSelector(state => state.read.fontSize);

  const dispatch = useAppDispatch();

  const addSize = () => {
    if (fontSize < 30){
      dispatch(setFontSize(fontSize + 2))
    }
  }
  const cutSize = () => {
    if (fontSize > 16){
      dispatch(setFontSize(fontSize - 2))
    }
  }

  const changeBg = (bg: EThemeType) => {
    dispatch(setTheme(bg))
  }

  const backgroundList = [
    EThemeType.default1,
    EThemeType.default2,
    EThemeType.default3,
    EThemeType.default4,
    EThemeType.default5,
  ]

  return <div className={styles.settingBox}>
    <div className={styles.controlBg}>
      <div className={styles.sizeTitle}>背景</div>
      <div className={styles.bgBox}>
        { backgroundList.map(backgroundColor => {
          return <div
            key={backgroundColor}
            className={styles.bg}
            style={{ backgroundColor } }
            onClick={() => changeBg(backgroundColor)}>
            { theme === backgroundColor ?
              <Image
                className={styles.bgChecked}
                width={48}
                height={48}
                src={'/images/reader/bg-checked.png'}
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
        <div>{ fontSize }</div>
        <div className={styles.size} onClick={() => cutSize()}>A-</div>
      </div>
    </div>
  </div>
}
export default PcSetting;
