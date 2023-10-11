import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EBookStatus, IBookSearchVo, INetBrowseRes } from "@/typings/browse.interface";
import { EChannelCode } from "@/typings/home.interface";
import { EBookStatus2 } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetBrowseRes>
) {
  const list = [
    {
      "author": "小妖本仙",
      "bookId": "11000162501",
      "bookName": "我曾愛你，奮不顧身",
      "introduction": "結婚兩年，素手調羹，最終也比不過他心中的那個白月光。\r\n她受夠了，也煩了單向婚姻，可是卻還是被他圈在他的世界裏。\r\n“如果你不愛我，就放開我好嗎！？”\r\n“放開你？這輩子都不可能！”",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000162501/11000162501.jpg?t=20210728144159",
      "viewCountDisplay": "10.6萬",
      "lastChapterUtime": "2018-09-30 20:29:01",
      "ratings": "9.0",
      "chapterCount": "46",
      "writeStatus": "完本",
      "viewCount": "106068"
    },
    {
      "author": "夏目",
      "bookId": "11000162597",
      "bookName": "撕情裂愛",
      "introduction": "言歡和沈邵城的婚姻，是她祖母死前求了沈家老太太，換來的。\r\n       後來言歡被送進監獄，被廢掉一隻手，眼睛瞎掉，滿目絕望時。\r\n       她想，祖母若還在世，大抵是會後悔的。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000162597/11000162597.jpg?t=20210728115902",
      "viewCountDisplay": "13.5萬",
      "lastChapterUtime": "2018-09-30 01:02:20",
      "ratings": "9.3",
      "chapterCount": "40",
      "writeStatus": "完本",
      "viewCount": "134856"
    },
    {
      "author": "風一樣",
      "bookId": "11010024453",
      "bookName": "極品贅婿神醫",
      "introduction": "獲得仙醫傳承，重生於蘇家贅婿身份為廚子的黃青身上。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010024453/11010024453.jpg?t=20220711130154",
      "viewCountDisplay": "3.7萬",
      "lastChapterUtime": "2019-11-28 11:44:33",
      "ratings": "7.4",
      "chapterCount": "498",
      "writeStatus": "完本",
      "viewCount": "37488"
    },
    {
      "author": "孤存",
      "bookId": "11010027727",
      "bookName": "垂釣超能力",
      "introduction": "陳解放畢業回鄉承包魚塘，卻偶得一套垂釣係統，擁有了能夠垂釣各種超能力的神奇本領。\r\n　　可以看破情緒的眼鏡，能噴出水火的葫蘆。\r\n　　還死人肉白骨的丹藥，能百日飛升成就大神的秘籍。\r\n　　陳解放垂釣萬界，樂在其中，直到有一天，他釣上來一個口口聲聲自稱自己是龍王三公主的妹子，非要去拯救龜丞相。\r\n　　陳解...",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010027727/11010027727.jpg?t=20210104174427",
      "viewCountDisplay": "7805",
      "lastChapterUtime": "2019-11-06 13:20:22",
      "ratings": "9.3",
      "chapterCount": "218",
      "writeStatus": "完本",
      "viewCount": "7805"
    },
    {
      "author": "肆零八",
      "bookId": "11010030841",
      "bookName": "逆極巔峰",
      "introduction": "被社會摧殘，無力翻身的小人物，因一次意外重活一世。這裏的世界與前世大不相同，他能依靠自己的力量，逆極而行，攀登巔峰嗎？\r\n       如果能讓你重來一世，如果能讓你有掌控自己命運的能力。\r\n       你會怎麼做？\r\n       是披荊斬棘，不留遺憾；還是美酒美人，掌禦蒼生？\r\n       看逆...",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010030841/11010030841.jpg?t=20201231181717",
      "viewCountDisplay": "2156",
      "lastChapterUtime": "2019-10-03 10:02:14",
      "ratings": "7.6",
      "chapterCount": "146",
      "writeStatus": "完本",
      "viewCount": "2156"
    },
    {
      "author": "燎原",
      "bookId": "11010030842",
      "bookName": "至尊仙帝",
      "introduction": "淩天風，一個繼承了華夏複興使命的青年，掌握萬世銅母之力，凝聚九天星沙，滅蠻夷，殺仇寇，聚華夏之力破滅毀滅星族，成就仙界至尊。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010030842/11010030842.jpg?t=20201231154156",
      "viewCountDisplay": "1263",
      "lastChapterUtime": "2019-11-19 12:03:48",
      "ratings": "7.7",
      "chapterCount": "248",
      "writeStatus": "完本",
      "viewCount": "1263"
    },
    {
      "author": "留白",
      "bookId": "11010033033",
      "bookName": "盛世雷帝",
      "introduction": "但凡王朝，必有猛將！\r\n但凡盛世，必有天驕！\r\n但凡美女，必有狗蛋！\r\n“啊呸，老子不叫狗蛋！”\r\n江川一手指著正前方，另一隻手上，大旗獵獵作響。\r\n其上，碩大的“盜”字熠熠閃光。\r\n“前麵的人給我聽好了，老子要打劫！”\r\n“有錢捧個錢場，沒錢的......”",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010033033/11010033033.jpg?t=20201231165954",
      "viewCountDisplay": "1752",
      "lastChapterUtime": "2019-11-07 12:05:14",
      "ratings": "9.8",
      "chapterCount": "253",
      "writeStatus": "完本",
      "viewCount": "1752"
    },
    {
      "author": "春欲暮",
      "bookId": "11010035254",
      "bookName": "第一寵婚，霍少的鑽石甜妻",
      "introduction": "五年前，她邂逅了一個不知道姓名的男人。\r\n黑暗中看不清那人的眉眼，隻聞到他身上清凜的鬆柏香氣。\r\n五年後，她是卑微的外賣員，卻接到一個神奇的訂單。\r\n一個眉眼精致唇紅齒白的萌寶，如同五年前那個霸道的男人一樣，對她命令道——“給你一千萬，做我媽咪！”",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010035254/11010035254.jpg?t=20201231185931",
      "viewCountDisplay": "3508",
      "lastChapterUtime": "2019-12-13 15:30:49",
      "ratings": "8.7",
      "chapterCount": "183",
      "writeStatus": "完本",
      "viewCount": "3508"
    },
    {
      "author": "鹵真人",
      "bookId": "11010035259",
      "bookName": "第一豪門女婿",
      "introduction": "嶽母：三年婚約已到，你這個廢物，趕緊滾出我家。三日後，女婿重為豪門家主，嶽母求饒：好女婿，我求求你別離開我女兒",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010035259/11010035259.jpg?t=20210329095857",
      "viewCountDisplay": "8.8萬",
      "lastChapterUtime": "2022-09-08 10:31:15",
      "ratings": "9.2",
      "chapterCount": "3291",
      "writeStatus": "完本",
      "viewCount": "87979"
    },
    {
      "author": "三手煙",
      "bookId": "11010035597",
      "bookName": "修仙掌門人",
      "introduction": "意外穿越修仙世界，機緣所獲成為五行法修，在殘酷的修仙摸爬滾打，成就一方大佬，修仙宗派掌門人",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010035597/11010035597.jpg?t=20201231095114",
      "viewCountDisplay": "2129",
      "lastChapterUtime": "2019-12-11 19:30:43",
      "ratings": "8.9",
      "chapterCount": "191",
      "writeStatus": "完本",
      "viewCount": "2129"
    }
  ];


  const browseBookInfos: IBookSearchVo[] = list.map((item, index) => {
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
      lastChapterUtime: item.lastChapterUtime, // 章节更新时间
      bookTypeThreeMap: ['标签1', item.author, '标签3' ],
      status: index % 2 == 1 ? EBookStatus2.连载 : EBookStatus2.完结,
      totalChapterNum: '最新章节',
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
    totalSize: 1000,
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
