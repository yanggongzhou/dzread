import type { NextApiRequest, NextApiResponse } from 'next'
import { EIsCharge } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const chapterList = [
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
    },
    {
      "chapterId": "479452187",
      "chapterName": "第51章",
      "isCharge": "1",
      "chapterIndex": 51
    },
    {
      "chapterId": "479452188",
      "chapterName": "第52章",
      "isCharge": "1",
      "chapterIndex": 52
    },
    {
      "chapterId": "479452189",
      "chapterName": "第53章",
      "isCharge": "1",
      "chapterIndex": 53
    },
    {
      "chapterId": "479452190",
      "chapterName": "第54章",
      "isCharge": "1",
      "chapterIndex": 54
    },
    {
      "chapterId": "479452191",
      "chapterName": "第55章",
      "isCharge": "1",
      "chapterIndex": 55
    },
    {
      "chapterId": "479452192",
      "chapterName": "第56章",
      "isCharge": "1",
      "chapterIndex": 56
    },
    {
      "chapterId": "479452193",
      "chapterName": "第57章",
      "isCharge": "1",
      "chapterIndex": 57
    },
    {
      "chapterId": "479452194",
      "chapterName": "第58章",
      "isCharge": "1",
      "chapterIndex": 58
    },
    {
      "chapterId": "479452195",
      "chapterName": "第59章",
      "isCharge": "1",
      "chapterIndex": 59
    },
    {
      "chapterId": "479452196",
      "chapterName": "第60章",
      "isCharge": "1",
      "chapterIndex": 60
    },
    {
      "chapterId": "479452197",
      "chapterName": "第61章",
      "isCharge": "1",
      "chapterIndex": 61
    },
    {
      "chapterId": "479452198",
      "chapterName": "第62章",
      "isCharge": "1",
      "chapterIndex": 62
    },
    {
      "chapterId": "479452199",
      "chapterName": "第63章",
      "isCharge": "1",
      "chapterIndex": 63
    },
    {
      "chapterId": "479452200",
      "chapterName": "第64章",
      "isCharge": "1",
      "chapterIndex": 64
    },
    {
      "chapterId": "479452201",
      "chapterName": "第65章",
      "isCharge": "1",
      "chapterIndex": 65
    },
    {
      "chapterId": "479452202",
      "chapterName": "第66章",
      "isCharge": "1",
      "chapterIndex": 66
    },
    {
      "chapterId": "479452203",
      "chapterName": "第67章",
      "isCharge": "1",
      "chapterIndex": 67
    },
    {
      "chapterId": "479452204",
      "chapterName": "第68章",
      "isCharge": "1",
      "chapterIndex": 68
    },
    {
      "chapterId": "479452205",
      "chapterName": "第69章",
      "isCharge": "1",
      "chapterIndex": 69
    },
    {
      "chapterId": "479452206",
      "chapterName": "第70章",
      "isCharge": "1",
      "chapterIndex": 70
    },
    {
      "chapterId": "479452207",
      "chapterName": "第71章",
      "isCharge": "1",
      "chapterIndex": 71
    },
    {
      "chapterId": "479452208",
      "chapterName": "第72章",
      "isCharge": "1",
      "chapterIndex": 72
    },
    {
      "chapterId": "479452209",
      "chapterName": "第73章",
      "isCharge": "1",
      "chapterIndex": 73
    },
    {
      "chapterId": "479452210",
      "chapterName": "第74章",
      "isCharge": "1",
      "chapterIndex": 74
    },
    {
      "chapterId": "479452211",
      "chapterName": "第75章",
      "isCharge": "1",
      "chapterIndex": 75
    },
    {
      "chapterId": "479452212",
      "chapterName": "第76章",
      "isCharge": "1",
      "chapterIndex": 76
    },
    {
      "chapterId": "479452213",
      "chapterName": "第77章",
      "isCharge": "1",
      "chapterIndex": 77
    },
    {
      "chapterId": "479452214",
      "chapterName": "第78章",
      "isCharge": "1",
      "chapterIndex": 78
    },
    {
      "chapterId": "479452215",
      "chapterName": "第79章",
      "isCharge": "1",
      "chapterIndex": 79
    },
    {
      "chapterId": "479452216",
      "chapterName": "第80章",
      "isCharge": "1",
      "chapterIndex": 80
    },
    {
      "chapterId": "479452217",
      "chapterName": "第81章",
      "isCharge": "1",
      "chapterIndex": 81
    },
    {
      "chapterId": "479452218",
      "chapterName": "第82章",
      "isCharge": "1",
      "chapterIndex": 82
    },
    {
      "chapterId": "479452219",
      "chapterName": "第83章",
      "isCharge": "1",
      "chapterIndex": 83
    },
    {
      "chapterId": "479452220",
      "chapterName": "第84章",
      "isCharge": "1",
      "chapterIndex": 84
    },
    {
      "chapterId": "479452221",
      "chapterName": "第85章",
      "isCharge": "1",
      "chapterIndex": 85
    },
    {
      "chapterId": "479452222",
      "chapterName": "第86章",
      "isCharge": "1",
      "chapterIndex": 86
    },
    {
      "chapterId": "479452223",
      "chapterName": "第87章",
      "isCharge": "1",
      "chapterIndex": 87
    },
    {
      "chapterId": "479452224",
      "chapterName": "第88章",
      "isCharge": "1",
      "chapterIndex": 88
    },
    {
      "chapterId": "479452225",
      "chapterName": "第89章",
      "isCharge": "1",
      "chapterIndex": 89
    },
    {
      "chapterId": "479452226",
      "chapterName": "第90章",
      "isCharge": "1",
      "chapterIndex": 90
    },
    {
      "chapterId": "479452227",
      "chapterName": "第91章",
      "isCharge": "1",
      "chapterIndex": 91
    },
    {
      "chapterId": "479452228",
      "chapterName": "第92章",
      "isCharge": "1",
      "chapterIndex": 92
    },
    {
      "chapterId": "479452229",
      "chapterName": "第93章",
      "isCharge": "1",
      "chapterIndex": 93
    },
    {
      "chapterId": "479452230",
      "chapterName": "第94章",
      "isCharge": "1",
      "chapterIndex": 94
    },
    {
      "chapterId": "479452231",
      "chapterName": "第95章",
      "isCharge": "1",
      "chapterIndex": 95
    },
    {
      "chapterId": "479452232",
      "chapterName": "第96章",
      "isCharge": "1",
      "chapterIndex": 96
    },
    {
      "chapterId": "479452233",
      "chapterName": "第97章",
      "isCharge": "1",
      "chapterIndex": 97
    },
    {
      "chapterId": "479452234",
      "chapterName": "第98章",
      "isCharge": "1",
      "chapterIndex": 98
    },
    {
      "chapterId": "479452235",
      "chapterName": "第99章",
      "isCharge": "1",
      "chapterIndex": 99
    },
    {
      "chapterId": "479452236",
      "chapterName": "第100章",
      "isCharge": "1",
      "chapterIndex": 100
    }
  ]

  const bookInfo = {
    "author": "小妖本仙",
    "bookId": "11000162501",
    "bookName": "我曾愛你，奮不顧身",
    "introduction": "結婚兩年，素手調羹，最終也比不過他心中的那個白月光。\r\n她受夠了，也煩了單向婚姻，可是卻還是被他圈在他的世界裏。\r\n“如果你不愛我，就放開我好嗎！？”\r\n“放開你？這輩子都不可能！”",
    "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000162501/11000162501.jpg?t=20210728144159",
    "bannerPic": "",
    "viewCountDisplay": "10.6萬",
    "lastChapterUtime": "2018-09-30 20:29:01",
    "ratings": "9.0",
    "chapterCount": "46",
    "firstChapterId": "33338367",
    "writeStatus": "完本",
    "viewCount": "106068"
  }
  const result = {
    "retCode": 0,
    "data": {
      chapterList: chapterList.map((item, index) => {
        return {
          bookId: "11000162501",
          chapterId: item.chapterId,
          isCharge: item.isCharge ? EIsCharge.收费章节: EIsCharge.免费章节,
          chapterName: item.chapterName,
          chapterIndex: index + 1,
        }
      }),
      author: bookInfo.author,
      bookName: bookInfo.bookName,
      coverWap: bookInfo.cover,
      totalChapters: bookInfo.chapterCount
    }

  }

  res.status(200).json(result)
}
