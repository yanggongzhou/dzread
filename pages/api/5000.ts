import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import {
  EChannelCode,
  EColumnType,
  IBookInfo,
  INetHomeItem,
  INetHomeRes,
  ISeoBannerManageVo,
  ISeoChannelListVo,
} from "@/typings/home.interface";
import { ESexType, IRankBookDataVo } from "@/typings/ranking.interface";
import { EBookStatus, IBookSearchVo } from "@/typings/browse.interface";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetHomeRes>
) {

  const homeData: INetHomeItem[] = await ownFetch('/index.do');
  const seoBannerManageVos = (homeData[0]?.bookList ?? []).map(item => {
    return {
      id: item.bookId,
      name: item.bookName,
      bookId: item.bookId,
      pcUrl: item?.bannerPic || item.cover,
      wapUrl: item?.bannerPic || item.cover,
    }
  }) as ISeoBannerManageVo[];

  const bookInfoList: IBookInfo[] = homeData[1].bookList.map(item => {
    return {
      bookId: item.bookId,
      bookName: item.bookName,
      coverWap: item.cover,
      introduction: item.introduction,
      protagonist: item.author || '主角名',
      author: item.author,
      threeTypeTag: [item.author, '标签2', '标签3' ],
    }
  })

  const rankBookInfos: IRankBookDataVo[] = homeData[2].bookList.map(item => {
    return {
      bookId: item.bookId,
      bookName: item.bookName,
      coverWap: item.cover,
      threeTypeTag: [item.author, '标签2', '标签3' ],
      num: item.viewCount + '影响力值',
    }
  })

  const browseBookInfos: IBookSearchVo[] = homeData[3].bookList.map((item, index) => {
    return {
      bookId: item.bookId,
      bookName: item.bookName,
      coverWap: item.cover,
      introduction: item.introduction,
      author: item.author,
      totalWordSize: 'xxx万字数', // 书籍总字数
      clickNum: item.viewCountDisplay,
      scoreNum: item.ratings + '', // 书籍评分
      lastChapterId: '最新章节ID', // 最新章节ID
      lastChapterUtime: item.lastUpdateTime, // 章节更新时间
      tagV3: [item.author, '标签2', '标签3' ],
      status: index % 2 == 1 ? EBookStatus.连载 : EBookStatus.完结,
    }
  })

  const result: INetHomeRes = {
    seoBannerManageVos,
    seoChannelListVos: [] as ISeoChannelListVo[],
    seoColumnVos: [
      {
        code: EChannelCode.男生, // 1-首页  4-男生  5-女生  6-出版
        seoColumnManageVos: [
          {
            id: 1,
            channelId: 1,
            name: '男生精选',
            sex: ESexType.Male,
            type: EColumnType.书籍类型,
            sort: 1,
            bookInfos: bookInfoList, // type=1时下发-书籍类型
          },
          {
            id: 2,
            channelId: 2,
            name: '排行榜',
            sex: ESexType.Male,
            type: EColumnType.排行榜,
            sort: 1,
            rankVos: [
              {
                rankId: 12,
                rankName: '新书榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 13,
                rankName: '畅销榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 14,
                rankName: '完本榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 15,
                rankName: '好评榜',
                bookInfos: rankBookInfos,
              },
            ], // type=2时下发
          },
          {
            id: 3,
            channelId: 3,
            name: '分类推荐',
            sex: ESexType.Male,
            type: EColumnType.分类推荐,
            sort: 1,
            bookTypeVos: [
              { classifyCode: 31, classifyName: '都市', books: browseBookInfos },
              { classifyCode: 32, classifyName: '玄幻', books: browseBookInfos },
              { classifyCode: 33, classifyName: '仙侠', books: browseBookInfos },
              { classifyCode: 34, classifyName: '历史', books: browseBookInfos },
              { classifyCode: 35, classifyName: '悬疑', books: browseBookInfos },
            ]
          }
        ],
      }
    ]
  }

  res.status(200).json(result)
}
