import type { NextApiRequest, NextApiResponse } from 'next'

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {


  const result = {
    "retCode": 0,
    "data": {
      "recommendBook": [
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
      ],
      "chapters": [
        {
          "chapterId": "479452137",
          "chapterName": "第1章",
          "isCharge": "0",
          "chapterIndex": 1
        },
        {
          "chapterId": "479452138",
          "chapterName": "第2章",
          "isCharge": "0",
          "chapterIndex": 2
        },
        {
          "chapterId": "479452139",
          "chapterName": "第3章",
          "isCharge": "0",
          "chapterIndex": 3
        },
        {
          "chapterId": "479452140",
          "chapterName": "第4章",
          "isCharge": "0",
          "chapterIndex": 4
        },
        {
          "chapterId": "479452141",
          "chapterName": "第5章",
          "isCharge": "0",
          "chapterIndex": 5
        },
        {
          "chapterId": "479452142",
          "chapterName": "第6章",
          "isCharge": "0",
          "chapterIndex": 6
        },
        {
          "chapterId": "479452143",
          "chapterName": "第7章",
          "isCharge": "0",
          "chapterIndex": 7
        },
        {
          "chapterId": "479452144",
          "chapterName": "第8章",
          "isCharge": "0",
          "chapterIndex": 8
        },
        {
          "chapterId": "479452145",
          "chapterName": "第9章",
          "isCharge": "0",
          "chapterIndex": 9
        },
        {
          "chapterId": "479452146",
          "chapterName": "第10章",
          "isCharge": "0",
          "chapterIndex": 10
        },
        {
          "chapterId": "479452147",
          "chapterName": "第11章",
          "isCharge": "0",
          "chapterIndex": 11
        },
        {
          "chapterId": "479452148",
          "chapterName": "第12章",
          "isCharge": "0",
          "chapterIndex": 12
        },
        {
          "chapterId": "479452149",
          "chapterName": "第13章",
          "isCharge": "0",
          "chapterIndex": 13
        },
        {
          "chapterId": "479452150",
          "chapterName": "第14章",
          "isCharge": "0",
          "chapterIndex": 14
        },
        {
          "chapterId": "479452151",
          "chapterName": "第15章",
          "isCharge": "0",
          "chapterIndex": 15
        },
        {
          "chapterId": "479452152",
          "chapterName": "第16章",
          "isCharge": "1",
          "chapterIndex": 16
        },
        {
          "chapterId": "479452153",
          "chapterName": "第17章",
          "isCharge": "0",
          "chapterIndex": 17
        },
        {
          "chapterId": "479452154",
          "chapterName": "第18章",
          "isCharge": "1",
          "chapterIndex": 18
        },
        {
          "chapterId": "479452155",
          "chapterName": "第19章",
          "isCharge": "1",
          "chapterIndex": 19
        },
        {
          "chapterId": "479452156",
          "chapterName": "第20章",
          "isCharge": "1",
          "chapterIndex": 20
        },
        {
          "chapterId": "479452157",
          "chapterName": "第21章",
          "isCharge": "1",
          "chapterIndex": 21
        },
        {
          "chapterId": "479452158",
          "chapterName": "第22章",
          "isCharge": "1",
          "chapterIndex": 22
        },
        {
          "chapterId": "479452159",
          "chapterName": "第23章",
          "isCharge": "1",
          "chapterIndex": 23
        },
        {
          "chapterId": "479452160",
          "chapterName": "第24章",
          "isCharge": "1",
          "chapterIndex": 24
        },
        {
          "chapterId": "479452161",
          "chapterName": "第25章",
          "isCharge": "1",
          "chapterIndex": 25
        },
        {
          "chapterId": "479452162",
          "chapterName": "第26章",
          "isCharge": "1",
          "chapterIndex": 26
        },
        {
          "chapterId": "479452163",
          "chapterName": "第27章",
          "isCharge": "1",
          "chapterIndex": 27
        },
        {
          "chapterId": "479452164",
          "chapterName": "第28章",
          "isCharge": "1",
          "chapterIndex": 28
        },
        {
          "chapterId": "479452165",
          "chapterName": "第29章",
          "isCharge": "1",
          "chapterIndex": 29
        },
        {
          "chapterId": "479452166",
          "chapterName": "第30章",
          "isCharge": "1",
          "chapterIndex": 30
        },
        {
          "chapterId": "479452167",
          "chapterName": "第31章",
          "isCharge": "1",
          "chapterIndex": 31
        },
        {
          "chapterId": "479452168",
          "chapterName": "第32章",
          "isCharge": "1",
          "chapterIndex": 32
        },
        {
          "chapterId": "479452169",
          "chapterName": "第33章",
          "isCharge": "1",
          "chapterIndex": 33
        },
        {
          "chapterId": "479452170",
          "chapterName": "第34章",
          "isCharge": "1",
          "chapterIndex": 34
        },
        {
          "chapterId": "479452171",
          "chapterName": "第35章",
          "isCharge": "1",
          "chapterIndex": 35
        },
        {
          "chapterId": "479452172",
          "chapterName": "第36章",
          "isCharge": "1",
          "chapterIndex": 36
        },
        {
          "chapterId": "479452173",
          "chapterName": "第37章",
          "isCharge": "1",
          "chapterIndex": 37
        },
        {
          "chapterId": "479452174",
          "chapterName": "第38章",
          "isCharge": "1",
          "chapterIndex": 38
        },
        {
          "chapterId": "479452175",
          "chapterName": "第39章",
          "isCharge": "1",
          "chapterIndex": 39
        },
        {
          "chapterId": "479452176",
          "chapterName": "第40章",
          "isCharge": "1",
          "chapterIndex": 40
        },
        {
          "chapterId": "479452177",
          "chapterName": "第41章",
          "isCharge": "1",
          "chapterIndex": 41
        },
        {
          "chapterId": "479452178",
          "chapterName": "第42章",
          "isCharge": "1",
          "chapterIndex": 42
        },
        {
          "chapterId": "479452179",
          "chapterName": "第43章",
          "isCharge": "1",
          "chapterIndex": 43
        },
        {
          "chapterId": "479452180",
          "chapterName": "第44章",
          "isCharge": "1",
          "chapterIndex": 44
        },
        {
          "chapterId": "479452181",
          "chapterName": "第45章",
          "isCharge": "1",
          "chapterIndex": 45
        },
        {
          "chapterId": "479452182",
          "chapterName": "第46章",
          "isCharge": "1",
          "chapterIndex": 46
        },
        {
          "chapterId": "479452183",
          "chapterName": "第47章",
          "isCharge": "1",
          "chapterIndex": 47
        },
        {
          "chapterId": "479452184",
          "chapterName": "第48章",
          "isCharge": "1",
          "chapterIndex": 48
        },
        {
          "chapterId": "479452185",
          "chapterName": "第49章",
          "isCharge": "1",
          "chapterIndex": 49
        },
        {
          "chapterId": "479452186",
          "chapterName": "第50章",
          "isCharge": "1",
          "chapterIndex": 50
        }
      ],
      "chapterId": "479452137",
      "book": {
        "unit": "0",
        "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010069767/11010069767.jpg?t=1638261703574&imageView2/0/w/200/h/267",
        "bookName": "至尊神婿",
        "bookId": "11010069767",
        "introduction": "入赘三年，活得不如狗。一朝崛起，岳母小姨子给跪了。 岳母：求求你别离开我女儿。小姨子：姐夫我错了......",
        "introductionList": [
          "入赘三年，活得不如狗。一朝崛起，岳母小姨子给跪了。",
          "岳母：求求你别离开我女儿。",
          "小姨子：姐夫我错了......"
        ],
        "author": "狼牙土豆",
        "totalWordSize": "608万",
        "totalChapterNum": "5614",
        "lastChapterId": "542132688",
        "lastChapterName": "第5617章",
        "clickNum": "1.7亿",
        "status": 0,
        "cp": "",
        "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
        "tagList": [
          "女婿",
          "打脸",
          "战神"
        ],
        "twoTypeName": "都市生活1",
        "bookTypeName": "古玩鉴宝",
        "bookScore": "6.4",
        "threeTypeTag": [
          "学霸",
          "反派",
          "女总裁",
          "皇子",
          "弃少",
          "神豪",
          "神话",
          "九叔",
          "大汉",
          "三国",
          "复仇",
          "异能"
        ],
        "wordSize": "608",
        "wordSizeUnit": "万",
        "totalReadNum": "1.7",
        "totalReadNumUnit": "亿",
        "protagonist": "叶昊,郑漫儿",
        "bookTypeThreeMap": {
          "540": "古玩鉴宝"
        }
      },
      "chapterName": "第1章",
      "nextChapterId": "479452138",
      "content": [
        "南海市，郑家别墅。",
        "今天是郑老爷子的七十大寿。",
        "郑家子孙都分别奉上了寿礼，齐声道：“祝老爷子福如东海，寿比南山。”",
        "郑老爷子坐在上座，满面红光，道：“好好好，都是好孩子，今天老夫高兴，满足你们每人一个愿望，你们有什么想要的东西，尽管说！”",
        "“爷爷，我看上了临海的一套公寓，不贵就100多万......”",
        "“爷爷，我想要香奈儿的限量款包包......”"
      ]
    }
  }

  res.status(200).json(result)
}
