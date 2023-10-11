import { INetHomeRes } from "@/typings/home.interface";
import {
  INetBookReReq, INetBookReRes,
  INetBookRes
} from "@/typings/book.interface";
import { IBookSearchVo, INetBrowseReq, INetBrowseRes } from "@/typings/browse.interface";
import { INetTagReq, INetTagRes } from "@/typings/tag.interface";
import { ownFetch, poFetch } from "@/server/fetch";
import { INetRankingRes, INetRankingReq } from "@/typings/ranking.interface";
import { EDevice } from "@/store/store.interfaces";
import { INetRecommendReq, INetRecommendRes } from "@/typings/recommend.interface";
import { INetCatalogReq, INetCatalogRes } from "@/typings/catalog.interface";
import { INetKeyRes } from "@/typings/keywords.interface";
import { INetChapterDetailRes } from "@/typings/chapter.interface";
import { INetThinkRes } from "@/typings/search.interface";

// 5000获取首页
export const netHome = (type: EDevice): Promise<INetHomeRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5000', { type });
}

// 5001 排行榜页面
export const netRanking = (body: INetRankingReq): Promise<INetRankingRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5001', body);
}

// 5002 【分类】分类接口二级页面
export const netBrowse = (body: INetBrowseReq): Promise<INetBrowseRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5002', body);
}

// 5003 书籍类型二级页面
export const netRecommend = (body: INetRecommendReq): Promise<INetRecommendRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5003', body);
}


// 获取书籍详情
export const netBook = (bookId: string): Promise<INetBookRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5051', { bookId });
}

// 5052获取章节列表
export const netCatalog = (data: INetCatalogReq): Promise<INetCatalogRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5052', data);
}

// 5053 单章加载
export const netDetailChapter = (bookId: string, chapterId: string): Promise<INetChapterDetailRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5053', { bookId, chapterId })
}

// 关键词列表
export const netKeys = async (page: number): Promise<INetKeyRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5104', { page })
}

// 5101
export const netTag = (params: INetTagReq): Promise<INetTagRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5101', { ...params })
}

// 5102 - 搜索联想词
export const netThink = (keyword: string): Promise<INetThinkRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/api/5102', { keyword })
}

// 5105- 书籍详情页推荐
export const netBookRe = (params: INetBookReReq): Promise<INetBookReRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5105', { ...params })
}

// 搜索接口
export const netSearch = (keyWord: string): Promise<IBookSearchVo[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/search.do', { keyWord })
}
