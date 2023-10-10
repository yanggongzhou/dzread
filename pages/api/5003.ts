import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { INetRecommendRes } from "@/typings/recommend.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetRecommendRes>
) {

  const { data = [], totalNum = 0} = await ownFetch('/moreList.do', { pageNo: 1, pageSize: 10,  position: 1 });

  const result: INetRecommendRes = {
    bookInfos: data.map((item, index) => {
      return {
        bookId: item.bookId,
        bookName: item.bookName,
        coverWap: item.cover,
        introduction: item.introduction,
        author: item.author,
        protagonist: item.author,
        threeTypeTag: [item.author, '标签2', '标签3' ],
        totalChapterNum: item.chapterCount + '',
        totalWordSize: item.chapterCount + '1111xx字',
      }
    }),
    totalSize: totalNum,
  }

  res.status(200).json(result)
}
