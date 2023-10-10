import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { ERankVoSex, ESexType, INetRankingRes } from "@/typings/ranking.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetRankingRes>
) {

  const { data = [], totalNum = 0} = await ownFetch('/moreList.do', { pageNo: 1, pageSize: 10,  position: 1 });

  const subList = [
    { id: 1, name: '热门榜', sex: ERankVoSex.男频, styleList: [{ style: 1, styleName: '日榜' },{ style: 2, styleName: '月榜' }]},
    { id: 2, name: '畅销榜', sex: ERankVoSex.男频, styleList: [{ style: 1, styleName: '日榜' },{ style: 2, styleName: '月榜' }]},
    { id: 3, name: '完本榜', sex: ERankVoSex.男频, styleList: [{ style: 1, styleName: '日榜' },{ style: 2, styleName: '月榜' }]},
    { id: 4, name: '好评榜', sex: ERankVoSex.男频, styleList: [{ style: 1, styleName: '日榜' },{ style: 2, styleName: '月榜' }]},
    { id: 5, name: '新书榜', sex: ERankVoSex.男频, styleList: [{ style: 1, styleName: '日榜' },{ style: 2, styleName: '月榜' }]},
    { id: 6, name: '经典榜', sex: ERankVoSex.男频, styleList: [{ style: 1, styleName: '日榜' },{ style: 2, styleName: '月榜' }]},
  ]
  const result: INetRankingRes = {
    rankData: [
      {
        rankType: ESexType.Male,
        rankTypeName: '男生',
        subList,
      },
      {
        rankType: ESexType.Female,
        rankTypeName: '女生',
        subList,
      }
    ],
    rankBook: data.map(val => {
      return {
        bookId: val.bookId,
        bookName:  val.bookName,
        coverWap: val.cover,
        threeTypeTag: [val.author, '标签2', '标签3' ],
        num: val.viewCount + '万热度值',
      }
    }),
    totalSize: totalNum,
  }

  res.status(200).json(result)
}
