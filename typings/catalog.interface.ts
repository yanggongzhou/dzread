/**
 * 5052 章节列表接口上行参数
 */
import { IChapterInfo } from "@/typings/book.interface";

export interface INetCatalogReq {
  bookId: string;
  startIndex: number; // 章节开始索引，默认1
  endIndex: number; // 章节结束索引，默认100
}
/**
 * 5052 章节列表接口下行参数
 */
export interface INetCatalogRes {
  chapterList: IChapterInfo[];
  totalChapters: string;
  bookName: string;
  coverWap: string;
  author: string;
}
