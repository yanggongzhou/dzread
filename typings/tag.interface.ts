import { IBookItem } from "@/typings/home.interface";

export interface INetKeywordsReq {
  type?: 0;
  pageNum: number;
  pageSize?: number;
}

export interface IKeywordItem {
  id: string;
  keyword: string;
  utime: string;
}

export interface INetKeywordsRes {
  data: IKeywordItem[];
  pageNo: number;
  limit: number;
  totalNum: number;
  totalPage: number;
}

export interface INetKeywordTagReq {
  id: string;
  pageNo: number;
  pageSize?: number;
}

export interface ITagBookList {
  data: ITagBookItem[];
  pageNo: number;
  limit: string;
  totalNum: number;
  totalPage: number;
}

export interface INetKeywordTagRes {
  bookList: ITagBookList;
  keywordList: IKeywordItem[];
  keyword: IKeywordItem;
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
