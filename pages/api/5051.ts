import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EBookStatus2, EIsCharge, IBookInfoItem, INetBookRes } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetBookRes>
) {

  const { bookInfo = {}, alsoLook = [] } = await ownFetch('/detail.do', { bookId: '11000162501' });
  const { data = [] } = await ownFetch('/chapterList.do', { bookId: "11000162501", pageNo: 1, pageSize: 2000, })
  const result: INetBookRes = {
    book: {
      bookId: bookInfo.bookId,
      bookName: bookInfo.bookName,
      coverWap: bookInfo.cover,
      introduction: bookInfo.introduction,
      author: bookInfo.author,
      protagonist: bookInfo.author,
      threeTypeTag: [bookInfo.author, '标签2', '标签3' ],
      totalChapterNum: bookInfo.chapterCount + '',
      totalWordSize: bookInfo.chapterCount + '1111xx字',
      clickNum: bookInfo.viewCountDisplay,
      scoreNum: bookInfo.ratings + '', // 书籍评分
      lastChapterId: '最新章节ID', // 最新章节ID
      lastChapterUtime: bookInfo.lastUpdateTime, // 章节更新时间
      tagV3: [bookInfo.author, '标签2', '标签3' ],
      status: EBookStatus2.完结,
      hot: 'xxxx热度',
      tag: ['x11', 'xx2', 'xx4'],
      ...bookInfo,
    } as IBookInfoItem,
    chapters: data.map((item, index) => {
      return {
        bookId: "11000162501",
        chapterId: item.chapterId,
        isCharge: item.isCharge ? EIsCharge.收费章节: EIsCharge.免费章节,
        chapterName: item.chapterName,
        chapterIndex: index + 1,
      }
    }),
    recommendBook: alsoLook.map((item, index) => {
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
        status: index % 2 == 1 ? EBookStatus2.连载 : EBookStatus2.完结,
        hot: 'xxxx热度',
        tag: ['']
      };
    })
  }

  res.status(200).json(result)
}
