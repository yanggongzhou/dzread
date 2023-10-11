/**
 * 5053 单章加载下行参数
 */

export interface INetChapterDetailRes {
  bookId: string;
  bookName: string;
  coverWap: string;
  chapterId: string;
  chapterStatus: number; // 1.正常 2.被删除 3.缺内容，未领取 4.缺内容，已领取
  content: string[];
  chapterName: string;
  chapterUtime: string;
  status: EChapterStatus; // 1.免费 2.不免费 3:书籍下架
  preChapterId?: string;
  preChapterName?: string;
  nextChapterId?: string;
  nextChapterName?: string;
  chapterIndex: number;
  sysTime: string;
  author: string;
}

// 1.免费 2.不免费 3:书籍下架
export enum EChapterStatus {
  免费 = 1,
  不免费,
  书籍下架,
}
