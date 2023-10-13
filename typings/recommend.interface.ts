/**
 * 书籍类型上行参数
 */
import { IBookInfo } from "@/typings/home.interface";

export interface INetRecommendReq {
  index: number | string;
  size: number;
  bookPackageId: number; // 包ID
}
/**
 * 书籍类型下行参数
 */
export interface INetRecommendRes {
  bookInfos: IBookInfo[];
  totalSize: number;
  name: string;
}
