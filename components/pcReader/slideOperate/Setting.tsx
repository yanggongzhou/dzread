import React, { FC } from 'react'
import { EOperateType, EThemeType } from "typings/reader.interface";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store";
import { setFontSize, setOperateType, setTheme } from "@/store/modules/read.module";
import styles from '@/components/pcReader/slideOperate/Setting.module.scss';
import classNames from "classnames";

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
    // EThemeType.default1,
    EThemeType.pc1,
    EThemeType.pc2,
    EThemeType.pc3,
    EThemeType.pc4,
  ]

  return <div className={styles.settingBox}>

    <Image
      onClick={() => dispatch(setOperateType(EOperateType.normal))}
      className={styles.cancelIcon}
      width={32}
      height={32}
      src={'/images/download/cancel.png'}
      alt={'x'}
    />

    <div className={styles.controlSize}>
      <div className={styles.sizeTitle}>字体</div>
      <div className={styles.sizeBox}>
        <div className={classNames(styles.size, fontSize === 16 && styles.sizeDis)} onClick={() => cutSize()}>A-</div>
        <div className={styles.size2}>{ fontSize }</div>
        <div className={classNames(styles.size, fontSize === 30 && styles.sizeDis)} onClick={() => addSize()}>A+</div>
      </div>
    </div>

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


  </div>
}
export default PcSetting;
