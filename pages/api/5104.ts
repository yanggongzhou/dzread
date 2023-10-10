import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { INetKeyRes } from "@/typings/keywords.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetKeyRes>
) {

  const { data = [], pageNo = 1, totalPage = 1 } = await ownFetch('/keywordlist.do', { type: 0, pageNum: 1, pageSize: 10 })

  const result: INetKeyRes = {
    totalSize: totalPage * pageNo,
    words: data.map(val => {
      return {
        id: val.id,
        name: val.keyword
      }
    })
  }

  res.status(200).json(result)
}
