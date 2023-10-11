import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EBookStatus2, EIsCharge, IBookInfoItem, INetBookRes } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetBookRes>
) {

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
  const alsoLook = [
    {
      "author": "不言不語",
      "bookId": "11010130363",
      "bookName": "獄帝歸來當奶爸",
      "introduction": "葉七絕被人下套，入獄五年歸來，獲得高人指點！\n本想給未婚妻全世界的他，沒想到卻遭受未婚妻背叛，嫁給了施暴者。\n然而，卻不知美女總裁卻為他偷偷生下了呆萌女兒，並且等了他五年，受盡了苦難。\n從此，葉七絕開啟了寵妻帶娃的悠閑人生，恣意都市！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010130363/11010130363.jpg?t=20230412094532",
      "bannerPic": "",
      "viewCountDisplay": "7.5萬",
      "lastChapterUtime": "2023-10-11 11:26:17",
      "ratings": "8.8",
      "chapterCount": "2258",
      "writeStatus": "連載",
      "viewCount": "74584"
    },
    {
      "author": "南風語",
      "bookId": "11010123970",
      "bookName": "冷情傅少替身妻",
      "introduction": "結婚三年，溫冬被丈夫寵上了天，也如願以償懷了孕。\r\n但當她把孕檢單拿到男人麵前，換來的卻是離婚的結局：“我傅景衍，絕不允許其他女人懷上我的孩子！”。\r\n她腦袋嗡鳴，“為什麼？”\r\n男人說的決絕，“因為......我從未愛過你！”\r\n原來，這世界上隻有她一人是傻瓜！\r\n她以為這個男人是那麼深情，但其實，他愛的，隻不過是她和另一個女人相似的臉！\r\n她再不留戀，直接在離婚協議書上簽字，從此山高水遠再不相逢！\r\n可那個口口聲聲讓她滾，口口聲聲說我不愛你的男人卻瘋了。\r\n“溫冬......”\r\n他看著墓地裏的愛妻之墓，終於醒悟，原來，她早已在不知不覺中成了他的心肝，不可分離。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010123970/11010123970.jpg?t=20221027091645",
      "bannerPic": "",
      "viewCountDisplay": "4.6萬",
      "lastChapterUtime": "2023-04-13 12:44:54",
      "ratings": "8.1",
      "chapterCount": "1553",
      "writeStatus": "完本",
      "viewCount": "45573"
    },
    {
      "author": "寶允",
      "bookId": "11010122254",
      "bookName": "失憶後，偏執總裁寵我成癮",
      "introduction": "生日當天，深愛的老公和別的女人共進燭光晚餐，卻給她發來了一紙離婚協議。\r\n原來，三年婚姻不過是一場報複。\r\n意外發生車禍，夏初薇失去記憶，再也不是那個深愛霍雲霆，死活都不離婚軟包子了！\r\n霍先生：“夏初薇，別以為裝失憶我就會心軟，這個婚離定了！”\r\n夏初薇：“離婚？好，明天就去，誰不離誰是小狗。”\r\n第二天，夏初薇敲開霍雲霆的門。\r\n“霍先生，該去離婚了。”\r\n霍先生：“汪！”\r\n所有人都知道她愛他至深，但唯有他知道，他愛她——早已病入膏肓。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010122254/11010122254.jpg?t=20221018091329",
      "bannerPic": "",
      "viewCountDisplay": "2.0萬",
      "lastChapterUtime": "2023-04-04 10:44:49",
      "ratings": "7.0",
      "chapterCount": "1753",
      "writeStatus": "完本",
      "viewCount": "19829"
    },
    {
      "author": "十三夕",
      "bookId": "11010060352",
      "bookName": "重生寵上天：墨少，別來無恙！",
      "introduction": "上輩子，謝梵音錯信他人，付出所有，卻慘痛一生，一屍兩命！\r\n重活一世，她智商上線，強勢逆襲，打臉複仇虐渣渣\r\n決心抱著某大佬的腿不放，卻不小心被他寵上了天！\r\n“老公，繼妹說我配不上你！”\r\n傳聞冷血殘酷、權勢滔天的墨六爺聲音溫柔，“是她不配活著。”\r\n“渣男剛才還想占我便宜！”\r\n男人摸摸她腦袋，“乖，他進海裏喂鯊魚了。”\r\n眾人惋惜，墨六爺就這麼被不名不經傳的女人拿下了\r\n直到某一天，謝梵音無數大佬身份曝光……",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010060352/11010060352.jpg?t=20220928160227",
      "bannerPic": "",
      "viewCountDisplay": "8.6萬",
      "lastChapterUtime": "2021-06-28 14:40:23",
      "ratings": "7.5",
      "chapterCount": "1255",
      "writeStatus": "完本",
      "viewCount": "86276"
    },
    {
      "author": "蘇木白",
      "bookId": "11010068992",
      "bookName": "神醫棄妃：王爺又被和離了！",
      "introduction": "她，現代萬人敬仰的女元帥，一睜眼卻成了古代不受寵的安王妃？\r\n不僅浪蕩，還是個廢柴，眼裏隻有那個冷傲俊美的夫君。\r\n可偏偏，那男人卻隻想休了她！\r\n笑話！她穆玥璃，可為國捐軀，斷不會為一個男人尋死覓活。\r\n什麼？傲慢王爺愛的是綠茶表妹？\r\n沒關係，賞你一紙休書！\r\n可偏偏那狗男人卻纏上來，控訴：“穆玥璃，你讓本王念你，想你，死心塌地愛上你後，又瀟灑離身，這世上沒有比你更狠心絕情的女人了！”",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010068992/11010068992.jpg?t=20200731182616",
      "bannerPic": "",
      "viewCountDisplay": "2.8萬",
      "lastChapterUtime": "2021-09-17 11:10:30",
      "ratings": "9.7",
      "chapterCount": "2010",
      "writeStatus": "完本",
      "viewCount": "28433"
    }
  ]

  const data = [
    {
      "id": "33338367",
      "chapterName": "第一章:輸血",
      "isCharge": false
    },
    {
      "id": "33338370",
      "chapterName": "第二章：供血自願書",
      "isCharge": false
    },
    {
      "id": "33338372",
      "chapterName": "第三章：心甘情願的婚禮",
      "isCharge": false
    },
    {
      "id": "33338373",
      "chapterName": "第四章：一廂情願的愛情",
      "isCharge": false
    },
    {
      "id": "33338376",
      "chapterName": "第五章：不解釋",
      "isCharge": false
    },
    {
      "id": "33338378",
      "chapterName": "第六章：替身",
      "isCharge": false
    },
    {
      "id": "33338380",
      "chapterName": "第七章：他回來了",
      "isCharge": false
    },
    {
      "id": "33338382",
      "chapterName": "第八章：離婚",
      "isCharge": false
    },
    {
      "id": "33338383",
      "chapterName": "第九章：哪裏都不許去",
      "isCharge": true
    },
    {
      "id": "33338385",
      "chapterName": "第十章：耍花招沒用",
      "isCharge": true
    },
    {
      "id": "33338388",
      "chapterName": "第十一章：兒時夥伴",
      "isCharge": true
    },
    {
      "id": "33338390",
      "chapterName": "第十二章：出事",
      "isCharge": true
    },
    {
      "id": "33338392",
      "chapterName": "第十三章：借錢",
      "isCharge": true
    },
    {
      "id": "33338393",
      "chapterName": "第十四章：病床上的老師",
      "isCharge": true
    },
    {
      "id": "33338394",
      "chapterName": "第十五章：懷孕了",
      "isCharge": true
    },
    {
      "id": "33338397",
      "chapterName": "第十六章：被軟禁",
      "isCharge": true
    },
    {
      "id": "33338399",
      "chapterName": "第十七章：我帶你離開",
      "isCharge": true
    },
    {
      "id": "33338401",
      "chapterName": "第十八章：失去孩子",
      "isCharge": true
    }
  ]

  const result: INetBookRes = {
    book: {
      bookId: bookInfo.bookId,
      bookName: bookInfo.bookName,
      coverWap: bookInfo.cover,
      introduction: bookInfo.introduction,
      author: bookInfo.author,
      protagonist: bookInfo.author,
      totalChapterNum: bookInfo.chapterCount + '',
      totalWordSize: bookInfo.chapterCount + '1111xx字',
      clickNum: bookInfo.viewCountDisplay,
      scoreNum: bookInfo.ratings + '', // 书籍评分
      lastChapterId: '最新章节ID', // 最新章节ID
      lastChapterUtime: bookInfo.lastChapterUtime, // 章节更新时间
      bookTypeThreeMap: [bookInfo.author, '标签2', '标签3' ],
      status: EBookStatus2.完结,
      hot: 'xxxx热度',
      tag: ['x11', 'xx2', 'xx4'],
      ...bookInfo,
    } as IBookInfoItem,
    chapters: data.map((item, index) => {
      return {
        bookId: "11000162501",
        chapterId: item.id,
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
        lastChapterUtime: item.lastChapterUtime, // 章节更新时间
        bookTypeThreeMap: [item.author, '标签2', '标签3' ],
        status: index % 2 == 1 ? EBookStatus2.连载 : EBookStatus2.完结,
        hot: 'xxxx热度',
        tag: [''],
        totalChapterNum: '最新章节'
      };
    })
  }

  res.status(200).json(result)
}
