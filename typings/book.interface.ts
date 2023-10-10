import { IBookSearchVo } from "@/typings/browse.interface";
/**
 * 书籍下行参数
 */

export interface INetBookRes {
  chapters: IChapterInfo[]; // 下发 <=50个章章节
  book: IBookInfoItem;
  recommendBook: IBookSearchVo[];
}

export interface IChapterInfo {
  bookId: string;
  chapterId: string;
  chapterName: string;
  isCharge: EIsCharge;
  chapterIndex: number; // 第几章
}

export enum EIsCharge {
  免费章节 = 0,
  收费章节  = 1,
}

export interface IBookInfoItem {
  coverWap: string;
  bookName: string;
  bookId: string;
  introduction: string;
  introductionList: string[];
  author: string;
  totalWordSize?: string; // 总字数
  totalChapterNum?: string; // 总章节字数
  clickNum?: string; // 点击数
  status: EBookStatus2;
  tagList?: string[]; //标签列表，最多下放6个
  bookTypeThreeMap?: string[]; // 三级分类
  lastChapterId?: string;
  lastChapterName?: string;
  lastChapterUtime?: string;
  threeTypeTag?: string[]; // 三级分类
  scoreNum?: string; // 评分人数
  scoreNumUnit?: string; // 评分人数单位
}

export enum EBookStatus2 {
  连载 = 0,
  完结 = 1,
}
