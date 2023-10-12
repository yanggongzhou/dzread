/**
 * 上行参数
 */
import { ERankSex } from "@/typings/home.interface";
import { AnyObject } from "@/typings/hive.interfaces";

export interface INetRankingReq {
  index: number; // 第几页
  size: number; // 页面大小
  style?: number;
  rankId?: number; // 排行榜id
}
/**
 * 下行参数
 */
export interface INetRankingRes {
  rankData: IRankDataVo[]; // 排行榜名称列表
  rankBook: IRankBookDataVo[]; // 某个排行榜对应的书籍信息data
  totalSize: number; // 总条数
}

export interface IRankDataVo {
  rankType: ERankSex;
  rankTypeName: string; // 排行榜类型名称 男生/女生
  subList: ISeoRankVo[]; // 排行榜名称列表
}

export interface ISeoRankVo {
  id: number;
  name: string;
  sex: ERankVoSex;
  styleList: IFastRankStyleVo[]; // 日榜月榜集合
}

export enum ERankVoSex {
  出版 = 1,
  男频 = 2,
  女频 = 3,
}

export interface IFastRankStyleVo {
  style: number;
  styleName: string;
}

export interface IRankBookDataVo {
  bookId: string; // 书籍ID
  bookName: string; // 书籍名称
  coverWap: string; // 封面
  bookTypeThreeMap: AnyObject; // 标签集合
  num: string; // 影响力值
  commentScore: string;
}
