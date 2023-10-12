import type { NextApiRequest, NextApiResponse } from 'next'

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const result = {
    "retCode": 0,
    "data": {
      "books": [
        {
          "bookId": "11010073625",
          "bookName": "女神的上门狂婿",
          "bookAlias": "",
          "author": "小脚冰冷",
          "introduction": "上门为婿，遭人唾弃，直到外公找到他，命运从此如风起，扶摇直上九万里！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073625/11010073625.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "金钱",
            "富豪",
            "反转",
            "女婿"
          ],
          "protagonist": "陈华,杨紫曦",
          "hot": "35万",
          "clickNum": "347936",
          "updateTime": 1695715193000,
          "totalWordSize": "4187161",
          "tagV3": [
            "都市测试",
            "女总裁",
            "弃少"
          ],
          "scoreNum": "8.0",
          "lastChapterId": "541685522",
          "lastChapterUtime": "2023-04-23 21:23:48",
          "bookTypeThreeMap": {
            "17": "当代小说"
          }
        },
        {
          "bookId": "11010070424",
          "bookName": "战龙豪婿",
          "bookAlias": "",
          "author": "陈望许若然",
          "introduction": "陈望为杀仇敌，深入敌阵，身受重伤。卧床三年无法动弹，得许若然细心照顾。三年后，陈望醒来。于是，天变了。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070424/11010070424.jpg?t=1627959988090&imageView2/0/w/200/h/267",
          "status": "1",
          "statusCn": "完本",
          "protagonist": "许若然,陈望",
          "hot": "1.28万",
          "clickNum": "12795",
          "updateTime": 1695715192000,
          "totalWordSize": "3315598",
          "tagV3": [
            "战神",
            "都市测试",
            "女总裁"
          ],
          "scoreNum": "7.9",
          "lastChapterId": "516055312",
          "lastChapterUtime": "2022-01-11 03:10:16",
          "bookTypeThreeMap": {
            "17": "当代小说",
            "530": "现代武侠"
          }
        },
        {
          "bookId": "11000103030",
          "bookName": "出版物有评级评级",
          "bookAlias": "",
          "author": "夭夭爱写文",
          "introduction": "我死死抱着怀里的好大儿，再看看男神怀里的猫，愣住了。这是......灰白双胞胎？没错，这俩猫互换了。而我竟然一无所知，帮男神养了好几天好大儿。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000103030/11000103030.jpg?t=1679453603777&imageView2/0/w/200/h/267",
          "status": "1",
          "statusCn": "完本",
          "protagonist": "",
          "hot": "5000",
          "clickNum": "5000",
          "updateTime": 1695715197000,
          "totalWordSize": "39259",
          "tagV3": [
            "世界史"
          ],
          "scoreNum": "7.5",
          "lastChapterId": "541686159",
          "lastChapterUtime": "2023-05-08 21:10:19",
          "bookTypeThreeMap": {
            "6": "世界名著"
          }
        },
        {
          "bookId": "11000101218",
          "bookName": "邪医狂妃",
          "bookAlias": "",
          "author": "白芷柒",
          "introduction": "她是杀伐果断的一名顶尖杀手，也是一名敢于从阎王手中抢人的国际名医，一场早有谋划的意外，竟让她穿越成一个胆小懦弱的废材女。父亲不喜，生母早逝，庶姐欺凌，甚至连下人都敢骑在她头上。当她再次醒来，她的一切才刚刚开始。这一世，苏知予誓要报仇雪恨，夺回属于自己的东西。虐渣男，教训白莲，步步为营。一切都按她的计划进行着，中途却杀出一个绝美妖孽的七皇子。尊敬的皇子殿下您不操心下国事，天天往我这里跑做甚？",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000101218/11000101218.jpg?t=1650022811837&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "穿越",
            "医术",
            "嫡女",
            "权谋",
            "女杀手"
          ],
          "protagonist": "苏知予,司空祁",
          "hot": "5000",
          "clickNum": "5000",
          "updateTime": 1695715193000,
          "totalWordSize": "1717946",
          "tagV3": [
            "世界史"
          ],
          "scoreNum": "8.3",
          "lastChapterId": "514500462",
          "lastChapterUtime": "2022-04-15 17:26:18",
          "bookTypeThreeMap": {
            "6": "世界名著"
          }
        },
        {
          "bookId": "11000100568",
          "bookName": "爆宠少夫人：神秘宝宝要上天",
          "bookAlias": "",
          "author": "萨满阴阳师",
          "introduction": "一场豪门阴谋，让矫颜沦为财阀凤氏集团内斗的牺牲品。大婚当日未婚夫离奇失踪，孪生哥哥假冒新郎充数。深宅大院内步步惊心，处处惊险，为求自保，她做了凤家贵客神秘大佬沈渊的女人。矫颜以为找到了终身归宿，可事发之日，沈渊却无影无踪，将她逼入死路。最终，凤家人把即将临产的矫颜沉入湖底......五年之后，矫颜化名蒋娇颜，改头换面高调归来。一改从前懦弱胆小的性格。一改从前清纯貌美的容颜。周旋于豺狼虎豹之间，游刃有余，笑对风云。只求，能为当年腹中那无辜的孩子报仇......这一次，她定要让沈渊身败名裂，让凤家灰飞烟灭，让所有伤害过她的人血债血偿！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000100568/11000100568.jpg?t=1637806955428&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "protagonist": "",
          "hot": "5000",
          "clickNum": "5000",
          "updateTime": 1695715185000,
          "totalWordSize": "195981",
          "scoreNum": "8.3",
          "lastChapterId": "492495014",
          "lastChapterUtime": "2021-05-26 11:31:03",
          "bookTypeThreeMap": {
            "8": "中国近现代"
          }
        },
        {
          "bookId": "11000072352",
          "bookName": "九日成妃，王爷步步来袭",
          "bookAlias": "",
          "author": "水安然",
          "introduction": "“乖乖躺好，等本姑娘临幸！”21世纪的彪悍女特工指着美人榻，手上皮鞭挥得猎猎作响。“漓儿，本王才是男人！”皇长孙殿下嘴上说着不要，身体却很诚实地躺倒。“传闻皇长孙性喜雌伏，自当是本姑娘在上！”“如此，慕漓姑娘请怜惜本王！”皇长孙殿下嘴巴诚实，身体更加诚实地闭上眼睛……",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072352/11000072352.jpg?t=1638507074393&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "九日成妃，王爷步步来袭",
            "水安然",
            "穿越"
          ],
          "protagonist": "",
          "hot": "5027",
          "clickNum": "5027",
          "updateTime": 1695715185000,
          "totalWordSize": "221569",
          "scoreNum": "7.7",
          "lastChapterId": "10148884",
          "lastChapterUtime": "2016-12-20 18:58:08",
          "bookTypeThreeMap": {
            "6": "世界名著"
          }
        },
        {
          "bookId": "11000072350",
          "bookName": "妖怪生活大事记",
          "bookAlias": "",
          "author": "苍寂",
          "introduction": "车流如龙的大都市之中，每个人都有着一样的外面，麻木而呆滞。谁也不知道，或许就在你刚刚擦肩而过的人之中，便有一个披着人类外表的妖怪！他们生活在这大都市之中，享受着人类文明的方便快捷。但同时，他们也会经历各种各样不可思议的事情……",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072350/11000072350.jpg?t=1638435552402&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "妖怪生活大事记",
            "苍寂",
            "都市"
          ],
          "protagonist": "",
          "hot": "5013",
          "clickNum": "5013",
          "updateTime": 1695715184000,
          "totalWordSize": "712961",
          "scoreNum": "7.5",
          "lastChapterId": "10203142",
          "lastChapterUtime": "2016-12-24 04:29:17",
          "bookTypeThreeMap": {
            "26": "言情小说"
          }
        },
        {
          "bookId": "11000072347",
          "bookName": "龙极纹身",
          "bookAlias": "",
          "author": "千幻冰云",
          "introduction": "天地人，你我他，混沌为晴空阴雨，也无所谓时空交错。顺流而下，逆流而上，放歌千万里！全新的修真设定，浪漫的仙侠奇情，奇异的金面少年，神秘的龙极纹身　　少年心事当拿云，让龙极纹身带着我们一起进入，少年拿云的成长历程……　当你踏上这条路，就已注定执剑走天涯。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072347/11000072347.jpg?t=1638506251376&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "龙极纹身",
            "千幻冰云",
            "玄幻奇幻"
          ],
          "protagonist": "",
          "hot": "5011",
          "clickNum": "5011",
          "updateTime": 1695715185000,
          "totalWordSize": "894157",
          "scoreNum": "8.2",
          "lastChapterId": "10147886",
          "lastChapterUtime": "2016-12-20 18:54:49",
          "bookTypeThreeMap": {
            "6": "世界名著"
          }
        },
        {
          "bookId": "11000072346",
          "bookName": "百鬼劫",
          "bookAlias": "",
          "author": "奕妖",
          "introduction": "作为一个单身了整整二十年的屌丝，我的女朋友从来都只有左手或右手，谈恋爱这种事连想都不敢想！忽然有一天，我竟然被倒追了，这其中不但有气质冷艳的女护士，还有已死数百年的明朝女鬼，甚至连喜食人心的男鬼都过来凑热闹...天啊！我上辈子到底做了什么孽啊，你们这些御姐萝莉都给我走开，不要再追了...",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072346/11000072346.jpg?t=1638435613601&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "爽文",
            "美女",
            "异能",
            "逆袭",
            "惊悚",
            "草根"
          ],
          "protagonist": "",
          "hot": "5021",
          "clickNum": "5021",
          "updateTime": 1695715185000,
          "totalWordSize": "1515069",
          "scoreNum": "8.1",
          "lastChapterId": "10497704",
          "lastChapterUtime": "2017-01-10 04:33:08",
          "bookTypeThreeMap": {
            "26": "言情小说"
          }
        },
        {
          "bookId": "11000072251",
          "bookName": "巅峰兵王",
          "bookAlias": "",
          "author": "曙芒",
          "introduction": "曾经叱咤风云的王者，却因一场阴谋颓废三年。三年后，来到曾经的地方，满目疮痍，众人为敌。这一次，我要成王，所有人都要匍匐脚下！",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072251/11000072251.jpg?t=1626845668078&imageView2/0/w/200/h/267",
          "status": "1",
          "statusCn": "完本",
          "tag": [
            "巅峰兵王",
            "曙芒",
            "军事"
          ],
          "protagonist": "",
          "hot": "5003",
          "clickNum": "5003",
          "updateTime": 1695715183000,
          "totalWordSize": "465682",
          "scoreNum": "7.6",
          "lastChapterId": "10110196",
          "lastChapterUtime": "2016-12-20 17:09:18",
          "bookTypeThreeMap": {
            "31": "文学理论",
            "35": "现代诗歌",
            "38": "诗词歌赋",
            "237": "通俗经管读物",
            "241": "管理学"
          }
        },
        {
          "bookId": "11000033570",
          "bookName": "城堡",
          "bookAlias": "",
          "author": "卡夫卡",
          "introduction": "土地测量员K受命赴某城上任，不料却受阻于城堡大门外，于是主人公K同城堡当局围绕能否进入城堡之事展开了持久烦琐的拉锯战。城堡就位于眼前一座小山上，可它可望而不可即；它是那样冷漠、威严，像一头巨兽俯视着K；它代表了一个庞大的官僚机构，那儿等级森严，有数不尽的部门和数不尽的官吏，可又有数不尽的文书尘封在那里，长年累月无人过目，得不到处理。面对这座强大的城堡，K很无奈，直到最后也没有进入城堡，也没见到城堡当权者。小说自始至终笼罩着一种神秘的、梦魇般的气氛；寓意深刻，令人回味无穷。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000033570/11000033570.jpg?t=1639970581124&imageView2/0/w/200/h/267",
          "status": "1",
          "statusCn": "完本",
          "tag": [
            "城堡",
            "历史出版"
          ],
          "protagonist": "",
          "hot": "5001",
          "clickNum": "5001",
          "updateTime": 1695715062000,
          "totalWordSize": "226381",
          "scoreNum": "7.5",
          "lastChapterId": "5146015",
          "lastChapterUtime": "2016-09-26 18:22:14",
          "bookTypeThreeMap": {
            "219": "实用心理学",
            "225": "中外政治"
          }
        },
        {
          "bookId": "11000033095",
          "bookName": "宋史",
          "bookAlias": "",
          "author": "脱脱",
          "introduction": "《宋史》撰修于元朝末年，全书有本纪47卷，志162卷，表32卷，列传255卷，共计496卷，约500万字，是二十四史中篇幅最庞大的一部官修史书。",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000033095/11000033095.jpg?t=1639970561803&imageView2/0/w/200/h/267",
          "status": "1",
          "statusCn": "完本",
          "tag": [
            "宋史",
            "脱脱",
            "历史出版"
          ],
          "protagonist": "",
          "hot": "5003",
          "clickNum": "5003",
          "updateTime": 1695715059000,
          "totalWordSize": "4807442",
          "scoreNum": "8.0",
          "lastChapterId": "5125721",
          "lastChapterUtime": "2016-09-26 17:19:52",
          "bookTypeThreeMap": {
            "219": "实用心理学"
          }
        },
        {
          "bookId": "11000032530",
          "bookName": "施公案",
          "bookAlias": "",
          "author": "佚名",
          "introduction": "　　晚清小说。亦称《施公案传》、《施案奇闻》、《百断奇观》,8卷,97回,未著撰人。大约由于其故事始于说书，后经文人加工整理敷演而成。现存道光四年(1824)刊本，有嘉庆三年（1798）序文，可推知它大约成书于乾隆、嘉庆年间。现尚存多种道光年间的刻本。1982年北京宝文堂新排印本402回，包括部分续书。小说的中心人物施仕纶，实即康熙年间施世纶,字文贤,清汉军镶黄旗人,曾任扬州、江宁知府、漕运总督等官,著有《南堂集》，《清史稿》有传。小说《序》称“采其实事数十条，表而出之，使天下后世知施公之为人，且使为官者知以施公为法也”。...",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000032530/11000032530.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "status": "1",
          "statusCn": "完本",
          "tag": [
            "施公案",
            "佚名",
            "古典"
          ],
          "protagonist": "",
          "hot": "5000",
          "clickNum": "5000",
          "updateTime": 1695715052000,
          "totalWordSize": "1179786",
          "scoreNum": "7.5",
          "lastChapterId": "5111218",
          "lastChapterUtime": "2016-09-26 16:27:46",
          "bookTypeThreeMap": {
            "6": "世界名著"
          }
        },
        {
          "bookId": "11000007503",
          "bookName": "闪婚老公太凶猛",
          "bookAlias": "",
          "author": "温煦依依",
          "introduction": "结婚前一天，她亲眼目睹男友和他的准大嫂在办公室上演限制级戏码，心碎之时，一个沉稳的男人出现在她身边。“跟我结婚，这样，他们两个无耻的男女就要每天叫你大嫂？怎样？”就这样，领了证。可是，谁能想到，原本坐在轮椅上的老公不仅不无能，还动不动就把她吃干抹净……",
          "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000007503/11000007503.jpg?t=202101010000&imageView2/0/w/200/h/267",
          "status": "0",
          "statusCn": "连载",
          "tag": [
            "闪婚老公太凶猛",
            "温煦依依",
            "契约",
            "总裁",
            "首席",
            "霸道",
            "腹黑",
            "爽文",
            "萌宠",
            "天才宝宝",
            "权少",
            "豪门"
          ],
          "protagonist": "",
          "hot": "7.86万",
          "clickNum": "78644",
          "updateTime": 1695715318000,
          "totalWordSize": "3873756",
          "scoreNum": "7.8",
          "lastChapterId": "10489258",
          "lastChapterUtime": "2017-01-09 12:02:50",
          "bookTypeThreeMap": {
            "6": "世界名著"
          }
        }
      ],
      "isMore": 0,
      "totalSize": 14,
      "typeOneVoList": [
        {
          "categoryName": "出版",
          "categoryId": 1,
          "typeTwoVos": [
            {
              "cid": "0",
              "title": "全部",
              "categoryMark": []
            },
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
            }
          ]
        },
        {
          "categoryName": "女频",
          "categoryId": 3,
          "typeTwoVos": [
            {
              "cid": "0",
              "title": "全部",
              "categoryMark": []
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
            },
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
            }
          ]
        },
        {
          "categoryName": "男频",
          "categoryId": 2,
          "typeTwoVos": [
            {
              "cid": "0",
              "title": "全部",
              "categoryMark": []
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
            }
          ]
        }
      ],
      "statusMark": [
        {
          "markId": "0",
          "title": "全部"
        },
        {
          "markId": "1",
          "title": "连载"
        },
        {
          "markId": "2",
          "title": "完本"
        }
      ],
      "wordType": [
        {
          "name": "全部",
          "type": "0"
        },
        {
          "name": "100万字以下",
          "type": "wordType1"
        },
        {
          "name": "100万-300万字",
          "type": "wordType2"
        },
        {
          "name": "300万字以上",
          "type": "wordType3"
        }
      ],
      "sortType": []
    }
  }

  res.status(200).json(result)
}
