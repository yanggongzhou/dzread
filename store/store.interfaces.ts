import { IClipboard } from "@/typings/hive.interfaces";
import { EOperateType, EThemeType } from "@/typings/reader.interface";

export interface IHiveStore {
  clipboard: IClipboard;
}

export enum EDevice {
  wap = 1,
  pc = 2,
}

export interface IAppStore {
  device: EDevice;
  isShowBrowse: boolean;
}

export interface IReadStore {
  theme: EThemeType;
  fontSize: number;
  operateType: EOperateType;
  catalogVisible: boolean;
  controlVisible: boolean;
}
