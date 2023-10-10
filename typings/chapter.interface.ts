/**
 * 5053 单章加载下行参数
 */
import { EIsCharge } from "@/typings/book.interface";

export interface INetChapterDetailRes {
  bookId: string;
  chapterInfo: IReadInfo;
  status: 1 | 2 | 3, // 1.免费 2.不免费 3:书籍下架
  preChapterId?: string;
  preChapterName?: string;
  nextChapterId?: string;
  nextChapterName?: string;
  chapterIndex: number;
  sysTime: string;
}

export interface IReadInfo {
  chapterId: string;
  chapterStatus: EChapterStatus;
  content: string[];
  chapterName: string;
  chapterUtime: string;

  isCharge: EIsCharge;
}

// 1.正常 2.被删除 3.缺内容，未领取 4.缺内容，已领取
export enum EChapterStatus {
  正常 = 1,
  被删除,
  未领取,
  已领取
}
