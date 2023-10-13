/**
 * 首页下行参数
 */
import { EDevice } from "@/store/store.interfaces";
import { ERankVoSex, IRankBookDataVo } from "@/typings/ranking.interface";
import { IBookSearchVo } from "@/typings/browse.interface";
import { AnyObject } from "@/typings/hive.interfaces";

export interface INetHomeRes {
  seoBannerManageVos: ISeoBannerManageVo[];
  seoChannelListVos: ISeoChannelListVo[];
  seoColumnVos: ISeoColumnVo[];
}
/**
 * Banner
 */
export interface ISeoBannerManageVo {
  id: number;
  name: string;
  bookId: string;
  pcUrl: string;
  wapUrl: string;
  comment?: string; // 备注
}
/**
 * 频道列表
 */
export interface ISeoChannelListVo {
  id: number;
  channelId: number;
  name: string;
  type: EDevice;
  code: EChannelCode;
  sort: number;
}
/**
 * 编码
 */
export enum EChannelCode {
  首页 = 1,
  分类,
  排行榜,
  男生,
  女生,
  出版,
}
/**
 * 栏目信息
 */
export interface ISeoColumnVo {
  code: EChannelCode; // 1-首页  4-男生  5-女生  6-出版
  seoColumnManageVos: ISeoColumnManage[];
}

export interface ISeoColumnManage {
  id: number;
  channelId: number;
  name: string;
  sex: ERankVoSex;
  type: EColumnType;
  sort: number;
  bookInfos?: IBookInfo[];// type=1时下发-书籍类型
  rankVos?: IRankVo[]; // type=2时下发
  bookTypeVos?: IBookTypeVo[]; // type=3时下发
  bookPackageId: number;
  rankSex?: ERankSex;
}
/**
 * 1：男生 2：女生
 */
export enum ERankSex {
  Male = 1,
  Female = 2,
}

export enum EColumnType {
  书籍类型 = 1,
  排行榜,
  分类推荐,
}

export interface IBookInfo {
  bookId: string;
  bookName: string;
  bookScore: string;
  coverWap: string;
  introduction: string;
  protagonist: string; // 主角
  bookTypeThreeMap?: AnyObject; // 三级标签
  bookTypeThree?: IBookTypeThreeVo[]
  author: string;
  totalChapterNum: string; // 总章节数
  totalWordSize: string; // 总字数
}

export interface IBookTypeThreeVo {
  id: number;
  name: string;
}

export interface IRankVo {
  rankCode: number; // 排行榜ID
  rankName: string;
  bookInfos: IRankBookDataVo[];
}

export interface IBookTypeVo {
  classifyCode: number; // 分类ID
  classifyName: string;
  books: IBookSearchVo[]
}
