import { EnumPosition, IBookItem } from "@/typings/home.interface";

export interface INetBookRes extends IBookItem{
  bookInfo: IBookItem;
  alsoLook: IBookItem[];
  lastChapter: IChapterListItem;
  position: EnumPosition;
}

export interface IChapterListItem {
  chapterName: string;
  id: string;
  isCharge: boolean;
}

export interface INetChapterDetailRes extends IChapterListItem {
  bookInfo: IBookItem;
  chapterIndex: number;
  content: string;
  lastFreeChapterId: string;
  nextChapter?: IChapterListItem;
  preChapter?: IChapterListItem;
  position: EnumPosition;
}

export interface INetListChapterReq {
  bookId: string;
  pageNo: number;
  pageSize?: number;
}

export interface INetListChapterRes {
  data: IChapterListItem[];
  pageNo: number;
  limit: string;
  totalNum: number;
  totalPage: number;
}
