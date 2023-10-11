import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EBookStatus2, INetBookReRes } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetBookReRes>
) {

  const { data = [] } = await ownFetch('/moreList.do', { pageNo: 1, pageSize: 10,  position: 1 });

  const result: INetBookReRes = {
    bookList: data.slice(0,3).map((item, index) => {
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
      }
    })
  }

  res.status(200).json(result)
}
