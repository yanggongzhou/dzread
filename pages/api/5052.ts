import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { EIsCharge } from "@/typings/book.interface";
import { INetCatalogRes } from "@/typings/catalog.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetCatalogRes>
) {

  const chapters = [
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
  // const { bookInfo = {} } = await ownFetch('/detail.do', { bookId: '11000162501' });
  // const { data = [] } = await ownFetch('/chapterList.do', { bookId: "11000162501", pageNo: 1, pageSize: 2000, })
  const result: INetCatalogRes = {
    chapterList: chapters.map((item, index) => {
      return {
        bookId: "11000162501",
        chapterId: item.id,
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

  res.status(200).json(result)
}
