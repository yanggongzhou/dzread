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
  tagV3: string[]; // 标签集合
}




// -------------------------------------------------
import { IBookItem } from "@/typings/home.interface";

export interface INetBrowseReq {
  pageNo: number;
  typeTwoId?: number | null,
  pageSize?: number;
}

export interface IBrowseTypes {
  id: number;
  name: string;
  replaceName: string; // 去除特殊字符
  checked: boolean;
}

export interface INetBrowseRes {
  types: IBrowseTypes[];
  bookList: IBookItem[];
  currentPage: number;
  total: number;
  pages: number;
}
