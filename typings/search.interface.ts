// import { IBookItem } from "@/typings/home.interface";
//
// export interface INetSearchReq {
//   keyword: string;
//   pageNo?: number;
//   pageSize?: number;
// }
//
// export interface INetSearchRes {
//   size: number;
//   total: number;
//   current: number;
//   pages: number;
//   records: IBookItem[];
// }



export interface INetThinkRes {
  suggestList: ISuggestVo[]
}

export interface ISuggestVo {
  type: string;
  title: string;
  cover?: string;
  bookId?:string;
  authorName?: string;
  bookAlias?: string;
}
