import { IClipboard } from "@/typings/hive.interfaces";
import { EOperateType, EThemeType } from "@/typings/reader.interface";
import { EChannelCode } from "@/typings/home.interface";

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
  code: EChannelCode;
}

export interface IReadStore {
  theme: EThemeType;
  fontSize: number;
  operateType: EOperateType;
  catalogVisible: boolean;
  controlVisible: boolean;
}
