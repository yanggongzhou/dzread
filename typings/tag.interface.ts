import { IBookItem } from "@/typings/home.interface";
import { ESearchType } from "@/typings/sitemap.interface";

export interface INetKeywordsReq {
  searchType: ESearchType;
  pageNum: number;
  pageSize?: number;
}

export interface IKeywordItem {
  id: string;
  name: string;
  utime: string;
}

export interface INetKeywordsRes {
  data: IKeywordItem[];
  currentPage: number;
  total: number;
  pages: number;
}

export interface INetKeywordTagReq {
  id: string;
  pageNum: number;
  pageSize?: number;
}

export interface INetKeywordTagRes {
  books: IBookItem[];
  currentPage: number;
  pages: number;
  total: number;
  relationKeywords: IKeywordItem[];
  keyword: string;
  keyStatus: 0 | 1;
}

export interface ITagBookItem extends IBookItem {
  bookId: string;
  bookName: string;
  copyrighted: boolean;
  cover: string;
  introduction: string;
  recommend: boolean;
  tag: string;
}
