import { IBookSearchVo } from "@/typings/browse.interface";
import { AnyObject } from "@/typings/hive.interfaces";
import { IBookTypeThreeVo } from "@/typings/home.interface";
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
  免费章节 = '0',
  收费章节  = '1',
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
  bookTypeThreeMap?: AnyObject; // 三级分类
  bookTypeThree?: IBookTypeThreeVo[]; // 三级分类
  lastChapterId?: string;
  lastChapterName?: string;
  lastChapterUtime?: string;
  scoreNum?: string; // 评分人数
  scoreNumUnit?: string; // 评分人数单位
  bookScore: string;
  totalReadNum: string;
  totalReadNumUnit: string;
  wordSize: string;
  wordSizeUnit: string;
}

export enum EBookStatus2 {
  连载 = 0,
  完结 = 1,
}


/**
 * 5105- 书籍详情页推荐上行参数
 */
export interface INetBookReReq {
  index?: number;
  excludeBookId?: string[];
  typeThreeList?: [] // 三级分类id
}
/**
 * 5105- 书籍详情页推荐下行参数
 */

export interface INetBookReRes {
  bookList: IBookSearchVo[];
}
