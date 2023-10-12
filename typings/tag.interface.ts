import { ISeoKeyWords } from "@/typings/keywords.interface";
import { IBookSearchVo } from "@/typings/browse.interface";
/**
 * 5101 搜索上行
 */
export interface INetTagReq {
  searchType?: ESearchType;
  tagId?: number;
  index?: number;
  keyword?: string;
}

export enum ESearchType {
  全文 = '',
  书籍 =  '1',
  作者 = '2',
  标签 = '3',
  免费 = '4',
  无结果 = '5',
}

/**
 * 5101 搜索下行
 */
export interface INetTagRes {
  searchType: string;
  bookList: IBookSearchVo[];
  totalSize: number;
  isMore: 1 | 0; // 是否还有下一页
  tagName?: string;
  words?: ISeoKeyWords[]; // 有文字重合的关键词
}
