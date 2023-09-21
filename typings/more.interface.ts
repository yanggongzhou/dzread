import { INetHomeItem } from "@/typings/home.interface";

export interface INetMoreReq {
  position: number;
  pageNo?: number;
  pageSize?: number;
}

export interface INetMoreResult {
  data: INetHomeItem;
  currentPage: number;
  pages: number;
}
