import type { NextApiRequest, NextApiResponse } from 'next'

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const result = {
    "retCode": 0,
    "data": {
      "bookList": [
        {
          "bookId": "11010070666",
          "bookName": "一胎两宝：帝少的千亿娇妻",
          "bookAlias": "",
          "author": "织酒",
          "introduction": "一场设计，她未婚先孕，妈妈活活被气死，五年后，她华丽蜕变，携子归来，复仇之路却遇上讨债恶鬼。“听说你给我生了两个孩子？”战擎渊找上门来。四目相对。确认过眼神，是惹不起的人。安小诺瞬间把平时吃的最多的小崽子推出去，“我留一只，这只你带走。”某宝眼泪汪汪看着无情老妈，忽然觉得手里的鸡腿不香了。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070666/11010070666.jpg?t=1628820709689&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "萌宝",
            "久别重逢",
            "复仇",
            "单亲妈咪",
            "落魄千金"
          ],
          "protagonist": "安小诺,战擎渊",
          "hot": "11万",
          "clickNum": "106226",
          "updateTime": 1695715191000,
          "totalWordSize": "3251598",
          "scoreNum": "8.1",
          "lastChapterId": "522419728",
          "lastChapterUtime": "2022-04-20 13:31:11",
          "bookTypeThreeMap": {
            "585": "古色古香",
            "802": "first_day"
          }
        },
        {
          "bookId": "11000035335",
          "bookName": "桃运大宝鉴",
          "bookAlias": "",
          "author": "金正太",
          "introduction": "美女，校花，大宝鉴，应有尽有！财运，霉运，桃花运，一切皆来！在一块块刚开采出来的毛料中切出美玉，靠的是运气，还是眼力的较量！且看一代奇才如何开启他人生的鉴宝之旅。。。。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000035335/11000035335.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "桃运大宝鉴",
            "金正太",
            "都市"
          ],
          "protagonist": "",
          "hot": "5033",
          "clickNum": "5033",
          "updateTime": 1695715569000,
          "totalWordSize": "1141469",
          "scoreNum": "8.0",
          "lastChapterId": "528616854",
          "lastChapterUtime": "2022-09-20 11:30:36"
        },
        {
          "bookId": "11010076679",
          "bookName": "重生之夫人是大佬字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试",
          "bookAlias": "字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试",
          "author": "水铃铛字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试",
          "introduction": "前世她被所有亲人爱人玩弄于鼓掌之中，被废了双腿，坐了七年轮椅，最后被抽干一身鲜血而死。　　重生归来，生活开启新的大门，她多了许多身份，还有许多宠爱她的人，尤其是甩不掉的他。　　她要复仇，他递刀。　　她说他这么宠爱她，她会上天的。他笑问：“老婆，要不要去买两个飞船名额？”前世她活的太苦，这辈子他要让她一直甜下去。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076679/11010076679.jpg?t=1634024012359&imageView2/0/w/200/h/267",
          "status": "1",
          "statusCn": "完本",
          "tag": [
            "重生",
            "大佬",
            "追妻",
            "一见钟情",
            "妻奴"
          ],
          "protagonist": "秦芊芊,傅景辰字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试字数长度测试",
          "hot": "3.74万",
          "clickNum": "37353",
          "updateTime": 1695715193000,
          "totalWordSize": "2192229",
          "scoreNum": "8.4",
          "lastChapterId": "541720091",
          "lastChapterUtime": "2023-07-13 14:28:39",
          "bookTypeThreeMap": {
            "579": "重生异能"
          }
        }
      ]
    }
  }

  res.status(200).json(result)
}
