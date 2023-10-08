import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
/**
 * 关键词页
 */
type ResponseData = {
  words: string[];
  totalSize: number;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {

  const data = await ownFetch('/index.do');

  res.status(200).json(data)
}
