import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EIsCharge } from "@/typings/book.interface";
import { INetCatalogRes } from "@/typings/catalog.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetCatalogRes>
) {

  const { bookInfo = {} } = await ownFetch('/detail.do', { bookId: '11000162501' });
  const { data = [] } = await ownFetch('/chapterList.do', { bookId: "11000162501", pageNo: 1, pageSize: 2000, })
  const result: INetCatalogRes = {
    chapterList: data.map((item, index) => {
      return {
        bookId: "11000162501",
        chapterId: item.id,
        isCharge: item.isCharge ? EIsCharge.收费章节: EIsCharge.免费章节,
        chapterName: item.chapterName,
        chapterIndex: index + 1,
      }
    }),
    author: bookInfo.author,
    bookName: bookInfo.bookName,
    coverWap: bookInfo.cover,
    totalChapters: bookInfo.chapterCount
  }

  res.status(200).json(result)
}
