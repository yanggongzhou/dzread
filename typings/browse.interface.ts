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
