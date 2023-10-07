import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const data = {
    "types": [
      {
        "id": 84,
        "name": "幻想言情",
        "replaceName": "幻想言情",
        "checked": false
      },
      {
        "id": 208,
        "name": "Popular",
        "replaceName": "Popular",
        "checked": false
      },
      {
        "id": 70,
        "name": "都市",
        "replaceName": "都市",
        "checked": false
      },
      {
        "id": 69,
        "name": "历史",
        "replaceName": "历史",
        "checked": false
      },
      {
        "id": 83,
        "name": "现代言情",
        "replaceName": "现代言情",
        "checked": false
      },
      {
        "id": 161,
        "name": "Romance",
        "replaceName": "Romance",
        "checked": false
      },
      {
        "id": 86,
        "name": "悬疑",
        "replaceName": "悬疑",
        "checked": false
      },
      {
        "id": 65,
        "name": "仙侠",
        "replaceName": "仙侠",
        "checked": false
      },
      {
        "id": 256,
        "name": "Destiny",
        "replaceName": "Destiny",
        "checked": false
      },
      {
        "id": 85,
        "name": "古代言情",
        "replaceName": "古代言情",
        "checked": false
      }
    ],
    "bookList": [
      {
        "bookId": "41000100746",
        "bookName": "离婚后，复仇前妻",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100746/41000100746.jpg?t=1695778064039&image_process=resize,h_300",
        "ratings": 9.7,
        "introduction": "陆尘是万影集团董事长，坐拥无上财富，却被妻子李清瑶背叛，李清瑶为了攀附权贵，放任病重的亲生女儿不管，跟富二代厮混，离婚后，陆尘对李清瑶展开复仇，一步步将李清瑶打入深渊，在得知陆尘的真实身份后，她悔不当初！",
        "labels": [
          "神豪"
        ],
        "tags": [
          "神豪"
        ],
        "chapterCount": 94,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "离婚后，复仇前妻",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "15.1K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100734",
        "bookName": "第一次爱的人",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100734/41000100734.jpg?t=1695604822738&image_process=resize,h_300",
        "ratings": 8.6,
        "introduction": "夏时是个不被豪门接受的弱听聋女，出生便被母亲抛弃。结婚三年，丈夫陆南沉从没承认过她这个陆太太。他的朋友叫她“小聋子”，人人都可以嘲笑、侮辱。直到那一天他的白月光回国，当着她的面宣誓主权，夏时甩出了那份离婚协议，男人却红了眼眶，拉着她不放：“你想走，除非我死！”",
        "labels": [
          "虐恋",
          "豪门恩怨"
        ],
        "tags": [
          "虐恋",
          "豪门恩怨"
        ],
        "chapterCount": 95,
        "typeOneIds": [
          3
        ],
        "typeTwoIds": [
          83
        ],
        "typeTwoNames": [
          "现代言情"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "第一次爱的人",
        "typeTwoName": "现代言情",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "12.1K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100724",
        "bookName": "相亲撞上未婚夫被拉去领证",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100724/41000100724.jpg?t=1695286165161&image_process=resize,h_300",
        "ratings": 9.6,
        "introduction": "沈南意被奇葩家人逼嫁给“糟老头子”，一怒之下找了个三无男人闪婚，结果婚后三无老公一路帮她打脸虐渣，把她宠上天！",
        "labels": [
          "甜宠"
        ],
        "tags": [
          "甜宠"
        ],
        "chapterCount": 100,
        "typeOneIds": [
          3
        ],
        "typeTwoIds": [
          83
        ],
        "typeTwoNames": [
          "现代言情"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "相亲撞上未婚夫被拉去领证",
        "typeTwoName": "现代言情",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "16.6K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100731",
        "bookName": "为你逆光而来",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100731/41000100731.jpg?t=1695455398639&image_process=resize,h_300",
        "ratings": 7.3,
        "introduction": "顾曼文原是万众瞩目的顾氏继承人，却被自己的未婚夫和妹妹联手迫害，坠落山崖。意外被京海首富沈煦相救，沈煦提出离婚，帮助复仇，顾曼文欣然答应，待完成复仇后，却发现沈煦原来患有精神病……",
        "labels": [
          "豪门恩怨",
          "复仇"
        ],
        "tags": [
          "豪门恩怨",
          "复仇"
        ],
        "chapterCount": 104,
        "typeOneIds": [
          3
        ],
        "typeTwoIds": [
          83
        ],
        "typeTwoNames": [
          "现代言情"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "为你逆光而来",
        "typeTwoName": "现代言情",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "12.9K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100712",
        "bookName": "盖世",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100712/41000100712.jpg?t=1695000945678&image_process=resize,h_300",
        "ratings": 8,
        "introduction": "入狱三年，他忍辱负重，成就北安王之名！以无敌之姿，笑傲寰宇！",
        "labels": [
          "强者回归"
        ],
        "tags": [
          "强者回归"
        ],
        "chapterCount": 100,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "盖世",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "14.5K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100710",
        "bookName": "圣医王婿",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100710/41000100710.jpg?t=1695000261448&image_process=resize,h_300",
        "ratings": 7.1,
        "introduction": "五年前，宁毅遭人诬陷，危急时刻被世外高人救走，妻子林晚秋造陷害入狱，五年后，宁毅强势归来，却得知妻子刚刚出狱，自己的女儿被抓去当实验体，愤怒的宁毅决定对当年插手的家族和势力，逐一展开清算报复，并陪伴妻子女儿共度余生。",
        "labels": [
          "神医"
        ],
        "tags": [
          "神医"
        ],
        "chapterCount": 100,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "圣医王婿",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "16.4K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100738",
        "bookName": "封神之回到古代当昏君",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100738/41000100738.jpg?t=1695721692176&image_process=resize,h_300",
        "ratings": 8.9,
        "introduction": "李在穿越之后成了纣王，皇后联合宰相要篡夺皇位，李在利用了自己现代人的指挥，打造热武器，解决内忧外患，最后和自己的爱妃们幸福的生活在了一起。",
        "labels": [
          "古装"
        ],
        "tags": [
          "古装"
        ],
        "chapterCount": 91,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          69
        ],
        "typeTwoNames": [
          "历史"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "封神之回到古代当昏君",
        "typeTwoName": "历史",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "14.6K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100757",
        "bookName": "涅槃重生",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100757/41000100757.jpg?t=1695886491621&image_process=resize,h_300",
        "ratings": 7.3,
        "introduction": "母亲重疾去世，女友屈辱惨死，张强带着遗憾与不甘重生了，这一次，他誓要保护好身边的人，将前世的仇敌，统统踩在脚底！",
        "labels": [
          "重生"
        ],
        "tags": [
          "重生"
        ],
        "chapterCount": 99,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "涅槃重生",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "17.7K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100755",
        "bookName": "逆转人生",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100755/41000100755.jpg?t=1695885807865&image_process=resize,h_300",
        "ratings": 8,
        "introduction": "母亲重疾去世，女友屈辱惨死，张强带着遗憾与不甘重生了，这一次，他誓要保护好身边的人，将前世的仇敌，统统踩在脚底！",
        "labels": [
          "重生"
        ],
        "tags": [
          "重生"
        ],
        "chapterCount": 100,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "逆转人生",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "10.7K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100754",
        "bookName": "紫气东来",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100754/41000100754.jpg?t=1695884506666&image_process=resize,h_300",
        "ratings": 8.8,
        "introduction": "默默付出三年，帮助妻子成为亿万富豪后，她却趾高气昂的扔出了离婚协议……",
        "labels": [
          "神豪"
        ],
        "tags": [
          "神豪"
        ],
        "chapterCount": 107,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "紫气东来",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "12.5K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100703",
        "bookName": "至尊龙皇",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100703/41000100703.jpg?t=1694599043202&image_process=resize,h_300",
        "ratings": 7.9,
        "introduction": "龙皇出山，携九桩婚约入世，开启一段逆天之旅……",
        "labels": [
          "强者回归"
        ],
        "tags": [
          "强者回归"
        ],
        "chapterCount": 88,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "至尊龙皇",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "17.7K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100726",
        "bookName": "一切从退婚开始",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100726/41000100726.jpg?t=1695291281733&image_process=resize,h_300",
        "ratings": 9.7,
        "introduction": "婚礼上，小保安叶南惨遭未婚妻一家羞辱，人生进入至暗此刻。怎料峰回路转，无意间他得知了自己财团继承人的身份，从此人生彻底改写……",
        "labels": [
          "神豪"
        ],
        "tags": [
          "神豪"
        ],
        "chapterCount": 90,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "一切从退婚开始",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "15.6K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100753",
        "bookName": "立地成神",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100753/41000100753.jpg?t=1695861492090&image_process=resize,h_300",
        "ratings": 9.5,
        "introduction": "学成归来，林凡下山誓报血海深仇！",
        "labels": [
          "高手下山"
        ],
        "tags": [
          "高手下山"
        ],
        "chapterCount": 99,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "立地成神",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "15.3K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100723",
        "bookName": "你是劫难也是救赎",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100723/41000100723.jpg?t=1695267453568&image_process=resize,h_300",
        "ratings": 7.1,
        "introduction": "凌依然被诬陷超速驾驶，致易瑾离未婚妻身死。深城的人为了讨好易瑾离，对凌依然落井下石。凌依然将易瑾离当成流浪汉带回家，易瑾离为报复留在凌依然身边。易瑾离旁观了深城人欺辱凌依然，忍不住帮助她，在此过程中，易瑾离对案情产生疑问，最终查到郝以梦为了争夺家产，杀害姐姐。凌依然清白得以偿还，终于和易瑾离在一起。",
        "labels": [
          "逆袭",
          "虐恋"
        ],
        "tags": [
          "逆袭",
          "虐恋"
        ],
        "chapterCount": 100,
        "typeOneIds": [
          3
        ],
        "typeTwoIds": [
          83
        ],
        "typeTwoNames": [
          "现代言情"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "你是劫难也是救赎",
        "typeTwoName": "现代言情",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "13.3K",
        "lastUpdateTimeDisplay": "Completed"
      },
      {
        "bookId": "41000100740",
        "bookName": "在父母坟前，我立地成神",
        "cover": "https://nchapter.dramaboxdb.com/data/cppartner/4x1/41x0/410x0/41000100740/41000100740.jpg?t=1695782976650&image_process=resize,h_300",
        "ratings": 8.7,
        "introduction": "学成归来，林凡下山誓报血海深仇！\r\n",
        "labels": [
          "高手下山"
        ],
        "tags": [
          "高手下山"
        ],
        "chapterCount": 100,
        "typeOneIds": [
          2
        ],
        "typeTwoIds": [
          70
        ],
        "typeTwoNames": [
          "都市"
        ],
        "status": "PUBLISHED",
        "language": "CHINESE_SIMPLE",
        "free": 1,
        "author": "Webfic",
        "replacedBookName": "在父母坟前，我立地成神",
        "typeTwoName": "都市",
        "simpleLanguage": "zhHans",
        "read": false,
        "inLibrary": false,
        "viewCountDisplay": "16.7K",
        "lastUpdateTimeDisplay": "Completed"
      }
    ],
    "currentPage": 1,
    "pages": 25,
  }

  res.status(200).json({
    data,
    status: 0,
  })
}
