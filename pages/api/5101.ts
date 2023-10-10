import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { INetTagRes } from "@/typings/tag.interface";
import { EBookStatus2 } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetTagRes>
) {

  const { bookList = {}, keywordList = [], keyword = '' } = await ownFetch('/keywordinfo.do', { id: '1', pageNo: 1, pageSize: 10 })
  const { pageNo = 1, totalPage = 0, data = [] } = bookList;

  const result: INetTagRes = {
    searchType: '3',
    bookList: (data || []).map((item, index) => {
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
    }),
    totalSize: totalPage * pageNo,
    isMore: 1,
    tagName: '神血至尊',
    words: keywordList.map(val => {
      return {
        id: val.id,
        name: val.keyword,
      }
    })
  }

  res.status(200).json(result)
}
