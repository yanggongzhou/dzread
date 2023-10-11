import { EBookStatus2 } from "@/typings/book.interface";

/**
 * 分类上行参数
 */
export interface INetBrowseReq {
  id?: string; // 一级分类id，如果有cid，将不会按照这个传
  cid?: string; // 二级分类id，如果有tid，将不会按照这个传
  tid?: string; // 三级分类id，如果有三级id就查三级id不查二级id的
  status?: EBookStatus;
  wordType?: string;
  index?: string; // 书籍页码，默认1
  size?: string;  // 书籍页码，默认10
  sort?: '1' | '2'; // 1-点击数，2-评分
}
/**
 * 书籍状态 1-连载，2-完本，不传是全部
 */
export enum EBookStatus {
  连载 = 1,
  完结 = 2,
}

/**
 * 分类下行参数
 */
export interface INetBrowseRes {
  books?: IBookSearchVo[];
  totalSize: number;
  typeOneVoList: ITypeOneVo[];
  statusMark: {title: string; markId: string}[]; // 书籍状态栏(四级)
  wordType: {name: string; type: string}[];// 分类书籍字数筛选
}

export interface IBookSearchVo {
  bookId: string;
  bookName: string;
  coverWap?: string;
  introduction?: string;
  author: string;
  totalWordSize: string; // 书籍总字数
  clickNum: string; // 点击数
  scoreNum?: string; // 书籍评分
  lastChapterId: string; // 最新章节ID
  lastChapterUtime: string; // 章节更新时间
  bookTypeThreeMap: string[]; // 标签集合
  status: EBookStatus2; // 书籍状态
  totalChapterNum: string; // 总章节数
  hot?: string; // 热度信息
}

export interface ITypeOneVo {
  categoryId: number;
  categoryName: string;
  typeTwoVos: ITypeTwoVo[];
}

export interface ITypeTwoVo {
  cid: string;
  title: string;
  categoryMark: {name: string; type: string}[]; // 分类列表栏（三级）
  // imgUrl: string; // 图片，分类下第一本书封面
  // markMsg: string; // 角标，一个字
  // markColor: string; // 角标颜色，‘#564656’
}
