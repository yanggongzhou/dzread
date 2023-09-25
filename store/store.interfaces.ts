import { ELanguage } from "@/typings/home.interface";
import { IClipboard } from "@/typings/hive.interfaces";
import { EOperateType, EThemeType } from "@/typings/reader.interface";

export interface IHiveStore {
  clipboard: IClipboard;
  copyText: string;
  language: ELanguage;
}

export enum EDevice {
  mobile = 1,
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
}
