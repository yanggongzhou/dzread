import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EBookStatus, IBookSearchVo, INetBrowseRes } from "@/typings/browse.interface";
import { EChannelCode } from "@/typings/home.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetBrowseRes>
) {

  const { data = [], totalNum = 0} = await ownFetch('/moreList.do', { pageNo: 1, pageSize: 10,  position: 1 });

  const browseBookInfos: IBookSearchVo[] = data.map((item, index) => {
    return {
      bookId: item.bookId,
      bookName: item.bookName,
      coverWap: item.cover,
      introduction: item.introduction,
      author: item.author,
      totalWordSize: 'xxx万字数', // 书籍总字数
      clickNum: item.viewCountDisplay,
      scoreNum: item.ratings + '', // 书籍评分
      lastChapterId: item.chapterCount, // 最新章节ID
      lastChapterUtime: item.lastUpdateTimeDisplay, // 章节更新时间
      tagV3: ['标签1', item.author, '标签3' ],
      status: index % 2 == 1 ? EBookStatus.连载 : EBookStatus.完结,
    }
  });

  const categoryMark = [
    { name: '全部', type: '0' },
    { name: '东方玄幻', type: '1' },
    { name: '异世大陆', type: '2' },
    { name: '斗气世界', type: '3' },
    { name: '斗气世界2', type: '4' },
    { name: '斗气世界3', type: '5' },
  ] // 分类列表栏（三级）

  const typeTwoVosData = [
    { cid: '0', title: '全部', categoryMark },
    { cid: '1', title: '都市', categoryMark },
    { cid: '2', title: '玄幻', categoryMark },
    { cid: '3', title: '仙侠', categoryMark },
    { cid: '4', title: '历史', categoryMark },
    { cid: '5', title: '种田', categoryMark },
    { cid: '6', title: '古代言情', categoryMark },
    { cid: '7', title: '现代言情', categoryMark },
    { cid: '8', title: '短篇', categoryMark },
    { cid: '9', title: '二次元', categoryMark },
    { cid: '10', title: '战神', categoryMark },
    { cid: '11', title: '女婿', categoryMark },
    { cid: '12', title: '系统', categoryMark },
  ]

  const result: INetBrowseRes = {
    books: browseBookInfos,
    totalSize: totalNum,
    typeOneVoList: [
      {
        categoryId: EChannelCode.男生,
        categoryName: '男生xiaoshufenlei',
        typeTwoVos: typeTwoVosData,
      },
      {
        categoryId: EChannelCode.女生,
        categoryName: '女生xiaoshufenlei',
        typeTwoVos: typeTwoVosData,
      },
      {
        categoryId: EChannelCode.出版,
        categoryName: '出版xiaoshufenlei',
        typeTwoVos: typeTwoVosData,
      },
    ],
    statusMark: [
      { title: '全部', markId: '0'},
      { title: '完本', markId: '1'},
      { title: '连载', markId: '2'},
    ], // 书籍状态栏(四级)
    wordType: [
      { name: '全部', type: '0'},
      { name: '100万字以下', type: '1'},
      { name: '100万字-300万字', type: '2'},
      { name: '300万字以上', type: '3'},
    ],
  }

  res.status(200).json(result)
}
