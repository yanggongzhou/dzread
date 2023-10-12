import type { NextApiRequest, NextApiResponse } from 'next'

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const result = {
    "retCode": 0,
    "data": {
      "rankData": [
        {
          "rankType": 1,
          "rankTypeName": "男生",
          "subList": [
            {
              "id": 17,
              "name": "经典榜",
              "code": 20,
              "rankStyle": "1",
              "sex": 1,
              "status": 1,
              "sort": 1,
              "comment": "1",
              "ctime": 1696908483000,
              "utime": 1696908483000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                }
              ]
            },
            {
              "id": 4,
              "name": "畅销榜",
              "code": 1,
              "rankStyle": "1,2",
              "sex": 1,
              "status": 1,
              "sort": 1,
              "comment": "1",
              "ctime": 1695708312000,
              "utime": 1696908706000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                },
                {
                  "styleName": "月榜",
                  "style": 2
                }
              ]
            },
            {
              "id": 5,
              "name": "完本榜",
              "code": 3,
              "rankStyle": "1,2",
              "sex": 1,
              "status": 1,
              "sort": 2,
              "comment": "1",
              "ctime": 1695708377000,
              "utime": 1696908710000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                },
                {
                  "styleName": "月榜",
                  "style": 2
                }
              ]
            },
            {
              "id": 6,
              "name": "新书榜",
              "code": 5,
              "rankStyle": "1",
              "sex": 1,
              "status": 1,
              "sort": 3,
              "comment": "3",
              "ctime": 1695708389000,
              "utime": 1696908719000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                }
              ]
            },
            {
              "id": 7,
              "name": "好评榜",
              "code": 11,
              "rankStyle": "1",
              "sex": 1,
              "status": 1,
              "sort": 4,
              "comment": "1",
              "ctime": 1695708406000,
              "utime": 1696908722000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                }
              ]
            }
          ]
        },
        {
          "rankType": 2,
          "rankTypeName": "女生",
          "subList": [
            {
              "id": 8,
              "name": "畅销榜",
              "code": 2,
              "rankStyle": "1,2",
              "sex": 2,
              "status": 1,
              "sort": 5,
              "comment": "1",
              "ctime": 1695708420000,
              "utime": 1696908727000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                },
                {
                  "styleName": "月榜",
                  "style": 2
                }
              ]
            },
            {
              "id": 10,
              "name": "完本榜",
              "code": 4,
              "rankStyle": "1,2",
              "sex": 2,
              "status": 1,
              "sort": 6,
              "comment": "1",
              "ctime": 1695708599000,
              "utime": 1696908733000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                },
                {
                  "styleName": "月榜",
                  "style": 2
                }
              ]
            },
            {
              "id": 11,
              "name": "新书榜",
              "code": 6,
              "rankStyle": "1",
              "sex": 2,
              "status": 1,
              "sort": 7,
              "comment": "1",
              "ctime": 1695708936000,
              "utime": 1696908736000,
              "styleList": [
                {
                  "styleName": "日榜",
                  "style": 1
                }
              ]
            }
          ]
        }
      ],
      "rankBook": [
        {
          "bookId": "11010069767",
          "bookName": "至尊神婿",
          "author": "狼牙土豆",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010069767/11010069767.jpg?t=1638261703574&imageView2/0/w/200/h/267",
          "introduction": "入赘三年，活得不如狗。一朝崛起，岳母小姨子给跪了。 岳母：求求你别离开我女儿。小姨子：姐夫我错了......",
          "clickNum": "170266632",
          "num": "1.7亿",
          "bookTypeThreeMap": {
            "540": "古玩鉴宝"
          },
          "commentScore": "6.4"
        },
        {
          "bookId": "11010070556",
          "bookName": "护国利剑",
          "author": "会说话的香烟",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070556/11010070556.jpg?t=1631708681430&imageView2/0/w/200/h/267",
          "introduction": "　　　　手握护国神剑，这世上，没他不敢杀的人。　　拿起银针，世间没他治不了的病。　　牵起她的手，这天下，再没人敢欺负她半分。",
          "clickNum": "17784713",
          "num": "1778万",
          "commentScore": "8.1"
        },
        {
          "bookId": "11010071180",
          "bookName": "傲世枭雄",
          "author": "而立之年",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010071180/11010071180.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "introduction": "醒掌天下权，醉卧美人膝；人生在世，当一世逍遥。王超，因机缘巧合得到赤练仙人传承，从此，以一手医术闯荡江湖，纵横都市，掌握亿万家财，无上权力！",
          "clickNum": "5128120",
          "num": "513万",
          "bookTypeThreeMap": {
            "530": "现代武侠"
          },
          "commentScore": "7.5"
        },
        {
          "bookId": "11010075026",
          "bookName": "绝世无双",
          "author": "燕北",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075026/11010075026.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "introduction": "战场浴血征战，女儿打来电话求救，一夜之间，三千世界顶级强者，齐赴大夏！他萧天策一生凄苦，身负血海深仇，女儿跟妻子就是他生命中的一道光。他这辈子绝对不允许自己的女儿跟妻子受到一丝一毫的伤害！",
          "clickNum": "17204989",
          "num": "1720万",
          "commentScore": "8.1"
        },
        {
          "bookId": "11010073953",
          "bookName": "狂龙战婿",
          "author": "一笔清风",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073953/11010073953.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "introduction": "一代战神出狱归来，却发现女儿身受重病，老婆竟然在陪别的男人喝酒,......",
          "clickNum": "7177095",
          "num": "718万",
          "commentScore": "7.8"
        },
        {
          "bookId": "11010072361",
          "bookName": "万古帝婿",
          "author": "城南一梦",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072361/11010072361.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "introduction": "夜玄魂穿万古，征战诸天，成就不死夜帝的传说，却因妻徒背叛，灵魂沉睡九万年。  九万年后，夜玄苏醒，魂归本体，成为了皇极仙宗的窝囊废女婿。  而他当年收下的弟子已登巅峰，一座他曾修炼过的枯山成为当世顶级修炼圣地，就连他随手救下的一只小猴子，也成为了妖族无敌大圣。  万古帝魂，一夕归来，自此之后，一代帝婿崛起，开启横推万古的无敌神话！",
          "clickNum": "5826988",
          "num": "583万",
          "bookTypeThreeMap": {
            "512": "东方玄幻"
          },
          "commentScore": "7.6"
        },
        {
          "bookId": "11010058559",
          "bookName": "天王殿水电费看激励刷卡就联发科路京东方看激励是空晶方科技了接口了快结束了复健科",
          "author": "状元不出门离开的弗兰克家老师的看激励上来的凯乐科技SDK解封离开",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010058559/11010058559.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "introduction": "六年浴血，王者归来，凭我七尺之躯，可拳打地痞恶霸，可护娇妻萌娃...",
          "clickNum": "17110999",
          "num": "1711万",
          "commentScore": "7.6"
        },
        {
          "bookId": "11010076155",
          "bookName": "不败天王",
          "author": "二师兄",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076155/11010076155.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "introduction": "上门女婿与老婆离婚后，无数大佬蜂拥而至，携千亿家财，求娶其女儿......",
          "clickNum": "1474906",
          "num": "147万",
          "commentScore": "8.0"
        },
        {
          "bookId": "11010031953",
          "bookName": "神级狂婿",
          "author": "吻天的狼",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010031953/11010031953.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "introduction": "岳母：你赶紧离开我女儿，你个废物东西，配不上他。三日后，女婿开豪车上门岳母：我求求你别离开我女儿。",
          "clickNum": "42949645",
          "num": "4295万",
          "commentScore": "4.8"
        },
        {
          "bookId": "11010030861",
          "bookName": "超级赘婿",
          "author": "黑夜的瞳",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030861/11010030861.jpg?t=1634609613707&imageView2/0/w/200/h/267",
          "introduction": "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了...",
          "clickNum": "13469415",
          "num": "1347万",
          "commentScore": "7.6"
        }
      ],
      "totalSize": 89
    }
  }

  res.status(200).json(result)
}
