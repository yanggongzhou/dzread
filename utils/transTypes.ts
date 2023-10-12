import { ITypeOneVo } from "@/typings/browse.interface";
const _typeOneVoList = [
  {
    "categoryName": "出版",
    "categoryId": 1,
    "typeTwoVos": [
      {
        "cid": "3",
        "title": "文艺",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "27",
            "title": "外国文学"
          },
          {
            "markId": "28",
            "title": "戏剧曲艺"
          },
          {
            "markId": "29",
            "title": "散文随笔"
          },
          {
            "markId": "30",
            "title": "文学作品集"
          },
          {
            "markId": "31",
            "title": "文学理论"
          },
          {
            "markId": "32",
            "title": "文学鉴赏"
          },
          {
            "markId": "33",
            "title": "日记书信"
          },
          {
            "markId": "34",
            "title": "民间文学"
          },
          {
            "markId": "35",
            "title": "现代诗歌"
          },
          {
            "markId": "37",
            "title": "纪实文学"
          },
          {
            "markId": "38",
            "title": "诗词歌赋"
          },
          {
            "markId": "612",
            "title": "国学经典"
          },
          {
            "markId": "686",
            "title": "儿童读物"
          },
          {
            "markId": "687",
            "title": "艺术"
          }
        ]
      },
      {
        "cid": "11",
        "title": "传记",
        "categoryMark": [
          {
            "markId": "116",
            "title": "帝王将相"
          },
          {
            "markId": "117",
            "title": "政经人物"
          },
          {
            "markId": "118",
            "title": "大家名流"
          },
          {
            "markId": "128",
            "title": "文体明星"
          },
          {
            "markId": "134",
            "title": "自传"
          }
        ]
      },
      {
        "cid": "2",
        "title": "小说",
        "markMsg": "热",
        "markColor": "#f00000",
        "categoryMark": [
          {
            "markId": "6",
            "title": "世界名著"
          },
          {
            "markId": "7",
            "title": "中国古典"
          },
          {
            "markId": "8",
            "title": "中国近现代"
          },
          {
            "markId": "9",
            "title": "乡土社会"
          },
          {
            "markId": "10",
            "title": "军事谍战"
          },
          {
            "markId": "11",
            "title": "历史架空"
          },
          {
            "markId": "13",
            "title": "外国小说"
          },
          {
            "markId": "14",
            "title": "官场小说"
          },
          {
            "markId": "15",
            "title": "小说作品集"
          },
          {
            "markId": "16",
            "title": "幻想小说"
          },
          {
            "markId": "17",
            "title": "当代小说"
          },
          {
            "markId": "18",
            "title": "影视小说"
          },
          {
            "markId": "20",
            "title": "惊悚恐怖"
          },
          {
            "markId": "21",
            "title": "推理悬疑"
          },
          {
            "markId": "22",
            "title": "武侠小说"
          },
          {
            "markId": "24",
            "title": "科幻小说"
          },
          {
            "markId": "25",
            "title": "职场商战"
          },
          {
            "markId": "26",
            "title": "言情小说"
          }
        ]
      },
      {
        "cid": "10",
        "title": "历史",
        "categoryMark": [
          {
            "markId": "101",
            "title": "世界史"
          },
          {
            "markId": "102",
            "title": "中国通史"
          },
          {
            "markId": "103",
            "title": "先秦秦汉"
          },
          {
            "markId": "105",
            "title": "口述随笔"
          },
          {
            "markId": "107",
            "title": "史论专著"
          },
          {
            "markId": "110",
            "title": "宋元明清"
          },
          {
            "markId": "112",
            "title": "中国近现代史"
          },
          {
            "markId": "113",
            "title": "通俗说史"
          },
          {
            "markId": "114",
            "title": "隋唐"
          },
          {
            "markId": "115",
            "title": "魏晋五代十国"
          }
        ]
      },
      {
        "cid": "31",
        "title": "理财",
        "categoryMark": [
          {
            "markId": "301",
            "title": "理财技巧"
          },
          {
            "markId": "309",
            "title": "股票"
          }
        ]
      },
      {
        "cid": "1",
        "title": "青春",
        "markMsg": "热",
        "markColor": "#f00000",
        "categoryMark": [
          {
            "markId": "1",
            "title": "情感"
          },
          {
            "markId": "2",
            "title": "校园"
          },
          {
            "markId": "3",
            "title": "穿越"
          },
          {
            "markId": "4",
            "title": "轻小说"
          },
          {
            "markId": "5",
            "title": "古言"
          }
        ]
      },
      {
        "cid": "20",
        "title": "社科",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "219",
            "title": "实用心理学"
          },
          {
            "markId": "220",
            "title": "文化评述"
          },
          {
            "markId": "221",
            "title": "法律"
          },
          {
            "markId": "222",
            "title": "军事"
          },
          {
            "markId": "223",
            "title": "哲学"
          },
          {
            "markId": "224",
            "title": "社会人文"
          },
          {
            "markId": "225",
            "title": "中外政治"
          },
          {
            "markId": "227",
            "title": "宗教"
          },
          {
            "markId": "688",
            "title": "政治学"
          }
        ]
      },
      {
        "cid": "23",
        "title": "生活",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "246",
            "title": "女性时尚"
          },
          {
            "markId": "247",
            "title": "美体健身"
          },
          {
            "markId": "248",
            "title": "婚恋两性"
          },
          {
            "markId": "249",
            "title": "养生保健"
          },
          {
            "markId": "250",
            "title": "孕产早教"
          },
          {
            "markId": "251",
            "title": "亲子家教"
          },
          {
            "markId": "614",
            "title": "旅游"
          },
          {
            "markId": "615",
            "title": "美食"
          },
          {
            "markId": "616",
            "title": "家居"
          },
          {
            "markId": "617",
            "title": "星座占卜"
          },
          {
            "markId": "618",
            "title": "幽默"
          }
        ]
      },
      {
        "cid": "35",
        "title": "科教",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "330",
            "title": "科普"
          },
          {
            "markId": "331",
            "title": "自然理化"
          },
          {
            "markId": "332",
            "title": "工农医建"
          },
          {
            "markId": "333",
            "title": "信息网络"
          },
          {
            "markId": "334",
            "title": "外语"
          },
          {
            "markId": "335",
            "title": "教辅"
          }
        ]
      },
      {
        "cid": "12",
        "title": "励志",
        "categoryMark": [
          {
            "markId": "139",
            "title": "人际交往"
          },
          {
            "markId": "141",
            "title": "创业就业"
          },
          {
            "markId": "146",
            "title": "心灵鸡汤"
          },
          {
            "markId": "147",
            "title": "成功学"
          },
          {
            "markId": "149",
            "title": "激励励志"
          },
          {
            "markId": "150",
            "title": "演讲口才"
          },
          {
            "markId": "152",
            "title": "职场法则"
          },
          {
            "markId": "697",
            "title": "女性励志"
          }
        ]
      },
      {
        "cid": "22",
        "title": "经管",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "237",
            "title": "通俗经管读物"
          },
          {
            "markId": "238",
            "title": "市场营销"
          },
          {
            "markId": "239",
            "title": "领导学"
          },
          {
            "markId": "240",
            "title": "经济学"
          },
          {
            "markId": "241",
            "title": "管理学"
          },
          {
            "markId": "243",
            "title": "财贸金融"
          },
          {
            "markId": "689",
            "title": "经济形势"
          },
          {
            "markId": "690",
            "title": "电子商务"
          }
        ]
      }
    ]
  },
  {
    "categoryName": "女频",
    "categoryId": 3,
    "typeTwoVos": [
      {
        "cid": "85",
        "title": "古代言情",
        "markMsg": "热",
        "markColor": "#f00000",
        "categoryMark": [
          {
            "markId": "585",
            "title": "古色古香"
          },
          {
            "markId": "586",
            "title": "女尊女强"
          },
          {
            "markId": "587",
            "title": "重生逆袭"
          },
          {
            "markId": "588",
            "title": "宫斗宅斗"
          },
          {
            "markId": "589",
            "title": "清穿"
          },
          {
            "markId": "590",
            "title": "种田经商"
          },
          {
            "markId": "591",
            "title": "穿越时空"
          }
        ]
      },
      {
        "cid": "80",
        "title": "女生悬疑",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "608",
            "title": "灵异鬼夫"
          },
          {
            "markId": "609",
            "title": "原创悬疑"
          }
        ]
      },
      {
        "cid": "82",
        "title": "青春校园",
        "categoryMark": [
          {
            "markId": "575",
            "title": "贵族学院"
          },
          {
            "markId": "576",
            "title": "青春纯爱"
          }
        ]
      },
      {
        "cid": "156",
        "title": "女人234",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "755",
            "title": "女人三级"
          }
        ]
      },
      {
        "cid": "83",
        "title": "现代言情",
        "markMsg": "热",
        "markColor": "#f00000",
        "categoryMark": [
          {
            "markId": "577",
            "title": "总裁豪门"
          },
          {
            "markId": "578",
            "title": "都市纯爱"
          },
          {
            "markId": "579",
            "title": "重生异能"
          },
          {
            "markId": "754",
            "title": "女人无敌"
          }
        ]
      },
      {
        "cid": "84",
        "title": "幻想言情",
        "markMsg": "热",
        "markColor": "#f00000",
        "categoryMark": [
          {
            "markId": "581",
            "title": "仙侠幻情"
          },
          {
            "markId": "582",
            "title": "妖精情缘"
          },
          {
            "markId": "584",
            "title": "魔法异界"
          }
        ]
      },
      {
        "cid": "79",
        "title": "快穿次元",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "611",
            "title": "次元地带"
          }
        ]
      }
    ]
  },
  {
    "categoryName": "男频",
    "categoryId": 2,
    "typeTwoVos": [
      {
        "cid": "64",
        "title": "玄幻789",
        "markMsg": "热",
        "markColor": "#f00000",
        "categoryMark": [
          {
            "markId": "512",
            "title": "东方玄幻"
          },
          {
            "markId": "513",
            "title": "异世大陆"
          },
          {
            "markId": "514",
            "title": "斗气世界"
          },
          {
            "markId": "515",
            "title": "王朝争霸"
          }
        ]
      },
      {
        "cid": "212",
        "title": "啊啊啊啊啊",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "802",
            "title": "first_day"
          }
        ]
      },
      {
        "cid": "73",
        "title": "游戏",
        "categoryMark": [
          {
            "markId": "554",
            "title": "游戏生涯"
          },
          {
            "markId": "555",
            "title": "虚拟网游"
          }
        ]
      },
      {
        "cid": "74",
        "title": "竞技",
        "categoryMark": [
          {
            "markId": "556",
            "title": "篮球风云"
          },
          {
            "markId": "557",
            "title": "足球天下"
          }
        ]
      },
      {
        "cid": "183",
        "title": "角色",
        "markMsg": "题",
        "markColor": "角色",
        "categoryMark": [
          {
            "markId": "805",
            "title": "Google"
          }
        ]
      },
      {
        "cid": "65",
        "title": "仙侠",
        "markMsg": "热",
        "markColor": "#f00000",
        "categoryMark": [
          {
            "markId": "516",
            "title": "古典仙侠"
          },
          {
            "markId": "517",
            "title": "奇幻修真"
          },
          {
            "markId": "518",
            "title": "洪荒封神"
          },
          {
            "markId": "519",
            "title": "现代修真"
          }
        ]
      },
      {
        "cid": "114",
        "title": "小程序男频",
        "markMsg": "角",
        "markColor": "#DC143C",
        "categoryMark": [
          {
            "markId": "794",
            "title": "ces1"
          }
        ]
      },
      {
        "cid": "70",
        "title": "都市生活1",
        "markMsg": "大",
        "markColor": "#03D229",
        "categoryMark": [
          {
            "markId": "540",
            "title": "古玩鉴宝"
          },
          {
            "markId": "541",
            "title": "明星仕商"
          },
          {
            "markId": "543",
            "title": "异术超能"
          },
          {
            "markId": "545",
            "title": "高手激战"
          },
          {
            "markId": "546",
            "title": "医道圣手"
          },
          {
            "markId": "548",
            "title": "风水玄术"
          },
          {
            "markId": "709",
            "title": "支付宝花呗支付"
          },
          {
            "markId": "710",
            "title": "goo"
          },
          {
            "markId": "712",
            "title": "测试1"
          },
          {
            "markId": "713",
            "title": "测试2"
          },
          {
            "markId": "714",
            "title": "测试3"
          },
          {
            "markId": "715",
            "title": "测试4"
          },
          {
            "markId": "718",
            "title": "测试7"
          },
          {
            "markId": "719",
            "title": "测试8"
          },
          {
            "markId": "720",
            "title": "测试89"
          },
          {
            "markId": "721",
            "title": "测试76"
          },
          {
            "markId": "722",
            "title": "测试23"
          },
          {
            "markId": "723",
            "title": "测试8121"
          },
          {
            "markId": "724",
            "title": "测试123"
          },
          {
            "markId": "725",
            "title": "测试879"
          },
          {
            "markId": "726",
            "title": "测试213123"
          },
          {
            "markId": "727",
            "title": "测试87879"
          },
          {
            "markId": "728",
            "title": "测试123123213"
          }
        ]
      },
      {
        "cid": "66",
        "title": "奇幻",
        "categoryMark": [
          {
            "markId": "520",
            "title": "西方奇幻"
          },
          {
            "markId": "521",
            "title": "魔法校园"
          },
          {
            "markId": "806",
            "title": "123123"
          }
        ]
      },
      {
        "cid": "223",
        "title": "系统文",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "801",
            "title": "这个是订单配置"
          },
          {
            "markId": "807",
            "title": "神豪系统"
          }
        ]
      },
      {
        "cid": "69",
        "title": "历史",
        "categoryMark": [
          {
            "markId": "531",
            "title": "上古先秦"
          },
          {
            "markId": "532",
            "title": "两宋元明"
          },
          {
            "markId": "533",
            "title": "两晋隋唐"
          },
          {
            "markId": "535",
            "title": "架空历史"
          },
          {
            "markId": "536",
            "title": "清史民国"
          },
          {
            "markId": "537",
            "title": "秦汉三国"
          }
        ]
      },
      {
        "cid": "68",
        "title": "武侠456",
        "markMsg": "大",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "530",
            "title": "现代武侠"
          }
        ]
      },
      {
        "cid": "93",
        "title": "奇幻2",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "642",
            "title": "西方奇幻"
          },
          {
            "markId": "643",
            "title": "魔法校园"
          }
        ]
      },
      {
        "cid": "90",
        "title": "玄幻2",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "625",
            "title": "异世大陆"
          },
          {
            "markId": "626",
            "title": "斗气世界"
          }
        ]
      },
      {
        "cid": "92",
        "title": "武侠12",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "641",
            "title": "传统武侠"
          },
          {
            "markId": "758",
            "title": "金庸武侠"
          }
        ]
      },
      {
        "cid": "72",
        "title": "军事",
        "categoryMark": [
          {
            "markId": "552",
            "title": "抗日战争"
          },
          {
            "markId": "553",
            "title": "现代军事"
          }
        ]
      },
      {
        "cid": "86",
        "title": "悬疑",
        "markMsg": "",
        "markColor": "",
        "categoryMark": [
          {
            "markId": "606",
            "title": "原创灵异"
          },
          {
            "markId": "607",
            "title": "悬疑推理"
          }
        ]
      },
      {
        "cid": "71",
        "title": "校园",
        "categoryMark": [
          {
            "markId": "549",
            "title": "校园修真"
          },
          {
            "markId": "550",
            "title": "校园生活"
          }
        ]
      },
      {
        "cid": "182",
        "title": "题材",
        "markMsg": "题",
        "markColor": "题材",
        "categoryMark": [
          {
            "markId": "804",
            "title": "first_day"
          }
        ]
      },
      {
        "cid": "67",
        "title": "科幻",
        "categoryMark": [
          {
            "markId": "522",
            "title": "时空穿梭"
          },
          {
            "markId": "523",
            "title": "星际战争"
          },
          {
            "markId": "524",
            "title": "未来世界"
          },
          {
            "markId": "525",
            "title": "变异末世"
          },
          {
            "markId": "526",
            "title": "机甲科技"
          }
        ]
      }
    ]
  }
];

export const transTypes = (typeOneVoList: ITypeOneVo[]): ITypeOneVo[] => {

  return []
}
