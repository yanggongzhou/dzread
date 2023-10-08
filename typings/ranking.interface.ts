/**
 * 上行参数
 */
export interface INetRankingReq {
  index: number; // 第几页
  size: number; // 页面大小
  style: ERankStyle;
  rankId?: number; // 排行榜id
}
/**
 * 1、日榜，2月榜；
 */
export enum ERankStyle {
  Daily = 1,
  Monthly = 2,
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
  rankType: ERankType;
  rankTypeName: string; // 排行榜类型名称 男生/女生
  subList: ISeoRankVo[]; // 排行榜名称列表
}
/**
 * 1：男生 2：女生
 */
export enum ERankType {
  Male = 1,
  Female = 2,
}

export interface ISeoRankVo {
  id: number;
  name: string;
  sex: ERankType;
}

export interface IRankBookDataVo {
  bookId: string; // 书籍ID
  bookName: string; // 书籍名称
  coverWap: string; // 封面
  threeTypeTag: string[]; // 标签集合
  num: string; // 影响力值
}
