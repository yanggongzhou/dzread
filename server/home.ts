import { IBookItem, INetHomeItem, INetHome } from "@/typings/home.interface";
import { INetMoreReq, INetMoreResult } from "@/typings/more.interface";
import {
  INetBookRes, INetChapterDetailRes, INetListChapterReq, INetListChapterRes,
} from "@/typings/book.interface";
import { INetBrowseReq, INetBrowseRes } from "@/typings/browse.interface";
import { INetKeywordsReq, INetKeywordsRes, INetKeywordTagReq, INetKeywordTagRes } from "@/typings/tag.interface";
import { ownFetch, poFetch } from "@/server/fetch";

// 获取首页index
export const netHome = (): Promise<INetHome | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/5000');
}

export const netHomeData = (): Promise<INetHomeItem[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return ownFetch('/index.do');
}

// 浏览
export const netBrowse = async (body: INetBrowseReq): Promise<INetBrowseRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return poFetch('/api/browse', body);
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
