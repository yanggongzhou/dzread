import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
// 书城二级页面
type ResponseData = {
  message: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {

  const data = await ownFetch('/index.do');

  res.status(200).json(data)
}
