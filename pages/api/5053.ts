import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EChapterStatus, INetChapterDetailRes } from "@/typings/chapter.interface";
import { EIsCharge } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetChapterDetailRes>
) {

  const chapterInfo = await ownFetch('/chapterInfo.do', { bookId: '11000162501', chapterId: '33338367' })
  const contentList = chapterInfo.content.split('\n');

  const result: INetChapterDetailRes = {
    bookId: '11000162501',
    chapterInfo: {
      chapterId: '33338367',
      chapterStatus: EChapterStatus.正常,
      content: contentList,
      chapterName: 'xxxxz章节名称',
      chapterUtime: 'xxxxxxxxxx',
      isCharge: EIsCharge.免费章节
    },
    status: 1,
    // preChapterId?: string;
    // preChapterName?: string;
    nextChapterId: '33338370',
    nextChapterName: '第e章',
    chapterIndex: 2,
    sysTime: 'xxxxx'
  }

  res.status(200).json(result)
}
