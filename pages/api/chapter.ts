import type { NextApiRequest, NextApiResponse } from 'next'
import { netDetailChapter } from "@/server/home";

export interface IResChapter {
  nextId?: string;
  chapterName: string;
  content: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResChapter>
) {
  const { bookId, chapterId } = req.query as { bookId: string; chapterId: string };

  const chapterInfo = await netDetailChapter(bookId, chapterId);
  if (chapterInfo === 'BadRequest_404') {
    return { notFound: true }
  }
  if (chapterInfo === 'BadRequest_500' || !chapterInfo) {
    return { redirect: { destination: '/500', permanent: false } }
  }

  // const contentList = chapterInfo.content.split('\n')

  res.status(200).send({
    nextId: chapterInfo.nextChapter?.id,
    chapterName: chapterInfo.chapterName,
    content: chapterInfo.content,
  })
}
