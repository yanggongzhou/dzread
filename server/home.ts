import Service from "@/server/request";
import { ELanguage, IBookItem, INetHomeItem } from "@/typings/home.interface";
import { INetMoreReq, INetMoreResult } from "@/typings/more.interface";
import {
  INetBookRes, INetChapterDetailRes,
} from "@/typings/book.interface";
import {
  INetAllBookReq,
  INetAllBookRes,
  INetAllColumnRes,
  INetIncrementBookRes
} from "@/typings/sitemap.interface";
import { INetBrowseReq, INetBrowseRes, INetBrowseTypeRes } from "@/typings/browse.interface";
import { INetKeywordsReq, INetKeywordsRes, INetKeywordTagReq, INetKeywordTagRes } from "@/typings/tag.interface";
import { INetSearchReq, INetSearchRes } from "@/typings/search.interface";

// 获取首页index
export const netHomeData = (): Promise<INetHomeItem[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return Service.get('/index.do')
}
// 浏览
export const netBrowse = async (params: INetBrowseReq): Promise<INetBrowseRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.post('/webfic/home/browse', { pageSize: 60, ...params }, {
    baseURL: "https://yfbwww.webfic.com",
    headers: {
      language: 'zhHans',
      pline: "DRAMABOX"
    }  as any
  })
}

// 查看更多
export const netMoreBook = (params: INetMoreReq): Promise<INetMoreResult | 'BadRequest_404' | 'BadRequest_500'> => {
  return Service.get('/moreList.do', { params: { pageNo: 1, pageSize: 10, ...params } })
}

// 获取书籍详情
export const netBook = (bookId: string): Promise<INetBookRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return Service.get('/detail.do', { params: { bookId } })
}

// 获取所有书籍id
export const netAllBook = async (params: INetAllBookReq): Promise<INetAllBookRes[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/webfic/website/all', { params: { ...params } })
}

// 获取所有栏目信息
export const netAllColumn = async (): Promise<INetAllColumnRes[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/webfic/website/column/stat')
}

// 本周有追更的书籍列表
export const netIncrementBook = async (pageNo = 1, pageSize = 10): Promise<INetIncrementBookRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/webfic/website/book/update', { params: { pageNo, pageSize } })
}

// 全部浏览类目
export const netBrowseType = async (): Promise<INetBrowseTypeRes[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/webfic/website/type/list')
}

// 获取章节详情
export const netDetailChapter = async (bookId: string, chapterId?: string): Promise<INetChapterDetailRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/asg/portal/website/chapterInfo.do', {
    baseURL: "https://yfb.klynf.com",
    params: { bookId, chapterId, pline: 3 }
  })
}

// 关键词列表
export const netKeywords = async (params: INetKeywordsReq): Promise<INetKeywordsRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/keywordlist.do', { params: { pageSize: 10, ...params } })
}

// 关键词聚合页
export const netKeywordTag = async (params: INetKeywordTagReq): Promise<INetKeywordTagRes | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/keywordinfo.do', { params: { pageSize: 10, ...params } })
}

// 搜索接口
export const netSearch = async (keyWord: string): Promise<IBookItem[] | 'BadRequest_404' | 'BadRequest_500'> => {
  return await Service.get('/search.do', { params: { keyWord } })
}
