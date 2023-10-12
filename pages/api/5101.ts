import type { NextApiRequest, NextApiResponse } from 'next'

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const result = {
    "retCode": 0,
    "data": {
      "totalSize": 20,
      "bookList": [
        {
          "bookId": "11010069767",
          "bookName": "至尊神婿",
          "author": "狼牙土豆",
          "introduction": "入赘三年，活得不如狗。一朝崛起，岳母小姨子给跪了。 岳母：求求你别离开我女儿。小姨子：姐夫我错了......",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010069767/11010069767.jpg?t=1638261703574&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "170266632"
        },
        {
          "bookId": "11010030861",
          "bookName": "超级赘婿",
          "author": "黑夜的瞳",
          "introduction": "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了...",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030861/11010030861.jpg?t=1634609613707&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "13469415"
        },
        {
          "bookId": "11010031953",
          "bookName": "神级狂婿",
          "author": "吻天的狼",
          "introduction": "岳母：你赶紧离开我女儿，你个废物东西，配不上他。三日后，女婿开豪车上门岳母：我求求你别离开我女儿。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010031953/11010031953.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "42949645"
        },
        {
          "bookId": "11010070556",
          "bookName": "护国利剑",
          "author": "会说话的香烟",
          "introduction": "　　　　手握护国神剑，这世上，没他不敢杀的人。　　拿起银针，世间没他治不了的病。　　牵起她的手，这天下，再没人敢欺负她半分。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070556/11010070556.jpg?t=1631708681430&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "17784713"
        },
        {
          "bookId": "11010058559",
          "bookName": "天王殿水电费看激励刷卡就联发科路京东方看激励是空晶方科技了接口了快结束了复健科",
          "author": "状元不出门离开的弗兰克家老师的看激励上来的凯乐科技SDK解封离开",
          "introduction": "六年浴血，王者归来，凭我七尺之躯，可拳打地痞恶霸，可护娇妻萌娃...",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010058559/11010058559.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "17110999"
        },
        {
          "bookId": "11010075026",
          "bookName": "绝世无双",
          "author": "燕北",
          "introduction": "战场浴血征战，女儿打来电话求救，一夜之间，三千世界顶级强者，齐赴大夏！他萧天策一生凄苦，身负血海深仇，女儿跟妻子就是他生命中的一道光。他这辈子绝对不允许自己的女儿跟妻子受到一丝一毫的伤害！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075026/11010075026.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "17204989"
        },
        {
          "bookId": "11010034487",
          "bookName": "超级战神在都市",
          "author": "我不是z",
          "introduction": "五年前，被陷害入狱！五年后，他荣耀归来，天下权势，尽握手中！我所失去的，终会千百倍的拿回来！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010034487/11010034487.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "6887079"
        },
        {
          "bookId": "11010024538",
          "bookName": "贵婿临门",
          "author": "绝人",
          "introduction": "（又名：华丽逆袭、豪婿 主角：韩三千、苏迎夏）入赘三年，所有人都以为可以骑在我头上。 而我，只等她牵起我的手，便可以给她整个世界。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010024538/11010024538.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "13763010"
        },
        {
          "bookId": "11010057627",
          "bookName": "少年风水师",
          "author": "听澜本尊",
          "introduction": "爷爷去世的时候，轰动全城......",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "4723149"
        },
        {
          "bookId": "11010074128",
          "bookName": "极品皇太子",
          "author": "青云直上",
          "introduction": "站在你面前的，是史上最极品、最独一无二的太子爷！怼皇帝、捉奸臣、乱京都，平逆贼，打城池，泡美人，一不小心，就实现了醉卧美人膝，醒掌天下权的人生梦想！人人都劝他登临帝位，可是......“救命！我不想当皇帝啊！”",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074128/11010074128.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "2336337"
        },
        {
          "bookId": "11010072361",
          "bookName": "万古帝婿",
          "author": "城南一梦",
          "introduction": "夜玄魂穿万古，征战诸天，成就不死夜帝的传说，却因妻徒背叛，灵魂沉睡九万年。  九万年后，夜玄苏醒，魂归本体，成为了皇极仙宗的窝囊废女婿。  而他当年收下的弟子已登巅峰，一座他曾修炼过的枯山成为当世顶级修炼圣地，就连他随手救下的一只小猴子，也成为了妖族无敌大圣。  万古帝魂，一夕归来，自此之后，一代帝婿崛起，开启横推万古的无敌神话！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072361/11010072361.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "5826988"
        },
        {
          "bookId": "11010073240",
          "bookName": "奇门至尊",
          "author": "真庸懒人",
          "introduction": "第一天进城的山村少年，被美女处处嫌弃。她却不知，少年握有上古龟甲，占卜相面，医药符箓，无所不通。从此逍遥都市，白手起家，一不下心成了个世界首富。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073240/11010073240.jpg?t=1642729933149&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "1906182"
        },
        {
          "bookId": "11010075891",
          "bookName": "神级龙帅",
          "author": "至尊狗剩",
          "introduction": "八年前，他本是豪门之子，却为爱顶罪入狱，戴罪从戎。 八年后，他荣耀归来，却遭到未婚妻肆意侮辱，甚至退婚！ 一怒之下，他转身求婚未婚妻闺蜜，冷漠道：“我本龙帅，绝世无双！”",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075891/11010075891.jpg?t=1634524548653&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "4970952"
        },
        {
          "bookId": "11010071180",
          "bookName": "傲世枭雄",
          "author": "而立之年",
          "introduction": "醒掌天下权，醉卧美人膝；人生在世，当一世逍遥。王超，因机缘巧合得到赤练仙人传承，从此，以一手医术闯荡江湖，纵横都市，掌握亿万家财，无上权力！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010071180/11010071180.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "5128120"
        },
        {
          "bookId": "11010071676",
          "bookName": "战神为婿",
          "author": "城南一梦",
          "introduction": "十年戎马，封号战神。当麒麟战神荣耀归来，却遇父母惨死，他誓报血海深仇......当年一块面包恩情的女孩，竟是未婚妻，我接下这上天注定的缘分，护她终生。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010071676/11010071676.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "248675"
        },
        {
          "bookId": "11010073625",
          "bookName": "女神的上门狂婿",
          "author": "小脚冰冷",
          "introduction": "上门为婿，遭人唾弃，直到外公找到他，命运从此如风起，扶摇直上九万里！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073625/11010073625.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "347936"
        },
        {
          "bookId": "11010072503",
          "bookName": "都市战婿归来",
          "author": "城南一梦",
          "introduction": "做了上门女婿一年，顾远时时刻刻都被岳父看不起，在一次被小舅子打伤之后，他觉醒了自己一年前的记忆。原来，他竟然是傲视东境的羽林军战神！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072503/11010072503.jpg?t=1631096999347&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "253236"
        },
        {
          "bookId": "11010076830",
          "bookName": "至尊帝婿",
          "author": "陆通",
          "introduction": "一代战神回归都市，入赘豪门，却被老婆一家当成了窝囊废！ 家族宴会那天，门外8000人齐喊：“请战神出山”岳母：谁是战神?废婿默默站起身。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076830/11010076830.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "3663223"
        },
        {
          "bookId": "11010067973",
          "bookName": "女神的上门豪婿",
          "author": "韦小鸨",
          "introduction": "我要分亿万家产，给女儿和老婆更好的生活！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010067973/11010067973.jpg?t=1630655748860&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "168636"
        },
        {
          "bookId": "11010047868",
          "bookName": "战神归来",
          "author": "李余生",
          "introduction": "戎马十载，一战封神！却突闻至亲兄弟被人所害，含恨而终.....如今携无上神威，强势归来，让仇人粉身碎骨！让所有人向他低头！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010047868/11010047868.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "tag": [],
          "hot": "538441"
        }
      ],
      "searchType": 5,
      "isMore": 1
    }
  }

  res.status(200).json(result)
}
