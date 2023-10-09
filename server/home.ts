import { IBookItem, INetHomeItem, INetHomeRes } from "@/typings/home.interface";
import { INetMoreReq, INetMoreResult } from "@/typings/more.interface";
import {
  INetBookRes, INetChapterDetailRes, INetListChapterReq, INetListChapterRes,
} from "@/typings/book.interface";
import { INetBrowseReq, INetBrowseRes } from "@/typings/browse.interface";
import { INetKeywordsReq, INetKeywordsRes, INetKeywordTagReq, INetKeywordTagRes } from "@/typings/tag.interface";
import { ownFetch, poFetch } from "@/server/fetch";
import { INetRankingRes, INetRankingReq } from "@/typings/ranking.interface";
import { EDevice } from "@/store/store.interfaces";

// 获取首页index
export const netHome = (type: EDevice): Promise<INetHomeRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5000');
}

// 5001 排行榜页面
export const netRanking = (body: INetRankingReq): Promise<INetRankingRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5001', body);
}

// 5002 【分类】分类接口二级页面
export const netBrowse = (body: INetBrowseReq): Promise<INetBrowseRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5002', body);
}


export const netHomeData = (): Promise<INetHomeItem[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/index.do');
}

// 查看更多
export const netMoreBook = (params: INetMoreReq): Promise<INetMoreResult | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/moreList.do', { pageNo: 1, pageSize: 10, ...params })
}

// 获取书籍详情
export const netBook = (bookId: string): Promise<INetBookRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/detail.do', { bookId })
}

// 获取章节详情
export const netDetailChapter = (bookId: string, chapterId?: string): Promise<INetChapterDetailRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/chapterInfo.do', { bookId, chapterId })
}

// 获取章节列表
export const netListChapter = (params: INetListChapterReq): Promise<INetListChapterRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/chapterList.do', { pageSize: 10, ...params })
}

// 关键词列表
export const netKeywords = async (params: INetKeywordsReq): Promise<INetKeywordsRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/keywordlist.do', { pageSize: 10, ...params })
}

// 关键词聚合页
export const netKeywordTag = (params: INetKeywordTagReq): Promise<INetKeywordTagRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/keywordinfo.do', { pageSize: 10, ...params })
}

// 搜索接口
export const netSearch = (keyWord: string): Promise<IBookItem[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/search.do', { keyWord })
}
