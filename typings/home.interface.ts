/**
 * 首页下行参数
 */
import { EDevice } from "@/store/store.interfaces";
import { ESexType, IRankBookDataVo } from "@/typings/ranking.interface";
import { IBookSearchVo } from "@/typings/browse.interface";

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
  sex: ESexType;
  type: EColumnType;
  sort: number;
  bookInfos?: IBookInfo[];// type=1时下发-书籍类型
  rankVos?: IRankVo[]; // type=2时下发
  bookTypeVos?: IBookTypeVo[]; // type=3时下发
}

export enum EColumnType {
  书籍类型 = 1,
  排行榜,
  分类推荐,
}

export interface IBookInfo {
  bookId: string;
  bookName: string;
  coverWap: string;
  introduction: string;
  protagonist: string; // 主角
  author: string;
  threeTypeTag: string[]
}

export interface IRankVo {
  rankId: number; // 排行榜ID
  rankName: string;
  bookInfos: IRankBookDataVo[];
}

export interface IBookTypeVo {
  classifyCode: number; // 分类ID
  classifyName: string;
  books: IBookSearchVo[]
}




// ---------------------------------
export enum EnumPosition {
  顶部banner = 0,
  熱銷好文 = 1,
  好評佳作 = 2,
  排行榜 = 3,
  大神好文 = 4,
  主編力薦 = 5,
  今日必讀 = 6,
  火熱推薦 = 7,
  CustomInset = 8
}

export interface INetHomeItem {
  position: EnumPosition;
  bookList: IBookItem[]
  columns?: INetHomeItem[]
}

export interface IBookItem {
  name: string;
  actionType: string;
  action: string;
  chapterCount: number;
  ratings: number;
  bookId: string;
  bookName: string;
  author: string;
  introduction: string;
  cover: string;
  tags: string[];
  viewCount: number;
  lastUpdateTime: string;
  writeStatus: string; // COMPLETE
  viewCountDisplay: string;
  lastUpdateTimeDisplay: string;
  replacedBookName: string;
  firstChapterId?: string;
  columnName: string;
  typeTwoNames: string[];
  typeTwoName: string;
  typeTwoIds: string[];
}
