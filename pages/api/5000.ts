import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const pcresult ={
    "retCode": 0,
    "data": {
      "seoBannerManageVos": [
        {
          "id": 12,
          "name": "测",
          "bookId": "11010035637",
          "beginTime": 1695571200000,
          "endTime": 1696003200000,
          "status": 1,
          "sort": 2,
          "extend": {
            "pcUrl": "/others/seoBannerManage/date20231009/1696821696675.jpg",
            "wapUrl": "/others/seoBannerManage/date20231009/1696821696697.jpg"
          },
          "comment": "12",
          "ctime": 1695622508000,
          "utime": 1696908464000,
          "pcUrl": "/others/seoBannerManage/date20231009/1696821696675.jpg",
          "wapUrl": "/others/seoBannerManage/date20231009/1696821696697.jpg"
        },
        {
          "id": 11,
          "name": "测试",
          "bookId": "11010035637",
          "beginTime": 1695571200000,
          "endTime": 1696003200000,
          "status": 1,
          "sort": 2,
          "extend": {
            "pcUrl": "/others/seoBannerManage/date20231009/1696821710051.jpg",
            "wapUrl": "/others/seoBannerManage/date20231009/1696821710065.jpg"
          },
          "comment": "12",
          "ctime": 1695622466000,
          "utime": 1696908455000,
          "pcUrl": "/others/seoBannerManage/date20231009/1696821710051.jpg",
          "wapUrl": "/others/seoBannerManage/date20231009/1696821710065.jpg"
        },
        {
          "id": 15,
          "name": "海湖测试1",
          "bookId": "11000001426",
          "beginTime": 1696844562000,
          "endTime": 1696867200000,
          "status": 1,
          "sort": 55,
          "extend": {
            "pcUrl": "/others/seoBannerManage/date20231009/1696844568938.png",
            "wapUrl": "/others/seoBannerManage/date20231009/1696844568949.png"
          },
          "comment": "",
          "ctime": 1696844595000,
          "utime": 1696908482000,
          "pcUrl": "/others/seoBannerManage/date20231009/1696844568938.png",
          "wapUrl": "/others/seoBannerManage/date20231009/1696844568949.png"
        }
      ],
      "seoChannelListVos": [
        {
          "id": 18,
          "channelId": 4,
          "name": "首页",
          "type": 2,
          "code": 1,
          "status": 1,
          "sort": 1,
          "comment": "",
          "ctime": 1696754979000,
          "utime": 1696754979000
        },
        {
          "id": 19,
          "channelId": 4,
          "name": "分类",
          "type": 2,
          "code": 2,
          "status": 1,
          "sort": 2,
          "comment": "",
          "ctime": 1696754996000,
          "utime": 1696754996000
        },
        {
          "id": 20,
          "channelId": 4,
          "name": "排行榜",
          "type": 2,
          "code": 3,
          "status": 1,
          "sort": 3,
          "comment": "",
          "ctime": 1696755008000,
          "utime": 1696755008000
        }
      ],
      "seoColumnVos": [
        {
          "code": 1,
          "seoColumnManageVos": [
            {
              "id": 12,
              "channelId": 4,
              "name": "男生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 1,
              "comment": "男生精选",
              "bookInfos": [
                {
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
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001460/11000001460.jpg?t=1640336747840&imageView2/0/w/200/h/267",
                  "bookName": "冷少的替身妻",
                  "bookId": "11000001460",
                  "introduction": "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……",
                  "introductionList": [
                    "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……"
                  ],
                  "author": "汐汐 晚晴",
                  "totalWordSize": "271万",
                  "totalChapterNum": "1181",
                  "lastChapterId": "551800",
                  "lastChapterName": "念念情深：亲自戴上那枚戒指",
                  "clickNum": "17万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "总裁",
                    "现言",
                    "豪门",
                    "虐文",
                    "虐恋",
                    "邪魅"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "7.5",
                  "wordSize": "271",
                  "wordSizeUnit": "万",
                  "totalReadNum": "17",
                  "totalReadNumUnit": "万",
                  "protagonist": "秦雅滢,冷慕宸",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001372/11000001372.jpg?t=1668762117850&imageView2/0/w/200/h/267",
                  "bookName": "凤凰错：替嫁弃妃",
                  "bookId": "11000001372",
                  "introduction": "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……",
                  "introductionList": [
                    "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……"
                  ],
                  "author": "阿彩",
                  "totalWordSize": "425万",
                  "totalChapterNum": "1455",
                  "lastChapterId": "476993",
                  "lastChapterName": "新书试读",
                  "clickNum": "2.36万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "古言",
                    "穿越",
                    "虐文",
                    "权谋",
                    "女强",
                    "宫斗"
                  ],
                  "bookTypeName": "穿越时空",
                  "bookScore": "7.7",
                  "wordSize": "425",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2.36",
                  "totalReadNumUnit": "万",
                  "protagonist": "",
                  "bookTypeThreeMap": {
                    "591": "穿越时空"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000028040/11000028040.jpg?t=1638187074636&imageView2/0/w/200/h/267",
                  "bookName": "丹武至尊",
                  "bookId": "11000028040",
                  "introduction": "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。五域，九境，十方天！顺我者昌！逆我者亡！",
                  "introductionList": [
                    "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。",
                    "五域，九境，十方天！",
                    "顺我者昌！逆我者亡！"
                  ],
                  "author": "顽石",
                  "totalWordSize": "211万",
                  "totalChapterNum": "868",
                  "lastChapterId": "10495565",
                  "lastChapterName": "第八百七十五章 赶到",
                  "clickNum": "5.8万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "热血",
                    "重生",
                    "至尊",
                    "武道"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.5",
                  "wordSize": "211",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5.8",
                  "totalReadNumUnit": "万",
                  "protagonist": ""
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010033714/11010033714.jpg?t=1627877269000&imageView2/0/w/200/h/267",
                  "bookName": "一念吞天",
                  "bookId": "11010033714",
                  "introduction": "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！",
                  "introductionList": [
                    "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！"
                  ],
                  "author": "铁背小强",
                  "totalWordSize": "769万",
                  "totalChapterNum": "3694",
                  "lastChapterId": "522503734",
                  "lastChapterName": "　第三千七百章 无差别进攻",
                  "clickNum": "9402",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.9",
                  "threeTypeTag": [
                    "武修",
                    "废柴流",
                    "传统玄幻",
                    "吞噬",
                    "玄幻1"
                  ],
                  "wordSize": "769",
                  "wordSizeUnit": "万",
                  "totalReadNum": "9402",
                  "totalReadNumUnit": "",
                  "protagonist": "林羽",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056463/11010056463.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "重生狂妻，大佬宠上天",
                  "bookId": "11010056463",
                  "introduction": "上一世的南景痴心错付，付出所有，换来一句你配吗？家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。一朝重生十八岁，强势来袭，打脸复仇虐渣渣！决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！她放火，他添柴。她虐渣，他护航。于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！大佬冷哼：“我愿意！”直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！",
                  "introductionList": [
                    "上一世的南景痴心错付，付出所有，换来一句你配吗？",
                    "家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。",
                    "一朝重生十八岁，强势来袭，打脸复仇虐渣渣！",
                    "决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！",
                    "她放火，他添柴。",
                    "她虐渣，他护航。",
                    "于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！",
                    "大佬冷哼：“我愿意！”",
                    "直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！"
                  ],
                  "author": "如沐清风",
                  "totalWordSize": "335万",
                  "totalChapterNum": "2949",
                  "lastChapterId": "522515376",
                  "lastChapterName": "第2949章",
                  "clickNum": "80万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "复仇",
                    "虐渣",
                    "甜宠",
                    "马甲"
                  ],
                  "bookTypeName": "重生异能",
                  "bookScore": "7.8",
                  "threeTypeTag": [
                    "短篇"
                  ],
                  "wordSize": "335",
                  "wordSizeUnit": "万",
                  "totalReadNum": "80",
                  "totalReadNumUnit": "万",
                  "protagonist": "南景,战北庭",
                  "bookTypeThreeMap": {
                    "579": "重生异能"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
                  "bookName": "少年风水师",
                  "bookId": "11010057627",
                  "introduction": "爷爷去世的时候，轰动全城......",
                  "introductionList": [
                    "爷爷去世的时候，轰动全城......"
                  ],
                  "author": "听澜本尊",
                  "totalWordSize": "360万",
                  "totalChapterNum": "2653",
                  "lastChapterId": "514869793",
                  "lastChapterName": "第2653章",
                  "clickNum": "472万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "金钱",
                    "风水",
                    "超能"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.2",
                  "threeTypeTag": [
                    "灵异",
                    "算命"
                  ],
                  "wordSize": "360",
                  "wordSizeUnit": "万",
                  "totalReadNum": "472",
                  "totalReadNumUnit": "万",
                  "protagonist": "吴峥,唐思佳",
                  "bookTypeThreeMap": {
                    "530": "现代武侠",
                    "606": "原创灵异",
                    "607": "悬疑推理"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030861/11010030861.jpg?t=1634609613707&imageView2/0/w/200/h/267",
                  "bookName": "超级赘婿",
                  "bookId": "11010030861",
                  "introduction": "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了...",
                  "introductionList": [
                    "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了..."
                  ],
                  "author": "黑夜的瞳",
                  "totalWordSize": "590万",
                  "totalChapterNum": "4459",
                  "lastChapterId": "522505477",
                  "lastChapterName": "第4459章",
                  "clickNum": "1347万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "王者",
                    "富豪",
                    "女婿",
                    "打脸"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.6",
                  "threeTypeTag": [
                    "复仇"
                  ],
                  "wordSize": "590",
                  "wordSizeUnit": "万",
                  "totalReadNum": "1347",
                  "totalReadNumUnit": "万",
                  "protagonist": "林阳,将小"
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072091/11000072091.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "无敌魔皇",
                  "bookId": "11000072091",
                  "introduction": "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？ 我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路",
                  "introductionList": [
                    "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路"
                  ],
                  "author": "千笔不落",
                  "totalWordSize": "17万",
                  "totalChapterNum": "62",
                  "lastChapterId": "541685693",
                  "lastChapterName": "第62章",
                  "clickNum": "5075",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "无敌魔皇",
                    "千笔不落",
                    "玄幻奇幻"
                  ],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.6",
                  "wordSize": "17",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5075",
                  "totalReadNumUnit": "",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057208/11010057208.jpg?t=1639731764926&imageView2/0/w/200/h/267",
                  "bookName": "爱你成瘾：偏执霸总的罪妻",
                  "bookId": "11010057208",
                  "introduction": "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。 她出狱后，却意外招惹上了易瑾离。 她跪在地上求他，“易瑾离，你放过我吧。” 他却笑笑，“阿姐，我永远都不会放过你。” 都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。 然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。” 她冷冷凝视着他，“那么你去死。”",
                  "introductionList": [
                    "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。",
                    "她出狱后，却意外招惹上了易瑾离。",
                    "她跪在地上求他，“易瑾离，你放过我吧。”",
                    "他却笑笑，“阿姐，我永远都不会放过你。”",
                    "都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。",
                    "然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。",
                    "多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。”",
                    "她冷冷凝视着他，“那么你去死。”"
                  ],
                  "author": "顾家小竹",
                  "totalWordSize": "402万",
                  "totalChapterNum": "3814",
                  "lastChapterId": "522482153",
                  "lastChapterName": "第3814章",
                  "clickNum": "312万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "破镜重圆",
                    "虐恋",
                    "先虐后宠",
                    "豪门恩怨"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "8.3",
                  "wordSize": "402",
                  "wordSizeUnit": "万",
                  "totalReadNum": "312",
                  "totalReadNumUnit": "万",
                  "protagonist": "凌依然,易瑾离",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                }
              ],
              "bookPackageId": 3
            },
            {
              "id": 36,
              "channelId": 4,
              "name": "男生排行榜",
              "sex": 2,
              "type": 2,
              "channelListIds": "1,4",
              "status": 1,
              "sort": 2,
              "extend": {
                "rankIds": "17,4,5",
                "rankIdsName": "经典榜,畅销榜,完本榜"
              },
              "comment": "",
              "rankVos": [
                {
                  "rankId": 20,
                  "rankName": "经典榜",
                  "bookInfos": []
                },
                {
                  "rankId": 1,
                  "rankName": "畅销榜",
                  "bookInfos": [
                    {
                      "bookId": "11010051539",
                      "bookName": "冷王宠妻：神医狂妃甜且娇",
                      "author": "溪照影",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010051539/11010051539.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "她是医学天才，穿越成东陆王朝又蠢又坏的秦家大小姐。世人辱她，欺她，毁她！她左手握毒丹，右手手术刀，虐得各路渣渣瑟瑟发抖。他是闻京城赫赫有名的七王爷，冷酷绝美如仙人，嗜血可怖如阎罗。“娘子，你治好了我的病，我就是你的人了。”“说好的和离呢？”秦偃月看着阴魂不散的男人，一脸黑线。“和离？本王刚去月老祠求来了红线，正好试试能不能拴得住娘子？”七王爷手持红线步步逼近。腹黑夫妇强强联合，在线虐渣。",
                      "clickNum": "3409954",
                      "num": "456万字",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010069624",
                      "bookName": "神医太撩人：王爷他又吃醋了！",
                      "author": "沧沧",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010069624/11010069624.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "神医皇后一朝毙命重生成为敌国的王妃， 据说这位王妃又蠢又惨，丈夫视她贱如草芥，眼睁睁看她被磋磨死也不肯施救，活的还不如他院里一条狗。为了活下去，她只好手撕小妾，打脸渣男，用超绝的医术救自己于水深火热。等她把小日子过得美滋滋，一心只想合离时。她那位宠妾灭妻的狗男人，突然粘着不放了？滂沱大雨中，原本风光霁月的宸王殿下狼狈跪下，只为求她不要离开。“我命都可以给你，别合离好不好？”",
                      "clickNum": "2485727",
                      "num": "358万字",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      },
                      "commentScore": "7.9"
                    },
                    {
                      "bookId": "11010056463",
                      "bookName": "重生狂妻，大佬宠上天",
                      "author": "如沐清风",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056463/11010056463.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "上一世的南景痴心错付，付出所有，换来一句你配吗？家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。一朝重生十八岁，强势来袭，打脸复仇虐渣渣！决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！她放火，他添柴。她虐渣，他护航。于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！大佬冷哼：“我愿意！”直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！",
                      "clickNum": "803560",
                      "num": "335万字",
                      "bookTypeThreeMap": {
                        "579": "重生异能"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010057538",
                      "bookName": "娇妻在上：夜少，强势锁婚！",
                      "author": "懒朵儿",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057538/11010057538.jpg?t=1634365672153&imageView2/0/w/200/h/267",
                      "introduction": "重生前，云倾被渣男贱女联手背叛，他们害她母，污她名，谋她财，害她众叛亲离，家破人亡，香消玉殒！再次睁眼，她再也不是那个软弱可欺的名门千金，一跃开启怼天日地撕渣男的复仇生涯。白莲花姐姐被盘到跪地求饶，“妹妹，我知道错了，求求你放过我吧！”云大佬坐姿优雅，笑的极美极恶，“玩不玩你，怎么玩你，看我心情。”前任未婚夫悔恨求婚，“倾倾，嫁给我，我会对你好一辈子！”云倾抖手，提刀，用尽全身力气，对准渣男劈了过去，“滚！”他是天底下所有女人都疯狂想嫁的总裁枭少，俊美冷酷，强势狠厉，不近女色，却独独将那朵跌落神坛、声名狼藉的恶女娇花，捧在手心，时时娇惯。“乖一点，嗯？”",
                      "clickNum": "2396419",
                      "num": "345万字",
                      "bookTypeThreeMap": {
                        "579": "重生异能"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010076149",
                      "bookName": "重生嫡女狂炸了！",
                      "author": "十一年",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076149/11010076149.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "大夏京都有两女名扬天下，一个是丞相府大小姐秦臻，才貌双绝，气质出众，是贵族少女中的标杆领袖，另一个是大将军府嫡女君绯色，声名狼藉，嚣张跋扈，仗着父亲军功赫赫，恃强凌弱，不知调戏了多少良家美男。秦臻被庶妹和未婚夫联手害死，而君绯色因为偷看玄王洗澡，被一掌劈死。秦臻睁开眼发现，她成了君绯色......",
                      "clickNum": "3704982",
                      "num": "217万字",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      },
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010075858",
                      "bookName": "强势重生：夫人她飒爆全球了！",
                      "author": "封疆为凰",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075858/11010075858.jpg?t=1634364848886&imageView2/0/w/200/h/267",
                      "introduction": "她，表面上是国际排行NO.01的杀手特工之王，暗地里是身披无数马甲的世界大佬。因为一场意外，重生到窝囊废物、人人嫌弃、又丑又胖的女学生身上......亲妹给她下毒、污蔑她偷窃、所有人都欺负她是一个没钱没人疼的可怜虫。直到有一天！她美貌恢复，马甲爆露，全场惊骇！四位宠妹狂魔哥哥不远万里赶来学院：“我活着的世界，没人能欺她分毫！”前世起就对她用情至深的男人也将她拥入怀中：“动我可以，动她，追究到底！”",
                      "clickNum": "377305",
                      "num": "290万字",
                      "bookTypeThreeMap": {
                        "579": "重生异能"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010075941",
                      "bookName": "湛爷的小心肝是满级大佬",
                      "author": "水流月",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075941/11010075941.jpg?t=1631096996374&imageView2/0/w/200/h/267",
                      "introduction": "时浅睁开眼睛看着男人绝美的俊脸。“你要对我负责。”某腹黑妖孽薄唇微勾，似笑非笑。从此，帝都大魔王湛爷家里多了一只小妖精！大魔王化身昏君，把小妖精宠上了天！某些人：“除了那张脸一无是处，花瓶而已！早晚被湛爷甩了！”不久后.......传说中的大神竟然是那小妖精！黑客军团大佬怎么有点像那小妖精！风靡全网的游戏创始人更像那小妖精。打败古武界第一高手的女人也有点像......大佬！跪了！",
                      "clickNum": "103252",
                      "num": "313万字",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "7.6"
                    },
                    {
                      "bookId": "11010074623",
                      "bookName": "嫡女重生：权臣的掌心宠",
                      "author": "十七夜",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074623/11010074623.jpg?t=1639731783988&imageView2/0/w/200/h/267",
                      "introduction": "沐云安前世识人不清，害的父母双亡，自己容貌尽毁，一箭穿心而死！重生后，她下定决心改写宿命，盯上了那个偏执冷漠的少年，只有她知道，他将来会成为怎样权倾天下的人物。她一改往日的娇纵任性，抱紧萧承逸的大腿，做他乖巧可爱的妹妹。可谁知，当她某天对他说： “逸哥哥，我喜欢上一个男人！”男人竟将她抵在墙上，低哑道：“乖晏晏，你这辈子只能喜欢我一个男人！”后来，沐云安才知道，是那个男人用半生的青灯古佛，才为她换来一世轮回重生……",
                      "clickNum": "1764533",
                      "num": "274万字",
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010050854",
                      "bookName": "农女致富：山里汉宠妻无度",
                      "author": "一壶清酒",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010050854/11010050854.jpg?t=1634365661157&imageView2/0/w/200/h/267",
                      "introduction": "苏红珊一睁眼发现自己穿越到了古代，茅草屋，破院子，吃了上顿没下顿，还附赠了个壮汉子夫君和一对面黄肌瘦的儿女。       可谁能告诉她，她的人设为什么是恶毒继母？       努力改了人设，修复了母子关系，做美食，开酒楼，发家致富，把日子过的蒸蒸日上。       可为什么这好好的继子继女忽然摇身一变成了皇子公主？就连自家这壮汉子夫君都成了将军？       只是这将军也实在太虎，苏红珊忍无可忍大怒：“韩夜霖，你无耻！这日子没法过了！”韩夜霖：“娘子，一品夫人给你挣到了，为夫还得给自己挣个娃。”",
                      "clickNum": "2007892",
                      "num": "425万字",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      },
                      "commentScore": "7.9"
                    },
                    {
                      "bookId": "11010074456",
                      "bookName": "新婚错爱：祁少的私宠罪妻",
                      "author": "十六儿",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074456/11010074456.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "苏晚璃爱了祁慕尘十二年，却被他亲手送入监狱。痛苦之中，她看见了男人和别的女人恩爱缱绻……五年后，强势回归，她已不再是那个爱他到卑微的女人！她手撕白莲花，脚踩贱人渣渣，正要狠虐渣男时……之前对她残忍冷漠的男人竟变得柔情似水！甚至众目睽睽下，亲吻她的脚背承诺，“阿璃，曾经是我爱错了人，今后，我愿用余生赎罪。”苏晚璃冷笑回绝：想我原谅你，除非，你死。",
                      "clickNum": "4372035",
                      "num": "276万字",
                      "commentScore": "8.1"
                    }
                  ]
                },
                {
                  "rankId": 3,
                  "rankName": "完本榜",
                  "bookInfos": [
                    {
                      "bookId": "11010072249",
                      "bookName": "第一农夫",
                      "author": "城南一梦",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072249/11010072249.jpg?t=1634025140226&imageView2/0/w/200/h/267",
                      "introduction": "自以为是最好的朋友，却是夺妻的仇人，而且还要下黑手置林峰于死地，好在老天有眼，让林峰大难不死，还遇到了天下第一机缘。且看我天下第一农夫，如何报仇雪恨，玩转乡村和都市。",
                      "clickNum": "46967",
                      "num": "1万潜力值",
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010072776",
                      "bookName": "逍遥龙帅",
                      "author": "明月关山",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072776/11010072776.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "逍遥战神归来，妻子惨死，女儿被送孤儿院，战神一怒，竟发现当年娶的是妹妹......",
                      "clickNum": "255843",
                      "num": "5220潜力值",
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010075859",
                      "bookName": "虎王令",
                      "author": "漫雨",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075859/11010075859.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "虎王归来，战友妻子惨遭虐待，儿子被打耳光！虎王令现，百万虎贲破城而入！",
                      "clickNum": "181149",
                      "num": "5220潜力值",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
                      },
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010068277",
                      "bookName": "修罗殿",
                      "author": "笑饮血",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010068277/11010068277.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "七年前，他因得罪大人物，犹如丧家之犬，落荒而逃。七年后，他化身修罗君主，权势滔天，为报仇雪恨，强势归来。却发现昔日好友因他而惨死，这一切的幕后黑手竟是……",
                      "clickNum": "324178",
                      "num": "3786潜力值",
                      "commentScore": "8.2"
                    },
                    {
                      "bookId": "11010070866",
                      "bookName": "战神医婿1",
                      "author": "一笔梦尘",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070866/11010070866.jpg?t=1629532205699&imageView2/0/w/200/h/267",
                      "introduction": "六  年戎马，楚 天  成就无上至尊医神，为了赎罪，他荣耀回归，却发现自己多了个女儿......",
                      "clickNum": "574250",
                      "num": "3480潜力值",
                      "bookTypeThreeMap": {
                        "543": "异术超能"
                      },
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010076121",
                      "bookName": "战王令",
                      "author": "爱吃大鲨鱼",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076121/11010076121.jpg?t=1669818861931&imageView2/0/w/200/h/267",
                      "introduction": "得知自己的女儿要被妻子送走，一代龙尊重回都市，将女儿救回。我乃北境龙尊！这世界、以我为王！！！",
                      "clickNum": "163339",
                      "num": "3045潜力值",
                      "commentScore": "4.4"
                    },
                    {
                      "bookId": "11010060678",
                      "bookName": "无敌王者",
                      "author": "叶缺",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010060678/11010060678.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "五年前，他无力保护爱人，离家五年！五年后，他一手创建的麒麟营令全世界强者闻风丧胆，十六位部下皆被授予至尊战神封号，过千成员被授予至强兵王，他成为名副其实的无敌王者！从现在起，我不会再让任何人欺辱你……",
                      "clickNum": "719501",
                      "num": "2320潜力值",
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010072546",
                      "bookName": "盖世龙帅",
                      "author": "天耀",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072546/11010072546.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "姐姐吊死公司大楼，父母被仇人双双害死，家族覆灭。叶君临离家八年，是别人眼中的废物。而复仇那一夜，他让全市豪门跪伏在脚下。身份揭晓，他乃当世第一战神。“辱我叶家者，杀无赦！”",
                      "clickNum": "220406",
                      "num": "600潜力值",
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010074128",
                      "bookName": "极品皇太子",
                      "author": "青云直上",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074128/11010074128.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "站在你面前的，是史上最极品、最独一无二的太子爷！怼皇帝、捉奸臣、乱京都，平逆贼，打城池，泡美人，一不小心，就实现了醉卧美人膝，醒掌天下权的人生梦想！人人都劝他登临帝位，可是......“救命！我不想当皇帝啊！”",
                      "clickNum": "2336337",
                      "num": "557潜力值",
                      "bookTypeThreeMap": {
                        "535": "架空历史"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010073240",
                      "bookName": "奇门至尊",
                      "author": "真庸懒人",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073240/11010073240.jpg?t=1642729933149&imageView2/0/w/200/h/267",
                      "introduction": "第一天进城的山村少年，被美女处处嫌弃。她却不知，少年握有上古龟甲，占卜相面，医药符箓，无所不通。从此逍遥都市，白手起家，一不下心成了个世界首富。",
                      "clickNum": "1906182",
                      "num": "444潜力值",
                      "commentScore": "7.5"
                    }
                  ]
                }
              ],
              "rankSex": 1
            },
            {
              "id": 15,
              "channelId": 4,
              "name": "女生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 3,
              "comment": "1",
              "bookInfos": [
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056959/11010056959.jpg?t=1637748336688&imageView2/0/w/200/h/267",
                  "bookName": "幸孕宠妻：战爷，晚安！",
                  "bookId": "11010056959",
                  "introduction": "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。  惹得战爷肺气炸裂。  就在所有人都以为她会死无葬身之地时。  隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”  “我有条件？”  “说！”  “不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”  “依你！”  路人倒地：这就是传说中的一物降一物？  战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！",
                  "introductionList": [
                    "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。",
                    "惹得战爷肺气炸裂。",
                    "就在所有人都以为她会死无葬身之地时。",
                    "隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”",
                    "“我有条件？”",
                    "“说！”",
                    "“不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”",
                    "“依你！”",
                    "路人倒地：这就是传说中的一物降一物？",
                    "战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！"
                  ],
                  "author": "言安",
                  "totalWordSize": "275万",
                  "totalChapterNum": "2472",
                  "lastChapterId": "541685663",
                  "lastChapterName": "第2472章",
                  "clickNum": "2245万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "萌宝",
                    "甜宠",
                    "豪门恩怨",
                    "先虐后宠"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.4",
                  "wordSize": "275",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2245",
                  "totalReadNumUnit": "万",
                  "protagonist": "洛诗涵,战寒爵",
                  "bookTypeThreeMap": {
                    "530": "现代武侠"
                  }
                }
              ],
              "bookPackageId": 6
            },
            {
              "id": 33,
              "channelId": 4,
              "name": "女生排行榜",
              "sex": 3,
              "type": 2,
              "channelListIds": "1,5",
              "status": 1,
              "sort": 4,
              "extend": {
                "rankIds": "8,10,11",
                "rankIdsName": "畅销榜,完本榜,新书榜"
              },
              "comment": "",
              "rankVos": [
                {
                  "rankId": 2,
                  "rankName": "畅销榜",
                  "bookInfos": [
                    {
                      "bookId": "11010036575",
                      "bookName": "傲世帝妃：爷你太嚣张",
                      "author": "小发发",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010036575/11010036575.jpg?t=1630896052113&imageView2/0/w/200/h/267",
                      "introduction": "“本尊就是修罗，杀人，自然不眨眼。”     一朝重生，她寻丹解毒，重新修炼。    废物？    呵，她神器在手，灵兽全收！废物？你见过废物杀人不眨眼，见过废物搅动风云变幻么？    她云暮挽要走的路，没有人能够阻拦，然而，修炼之路漫漫，总有小妖精想要勾走她。   于是乎，就出现了这么一幕——   “滚，该死的男人。”她气急。   “遵命，夫人。”某人坏笑。",
                      "clickNum": "17410",
                      "num": "608人气值",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      },
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010001620",
                      "bookName": "蚀骨宠婚：早安，老婆大人",
                      "author": "顾南舒",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010001620/11010001620.jpg?t=1638503707507&imageView2/0/w/200/h/267",
                      "introduction": "顾南舒知道，陆景琛爱过一个女人，且念念不忘，所以结婚六年，他都不曾碰过她分毫。可她不明白，他明明盼着她早点死，为什么当她意外车祸，生死一线的时候，他还要拽着她的手，狠声质问：“八年前你费尽心机嫁给我，又霸占了陆太太的位置整整六年，现在你不说一声就拋夫弃子……顾南舒，你的心怎么可以这么狠？！”",
                      "clickNum": "13360",
                      "num": "502人气值",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "7.5"
                    },
                    {
                      "bookId": "11000141663",
                      "bookName": "妃不好惹：战神王爷请接招",
                      "author": "悠小姐",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000141663/11000141663.jpg?t=1630896051823&imageView2/0/w/200/h/267",
                      "introduction": "要问宁昭穿越到墨朝，最大的收获是什么，那自然是收服了出名的直男六王爷。人前墨绝尘：“宁昭，你身为六王妃，就要有王妃的自觉 。你的眼睛只能看本王，你的心里也只能有本王的存在，你要是敢多看三哥一眼，本王就……”宁昭：“就怎样？”墨绝尘：“就给你休书一封。”人后宁昭收拾好包袱，便准备自请下堂回将军府。却不想堂堂六王爷，心甘情愿奉上兵符和王爷大印，跪在搓衣板上，一脸委屈：“媳妇，我错了，求原谅！”",
                      "clickNum": "22973",
                      "num": "496人气值",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010057963",
                      "bookName": "弃妃难逃：王爷，手下留情！",
                      "author": "尘烟",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057963/11010057963.jpg?t=1629964849820&imageView2/0/w/200/h/267",
                      "introduction": "风光无限的医药生物学三料博士后被个医闹一刀毙了命，落落魄魄穿越成了淮王府弃妃。丈夫不疼，小姑子不爱，还有绿茶等级十八级的白莲前女友。身怀绝世医术，救人被误会，不救人等着砍头，日子从未这么憋屈过！“咱俩三观不对、八字不合，勉强在一起不会幸福！”“女人，是你使诈逼迫本王娶的你，现在主意一变又要和离，有那么便宜的事吗？”",
                      "clickNum": "118366",
                      "num": "423人气值",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010055655",
                      "bookName": "权宠天下",
                      "author": "六月",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010055655/11010055655.jpg?t=1637049019437&imageView2/0/w/200/h/267",
                      "introduction": "又名《医妃倾天下》《医笑倾城》天才医学博士穿越成楚王弃妃，刚来就遇上重症伤者，她秉持医德去救治，却差点被打下冤狱。太上皇病危，她设法救治，被那可恨的毒王误会斥责，莫非真的是好人难做？这男人整日给她使绊子就算了，最不可忍的是他竟还要娶侧妃来恶心她！毒王冷冽道：“你何德何能让本王恨你？本王只是憎恶你，见你一眼都觉得恶心。”元卿凌笑容可掬地道：“我又何尝不嫌弃王爷呢？只是大家都是斯文人，不想撕破脸罢了。”",
                      "clickNum": "161202",
                      "num": "349人气值",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "3.0"
                    },
                    {
                      "bookId": "11010052478",
                      "bookName": "丑女神医：农门太子妃",
                      "author": "穆兮兮",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010052478/11010052478.jpg?t=1631271496155&imageView2/0/w/200/h/267",
                      "introduction": "她是二十一世纪国际知名的中医大师一朝穿越，变成了一个家徒四壁，容貌可怖还惨遭退婚的苦命秧子亲戚极品，母亲软弱，生活步步维艰没关系，看她如何斗极品，立门户，发家致富、坐拥高富帅、走向人生巅峰！等等！她不过是好心救了一个人，不曾想这人竟是权倾朝野的王爷更让她没想到的是，她还被这妖孽霸道的王爷给缠上了！叶薇：“不要脸！”某王爷：“要脸做什么？要你就够了！”",
                      "clickNum": "5575",
                      "num": "336人气值",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010072536",
                      "bookName": "狂妻拽翻天：陆少，宠妻上瘾！",
                      "author": "城南一梦",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072536/11010072536.jpg?t=1631096999390&imageView2/0/w/200/h/267",
                      "introduction": "据说A市第一财阀陆执新婚妻子，医术超绝，能起死回生！陆执谦虚表示：一般一般，我夫人称第二，没人敢称第一。又据说，陆少夫人是顶级黑客，手段狠辣，经常逼得坏人跪地求放过！陆执宠溺一笑：我夫人身娇体贵，弱不禁风，是那些坏蛋素质太差，不经打。围观群众满脸黑线：您睁着眼睛说瞎话，不脸红吗？陆执剑眉一挑，气势迫人：嗯？谁有异议？请站出来。陆少夫人气定神闲：那么喜欢八卦。不想要舌头，可以捐给我做医学研究。众人瑟瑟发抖：呜呜，我们错了，再也不敢了。",
                      "clickNum": "63292",
                      "num": "311人气值",
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010073092",
                      "bookName": "八零宠婚：甜妻太旺夫",
                      "author": "飞猪猪",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073092/11010073092.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "重生回到退婚的那天，肖颖撒腿就往回跑。身后的痞气男子拦住她，冷笑：“怎么又不退了？”肖颖豪放大声：“因为我喜欢你！”向来脸皮比城墙厚的袁博破天荒红了脸。肖颖上辈子信错了一众攀高踩底的势利眼，重生后将他们一个个啪啪啪猛打脸。“老公，咱家山头下有好多矿！”“好，我去挖。”“老公，那支股票以后会疯涨！”“好，我去买。”耍混闹事的流氓头自结婚后，蛮劲都用在宠老婆和发家致富上，很快富甲一方。记者采访首富的成功秘诀，他笑答：“我老婆太太太太旺夫！”",
                      "clickNum": "44455",
                      "num": "306人气值",
                      "commentScore": "7.7"
                    },
                    {
                      "bookId": "11010056755",
                      "bookName": "萌宝一加一：爸比，请跪好",
                      "author": "猫夕",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056755/11010056755.jpg?t=1628820708841&imageView2/0/w/200/h/267",
                      "introduction": "十八岁那年，叶薇薇被父母逼迫，顶替孪生姐姐入狱，在狱中生下一对龙凤胎。五年后，她携女出狱，斗心机女白莲花，顺便救了一只软萌的小包子。从此，她不再是刑满释放人员，而是成为备受萧景寒宠爱的萧太太。“爸比，有个影后欺负妈咪。”小包子气红了脸。某BOSS立即打了一个电话，“敢欺负我的女人，全球封杀！”“爸比，有个帅帅的叔叔送妈咪花。”小萝莉满眼星星。某BOSS磨刀霍霍，“让他破产！”",
                      "clickNum": "97705",
                      "num": "284人气值",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010050854",
                      "bookName": "农女致富：山里汉宠妻无度",
                      "author": "一壶清酒",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010050854/11010050854.jpg?t=1634365661157&imageView2/0/w/200/h/267",
                      "introduction": "苏红珊一睁眼发现自己穿越到了古代，茅草屋，破院子，吃了上顿没下顿，还附赠了个壮汉子夫君和一对面黄肌瘦的儿女。       可谁能告诉她，她的人设为什么是恶毒继母？       努力改了人设，修复了母子关系，做美食，开酒楼，发家致富，把日子过的蒸蒸日上。       可为什么这好好的继子继女忽然摇身一变成了皇子公主？就连自家这壮汉子夫君都成了将军？       只是这将军也实在太虎，苏红珊忍无可忍大怒：“韩夜霖，你无耻！这日子没法过了！”韩夜霖：“娘子，一品夫人给你挣到了，为夫还得给自己挣个娃。”",
                      "clickNum": "2007892",
                      "num": "278人气值",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      },
                      "commentScore": "7.9"
                    }
                  ]
                },
                {
                  "rankId": 4,
                  "rankName": "完本榜",
                  "bookInfos": []
                },
                {
                  "rankId": 6,
                  "rankName": "新书榜",
                  "bookInfos": [
                    {
                      "bookId": "11010057627",
                      "bookName": "少年风水师",
                      "author": "听澜本尊",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
                      "introduction": "爷爷去世的时候，轰动全城......",
                      "clickNum": "4723149",
                      "num": "8.2分",
                      "bookTypeThreeMap": {
                        "530": "现代武侠",
                        "606": "原创灵异",
                        "607": "悬疑推理"
                      },
                      "commentScore": "8.2"
                    },
                    {
                      "bookId": "11010070562",
                      "bookName": "最豪赘婿",
                      "author": "会说话的香烟",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070562/11010070562.jpg?t=1627453501544&imageView2/0/w/200/h/267",
                      "introduction": "我是他人眼中一无是处的废物；　　但倘若她要，我就可以给她整个世界；　　上门女婿，未必不能翱翔九天。",
                      "clickNum": "116777",
                      "num": "7.7分",
                      "commentScore": "7.7"
                    },
                    {
                      "bookId": "11000005941",
                      "bookName": "武灵天下",
                      "author": "颓废的烟121",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000005941/11000005941.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "带着异世界的吞天武灵，废物少爷绝地逆袭，一跃成为震惊大陆的武学天才！强大的武技信手拈来，强横的敌人踩在脚下。神秘的家族，未知的领域，一切的精彩，尽在武灵天下！",
                      "clickNum": "56536",
                      "num": "7.6分",
                      "bookTypeThreeMap": {
                        "513": "异世大陆"
                      },
                      "commentScore": "7.6"
                    },
                    {
                      "bookId": "11010029335",
                      "bookName": "我怎么这么有钱",
                      "author": "两耳就是菩提",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010029335/11010029335.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "我怎么这么有钱（又名：绝世大少、至尊人生，主角：陈歌）那天，全都在国外劳务的父母姐姐突然告诉自己，你是一个富二代，拥有万亿家产！陈歌：我居然是富二代？",
                      "clickNum": "3548818",
                      "num": "8.0分",
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010030755",
                      "bookName": "百倍修炼系统瞬间升级999",
                      "author": "三月雨",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030755/11010030755.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "同名《最强修炼少年》走一步，经验10*100倍，基础身法进阶为黄品身法！挥一拳，经验10*100倍，基础拳法进阶为黄品拳法！吃一颗强力丹，经验100*100倍，修为从淬体三重暴涨至淬体六重！看一眼剑痕石上的剑意，经验值100*100倍，成功领悟一级剑意！......姜辰...",
                      "clickNum": "314275",
                      "num": "8.0分",
                      "bookTypeThreeMap": {
                        "513": "异世大陆"
                      },
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010034487",
                      "bookName": "超级战神在都市",
                      "author": "我不是z",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010034487/11010034487.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "五年前，被陷害入狱！五年后，他荣耀归来，天下权势，尽握手中！我所失去的，终会千百倍的拿回来！",
                      "clickNum": "6887079",
                      "num": "8.2分",
                      "bookTypeThreeMap": {
                        "540": "古玩鉴宝",
                        "541": "明星仕商",
                        "545": "高手激战",
                        "581": "仙侠幻情",
                        "582": "妖精情缘"
                      },
                      "commentScore": "8.2"
                    },
                    {
                      "bookId": "11010058559",
                      "bookName": "天王殿水电费看激励刷卡就联发科路京东方看激励是空晶方科技了接口了快结束了复健科",
                      "author": "状元不出门离开的弗兰克家老师的看激励上来的凯乐科技SDK解封离开",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010058559/11010058559.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "六年浴血，王者归来，凭我七尺之躯，可拳打地痞恶霸，可护娇妻萌娃...",
                      "clickNum": "17110999",
                      "num": "7.6分",
                      "commentScore": "7.6"
                    },
                    {
                      "bookId": "11010067973",
                      "bookName": "女神的上门豪婿",
                      "author": "韦小鸨",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010067973/11010067973.jpg?t=1630655748860&imageView2/0/w/200/h/267",
                      "introduction": "我要分亿万家产，给女儿和老婆更好的生活！",
                      "clickNum": "168636",
                      "num": "7.8分",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010074172",
                      "bookName": "泣血王座这个是书籍名称的长度测试可以看下是否有ui展示问题123",
                      "author": "玖月",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074172/11010074172.jpg?t=1629532328485&imageView2/0/w/200/h/267",
                      "introduction": "他本是苏家卑贱的佣人，因与三小姐相爱，私定终身而被赶出苏家，七年后他王者归来，拥无尽财富，挥百万雄兵，要让欺辱过他的人，付出百倍代价，要护佑妻女一生安宁，让她们群星环绕，做最光芒闪耀的女人！",
                      "clickNum": "944314",
                      "num": "7.7分",
                      "commentScore": "7.7"
                    },
                    {
                      "bookId": "11010075026",
                      "bookName": "绝世无双",
                      "author": "燕北",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075026/11010075026.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "战场浴血征战，女儿打来电话求救，一夜之间，三千世界顶级强者，齐赴大夏！他萧天策一生凄苦，身负血海深仇，女儿跟妻子就是他生命中的一道光。他这辈子绝对不允许自己的女儿跟妻子受到一丝一毫的伤害！",
                      "clickNum": "17204989",
                      "num": "8.1分",
                      "commentScore": "8.1"
                    }
                  ]
                }
              ],
              "rankSex": 2
            }
          ]
        }
      ]
    }
  }

  const result = {
    "retCode": 0,
    "data": {
      "seoBannerManageVos": [
        {
          "id": 12,
          "name": "测",
          "bookId": "11010035637",
          "beginTime": 1695571200000,
          "endTime": 1696003200000,
          "status": 1,
          "sort": 2,
          "extend": {
            "pcUrl": "/others/seoBannerManage/date20231009/1696821696675.jpg",
            "wapUrl": "/others/seoBannerManage/date20231009/1696821696697.jpg"
          },
          "comment": "12",
          "ctime": 1695622508000,
          "utime": 1696908464000,
          "pcUrl": "/others/seoBannerManage/date20231009/1696821696675.jpg",
          "wapUrl": "/others/seoBannerManage/date20231009/1696821696697.jpg"
        },
        {
          "id": 11,
          "name": "测试",
          "bookId": "11010035637",
          "beginTime": 1695571200000,
          "endTime": 1696003200000,
          "status": 1,
          "sort": 2,
          "extend": {
            "pcUrl": "/others/seoBannerManage/date20231009/1696821710051.jpg",
            "wapUrl": "/others/seoBannerManage/date20231009/1696821710065.jpg"
          },
          "comment": "12",
          "ctime": 1695622466000,
          "utime": 1696908455000,
          "pcUrl": "/others/seoBannerManage/date20231009/1696821710051.jpg",
          "wapUrl": "/others/seoBannerManage/date20231009/1696821710065.jpg"
        },
        {
          "id": 15,
          "name": "海湖测试1",
          "bookId": "11000001426",
          "beginTime": 1696844562000,
          "endTime": 1696867200000,
          "status": 1,
          "sort": 55,
          "extend": {
            "pcUrl": "/others/seoBannerManage/date20231009/1696844568938.png",
            "wapUrl": "/others/seoBannerManage/date20231009/1696844568949.png"
          },
          "comment": "",
          "ctime": 1696844595000,
          "utime": 1696908482000,
          "pcUrl": "/others/seoBannerManage/date20231009/1696844568938.png",
          "wapUrl": "/others/seoBannerManage/date20231009/1696844568949.png"
        }
      ],
      "seoChannelListVos": [
        {
          "id": 21,
          "channelId": 4,
          "name": "男生",
          "type": 1,
          "code": 4,
          "status": 1,
          "sort": 4,
          "comment": "",
          "ctime": 1696755030000,
          "utime": 1696755030000
        },
        {
          "id": 16,
          "channelId": 4,
          "name": "女生",
          "type": 1,
          "code": 5,
          "status": 1,
          "sort": 5,
          "comment": "女生",
          "ctime": 1695817416000,
          "utime": 1696755021000
        },
        {
          "id": 17,
          "channelId": 4,
          "name": "出版",
          "type": 1,
          "code": 6,
          "status": 1,
          "sort": 6,
          "comment": "出版",
          "ctime": 1695817426000,
          "utime": 1696821732000
        }
      ],
      "seoColumnVos": [
        {
          "code": 4,
          "seoColumnManageVos": [
            {
              "id": 12,
              "channelId": 4,
              "name": "男生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 1,
              "comment": "男生精选",
              "bookInfos": [
                {
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
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001460/11000001460.jpg?t=1640336747840&imageView2/0/w/200/h/267",
                  "bookName": "冷少的替身妻",
                  "bookId": "11000001460",
                  "introduction": "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……",
                  "introductionList": [
                    "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……"
                  ],
                  "author": "汐汐 晚晴",
                  "totalWordSize": "271万",
                  "totalChapterNum": "1181",
                  "lastChapterId": "551800",
                  "lastChapterName": "念念情深：亲自戴上那枚戒指",
                  "clickNum": "17万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "总裁",
                    "现言",
                    "豪门",
                    "虐文",
                    "虐恋",
                    "邪魅"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "7.5",
                  "wordSize": "271",
                  "wordSizeUnit": "万",
                  "totalReadNum": "17",
                  "totalReadNumUnit": "万",
                  "protagonist": "秦雅滢,冷慕宸",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001372/11000001372.jpg?t=1668762117850&imageView2/0/w/200/h/267",
                  "bookName": "凤凰错：替嫁弃妃",
                  "bookId": "11000001372",
                  "introduction": "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……",
                  "introductionList": [
                    "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……"
                  ],
                  "author": "阿彩",
                  "totalWordSize": "425万",
                  "totalChapterNum": "1455",
                  "lastChapterId": "476993",
                  "lastChapterName": "新书试读",
                  "clickNum": "2.36万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "古言",
                    "穿越",
                    "虐文",
                    "权谋",
                    "女强",
                    "宫斗"
                  ],
                  "bookTypeName": "穿越时空",
                  "bookScore": "7.7",
                  "wordSize": "425",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2.36",
                  "totalReadNumUnit": "万",
                  "protagonist": "",
                  "bookTypeThreeMap": {
                    "591": "穿越时空"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000028040/11000028040.jpg?t=1638187074636&imageView2/0/w/200/h/267",
                  "bookName": "丹武至尊",
                  "bookId": "11000028040",
                  "introduction": "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。五域，九境，十方天！顺我者昌！逆我者亡！",
                  "introductionList": [
                    "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。",
                    "五域，九境，十方天！",
                    "顺我者昌！逆我者亡！"
                  ],
                  "author": "顽石",
                  "totalWordSize": "211万",
                  "totalChapterNum": "868",
                  "lastChapterId": "10495565",
                  "lastChapterName": "第八百七十五章 赶到",
                  "clickNum": "5.8万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "热血",
                    "重生",
                    "至尊",
                    "武道"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.5",
                  "wordSize": "211",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5.8",
                  "totalReadNumUnit": "万",
                  "protagonist": ""
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010033714/11010033714.jpg?t=1627877269000&imageView2/0/w/200/h/267",
                  "bookName": "一念吞天",
                  "bookId": "11010033714",
                  "introduction": "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！",
                  "introductionList": [
                    "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！"
                  ],
                  "author": "铁背小强",
                  "totalWordSize": "769万",
                  "totalChapterNum": "3694",
                  "lastChapterId": "522503734",
                  "lastChapterName": "　第三千七百章 无差别进攻",
                  "clickNum": "9402",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.9",
                  "threeTypeTag": [
                    "武修",
                    "废柴流",
                    "传统玄幻",
                    "吞噬",
                    "玄幻1"
                  ],
                  "wordSize": "769",
                  "wordSizeUnit": "万",
                  "totalReadNum": "9402",
                  "totalReadNumUnit": "",
                  "protagonist": "林羽",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056463/11010056463.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "重生狂妻，大佬宠上天",
                  "bookId": "11010056463",
                  "introduction": "上一世的南景痴心错付，付出所有，换来一句你配吗？家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。一朝重生十八岁，强势来袭，打脸复仇虐渣渣！决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！她放火，他添柴。她虐渣，他护航。于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！大佬冷哼：“我愿意！”直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！",
                  "introductionList": [
                    "上一世的南景痴心错付，付出所有，换来一句你配吗？",
                    "家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。",
                    "一朝重生十八岁，强势来袭，打脸复仇虐渣渣！",
                    "决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！",
                    "她放火，他添柴。",
                    "她虐渣，他护航。",
                    "于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！",
                    "大佬冷哼：“我愿意！”",
                    "直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！"
                  ],
                  "author": "如沐清风",
                  "totalWordSize": "335万",
                  "totalChapterNum": "2949",
                  "lastChapterId": "522515376",
                  "lastChapterName": "第2949章",
                  "clickNum": "80万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "复仇",
                    "虐渣",
                    "甜宠",
                    "马甲"
                  ],
                  "bookTypeName": "重生异能",
                  "bookScore": "7.8",
                  "threeTypeTag": [
                    "短篇"
                  ],
                  "wordSize": "335",
                  "wordSizeUnit": "万",
                  "totalReadNum": "80",
                  "totalReadNumUnit": "万",
                  "protagonist": "南景,战北庭",
                  "bookTypeThreeMap": {
                    "579": "重生异能"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
                  "bookName": "少年风水师",
                  "bookId": "11010057627",
                  "introduction": "爷爷去世的时候，轰动全城......",
                  "introductionList": [
                    "爷爷去世的时候，轰动全城......"
                  ],
                  "author": "听澜本尊",
                  "totalWordSize": "360万",
                  "totalChapterNum": "2653",
                  "lastChapterId": "514869793",
                  "lastChapterName": "第2653章",
                  "clickNum": "472万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "金钱",
                    "风水",
                    "超能"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.2",
                  "threeTypeTag": [
                    "灵异",
                    "算命"
                  ],
                  "wordSize": "360",
                  "wordSizeUnit": "万",
                  "totalReadNum": "472",
                  "totalReadNumUnit": "万",
                  "protagonist": "吴峥,唐思佳",
                  "bookTypeThreeMap": {
                    "530": "现代武侠",
                    "606": "原创灵异",
                    "607": "悬疑推理"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030861/11010030861.jpg?t=1634609613707&imageView2/0/w/200/h/267",
                  "bookName": "超级赘婿",
                  "bookId": "11010030861",
                  "introduction": "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了...",
                  "introductionList": [
                    "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了..."
                  ],
                  "author": "黑夜的瞳",
                  "totalWordSize": "590万",
                  "totalChapterNum": "4459",
                  "lastChapterId": "522505477",
                  "lastChapterName": "第4459章",
                  "clickNum": "1347万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "王者",
                    "富豪",
                    "女婿",
                    "打脸"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.6",
                  "threeTypeTag": [
                    "复仇"
                  ],
                  "wordSize": "590",
                  "wordSizeUnit": "万",
                  "totalReadNum": "1347",
                  "totalReadNumUnit": "万",
                  "protagonist": "林阳,将小"
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072091/11000072091.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "无敌魔皇",
                  "bookId": "11000072091",
                  "introduction": "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？ 我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路",
                  "introductionList": [
                    "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路"
                  ],
                  "author": "千笔不落",
                  "totalWordSize": "17万",
                  "totalChapterNum": "62",
                  "lastChapterId": "541685693",
                  "lastChapterName": "第62章",
                  "clickNum": "5075",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "无敌魔皇",
                    "千笔不落",
                    "玄幻奇幻"
                  ],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.6",
                  "wordSize": "17",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5075",
                  "totalReadNumUnit": "",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057208/11010057208.jpg?t=1639731764926&imageView2/0/w/200/h/267",
                  "bookName": "爱你成瘾：偏执霸总的罪妻",
                  "bookId": "11010057208",
                  "introduction": "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。 她出狱后，却意外招惹上了易瑾离。 她跪在地上求他，“易瑾离，你放过我吧。” 他却笑笑，“阿姐，我永远都不会放过你。” 都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。 然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。” 她冷冷凝视着他，“那么你去死。”",
                  "introductionList": [
                    "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。",
                    "她出狱后，却意外招惹上了易瑾离。",
                    "她跪在地上求他，“易瑾离，你放过我吧。”",
                    "他却笑笑，“阿姐，我永远都不会放过你。”",
                    "都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。",
                    "然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。",
                    "多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。”",
                    "她冷冷凝视着他，“那么你去死。”"
                  ],
                  "author": "顾家小竹",
                  "totalWordSize": "402万",
                  "totalChapterNum": "3814",
                  "lastChapterId": "522482153",
                  "lastChapterName": "第3814章",
                  "clickNum": "312万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "破镜重圆",
                    "虐恋",
                    "先虐后宠",
                    "豪门恩怨"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "8.3",
                  "wordSize": "402",
                  "wordSizeUnit": "万",
                  "totalReadNum": "312",
                  "totalReadNumUnit": "万",
                  "protagonist": "凌依然,易瑾离",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                }
              ],
              "bookPackageId": 3
            },
            {
              "id": 15,
              "channelId": 4,
              "name": "女生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 3,
              "comment": "1",
              "bookInfos": [
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056959/11010056959.jpg?t=1637748336688&imageView2/0/w/200/h/267",
                  "bookName": "幸孕宠妻：战爷，晚安！",
                  "bookId": "11010056959",
                  "introduction": "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。  惹得战爷肺气炸裂。  就在所有人都以为她会死无葬身之地时。  隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”  “我有条件？”  “说！”  “不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”  “依你！”  路人倒地：这就是传说中的一物降一物？  战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！",
                  "introductionList": [
                    "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。",
                    "惹得战爷肺气炸裂。",
                    "就在所有人都以为她会死无葬身之地时。",
                    "隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”",
                    "“我有条件？”",
                    "“说！”",
                    "“不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”",
                    "“依你！”",
                    "路人倒地：这就是传说中的一物降一物？",
                    "战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！"
                  ],
                  "author": "言安",
                  "totalWordSize": "275万",
                  "totalChapterNum": "2472",
                  "lastChapterId": "541685663",
                  "lastChapterName": "第2472章",
                  "clickNum": "2245万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "萌宝",
                    "甜宠",
                    "豪门恩怨",
                    "先虐后宠"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.4",
                  "wordSize": "275",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2245",
                  "totalReadNumUnit": "万",
                  "protagonist": "洛诗涵,战寒爵",
                  "bookTypeThreeMap": {
                    "530": "现代武侠"
                  }
                }
              ],
              "bookPackageId": 6
            },
            {
              "id": 32,
              "channelId": 4,
              "name": "男生排行榜",
              "sex": 2,
              "type": 2,
              "channelListIds": "1,4",
              "status": 1,
              "sort": 5,
              "extend": {
                "rankIds": "17,4,5",
                "rankIdsName": "经典榜,畅销榜,完本榜"
              },
              "comment": "",
              "rankVos": [
                {
                  "rankId": 20,
                  "rankName": "经典榜",
                  "bookInfos": []
                },
                {
                  "rankId": 1,
                  "rankName": "畅销榜",
                  "bookInfos": [
                    {
                      "bookId": "11010051539",
                      "bookName": "冷王宠妻：神医狂妃甜且娇",
                      "author": "溪照影",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010051539/11010051539.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "她是医学天才，穿越成东陆王朝又蠢又坏的秦家大小姐。世人辱她，欺她，毁她！她左手握毒丹，右手手术刀，虐得各路渣渣瑟瑟发抖。他是闻京城赫赫有名的七王爷，冷酷绝美如仙人，嗜血可怖如阎罗。“娘子，你治好了我的病，我就是你的人了。”“说好的和离呢？”秦偃月看着阴魂不散的男人，一脸黑线。“和离？本王刚去月老祠求来了红线，正好试试能不能拴得住娘子？”七王爷手持红线步步逼近。腹黑夫妇强强联合，在线虐渣。",
                      "clickNum": "3409954",
                      "num": "456万字",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010069624",
                      "bookName": "神医太撩人：王爷他又吃醋了！",
                      "author": "沧沧",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010069624/11010069624.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "神医皇后一朝毙命重生成为敌国的王妃， 据说这位王妃又蠢又惨，丈夫视她贱如草芥，眼睁睁看她被磋磨死也不肯施救，活的还不如他院里一条狗。为了活下去，她只好手撕小妾，打脸渣男，用超绝的医术救自己于水深火热。等她把小日子过得美滋滋，一心只想合离时。她那位宠妾灭妻的狗男人，突然粘着不放了？滂沱大雨中，原本风光霁月的宸王殿下狼狈跪下，只为求她不要离开。“我命都可以给你，别合离好不好？”",
                      "clickNum": "2485727",
                      "num": "358万字",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      },
                      "commentScore": "7.9"
                    },
                    {
                      "bookId": "11010056463",
                      "bookName": "重生狂妻，大佬宠上天",
                      "author": "如沐清风",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056463/11010056463.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "上一世的南景痴心错付，付出所有，换来一句你配吗？家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。一朝重生十八岁，强势来袭，打脸复仇虐渣渣！决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！她放火，他添柴。她虐渣，他护航。于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！大佬冷哼：“我愿意！”直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！",
                      "clickNum": "803560",
                      "num": "335万字",
                      "bookTypeThreeMap": {
                        "579": "重生异能"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010057538",
                      "bookName": "娇妻在上：夜少，强势锁婚！",
                      "author": "懒朵儿",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057538/11010057538.jpg?t=1634365672153&imageView2/0/w/200/h/267",
                      "introduction": "重生前，云倾被渣男贱女联手背叛，他们害她母，污她名，谋她财，害她众叛亲离，家破人亡，香消玉殒！再次睁眼，她再也不是那个软弱可欺的名门千金，一跃开启怼天日地撕渣男的复仇生涯。白莲花姐姐被盘到跪地求饶，“妹妹，我知道错了，求求你放过我吧！”云大佬坐姿优雅，笑的极美极恶，“玩不玩你，怎么玩你，看我心情。”前任未婚夫悔恨求婚，“倾倾，嫁给我，我会对你好一辈子！”云倾抖手，提刀，用尽全身力气，对准渣男劈了过去，“滚！”他是天底下所有女人都疯狂想嫁的总裁枭少，俊美冷酷，强势狠厉，不近女色，却独独将那朵跌落神坛、声名狼藉的恶女娇花，捧在手心，时时娇惯。“乖一点，嗯？”",
                      "clickNum": "2396419",
                      "num": "345万字",
                      "bookTypeThreeMap": {
                        "579": "重生异能"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010076149",
                      "bookName": "重生嫡女狂炸了！",
                      "author": "十一年",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076149/11010076149.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "大夏京都有两女名扬天下，一个是丞相府大小姐秦臻，才貌双绝，气质出众，是贵族少女中的标杆领袖，另一个是大将军府嫡女君绯色，声名狼藉，嚣张跋扈，仗着父亲军功赫赫，恃强凌弱，不知调戏了多少良家美男。秦臻被庶妹和未婚夫联手害死，而君绯色因为偷看玄王洗澡，被一掌劈死。秦臻睁开眼发现，她成了君绯色......",
                      "clickNum": "3704982",
                      "num": "217万字",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      },
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010075858",
                      "bookName": "强势重生：夫人她飒爆全球了！",
                      "author": "封疆为凰",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075858/11010075858.jpg?t=1634364848886&imageView2/0/w/200/h/267",
                      "introduction": "她，表面上是国际排行NO.01的杀手特工之王，暗地里是身披无数马甲的世界大佬。因为一场意外，重生到窝囊废物、人人嫌弃、又丑又胖的女学生身上......亲妹给她下毒、污蔑她偷窃、所有人都欺负她是一个没钱没人疼的可怜虫。直到有一天！她美貌恢复，马甲爆露，全场惊骇！四位宠妹狂魔哥哥不远万里赶来学院：“我活着的世界，没人能欺她分毫！”前世起就对她用情至深的男人也将她拥入怀中：“动我可以，动她，追究到底！”",
                      "clickNum": "377305",
                      "num": "290万字",
                      "bookTypeThreeMap": {
                        "579": "重生异能"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010075941",
                      "bookName": "湛爷的小心肝是满级大佬",
                      "author": "水流月",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075941/11010075941.jpg?t=1631096996374&imageView2/0/w/200/h/267",
                      "introduction": "时浅睁开眼睛看着男人绝美的俊脸。“你要对我负责。”某腹黑妖孽薄唇微勾，似笑非笑。从此，帝都大魔王湛爷家里多了一只小妖精！大魔王化身昏君，把小妖精宠上了天！某些人：“除了那张脸一无是处，花瓶而已！早晚被湛爷甩了！”不久后.......传说中的大神竟然是那小妖精！黑客军团大佬怎么有点像那小妖精！风靡全网的游戏创始人更像那小妖精。打败古武界第一高手的女人也有点像......大佬！跪了！",
                      "clickNum": "103252",
                      "num": "313万字",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "7.6"
                    },
                    {
                      "bookId": "11010074623",
                      "bookName": "嫡女重生：权臣的掌心宠",
                      "author": "十七夜",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074623/11010074623.jpg?t=1639731783988&imageView2/0/w/200/h/267",
                      "introduction": "沐云安前世识人不清，害的父母双亡，自己容貌尽毁，一箭穿心而死！重生后，她下定决心改写宿命，盯上了那个偏执冷漠的少年，只有她知道，他将来会成为怎样权倾天下的人物。她一改往日的娇纵任性，抱紧萧承逸的大腿，做他乖巧可爱的妹妹。可谁知，当她某天对他说： “逸哥哥，我喜欢上一个男人！”男人竟将她抵在墙上，低哑道：“乖晏晏，你这辈子只能喜欢我一个男人！”后来，沐云安才知道，是那个男人用半生的青灯古佛，才为她换来一世轮回重生……",
                      "clickNum": "1764533",
                      "num": "274万字",
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010050854",
                      "bookName": "农女致富：山里汉宠妻无度",
                      "author": "一壶清酒",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010050854/11010050854.jpg?t=1634365661157&imageView2/0/w/200/h/267",
                      "introduction": "苏红珊一睁眼发现自己穿越到了古代，茅草屋，破院子，吃了上顿没下顿，还附赠了个壮汉子夫君和一对面黄肌瘦的儿女。       可谁能告诉她，她的人设为什么是恶毒继母？       努力改了人设，修复了母子关系，做美食，开酒楼，发家致富，把日子过的蒸蒸日上。       可为什么这好好的继子继女忽然摇身一变成了皇子公主？就连自家这壮汉子夫君都成了将军？       只是这将军也实在太虎，苏红珊忍无可忍大怒：“韩夜霖，你无耻！这日子没法过了！”韩夜霖：“娘子，一品夫人给你挣到了，为夫还得给自己挣个娃。”",
                      "clickNum": "2007892",
                      "num": "425万字",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      },
                      "commentScore": "7.9"
                    },
                    {
                      "bookId": "11010074456",
                      "bookName": "新婚错爱：祁少的私宠罪妻",
                      "author": "十六儿",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074456/11010074456.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "苏晚璃爱了祁慕尘十二年，却被他亲手送入监狱。痛苦之中，她看见了男人和别的女人恩爱缱绻……五年后，强势回归，她已不再是那个爱他到卑微的女人！她手撕白莲花，脚踩贱人渣渣，正要狠虐渣男时……之前对她残忍冷漠的男人竟变得柔情似水！甚至众目睽睽下，亲吻她的脚背承诺，“阿璃，曾经是我爱错了人，今后，我愿用余生赎罪。”苏晚璃冷笑回绝：想我原谅你，除非，你死。",
                      "clickNum": "4372035",
                      "num": "276万字",
                      "commentScore": "8.1"
                    }
                  ]
                },
                {
                  "rankId": 3,
                  "rankName": "完本榜",
                  "bookInfos": [
                    {
                      "bookId": "11010072249",
                      "bookName": "第一农夫",
                      "author": "城南一梦",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072249/11010072249.jpg?t=1634025140226&imageView2/0/w/200/h/267",
                      "introduction": "自以为是最好的朋友，却是夺妻的仇人，而且还要下黑手置林峰于死地，好在老天有眼，让林峰大难不死，还遇到了天下第一机缘。且看我天下第一农夫，如何报仇雪恨，玩转乡村和都市。",
                      "clickNum": "46967",
                      "num": "1万潜力值",
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010072776",
                      "bookName": "逍遥龙帅",
                      "author": "明月关山",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072776/11010072776.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "逍遥战神归来，妻子惨死，女儿被送孤儿院，战神一怒，竟发现当年娶的是妹妹......",
                      "clickNum": "255843",
                      "num": "5220潜力值",
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010075859",
                      "bookName": "虎王令",
                      "author": "漫雨",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075859/11010075859.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "虎王归来，战友妻子惨遭虐待，儿子被打耳光！虎王令现，百万虎贲破城而入！",
                      "clickNum": "181149",
                      "num": "5220潜力值",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
                      },
                      "commentScore": "8.4"
                    },
                    {
                      "bookId": "11010068277",
                      "bookName": "修罗殿",
                      "author": "笑饮血",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010068277/11010068277.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "七年前，他因得罪大人物，犹如丧家之犬，落荒而逃。七年后，他化身修罗君主，权势滔天，为报仇雪恨，强势归来。却发现昔日好友因他而惨死，这一切的幕后黑手竟是……",
                      "clickNum": "324178",
                      "num": "3786潜力值",
                      "commentScore": "8.2"
                    },
                    {
                      "bookId": "11010070866",
                      "bookName": "战神医婿1",
                      "author": "一笔梦尘",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070866/11010070866.jpg?t=1629532205699&imageView2/0/w/200/h/267",
                      "introduction": "六  年戎马，楚 天  成就无上至尊医神，为了赎罪，他荣耀回归，却发现自己多了个女儿......",
                      "clickNum": "574250",
                      "num": "3480潜力值",
                      "bookTypeThreeMap": {
                        "543": "异术超能"
                      },
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010076121",
                      "bookName": "战王令",
                      "author": "爱吃大鲨鱼",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076121/11010076121.jpg?t=1669818861931&imageView2/0/w/200/h/267",
                      "introduction": "得知自己的女儿要被妻子送走，一代龙尊重回都市，将女儿救回。我乃北境龙尊！这世界、以我为王！！！",
                      "clickNum": "163339",
                      "num": "3045潜力值",
                      "commentScore": "4.4"
                    },
                    {
                      "bookId": "11010060678",
                      "bookName": "无敌王者",
                      "author": "叶缺",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010060678/11010060678.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "五年前，他无力保护爱人，离家五年！五年后，他一手创建的麒麟营令全世界强者闻风丧胆，十六位部下皆被授予至尊战神封号，过千成员被授予至强兵王，他成为名副其实的无敌王者！从现在起，我不会再让任何人欺辱你……",
                      "clickNum": "719501",
                      "num": "2320潜力值",
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010072546",
                      "bookName": "盖世龙帅",
                      "author": "天耀",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072546/11010072546.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "姐姐吊死公司大楼，父母被仇人双双害死，家族覆灭。叶君临离家八年，是别人眼中的废物。而复仇那一夜，他让全市豪门跪伏在脚下。身份揭晓，他乃当世第一战神。“辱我叶家者，杀无赦！”",
                      "clickNum": "220406",
                      "num": "600潜力值",
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010074128",
                      "bookName": "极品皇太子",
                      "author": "青云直上",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074128/11010074128.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "站在你面前的，是史上最极品、最独一无二的太子爷！怼皇帝、捉奸臣、乱京都，平逆贼，打城池，泡美人，一不小心，就实现了醉卧美人膝，醒掌天下权的人生梦想！人人都劝他登临帝位，可是......“救命！我不想当皇帝啊！”",
                      "clickNum": "2336337",
                      "num": "557潜力值",
                      "bookTypeThreeMap": {
                        "535": "架空历史"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010073240",
                      "bookName": "奇门至尊",
                      "author": "真庸懒人",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073240/11010073240.jpg?t=1642729933149&imageView2/0/w/200/h/267",
                      "introduction": "第一天进城的山村少年，被美女处处嫌弃。她却不知，少年握有上古龟甲，占卜相面，医药符箓，无所不通。从此逍遥都市，白手起家，一不下心成了个世界首富。",
                      "clickNum": "1906182",
                      "num": "444潜力值",
                      "commentScore": "7.5"
                    }
                  ]
                }
              ],
              "rankSex": 1
            },
            {
              "id": 30,
              "channelId": 4,
              "name": "男生分类",
              "sex": 2,
              "type": 3,
              "channelListIds": "4",
              "status": 1,
              "sort": 6,
              "extend": {
                "classifyCode": "68,70,65,66",
                "classifyName": "武侠456,都市生活1,仙侠,奇幻"
              },
              "comment": "",
              "bookTypeVos": [
                {
                  "classifyCode": 68,
                  "classifyName": "武侠456",
                  "books": [
                    {
                      "bookId": "11010056959",
                      "bookName": "幸孕宠妻：战爷，晚安！",
                      "bookAlias": "野蛮小狐狸",
                      "author": "言安",
                      "introduction": "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。  惹得战爷肺气炸裂。  就在所有人都以为她会死无葬身之地时。  隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”  “我有条件？”  “说！”  “不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”  “依你！”  路人倒地：这就是传说中的一物降一物？  战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056959/11010056959.jpg?t=1637748336688&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "重生",
                        "萌宝",
                        "甜宠",
                        "豪门恩怨",
                        "先虐后宠"
                      ],
                      "protagonist": "洛诗涵,战寒爵",
                      "hot": "2245万",
                      "clickNum": "22450819",
                      "updateTime": 1695715189000,
                      "totalWordSize": "2751194",
                      "scoreNum": "8.4",
                      "lastChapterId": "541685663",
                      "lastChapterUtime": "2023-05-04 19:04:06",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
                      }
                    },
                    {
                      "bookId": "11010067979",
                      "bookName": "天医归来",
                      "bookAlias": "",
                      "author": "宝书生",
                      "introduction": "他有绝世医术，滔天战力，却为报师恩忍辱十年。十年后，曾经鄙视他的人，只配匍匐在他脚下！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010067979/11010067979.jpg?t=1675944847737&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "女神",
                        "神医",
                        "逆袭",
                        "天才"
                      ],
                      "protagonist": "秦羽",
                      "hot": "674万",
                      "clickNum": "6737508",
                      "updateTime": 1695715191000,
                      "totalWordSize": "5497663",
                      "tagV3": [
                        "战神",
                        "神医",
                        "复仇"
                      ],
                      "scoreNum": "8.4",
                      "lastChapterId": "522408425",
                      "lastChapterUtime": "2022-04-20 11:41:53",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
                      }
                    },
                    {
                      "bookId": "11010057627",
                      "bookName": "少年风水师",
                      "bookAlias": "乘风少年",
                      "author": "听澜本尊",
                      "introduction": "爷爷去世的时候，轰动全城......",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "金钱",
                        "风水",
                        "超能"
                      ],
                      "protagonist": "吴峥,唐思佳",
                      "hot": "472万",
                      "clickNum": "4723149",
                      "updateTime": 1695715191000,
                      "totalWordSize": "3595178",
                      "tagV3": [
                        "灵异",
                        "算命"
                      ],
                      "scoreNum": "8.2",
                      "lastChapterId": "514869793",
                      "lastChapterUtime": "2021-12-23 14:40:09",
                      "bookTypeThreeMap": {
                        "530": "现代武侠",
                        "606": "原创灵异",
                        "607": "悬疑推理"
                      }
                    },
                    {
                      "bookId": "11010076121",
                      "bookName": "战王令",
                      "bookAlias": "龙临天下",
                      "author": "爱吃大鲨鱼",
                      "introduction": "得知自己的女儿要被妻子送走，一代龙尊重回都市，将女儿救回。我乃北境龙尊！这世界、以我为王！！！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076121/11010076121.jpg?t=1669818861931&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "陈龙,穆染菲",
                      "hot": "16万",
                      "clickNum": "163339",
                      "updateTime": 1695715195000,
                      "totalWordSize": "1799029",
                      "tagV3": [
                        "复仇"
                      ],
                      "scoreNum": "4.4",
                      "lastChapterId": "528617675",
                      "lastChapterUtime": "2022-09-22 11:49:06"
                    },
                    {
                      "bookId": "11010075859",
                      "bookName": "虎王令",
                      "bookAlias": "",
                      "author": "漫雨",
                      "introduction": "虎王归来，战友妻子惨遭虐待，儿子被打耳光！虎王令现，百万虎贲破城而入！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075859/11010075859.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "秦峰,叶倩",
                      "hot": "18万",
                      "clickNum": "181149",
                      "updateTime": 1695715194000,
                      "totalWordSize": "1825019",
                      "tagV3": [
                        "高手下山",
                        "透视",
                        "推理"
                      ],
                      "scoreNum": "8.4",
                      "lastChapterId": "522404156",
                      "lastChapterUtime": "2022-04-20 10:40:33",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
                      }
                    },
                    {
                      "bookId": "11010072254",
                      "bookName": "上门龙婿",
                      "bookAlias": "",
                      "author": "城南一梦",
                      "introduction": "“徐阳你配不上我！我们离婚吧！”“废物，滚出我们林家，你配不上我女儿！”暗中帮助妻子，取得神话般事业的徐阳，却被妻子和丈母娘嫌弃被逼离婚。离婚发现徐阳身份后，二人追悔莫及，丈母娘跪求：好女婿，别离开我女儿成不成..",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072254/11010072254.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "女神",
                        "赘婿",
                        "逆袭"
                      ],
                      "protagonist": "徐阳,苏雨真",
                      "hot": "6.68万",
                      "clickNum": "66773",
                      "updateTime": 1695715192000,
                      "totalWordSize": "4301991",
                      "tagV3": [
                        "女总裁",
                        "首富",
                        "都市测试"
                      ],
                      "scoreNum": "7.9",
                      "lastChapterId": "522487732",
                      "lastChapterUtime": "2022-04-20 18:10:21",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
                      }
                    },
                    {
                      "bookId": "11010071180",
                      "bookName": "傲世枭雄",
                      "bookAlias": "医武狂尊",
                      "author": "而立之年",
                      "introduction": "醒掌天下权，醉卧美人膝；人生在世，当一世逍遥。王超，因机缘巧合得到赤练仙人传承，从此，以一手医术闯荡江湖，纵横都市，掌握亿万家财，无上权力！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010071180/11010071180.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "复仇",
                        "王者",
                        "反转",
                        "枭雄"
                      ],
                      "protagonist": "王超,陆亦可",
                      "hot": "513万",
                      "clickNum": "5128120",
                      "updateTime": 1695715190000,
                      "totalWordSize": "3409540",
                      "tagV3": [
                        "神医",
                        "首富",
                        "都市测试"
                      ],
                      "scoreNum": "7.5",
                      "lastChapterId": "522505497",
                      "lastChapterUtime": "2022-04-20 23:10:19",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
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
                      "bookId": "11010070179",
                      "bookName": "第一弃少",
                      "bookAlias": "",
                      "author": "测试",
                      "introduction": "五年前，父亲公司被人设计陷害，血本无归，江北辰为了给父亲治病在亲人面前受尽屈辱，甚至被未婚妻无情抛弃，最后更是被沉入江中。五年后，他荣耀加身，强势归来，不仅扫尽一切凌辱，为父报仇，更是屹立九州之巅，俯瞰天下。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070179/11010070179.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "王者",
                        "弃少",
                        "打脸"
                      ],
                      "protagonist": "江北辰,王雪舞",
                      "hot": "16万",
                      "clickNum": "161565",
                      "updateTime": 1695715192000,
                      "totalWordSize": "6317577",
                      "tagV3": [
                        "战神",
                        "女总裁",
                        "复仇"
                      ],
                      "scoreNum": "8.4",
                      "lastChapterId": "522513212",
                      "lastChapterUtime": "2022-04-21 06:40:15",
                      "bookTypeThreeMap": {
                        "530": "现代武侠"
                      }
                    },
                    {
                      "bookId": "11010058357",
                      "bookName": "巅峰奇才",
                      "bookAlias": "",
                      "author": "失眠大吹比",
                      "introduction": "不是我目空一切，是你们，还入不了我眼界！我想虎遁山林，却发现，没有一方深林，能放得下我这条猛虎！怎么办？想当咸鱼，可实力它不允许啊......",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010058357/11010058357.jpg?t=1631091021155&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "异能",
                        "超能",
                        "打脸",
                        "天才"
                      ],
                      "protagonist": "楚烈",
                      "hot": "114万",
                      "clickNum": "1141547",
                      "updateTime": 1695715191000,
                      "totalWordSize": "5032549",
                      "tagV3": [
                        "战神"
                      ],
                      "scoreNum": "8.2",
                      "lastChapterId": "523525266",
                      "lastChapterUtime": "2022-05-10 22:10:15",
                      "bookTypeThreeMap": {
                        "530": "现代武侠",
                        "755": "女人三级"
                      }
                    }
                  ]
                },
                {
                  "classifyCode": 70,
                  "classifyName": "都市生活1",
                  "books": [
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
                      "updateTime": 1695715086000,
                      "totalWordSize": "1141469",
                      "scoreNum": "8.0",
                      "lastChapterId": "528616854",
                      "lastChapterUtime": "2022-09-20 11:30:36"
                    },
                    {
                      "bookId": "11010069767",
                      "bookName": "至尊神婿",
                      "bookAlias": "叶昊,郑漫儿",
                      "author": "狼牙土豆",
                      "introduction": "入赘三年，活得不如狗。一朝崛起，岳母小姨子给跪了。 岳母：求求你别离开我女儿。小姨子：姐夫我错了......",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010069767/11010069767.jpg?t=1638261703574&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "女婿",
                        "打脸",
                        "战神"
                      ],
                      "protagonist": "叶昊,郑漫儿",
                      "hot": "1.7亿",
                      "clickNum": "170266632",
                      "updateTime": 1695715190000,
                      "totalWordSize": "6084479",
                      "tagV3": [
                        "学霸",
                        "神豪",
                        "异能"
                      ],
                      "scoreNum": "6.4",
                      "lastChapterId": "542132688",
                      "lastChapterUtime": "2023-09-19 14:44:19",
                      "bookTypeThreeMap": {
                        "540": "古玩鉴宝"
                      }
                    },
                    {
                      "bookId": "11000001416",
                      "bookName": "超级特种兵",
                      "bookAlias": "",
                      "author": "超级糊涂神",
                      "introduction": "退役特种兵萧扬回到家乡，靠着超卓的身手和机智的头脑横行都市，且看萧扬如何纵意花丛，谱写完美人生。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001416/11000001416.jpg?t=1668762118467&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "都市",
                        "特种兵"
                      ],
                      "protagonist": "",
                      "hot": "5264",
                      "clickNum": "5264",
                      "updateTime": 1695715208000,
                      "totalWordSize": "3237317",
                      "scoreNum": "8.1",
                      "lastChapterId": "511800",
                      "lastChapterUtime": "2015-11-24 16:12:20",
                      "bookTypeThreeMap": {
                        "545": "高手激战"
                      }
                    },
                    {
                      "bookId": "11010058559",
                      "bookName": "天王殿水电费看激励刷卡就联发科路京东方看激励是空晶方科技了接口了快结束了复健科",
                      "bookAlias": "",
                      "author": "状元不出门离开的弗兰克家老师的看激励上来的凯乐科技SDK解封离开",
                      "introduction": "六年浴血，王者归来，凭我七尺之躯，可拳打地痞恶霸，可护娇妻萌娃...",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010058559/11010058559.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "反转",
                        "女婿",
                        "战神"
                      ],
                      "protagonist": "夏天,叶婉秋",
                      "hot": "1711万",
                      "clickNum": "17110999",
                      "updateTime": 1695715189000,
                      "totalWordSize": "4160220",
                      "tagV3": [
                        "神豪",
                        "复仇",
                        "无敌"
                      ],
                      "scoreNum": "7.6",
                      "lastChapterId": "541914847",
                      "lastChapterUtime": "2023-08-31 17:37:53"
                    },
                    {
                      "bookId": "11010072676",
                      "bookName": "都市之龙婿战神",
                      "bookAlias": "",
                      "author": "灰色二哈",
                      "introduction": "他是战神，统兵百万，镇守国门，护佑千万黎民！然而，他亦是上门女婿！回归之日，遭他人嘲讽、妻子误会、丈母娘嫌弃，面对这一切，他，又该何去何从？",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072676/11010072676.jpg?t=1631096999551&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "林天,洛倾城",
                      "hot": "4.73万",
                      "clickNum": "47303",
                      "updateTime": 1695715193000,
                      "totalWordSize": "3309586",
                      "tagV3": [
                        "战神",
                        "女总裁",
                        "都市测试"
                      ],
                      "scoreNum": "8.1",
                      "lastChapterId": "528617683",
                      "lastChapterUtime": "2022-09-22 15:43:27"
                    },
                    {
                      "bookId": "11010035637",
                      "bookName": "上门龙婿",
                      "bookAlias": "至尊龙婿",
                      "author": "叶公子,叶公子2,叶公子3",
                      "introduction": "叶辰是所有人都瞧不起的上门女婿，但没有人知道他的真实身份却是顶尖家族的大少爷，那些瞧不起他的人，终究要跪在他的面前，诚惶诚恐的叫他一声爷！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010035637/11010035637.jpg?t=1675944848611&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "暴富",
                        "逆袭"
                      ],
                      "protagonist": "叶辰",
                      "hot": "7244万",
                      "clickNum": "72444941",
                      "updateTime": 1695715187000,
                      "totalWordSize": "5035478",
                      "tagV3": [
                        "弃少",
                        "神豪",
                        "首富"
                      ],
                      "scoreNum": "8.2",
                      "lastChapterId": "541685647",
                      "lastChapterUtime": "2023-05-04 15:22:22",
                      "bookTypeThreeMap": {
                        "540": "古玩鉴宝",
                        "543": "异术超能"
                      }
                    },
                    {
                      "bookId": "11000001427",
                      "bookName": "花都猎魔人",
                      "author": "逆推人生",
                      "introduction": "有能力，职业不是问题。有实力，年龄不是问题。狩猎花都，统统归我所有。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001427/11000001427.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "花都猎魔人",
                        "都市",
                        "逆推人生"
                      ],
                      "hot": "5056",
                      "clickNum": "5056",
                      "updateTime": 1695715208000,
                      "totalWordSize": "526169",
                      "scoreNum": "8.2",
                      "lastChapterId": "520834",
                      "lastChapterUtime": "2015-11-24 17:07:14"
                    },
                    {
                      "bookId": "11000035343",
                      "bookName": "窗口的天空",
                      "author": "雪雅",
                      "introduction": "22岁的大学生闯进了大自己十岁的失婚女人的生活，他无可救药的爱上了这个女人，他知道他找到了自己的唯一……32岁的她义无反顾的接受了这份爱，她也爱上了这个可爱的男人；但命运总和自己开玩笑，现实再一次告诉她，姐弟恋哪有那么容易，何况自己一无所有。于是，她还是选择离开了这个还没毕业的学生，因为爱他，所以要离开他。她知道自己要努力，就算没他在身边，她还是要再次站起来。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000035343/11000035343.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "窗口的天空",
                        "雪雅",
                        "打"
                      ],
                      "hot": "5007",
                      "clickNum": "5007",
                      "updateTime": 1695715086000,
                      "totalWordSize": "372934",
                      "scoreNum": "7.8",
                      "lastChapterId": "5647794",
                      "lastChapterUtime": "2016-09-30 07:39:21"
                    },
                    {
                      "bookId": "11010030861",
                      "bookName": "超级赘婿",
                      "bookAlias": "我给女神当赘婿",
                      "author": "黑夜的瞳",
                      "introduction": "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了...",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030861/11010030861.jpg?t=1634609613707&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "王者",
                        "富豪",
                        "女婿",
                        "打脸"
                      ],
                      "protagonist": "林阳,将小",
                      "hot": "1347万",
                      "clickNum": "13469415",
                      "updateTime": 1695715186000,
                      "totalWordSize": "5904312",
                      "tagV3": [
                        "复仇"
                      ],
                      "scoreNum": "7.6",
                      "lastChapterId": "522505477",
                      "lastChapterUtime": "2022-04-20 23:10:01"
                    },
                    {
                      "bookId": "11010076697",
                      "bookName": "快递情缘",
                      "bookAlias": "我的极品老婆",
                      "author": "小二",
                      "introduction": "一个小小的快递员，身负巨债，却在这个纸醉金迷的都市里坚持着自己内心最初的那份执着和底线。他抛的开物质的欲望，却斩不断感情的千丝万缕。最终在红颜的情愫中苦苦挣扎……",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076697/11010076697.jpg?t=1629770256486&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "方志强,王亚欣",
                      "hot": "2.13万",
                      "clickNum": "21309",
                      "updateTime": 1695715195000,
                      "totalWordSize": "8590666",
                      "tagV3": [
                        "高手下山",
                        "快递",
                        "现实作品"
                      ],
                      "scoreNum": "8.2",
                      "lastChapterId": "541720090",
                      "lastChapterUtime": "2023-07-13 14:27:14"
                    }
                  ]
                },
                {
                  "classifyCode": 65,
                  "classifyName": "仙侠",
                  "books": [
                    {
                      "bookId": "11000000303",
                      "bookName": "天医狂少",
                      "author": "love小7",
                      "introduction": "繁华都市，我自逍遥，乱世佳人，江山如此多娇！五斗米教传人大师叶千，意外接收到了一个特殊的委托，惹上了一个不该招惹的对手，开始了一段不平凡的旅程。加入俱乐部，修炼三皇秘典，绘制正一盟威符箓，寻找三五斩邪雌雄剑，抢夺阳平治都功印。找回原本属于五斗米教的荣耀，战斗鬼修，对战剑仙，旅途之中，各色美女轮番登场，且看叶千带着自己的红颜知己，羽化登仙！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000000303/11000000303.jpg?t=1668762099026&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "至尊",
                        "修真",
                        "仙侠",
                        "现代",
                        "狂少",
                        "传人"
                      ],
                      "hot": "5127",
                      "clickNum": "5127",
                      "updateTime": 1695715199000,
                      "totalWordSize": "2232225",
                      "scoreNum": "7.8",
                      "lastChapterId": "208677",
                      "lastChapterUtime": "2015-10-30 12:36:12",
                      "bookTypeThreeMap": {
                        "519": "现代修真"
                      }
                    },
                    {
                      "bookId": "11010074847",
                      "bookName": "神话之大商国君",
                      "bookAlias": "",
                      "author": "司徒清尘",
                      "introduction": "一觉醒来，睁眼就看到一个绝世美女！万万没想到，李清居然穿越成了商朝最后的一个大王，纣王帝辛！面对天下大乱，西周造反，三圣封神，咋办？不慌，我有，人皇系统！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074847/11010074847.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "李清,费仲",
                      "hot": "9.99万",
                      "clickNum": "99921",
                      "updateTime": 1696663514000,
                      "totalWordSize": "2061193",
                      "tagV3": [
                        "皇帝",
                        "神话",
                        "系统"
                      ],
                      "scoreNum": "8.2",
                      "lastChapterId": "522421165",
                      "lastChapterUtime": "2022-04-20 15:10:28",
                      "bookTypeThreeMap": {
                        "518": "洪荒封神"
                      }
                    },
                    {
                      "bookId": "11010074201",
                      "bookName": "剑鸣乱世",
                      "bookAlias": "",
                      "author": "波波丹",
                      "introduction": "一位从神界降临的少年，苦练武功数年后，投靠了在新野当县令的刘备。他来到人世间的目的是什么，又如何在这个乱世生存......？",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074201/11010074201.jpg?t=1628492574081&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "protagonist": "刘备",
                      "hot": "5656",
                      "clickNum": "5656",
                      "updateTime": 1695715193000,
                      "totalWordSize": "1221362",
                      "tagV3": [
                        "高手下山",
                        "透视",
                        "推理"
                      ],
                      "scoreNum": "7.6",
                      "lastChapterId": "519022404",
                      "lastChapterUtime": "2022-03-03 09:31:07",
                      "bookTypeThreeMap": {
                        "517": "奇幻修真"
                      }
                    },
                    {
                      "bookId": "11010070475",
                      "bookName": "财法仙途",
                      "author": "木井",
                      "introduction": "林夕踏足仙之巅，成就世间无敌后，回顾往昔，总是不禁感慨：修仙生活呐，真是朴实无华，且枯燥。众人：你这个可恶的有钱人可闭嘴吧，快给我去感受真正修仙者的艰难和心酸啊！这是一个有钱人，拿钱硬生生砸出一条长生坦途的故事。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070475/11010070475.jpg?t=1628492568484&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "林夕",
                      "hot": "7112",
                      "clickNum": "7112",
                      "updateTime": 1695715190000,
                      "totalWordSize": "3213070",
                      "tagV3": [
                        "武修",
                        "修仙",
                        "氪金"
                      ],
                      "scoreNum": "8.0",
                      "lastChapterId": "522512818",
                      "lastChapterUtime": "2022-04-21 05:31:06",
                      "bookTypeThreeMap": {
                        "517": "奇幻修真"
                      }
                    },
                    {
                      "bookId": "11010059073",
                      "bookName": "剑仙归来",
                      "author": "狂奔的哈士奇",
                      "introduction": "三千年前，你秦家谤我、欺我、辱我，害我面目全非，无颜面世。三千年后，我要你懊悔、恐惧、绝望，永生永世永堕地狱！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010059073/11010059073.jpg?t=1631091017249&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "秦凡",
                      "hot": "9038",
                      "clickNum": "9038",
                      "updateTime": 1695715189000,
                      "totalWordSize": "4618226",
                      "scoreNum": "7.8",
                      "lastChapterId": "520552414",
                      "lastChapterUtime": "2022-03-22 16:56:09",
                      "bookTypeThreeMap": {
                        "519": "现代修真"
                      }
                    },
                    {
                      "bookId": "11010053388",
                      "bookName": "龙门战神",
                      "bookAlias": "",
                      "author": "胡说大师",
                      "introduction": "我低调，不是让你们以为我好欺负的！家族的仇，我亲自来，一个人，也跑不掉！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010053388/11010053388.jpg?t=1631091041218&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "王者",
                        "女婿",
                        "战神"
                      ],
                      "protagonist": "陆凡,韩瑶瑶",
                      "hot": "4.59万",
                      "clickNum": "45900",
                      "updateTime": 1695715188000,
                      "totalWordSize": "4645850",
                      "tagV3": [
                        "战神",
                        "复仇",
                        "都市测试"
                      ],
                      "scoreNum": "8.3",
                      "lastChapterId": "514795250",
                      "lastChapterUtime": "2021-12-22 16:40:05",
                      "bookTypeThreeMap": {
                        "519": "现代修真"
                      }
                    },
                    {
                      "bookId": "11000176352",
                      "bookName": "仙御",
                      "bookAlias": "",
                      "author": "紫木万军",
                      "introduction": "仙历第九纪，一纪一量劫。在经过八次劫数之后，天地元气日渐消散，仙道修行最终走向另一个极端。这是仙穹大陆最好的时代，仙凡大同，皆可修仙。这也是仙道最坏的时代，仙者亿万，无人成仙。一个先天不足、多智近妖的少年，在经历灭门之祸、众叛亲离以后，意外觉醒沉睡之魂，从此开始了自己的求仙问道之路。三魂觉醒定天赋，七魄融灵化神通。天地双桥通冥冥，十二命窍聚仙宫。仙是一种信仰，长生不老，逍遥自在，超脱无上。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000176352/11000176352.jpg?t=1630376600497&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "卓云仙",
                      "hot": "6811",
                      "clickNum": "6811",
                      "updateTime": 1695715186000,
                      "totalWordSize": "3854244",
                      "scoreNum": "7.7",
                      "lastChapterId": "520873202",
                      "lastChapterUtime": "2022-03-26 11:31:02",
                      "bookTypeThreeMap": {
                        "516": "古典仙侠"
                      }
                    },
                    {
                      "bookId": "11000176302",
                      "bookName": "都市之修真归来",
                      "bookAlias": "",
                      "author": "火里行舟",
                      "introduction": "修真六百年的仙尊叶天，渡劫失败，止步真仙，怀万族至宝九天神石重生地球。倾家荡产之仇，家破之恨，亡妻之痛，前世恩怨，今世血债血偿！力压各方大佬，碾压豪门世家，弹指间覆灭古老门派，金钱，权利，不过一念之间。且看主角如何在一个个只手遮天的势力中，强势逆袭！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000176302/11000176302.jpg?t=1628129240025&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "都市",
                        "修真",
                        "爽文",
                        "美女",
                        "重生"
                      ],
                      "protagonist": "叶天,李丝雨",
                      "hot": "1.78万",
                      "clickNum": "17824",
                      "updateTime": 1695715187000,
                      "totalWordSize": "4066710",
                      "tagV3": [
                        "都市修真",
                        "复仇",
                        "都市测试"
                      ],
                      "scoreNum": "7.7",
                      "lastChapterId": "473129015",
                      "lastChapterUtime": "2020-05-27 12:31:24",
                      "bookTypeThreeMap": {
                        "519": "现代修真"
                      }
                    },
                    {
                      "bookId": "11000072263",
                      "bookName": "全能仙师",
                      "author": "擅长炒鸭蛋",
                      "introduction": "一个原本被测试出五行伪灵根的南疆少年，却拥有着来自于未来世界的灵魂。在世人眼中他已经注定了一生的平庸，可是他拥有的一件超级法宝却让这一切都发生了改变。五行平庸变成了五行全能，这样的一个妖孽般的存在，会在这一个神话三国的世界之中，掀起怎样的波澜。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072263/11000072263.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "爽文",
                        "美女",
                        "至尊",
                        "修真",
                        "功法",
                        "仙侠"
                      ],
                      "hot": "5008",
                      "clickNum": "5008",
                      "updateTime": 1695715182000,
                      "totalWordSize": "2428005",
                      "scoreNum": "7.8",
                      "lastChapterId": "10117060",
                      "lastChapterUtime": "2016-12-20 17:33:22",
                      "bookTypeThreeMap": {
                        "517": "奇幻修真"
                      }
                    },
                    {
                      "bookId": "11000072255",
                      "bookName": "仙途霸业",
                      "author": "孙不正",
                      "introduction": "仙家无义，魔道难明，三界六道唯我独尊。英雄寂寞，女儿长情，江山万里谁与争锋。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072255/11000072255.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "历史",
                        "热血",
                        "爽文",
                        "仙侠",
                        "英雄",
                        "霸业"
                      ],
                      "hot": "5001",
                      "clickNum": "5001",
                      "updateTime": 1695715183000,
                      "totalWordSize": "1412400",
                      "scoreNum": "8.0",
                      "lastChapterId": "10497664",
                      "lastChapterUtime": "2017-01-10 04:32:38",
                      "bookTypeThreeMap": {
                        "517": "奇幻修真"
                      }
                    }
                  ]
                },
                {
                  "classifyCode": 66,
                  "classifyName": "奇幻",
                  "books": [
                    {
                      "bookId": "11010075904",
                      "bookName": "龙刺",
                      "bookAlias": "",
                      "author": "老雷",
                      "introduction": "受最苦的罪， 饮最烈的酒，做最强的人！ 以战为生，燃爆你的肾上腺，带你走进铁血男儿的风暴世界！1",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075904/11010075904.jpg?t=1631096996240&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "雷书侠,凌朝阳",
                      "hot": "1.65万",
                      "clickNum": "16494",
                      "updateTime": 1695715193000,
                      "totalWordSize": "3577419",
                      "tagV3": [
                        "高手下山",
                        "透视",
                        "推理"
                      ],
                      "scoreNum": "7.9",
                      "lastChapterId": "522324569",
                      "lastChapterUtime": "2022-04-19 12:55:11",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻",
                        "521": "魔法校园",
                        "794": "ces1",
                        "804": "first_day",
                        "805": "Google"
                      }
                    },
                    {
                      "bookId": "11000072308",
                      "bookName": "万法之刃",
                      "bookAlias": "",
                      "author": "鱼丸",
                      "introduction": "骑士之国，不起眼的见习骑士、地球之上，泯然众人的学子一员，又或者，在万千世界是挣扎求存的神选之子，哪一个，才是乔森的真正身份？于华丽的魔法中寻找智慧之精义，于板铠大剑中追求力量之极限，于自然与平衡中追迹神灵不经意留下的线索，直到……成为一世至尊。呵，这条路，每一步，大概都埋葬着无数的尸骨，即使有神灵的眷顾，青少年哟，你真的想踏上这条路，迈出一往无回的第一步吗？",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072308/11000072308.jpg?t=1628844698074&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "美女",
                        "热血",
                        "至尊",
                        "争霸",
                        "西方",
                        "骑士"
                      ],
                      "protagonist": "",
                      "hot": "5009",
                      "clickNum": "5009",
                      "updateTime": 1695715184000,
                      "totalWordSize": "652487",
                      "scoreNum": "8.3",
                      "lastChapterId": "10134292",
                      "lastChapterUtime": "2016-12-20 18:21:10",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻",
                        "747": "666"
                      }
                    },
                    {
                      "bookId": "11000071556",
                      "bookName": "国王千岁",
                      "author": "仲庸之徒",
                      "introduction": "国王被阴谋篡权的势力暗害，但他在临终之前发起反击：把一对年纪幼小的双胞胎王子分开，小王子留在王国的宫廷内，由红衣主教兼摄政王和护国大法师共同辅佐；大王子则被送到了当世最强大的隐士魔法师那里学习魔法。十多年后，大王子魔法学成，即将归来；小王子也到了即将从摄政王手中接过王权、登基坐上王位的年纪。但是，这时候国内局势波云诡谲，风起云涌，野心家们蠢蠢欲动；到处都是密谋，到处都在摩拳擦掌，到处都在枕戈待战！而朝廷和王权则处于风雨飘摇之中，谁来拯救国家！谁来拯救王权！谁来拯救处于风暴中心的小王子殿下？！需要精诚团结的两位王子亲",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071556/11000071556.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "国王千岁",
                        "仲庸之徒",
                        "玄幻奇幻"
                      ],
                      "hot": "5017",
                      "clickNum": "5017",
                      "updateTime": 1695715180000,
                      "totalWordSize": "411710",
                      "scoreNum": "8.1",
                      "lastChapterId": "9899322",
                      "lastChapterUtime": "2016-11-29 11:34:08",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    },
                    {
                      "bookId": "11000061083",
                      "bookName": "光灵行传",
                      "author": "雷文D维克萨斯",
                      "introduction": "没有命运,仅有人铺垫出之坎坷道途没有净土,仅有人开凿出之世外桃园   一把王者圣剑，为黑夜带来光明一个不屈英魂，为世间燃点希望    觉醒灵魂，少年鏖战神魔；暗云涌动，泛起灭世争端！    光暗冲突，大战一触即发；人神决战，再写创世诗篇！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000061083/11000061083.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "光灵行传",
                        "雷文D维克萨斯",
                        "玄幻",
                        "王者",
                        "觉醒",
                        "热血"
                      ],
                      "hot": "5032",
                      "clickNum": "5032",
                      "updateTime": 1695715178000,
                      "totalWordSize": "5671496",
                      "scoreNum": "7.8",
                      "lastChapterId": "10500382",
                      "lastChapterUtime": "2017-01-10 12:21:55",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    },
                    {
                      "bookId": "11000055547",
                      "bookName": "致命恐慌",
                      "bookAlias": "",
                      "author": "空城天祥",
                      "introduction": "生与死，轮回不止！在随机的世界中，挣扎求生。害怕，恐慌...这些随时会要了你的命！一个具有人格分裂症的人，凭借着自身实力，意外获得了奇门遁甲之术。与西方的魔法，斗气相撞！混战，智谋，生死相搏，弱肉强食，在这个世界中被展现的淋漓尽致！天下尽在我手！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000055547/11000055547.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "致命恐慌",
                        "空城天祥",
                        "玄幻"
                      ],
                      "protagonist": "",
                      "hot": "5004",
                      "clickNum": "5004",
                      "updateTime": 1695715178000,
                      "totalWordSize": "1348468",
                      "scoreNum": "8.2",
                      "lastChapterId": "9860324",
                      "lastChapterUtime": "2016-11-27 00:37:47",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    },
                    {
                      "bookId": "11000052154",
                      "bookName": "史上第一神",
                      "author": "寂寞流年",
                      "introduction": "浩瀚星空强者为尊，众神大战乱舞苍穹，这个宇宙究竟谁主浮沉，而在这茫茫宇宙之中，到底又有多少不为人知的恐怖存在，传说中的超级战斗民族到底是真是假，无尽的谜底和无尽的战斗........直到他的出现...........",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000052154/11000052154.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "史上第一神",
                        "寂寞流年",
                        "玄幻奇幻"
                      ],
                      "hot": "5037",
                      "clickNum": "5037",
                      "updateTime": 1695715175000,
                      "totalWordSize": "298593",
                      "scoreNum": "7.9",
                      "lastChapterId": "6560275",
                      "lastChapterUtime": "2016-11-18 16:59:30",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    },
                    {
                      "bookId": "11000052106",
                      "bookName": "亡灵重现",
                      "author": "千色麒麟",
                      "introduction": "亡灵——死者！　　亡灵界——死者的世界！　　一名阵亡的将军，意外堕入亡灵界之后，不甘沉沦，从一名骷髅战士开始步步成长。　　这里有令人毛骨悚然的骷髅战士，勇猛的暗黑武士，强大的恐怖骑士、迷幻般的堕落天使。　　这里有众神居住的天界，令人神往的天堂，使人恐惧的地狱，让人迷失的魔界。　　这是一个亡灵梦幻般的成长史！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000052106/11000052106.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "亡灵重现",
                        "千色麒麟",
                        "玄幻奇幻"
                      ],
                      "hot": "5506",
                      "clickNum": "5506",
                      "updateTime": 1695715174000,
                      "totalWordSize": "583792",
                      "scoreNum": "8.1",
                      "lastChapterId": "6555723",
                      "lastChapterUtime": "2016-11-18 16:55:56",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    },
                    {
                      "bookId": "11000052067",
                      "bookName": "不会魔法的魔法师",
                      "author": "三余",
                      "introduction": "剑与魔法世界的冒险与艳遇之旅：   战争，爱情，友情，背叛，复仇、、、、、  玄幻的世界里，却有着现实的悲欢离合，恩怨情仇。  哪里有压迫，哪里就有反抗。  斗气，魔法，魔兽，精灵，矮人，兽人，地精，巨龙，巨人、、、、、一个都不能少。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000052067/11000052067.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "不会魔法的魔法师",
                        "三余",
                        "玄幻奇幻"
                      ],
                      "hot": "5023",
                      "clickNum": "5023",
                      "updateTime": 1695715174000,
                      "totalWordSize": "934486",
                      "scoreNum": "8.2",
                      "lastChapterId": "6550541",
                      "lastChapterUtime": "2016-11-18 16:52:40",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    },
                    {
                      "bookId": "11000051871",
                      "bookName": "魔兽之歌",
                      "author": "扬州人",
                      "introduction": "魔兽之歌",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000051871/11000051871.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "魔兽之歌",
                        "扬州人",
                        "玄幻奇幻"
                      ],
                      "hot": "5012",
                      "clickNum": "5012",
                      "updateTime": 1695715172000,
                      "totalWordSize": "334431",
                      "scoreNum": "7.6",
                      "lastChapterId": "6526234",
                      "lastChapterUtime": "2016-11-18 16:35:56",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    },
                    {
                      "bookId": "11000051771",
                      "bookName": "超级魔法学徒",
                      "author": "月夜水星",
                      "introduction": "一个只会三级以下魔法的魔法师，用他的智慧告诉那些动不动就把九级魔法、禁咒挂在嘴边的大魔导师们：魔法，不是像你们那样用的！    你有流星火雨，末日天谴，很了不起啊，可是我用面部肌肉僵硬术，让你念不出咒语，看你怎么施法？    圣剑很好，很强大，然而剑柄中了腐蚀术，不知哪位勇士敢去握一握它？    圣骑士追人真要命，不要紧，看我的一级动物变形术，骑着猪的圣骑士，我想也没那么可怕了吧？    异想天开的魔法，告诉你：知识就是力量，想象力才是伟大魔法师的基本素质。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000051771/11000051771.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "超级魔法学徒",
                        "月夜水星",
                        "玄幻奇幻"
                      ],
                      "hot": "5076",
                      "clickNum": "5076",
                      "updateTime": 1695715171000,
                      "totalWordSize": "653330",
                      "scoreNum": "7.6",
                      "lastChapterId": "9956802",
                      "lastChapterUtime": "2016-12-07 02:18:25",
                      "bookTypeThreeMap": {
                        "520": "西方奇幻"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "code": 5,
          "seoColumnManageVos": [
            {
              "id": 12,
              "channelId": 4,
              "name": "男生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 1,
              "comment": "男生精选",
              "bookInfos": [
                {
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
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001460/11000001460.jpg?t=1640336747840&imageView2/0/w/200/h/267",
                  "bookName": "冷少的替身妻",
                  "bookId": "11000001460",
                  "introduction": "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……",
                  "introductionList": [
                    "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……"
                  ],
                  "author": "汐汐 晚晴",
                  "totalWordSize": "271万",
                  "totalChapterNum": "1181",
                  "lastChapterId": "551800",
                  "lastChapterName": "念念情深：亲自戴上那枚戒指",
                  "clickNum": "17万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "总裁",
                    "现言",
                    "豪门",
                    "虐文",
                    "虐恋",
                    "邪魅"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "7.5",
                  "wordSize": "271",
                  "wordSizeUnit": "万",
                  "totalReadNum": "17",
                  "totalReadNumUnit": "万",
                  "protagonist": "秦雅滢,冷慕宸",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001372/11000001372.jpg?t=1668762117850&imageView2/0/w/200/h/267",
                  "bookName": "凤凰错：替嫁弃妃",
                  "bookId": "11000001372",
                  "introduction": "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……",
                  "introductionList": [
                    "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……"
                  ],
                  "author": "阿彩",
                  "totalWordSize": "425万",
                  "totalChapterNum": "1455",
                  "lastChapterId": "476993",
                  "lastChapterName": "新书试读",
                  "clickNum": "2.36万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "古言",
                    "穿越",
                    "虐文",
                    "权谋",
                    "女强",
                    "宫斗"
                  ],
                  "bookTypeName": "穿越时空",
                  "bookScore": "7.7",
                  "wordSize": "425",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2.36",
                  "totalReadNumUnit": "万",
                  "protagonist": "",
                  "bookTypeThreeMap": {
                    "591": "穿越时空"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000028040/11000028040.jpg?t=1638187074636&imageView2/0/w/200/h/267",
                  "bookName": "丹武至尊",
                  "bookId": "11000028040",
                  "introduction": "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。五域，九境，十方天！顺我者昌！逆我者亡！",
                  "introductionList": [
                    "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。",
                    "五域，九境，十方天！",
                    "顺我者昌！逆我者亡！"
                  ],
                  "author": "顽石",
                  "totalWordSize": "211万",
                  "totalChapterNum": "868",
                  "lastChapterId": "10495565",
                  "lastChapterName": "第八百七十五章 赶到",
                  "clickNum": "5.8万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "热血",
                    "重生",
                    "至尊",
                    "武道"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.5",
                  "wordSize": "211",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5.8",
                  "totalReadNumUnit": "万",
                  "protagonist": ""
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010033714/11010033714.jpg?t=1627877269000&imageView2/0/w/200/h/267",
                  "bookName": "一念吞天",
                  "bookId": "11010033714",
                  "introduction": "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！",
                  "introductionList": [
                    "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！"
                  ],
                  "author": "铁背小强",
                  "totalWordSize": "769万",
                  "totalChapterNum": "3694",
                  "lastChapterId": "522503734",
                  "lastChapterName": "　第三千七百章 无差别进攻",
                  "clickNum": "9402",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.9",
                  "threeTypeTag": [
                    "武修",
                    "废柴流",
                    "传统玄幻",
                    "吞噬",
                    "玄幻1"
                  ],
                  "wordSize": "769",
                  "wordSizeUnit": "万",
                  "totalReadNum": "9402",
                  "totalReadNumUnit": "",
                  "protagonist": "林羽",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056463/11010056463.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "重生狂妻，大佬宠上天",
                  "bookId": "11010056463",
                  "introduction": "上一世的南景痴心错付，付出所有，换来一句你配吗？家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。一朝重生十八岁，强势来袭，打脸复仇虐渣渣！决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！她放火，他添柴。她虐渣，他护航。于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！大佬冷哼：“我愿意！”直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！",
                  "introductionList": [
                    "上一世的南景痴心错付，付出所有，换来一句你配吗？",
                    "家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。",
                    "一朝重生十八岁，强势来袭，打脸复仇虐渣渣！",
                    "决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！",
                    "她放火，他添柴。",
                    "她虐渣，他护航。",
                    "于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！",
                    "大佬冷哼：“我愿意！”",
                    "直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！"
                  ],
                  "author": "如沐清风",
                  "totalWordSize": "335万",
                  "totalChapterNum": "2949",
                  "lastChapterId": "522515376",
                  "lastChapterName": "第2949章",
                  "clickNum": "80万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "复仇",
                    "虐渣",
                    "甜宠",
                    "马甲"
                  ],
                  "bookTypeName": "重生异能",
                  "bookScore": "7.8",
                  "threeTypeTag": [
                    "短篇"
                  ],
                  "wordSize": "335",
                  "wordSizeUnit": "万",
                  "totalReadNum": "80",
                  "totalReadNumUnit": "万",
                  "protagonist": "南景,战北庭",
                  "bookTypeThreeMap": {
                    "579": "重生异能"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
                  "bookName": "少年风水师",
                  "bookId": "11010057627",
                  "introduction": "爷爷去世的时候，轰动全城......",
                  "introductionList": [
                    "爷爷去世的时候，轰动全城......"
                  ],
                  "author": "听澜本尊",
                  "totalWordSize": "360万",
                  "totalChapterNum": "2653",
                  "lastChapterId": "514869793",
                  "lastChapterName": "第2653章",
                  "clickNum": "472万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "金钱",
                    "风水",
                    "超能"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.2",
                  "threeTypeTag": [
                    "灵异",
                    "算命"
                  ],
                  "wordSize": "360",
                  "wordSizeUnit": "万",
                  "totalReadNum": "472",
                  "totalReadNumUnit": "万",
                  "protagonist": "吴峥,唐思佳",
                  "bookTypeThreeMap": {
                    "530": "现代武侠",
                    "606": "原创灵异",
                    "607": "悬疑推理"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030861/11010030861.jpg?t=1634609613707&imageView2/0/w/200/h/267",
                  "bookName": "超级赘婿",
                  "bookId": "11010030861",
                  "introduction": "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了...",
                  "introductionList": [
                    "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了..."
                  ],
                  "author": "黑夜的瞳",
                  "totalWordSize": "590万",
                  "totalChapterNum": "4459",
                  "lastChapterId": "522505477",
                  "lastChapterName": "第4459章",
                  "clickNum": "1347万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "王者",
                    "富豪",
                    "女婿",
                    "打脸"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.6",
                  "threeTypeTag": [
                    "复仇"
                  ],
                  "wordSize": "590",
                  "wordSizeUnit": "万",
                  "totalReadNum": "1347",
                  "totalReadNumUnit": "万",
                  "protagonist": "林阳,将小"
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072091/11000072091.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "无敌魔皇",
                  "bookId": "11000072091",
                  "introduction": "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？ 我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路",
                  "introductionList": [
                    "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路"
                  ],
                  "author": "千笔不落",
                  "totalWordSize": "17万",
                  "totalChapterNum": "62",
                  "lastChapterId": "541685693",
                  "lastChapterName": "第62章",
                  "clickNum": "5075",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "无敌魔皇",
                    "千笔不落",
                    "玄幻奇幻"
                  ],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.6",
                  "wordSize": "17",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5075",
                  "totalReadNumUnit": "",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057208/11010057208.jpg?t=1639731764926&imageView2/0/w/200/h/267",
                  "bookName": "爱你成瘾：偏执霸总的罪妻",
                  "bookId": "11010057208",
                  "introduction": "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。 她出狱后，却意外招惹上了易瑾离。 她跪在地上求他，“易瑾离，你放过我吧。” 他却笑笑，“阿姐，我永远都不会放过你。” 都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。 然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。” 她冷冷凝视着他，“那么你去死。”",
                  "introductionList": [
                    "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。",
                    "她出狱后，却意外招惹上了易瑾离。",
                    "她跪在地上求他，“易瑾离，你放过我吧。”",
                    "他却笑笑，“阿姐，我永远都不会放过你。”",
                    "都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。",
                    "然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。",
                    "多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。”",
                    "她冷冷凝视着他，“那么你去死。”"
                  ],
                  "author": "顾家小竹",
                  "totalWordSize": "402万",
                  "totalChapterNum": "3814",
                  "lastChapterId": "522482153",
                  "lastChapterName": "第3814章",
                  "clickNum": "312万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "破镜重圆",
                    "虐恋",
                    "先虐后宠",
                    "豪门恩怨"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "8.3",
                  "wordSize": "402",
                  "wordSizeUnit": "万",
                  "totalReadNum": "312",
                  "totalReadNumUnit": "万",
                  "protagonist": "凌依然,易瑾离",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                }
              ],
              "bookPackageId": 3
            },
            {
              "id": 15,
              "channelId": 4,
              "name": "女生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 3,
              "comment": "1",
              "bookInfos": [
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056959/11010056959.jpg?t=1637748336688&imageView2/0/w/200/h/267",
                  "bookName": "幸孕宠妻：战爷，晚安！",
                  "bookId": "11010056959",
                  "introduction": "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。  惹得战爷肺气炸裂。  就在所有人都以为她会死无葬身之地时。  隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”  “我有条件？”  “说！”  “不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”  “依你！”  路人倒地：这就是传说中的一物降一物？  战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！",
                  "introductionList": [
                    "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。",
                    "惹得战爷肺气炸裂。",
                    "就在所有人都以为她会死无葬身之地时。",
                    "隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”",
                    "“我有条件？”",
                    "“说！”",
                    "“不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”",
                    "“依你！”",
                    "路人倒地：这就是传说中的一物降一物？",
                    "战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！"
                  ],
                  "author": "言安",
                  "totalWordSize": "275万",
                  "totalChapterNum": "2472",
                  "lastChapterId": "541685663",
                  "lastChapterName": "第2472章",
                  "clickNum": "2245万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "萌宝",
                    "甜宠",
                    "豪门恩怨",
                    "先虐后宠"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.4",
                  "wordSize": "275",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2245",
                  "totalReadNumUnit": "万",
                  "protagonist": "洛诗涵,战寒爵",
                  "bookTypeThreeMap": {
                    "530": "现代武侠"
                  }
                }
              ],
              "bookPackageId": 6
            },
            {
              "id": 33,
              "channelId": 4,
              "name": "女生排行榜",
              "sex": 3,
              "type": 2,
              "channelListIds": "1,5",
              "status": 1,
              "sort": 4,
              "extend": {
                "rankIds": "8,10,11",
                "rankIdsName": "畅销榜,完本榜,新书榜"
              },
              "comment": "",
              "rankVos": [
                {
                  "rankId": 2,
                  "rankName": "畅销榜",
                  "bookInfos": [
                    {
                      "bookId": "11010036575",
                      "bookName": "傲世帝妃：爷你太嚣张",
                      "author": "小发发",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010036575/11010036575.jpg?t=1630896052113&imageView2/0/w/200/h/267",
                      "introduction": "“本尊就是修罗，杀人，自然不眨眼。”     一朝重生，她寻丹解毒，重新修炼。    废物？    呵，她神器在手，灵兽全收！废物？你见过废物杀人不眨眼，见过废物搅动风云变幻么？    她云暮挽要走的路，没有人能够阻拦，然而，修炼之路漫漫，总有小妖精想要勾走她。   于是乎，就出现了这么一幕——   “滚，该死的男人。”她气急。   “遵命，夫人。”某人坏笑。",
                      "clickNum": "17410",
                      "num": "608人气值",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      },
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010001620",
                      "bookName": "蚀骨宠婚：早安，老婆大人",
                      "author": "顾南舒",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010001620/11010001620.jpg?t=1638503707507&imageView2/0/w/200/h/267",
                      "introduction": "顾南舒知道，陆景琛爱过一个女人，且念念不忘，所以结婚六年，他都不曾碰过她分毫。可她不明白，他明明盼着她早点死，为什么当她意外车祸，生死一线的时候，他还要拽着她的手，狠声质问：“八年前你费尽心机嫁给我，又霸占了陆太太的位置整整六年，现在你不说一声就拋夫弃子……顾南舒，你的心怎么可以这么狠？！”",
                      "clickNum": "13360",
                      "num": "502人气值",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "7.5"
                    },
                    {
                      "bookId": "11000141663",
                      "bookName": "妃不好惹：战神王爷请接招",
                      "author": "悠小姐",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000141663/11000141663.jpg?t=1630896051823&imageView2/0/w/200/h/267",
                      "introduction": "要问宁昭穿越到墨朝，最大的收获是什么，那自然是收服了出名的直男六王爷。人前墨绝尘：“宁昭，你身为六王妃，就要有王妃的自觉 。你的眼睛只能看本王，你的心里也只能有本王的存在，你要是敢多看三哥一眼，本王就……”宁昭：“就怎样？”墨绝尘：“就给你休书一封。”人后宁昭收拾好包袱，便准备自请下堂回将军府。却不想堂堂六王爷，心甘情愿奉上兵符和王爷大印，跪在搓衣板上，一脸委屈：“媳妇，我错了，求原谅！”",
                      "clickNum": "22973",
                      "num": "496人气值",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010057963",
                      "bookName": "弃妃难逃：王爷，手下留情！",
                      "author": "尘烟",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057963/11010057963.jpg?t=1629964849820&imageView2/0/w/200/h/267",
                      "introduction": "风光无限的医药生物学三料博士后被个医闹一刀毙了命，落落魄魄穿越成了淮王府弃妃。丈夫不疼，小姑子不爱，还有绿茶等级十八级的白莲前女友。身怀绝世医术，救人被误会，不救人等着砍头，日子从未这么憋屈过！“咱俩三观不对、八字不合，勉强在一起不会幸福！”“女人，是你使诈逼迫本王娶的你，现在主意一变又要和离，有那么便宜的事吗？”",
                      "clickNum": "118366",
                      "num": "423人气值",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010055655",
                      "bookName": "权宠天下",
                      "author": "六月",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010055655/11010055655.jpg?t=1637049019437&imageView2/0/w/200/h/267",
                      "introduction": "又名《医妃倾天下》《医笑倾城》天才医学博士穿越成楚王弃妃，刚来就遇上重症伤者，她秉持医德去救治，却差点被打下冤狱。太上皇病危，她设法救治，被那可恨的毒王误会斥责，莫非真的是好人难做？这男人整日给她使绊子就算了，最不可忍的是他竟还要娶侧妃来恶心她！毒王冷冽道：“你何德何能让本王恨你？本王只是憎恶你，见你一眼都觉得恶心。”元卿凌笑容可掬地道：“我又何尝不嫌弃王爷呢？只是大家都是斯文人，不想撕破脸罢了。”",
                      "clickNum": "161202",
                      "num": "349人气值",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      },
                      "commentScore": "3.0"
                    },
                    {
                      "bookId": "11010052478",
                      "bookName": "丑女神医：农门太子妃",
                      "author": "穆兮兮",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010052478/11010052478.jpg?t=1631271496155&imageView2/0/w/200/h/267",
                      "introduction": "她是二十一世纪国际知名的中医大师一朝穿越，变成了一个家徒四壁，容貌可怖还惨遭退婚的苦命秧子亲戚极品，母亲软弱，生活步步维艰没关系，看她如何斗极品，立门户，发家致富、坐拥高富帅、走向人生巅峰！等等！她不过是好心救了一个人，不曾想这人竟是权倾朝野的王爷更让她没想到的是，她还被这妖孽霸道的王爷给缠上了！叶薇：“不要脸！”某王爷：“要脸做什么？要你就够了！”",
                      "clickNum": "5575",
                      "num": "336人气值",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      },
                      "commentScore": "8.3"
                    },
                    {
                      "bookId": "11010072536",
                      "bookName": "狂妻拽翻天：陆少，宠妻上瘾！",
                      "author": "城南一梦",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072536/11010072536.jpg?t=1631096999390&imageView2/0/w/200/h/267",
                      "introduction": "据说A市第一财阀陆执新婚妻子，医术超绝，能起死回生！陆执谦虚表示：一般一般，我夫人称第二，没人敢称第一。又据说，陆少夫人是顶级黑客，手段狠辣，经常逼得坏人跪地求放过！陆执宠溺一笑：我夫人身娇体贵，弱不禁风，是那些坏蛋素质太差，不经打。围观群众满脸黑线：您睁着眼睛说瞎话，不脸红吗？陆执剑眉一挑，气势迫人：嗯？谁有异议？请站出来。陆少夫人气定神闲：那么喜欢八卦。不想要舌头，可以捐给我做医学研究。众人瑟瑟发抖：呜呜，我们错了，再也不敢了。",
                      "clickNum": "63292",
                      "num": "311人气值",
                      "commentScore": "8.1"
                    },
                    {
                      "bookId": "11010073092",
                      "bookName": "八零宠婚：甜妻太旺夫",
                      "author": "飞猪猪",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073092/11010073092.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "重生回到退婚的那天，肖颖撒腿就往回跑。身后的痞气男子拦住她，冷笑：“怎么又不退了？”肖颖豪放大声：“因为我喜欢你！”向来脸皮比城墙厚的袁博破天荒红了脸。肖颖上辈子信错了一众攀高踩底的势利眼，重生后将他们一个个啪啪啪猛打脸。“老公，咱家山头下有好多矿！”“好，我去挖。”“老公，那支股票以后会疯涨！”“好，我去买。”耍混闹事的流氓头自结婚后，蛮劲都用在宠老婆和发家致富上，很快富甲一方。记者采访首富的成功秘诀，他笑答：“我老婆太太太太旺夫！”",
                      "clickNum": "44455",
                      "num": "306人气值",
                      "commentScore": "7.7"
                    },
                    {
                      "bookId": "11010056755",
                      "bookName": "萌宝一加一：爸比，请跪好",
                      "author": "猫夕",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056755/11010056755.jpg?t=1628820708841&imageView2/0/w/200/h/267",
                      "introduction": "十八岁那年，叶薇薇被父母逼迫，顶替孪生姐姐入狱，在狱中生下一对龙凤胎。五年后，她携女出狱，斗心机女白莲花，顺便救了一只软萌的小包子。从此，她不再是刑满释放人员，而是成为备受萧景寒宠爱的萧太太。“爸比，有个影后欺负妈咪。”小包子气红了脸。某BOSS立即打了一个电话，“敢欺负我的女人，全球封杀！”“爸比，有个帅帅的叔叔送妈咪花。”小萝莉满眼星星。某BOSS磨刀霍霍，“让他破产！”",
                      "clickNum": "97705",
                      "num": "284人气值",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010050854",
                      "bookName": "农女致富：山里汉宠妻无度",
                      "author": "一壶清酒",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010050854/11010050854.jpg?t=1634365661157&imageView2/0/w/200/h/267",
                      "introduction": "苏红珊一睁眼发现自己穿越到了古代，茅草屋，破院子，吃了上顿没下顿，还附赠了个壮汉子夫君和一对面黄肌瘦的儿女。       可谁能告诉她，她的人设为什么是恶毒继母？       努力改了人设，修复了母子关系，做美食，开酒楼，发家致富，把日子过的蒸蒸日上。       可为什么这好好的继子继女忽然摇身一变成了皇子公主？就连自家这壮汉子夫君都成了将军？       只是这将军也实在太虎，苏红珊忍无可忍大怒：“韩夜霖，你无耻！这日子没法过了！”韩夜霖：“娘子，一品夫人给你挣到了，为夫还得给自己挣个娃。”",
                      "clickNum": "2007892",
                      "num": "278人气值",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      },
                      "commentScore": "7.9"
                    }
                  ]
                },
                {
                  "rankId": 4,
                  "rankName": "完本榜",
                  "bookInfos": []
                },
                {
                  "rankId": 6,
                  "rankName": "新书榜",
                  "bookInfos": [
                    {
                      "bookId": "11010057627",
                      "bookName": "少年风水师",
                      "author": "听澜本尊",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
                      "introduction": "爷爷去世的时候，轰动全城......",
                      "clickNum": "4723149",
                      "num": "8.2分",
                      "bookTypeThreeMap": {
                        "530": "现代武侠",
                        "606": "原创灵异",
                        "607": "悬疑推理"
                      },
                      "commentScore": "8.2"
                    },
                    {
                      "bookId": "11010070562",
                      "bookName": "最豪赘婿",
                      "author": "会说话的香烟",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010070562/11010070562.jpg?t=1627453501544&imageView2/0/w/200/h/267",
                      "introduction": "我是他人眼中一无是处的废物；　　但倘若她要，我就可以给她整个世界；　　上门女婿，未必不能翱翔九天。",
                      "clickNum": "116777",
                      "num": "7.7分",
                      "commentScore": "7.7"
                    },
                    {
                      "bookId": "11000005941",
                      "bookName": "武灵天下",
                      "author": "颓废的烟121",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000005941/11000005941.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "带着异世界的吞天武灵，废物少爷绝地逆袭，一跃成为震惊大陆的武学天才！强大的武技信手拈来，强横的敌人踩在脚下。神秘的家族，未知的领域，一切的精彩，尽在武灵天下！",
                      "clickNum": "56536",
                      "num": "7.6分",
                      "bookTypeThreeMap": {
                        "513": "异世大陆"
                      },
                      "commentScore": "7.6"
                    },
                    {
                      "bookId": "11010029335",
                      "bookName": "我怎么这么有钱",
                      "author": "两耳就是菩提",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010029335/11010029335.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "我怎么这么有钱（又名：绝世大少、至尊人生，主角：陈歌）那天，全都在国外劳务的父母姐姐突然告诉自己，你是一个富二代，拥有万亿家产！陈歌：我居然是富二代？",
                      "clickNum": "3548818",
                      "num": "8.0分",
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010030755",
                      "bookName": "百倍修炼系统瞬间升级999",
                      "author": "三月雨",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030755/11010030755.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "同名《最强修炼少年》走一步，经验10*100倍，基础身法进阶为黄品身法！挥一拳，经验10*100倍，基础拳法进阶为黄品拳法！吃一颗强力丹，经验100*100倍，修为从淬体三重暴涨至淬体六重！看一眼剑痕石上的剑意，经验值100*100倍，成功领悟一级剑意！......姜辰...",
                      "clickNum": "314275",
                      "num": "8.0分",
                      "bookTypeThreeMap": {
                        "513": "异世大陆"
                      },
                      "commentScore": "8.0"
                    },
                    {
                      "bookId": "11010034487",
                      "bookName": "超级战神在都市",
                      "author": "我不是z",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010034487/11010034487.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "五年前，被陷害入狱！五年后，他荣耀归来，天下权势，尽握手中！我所失去的，终会千百倍的拿回来！",
                      "clickNum": "6887079",
                      "num": "8.2分",
                      "bookTypeThreeMap": {
                        "540": "古玩鉴宝",
                        "541": "明星仕商",
                        "545": "高手激战",
                        "581": "仙侠幻情",
                        "582": "妖精情缘"
                      },
                      "commentScore": "8.2"
                    },
                    {
                      "bookId": "11010058559",
                      "bookName": "天王殿水电费看激励刷卡就联发科路京东方看激励是空晶方科技了接口了快结束了复健科",
                      "author": "状元不出门离开的弗兰克家老师的看激励上来的凯乐科技SDK解封离开",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010058559/11010058559.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "六年浴血，王者归来，凭我七尺之躯，可拳打地痞恶霸，可护娇妻萌娃...",
                      "clickNum": "17110999",
                      "num": "7.6分",
                      "commentScore": "7.6"
                    },
                    {
                      "bookId": "11010067973",
                      "bookName": "女神的上门豪婿",
                      "author": "韦小鸨",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010067973/11010067973.jpg?t=1630655748860&imageView2/0/w/200/h/267",
                      "introduction": "我要分亿万家产，给女儿和老婆更好的生活！",
                      "clickNum": "168636",
                      "num": "7.8分",
                      "bookTypeThreeMap": {
                        "577": "总裁豪门"
                      },
                      "commentScore": "7.8"
                    },
                    {
                      "bookId": "11010074172",
                      "bookName": "泣血王座这个是书籍名称的长度测试可以看下是否有ui展示问题123",
                      "author": "玖月",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074172/11010074172.jpg?t=1629532328485&imageView2/0/w/200/h/267",
                      "introduction": "他本是苏家卑贱的佣人，因与三小姐相爱，私定终身而被赶出苏家，七年后他王者归来，拥无尽财富，挥百万雄兵，要让欺辱过他的人，付出百倍代价，要护佑妻女一生安宁，让她们群星环绕，做最光芒闪耀的女人！",
                      "clickNum": "944314",
                      "num": "7.7分",
                      "commentScore": "7.7"
                    },
                    {
                      "bookId": "11010075026",
                      "bookName": "绝世无双",
                      "author": "燕北",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010075026/11010075026.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "introduction": "战场浴血征战，女儿打来电话求救，一夜之间，三千世界顶级强者，齐赴大夏！他萧天策一生凄苦，身负血海深仇，女儿跟妻子就是他生命中的一道光。他这辈子绝对不允许自己的女儿跟妻子受到一丝一毫的伤害！",
                      "clickNum": "17204989",
                      "num": "8.1分",
                      "commentScore": "8.1"
                    }
                  ]
                }
              ],
              "rankSex": 2
            },
            {
              "id": 31,
              "channelId": 4,
              "name": "女生分类",
              "sex": 3,
              "type": 3,
              "channelListIds": "5",
              "status": 1,
              "sort": 7,
              "extend": {
                "classifyCode": "85,84,82",
                "classifyName": "古代言情,幻想言情,青春校园"
              },
              "comment": "",
              "bookTypeVos": [
                {
                  "classifyCode": 85,
                  "classifyName": "古代言情",
                  "books": [
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
                      "bookId": "11000001372",
                      "bookName": "凤凰错：替嫁弃妃",
                      "bookAlias": "",
                      "author": "阿彩",
                      "introduction": "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001372/11000001372.jpg?t=1668762117850&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "古言",
                        "穿越",
                        "虐文",
                        "权谋",
                        "女强",
                        "宫斗"
                      ],
                      "protagonist": "",
                      "hot": "2.36万",
                      "clickNum": "23648",
                      "updateTime": 1695715207000,
                      "totalWordSize": "4248628",
                      "scoreNum": "7.7",
                      "lastChapterId": "476993",
                      "lastChapterUtime": "2015-11-24 13:19:49",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      }
                    },
                    {
                      "bookId": "11010076675",
                      "bookName": "重生后我在摄政王府作威作福",
                      "bookAlias": "",
                      "author": "指尖似流年",
                      "introduction": "将门之后，阵法奇才，顾南幽纵横朝堂，征战沙场一生，从未想过会死在心爱之人手中，那一句功高盖主，父亲被斩，大哥被焚，顾府被屠，麾下将士惨遭活埋，让她受尽欺辱绝望而死。重活一世，她立下毒誓：荆棘之路，仇人不灭，永不回头，至死方休.却为曾想到，上一世，她最想要战胜的劲敌，以自己的方式，竟爱了她一生，也宠了她一生。“小病猫，你让本王等了两世，该如何补偿？”　“要不，以身相许？”",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076675/11010076675.jpg?t=1639129027270&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "顾南幽,俞氏",
                      "hot": "8108",
                      "clickNum": "8108",
                      "updateTime": 1695715195000,
                      "totalWordSize": "1035963",
                      "scoreNum": "8.0",
                      "lastChapterId": "522325855",
                      "lastChapterUtime": "2022-04-19 14:10:33",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      }
                    },
                    {
                      "bookId": "11010076214",
                      "bookName": "我们的合租往事",
                      "bookAlias": "",
                      "author": "夜晚小情感",
                      "introduction": "两人回去路上，我借着酒劲问她，刚才你说的是不是真的？她一脸迷糊，什么真的假的？我都急了：你跟他们说在跟我谈恋爱啊。她哈哈大笑。原来她知道我在说什么，故意逗我玩。她说我年纪比你大四五岁，你不介意啊？我说我不介意啊，不是女大三抱金砖么？我当抱一块半，虽然重点，但不也更值钱么？她沉默了片刻，叹了口气：可惜......",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076214/11010076214.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "陈旭",
                      "hot": "9528",
                      "clickNum": "9528",
                      "updateTime": 1695715193000,
                      "totalWordSize": "1334739",
                      "tagV3": [],
                      "scoreNum": "7.9",
                      "lastChapterId": "541720092",
                      "lastChapterUtime": "2023-07-13 14:29:43",
                      "bookTypeThreeMap": {
                        "588": "宫斗宅斗"
                      }
                    },
                    {
                      "bookId": "11010076149",
                      "bookName": "重生嫡女狂炸了！",
                      "bookAlias": "",
                      "author": "十一年",
                      "introduction": "大夏京都有两女名扬天下，一个是丞相府大小姐秦臻，才貌双绝，气质出众，是贵族少女中的标杆领袖，另一个是大将军府嫡女君绯色，声名狼藉，嚣张跋扈，仗着父亲军功赫赫，恃强凌弱，不知调戏了多少良家美男。秦臻被庶妹和未婚夫联手害死，而君绯色因为偷看玄王洗澡，被一掌劈死。秦臻睁开眼发现，她成了君绯色......",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010076149/11010076149.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "逆袭",
                        "宅斗",
                        "嫡女",
                        "甜宠"
                      ],
                      "protagonist": "秦臻,君绯色,萧凤栖",
                      "hot": "370万",
                      "clickNum": "3704982",
                      "updateTime": 1695715193000,
                      "totalWordSize": "2165395",
                      "scoreNum": "8.4",
                      "lastChapterId": "519966097",
                      "lastChapterUtime": "2022-03-15 14:10:41",
                      "bookTypeThreeMap": {
                        "587": "重生逆袭"
                      }
                    },
                    {
                      "bookId": "11010074740",
                      "bookName": "空间在手：捡个王爷来种田",
                      "bookAlias": "",
                      "author": "凌晨",
                      "introduction": "作为现在古医世家掌门人的宋晨，一睁眼成了农家傻女！一无所有还欠债？宋晨表示遇到事情不要慌，先去深山走一趟。还有逆天金手指大开，从此人生开挂，在致富路上狂奔。极品一个接一个？那就斗呗，斗得欢欢喜喜。什么！手欠救的野男人竟然赖上门？这是什么命！！！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074740/11010074740.jpg?t=1628820710963&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "农女",
                        "傻女",
                        "金手指",
                        "医术",
                        "致富"
                      ],
                      "protagonist": "宋晨,苍修玄",
                      "hot": "5.45万",
                      "clickNum": "54471",
                      "updateTime": 1696663236000,
                      "totalWordSize": "3575022",
                      "scoreNum": "7.5",
                      "lastChapterId": "517179576",
                      "lastChapterUtime": "2022-02-01 02:10:27",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      }
                    },
                    {
                      "bookId": "11010074116",
                      "bookName": "爆笑穿越：王妃是朵白莲花",
                      "bookAlias": "",
                      "author": "柳七白子",
                      "introduction": "战神燕王说，我家王妃身娇体弱，善良温柔，你们都不要欺负她！被她坑的有苦难言的众人，你说这话，良心不会痛？登基之后的燕王又说，我家皇后的端庄贤惠，朕独宠六宫，众妃们做个摆设就好！铩羽而归的众妃们，皇后的手段比她们高百倍，争个屁呀？　　终于，四海升平，海晏河清，燕王含情脉脉：“皇后，咱们好像还缺个太子呢！”",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010074116/11010074116.jpg?t=1634449185735&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "戏精",
                        "穿越",
                        "王妃",
                        "炮灰",
                        "权谋"
                      ],
                      "protagonist": "萧天爱,赵无疆",
                      "hot": "5.33万",
                      "clickNum": "53326",
                      "updateTime": 1695715193000,
                      "totalWordSize": "3455340",
                      "tagV3": [
                        "穿越",
                        "皇后",
                        "权谋"
                      ],
                      "scoreNum": "8.1",
                      "lastChapterId": "514433425",
                      "lastChapterUtime": "2021-12-17 00:10:28",
                      "bookTypeThreeMap": {
                        "585": "古色古香"
                      }
                    },
                    {
                      "bookId": "11010073476",
                      "bookName": "肥婆翻身：山里相公轻点宠",
                      "bookAlias": "",
                      "author": "清渠明月",
                      "introduction": "一睁眼，顾明霜发现自己成了惨遭退婚的乡下死肥婆。眼看家徒四壁，父亲病重在床，母亲懦弱无能，一家子亲戚鸡犬不宁，人都道顾老三家完了。可谁知——那个傻子肥婆顾明霜却领着全家开荒种地，狩猎采药，开铺子卖美食......眼看着日子越过越好，有人又道：还不是死肥婆没人要！隔天顾明霜就捡了个男人回来嫁了。原以为是个穷小子，谁想男人摇身一变成了权势滔天的大将军，带着她一路荣宠，亮瞎众人狗眼。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010073476/11010073476.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "种田",
                        "美食",
                        "逆袭",
                        "致富",
                        "肥婆"
                      ],
                      "protagonist": "顾明霜,苏衡景",
                      "hot": "6万",
                      "clickNum": "59991",
                      "updateTime": 1695715195000,
                      "totalWordSize": "2124100",
                      "scoreNum": "8.1",
                      "lastChapterId": "526336480",
                      "lastChapterUtime": "2022-06-29 10:40:29",
                      "bookTypeThreeMap": {
                        "590": "种田经商"
                      }
                    },
                    {
                      "bookId": "11010072768",
                      "bookName": "逆天双宝：神医娘亲又掉马了",
                      "bookAlias": "",
                      "author": "美萌萌",
                      "introduction": "她是南离国月家嫡女，被亲妹陷害失贞后剖腹取子！当23世纪的玄门门主穿越而来，自此有怨报怨，有仇报仇！她身怀至宝，契约灵兽，活死人，肉白骨，一手精湛的医术艳绝天下。斗渣男，杀恶女，带着儿砸活得肆意妄为。直到某一天，突然蹦出一个带娃的妖孽男人。“女人，你敢偷走本尊一个儿子！”她怒斥：“谁偷谁的？先弄清楚！”他邪肆一笑：“无妨，再生一个，一笔勾销。”",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072768/11010072768.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "萌宝",
                        "穿越",
                        "嫡女",
                        "撩汉",
                        "尊上"
                      ],
                      "protagonist": "月轻尘,龙司绝",
                      "hot": "17万",
                      "clickNum": "171571",
                      "updateTime": 1695715193000,
                      "totalWordSize": "3875808",
                      "scoreNum": "8.3",
                      "lastChapterId": "522506402",
                      "lastChapterUtime": "2022-04-20 23:40:26",
                      "bookTypeThreeMap": {
                        "591": "穿越时空"
                      }
                    },
                    {
                      "bookId": "11010072511",
                      "bookName": "医武龙王",
                      "bookAlias": "",
                      "author": "城南一梦",
                      "introduction": "他是都市最底层的那一个，却无意中觉醒龙魂，逆袭成王！从此，他左手医，右手武，横扫所有人的轻视和嘲笑，更赢得娇妻芳心，站在这世间的巅峰！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010072511/11010072511.jpg?t=1631096999369&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "神医",
                        "武道",
                        "战神"
                      ],
                      "protagonist": "江辰,叶静怡",
                      "hot": "11万",
                      "clickNum": "108938",
                      "updateTime": 1695715195000,
                      "totalWordSize": "10887729",
                      "scoreNum": "7.6",
                      "lastChapterId": "522408453",
                      "lastChapterUtime": "2022-04-20 11:42:04",
                      "bookTypeThreeMap": {
                        "585": "古色古香"
                      }
                    }
                  ]
                },
                {
                  "classifyCode": 84,
                  "classifyName": "幻想言情",
                  "books": [
                    {
                      "bookId": "11010034487",
                      "bookName": "超级战神在都市",
                      "bookAlias": "",
                      "author": "我不是z",
                      "introduction": "五年前，被陷害入狱！五年后，他荣耀归来，天下权势，尽握手中！我所失去的，终会千百倍的拿回来！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010034487/11010034487.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "复仇",
                        "王者",
                        "战神"
                      ],
                      "protagonist": "林北,苏婉潇潇湾湾潇潇,林北1",
                      "hot": "689万",
                      "clickNum": "6887079",
                      "updateTime": 1695715187000,
                      "totalWordSize": "5410701",
                      "tagV3": [
                        "战神",
                        "姐姐",
                        "复仇"
                      ],
                      "scoreNum": "8.2",
                      "lastChapterId": "522507755",
                      "lastChapterUtime": "2022-04-21 00:10:02",
                      "bookTypeThreeMap": {
                        "540": "古玩鉴宝",
                        "541": "明星仕商",
                        "545": "高手激战",
                        "581": "仙侠幻情",
                        "582": "妖精情缘"
                      }
                    },
                    {
                      "bookId": "11000102870",
                      "bookName": "King001",
                      "bookAlias": "",
                      "author": "",
                      "introduction": "",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000102870/11000102870.jpg?t=1676968009567&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "AAAA",
                      "hot": "5000",
                      "clickNum": "5000",
                      "updateTime": 1695715197000,
                      "totalWordSize": "11410",
                      "scoreNum": "7.5",
                      "lastChapterId": "528782696",
                      "lastChapterUtime": "2023-02-20 15:20:08",
                      "bookTypeThreeMap": {
                        "581": "仙侠幻情"
                      }
                    },
                    {
                      "bookId": "11000102822",
                      "bookName": "质检通过5000",
                      "bookAlias": "质检通过5000",
                      "author": "",
                      "introduction": "",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000102822/11000102822.jpg?t=1676947553752&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "",
                      "hot": "5000",
                      "clickNum": "5000",
                      "updateTime": 1695715197000,
                      "totalWordSize": "15936",
                      "tagV3": [
                        "大叔"
                      ],
                      "scoreNum": "7.7",
                      "lastChapterId": "528747398",
                      "lastChapterUtime": "2023-02-16 13:44:00",
                      "bookTypeThreeMap": {
                        "581": "仙侠幻情"
                      }
                    },
                    {
                      "bookId": "11000072090",
                      "bookName": "三生劫：无良上神爱上我",
                      "bookAlias": "",
                      "author": "糯米团子220",
                      "introduction": "一个是渊华上神，掌管人间人类的情感与转世，在天庭总是高人一等，高冷的帅哥一枚，无数小仙倾心相待，但是念念不忘，不是必有回响，不好意思，大神从来不看一眼。一个是新生小仙，从小生活坎坷，拉去历练，化身男装，到处捣蛋，说是个女子也不信，不巧被情敌揭穿身份，却是麻雀变凤凰，从此人生走向了光辉，无数男仙投怀送报，不好意思，因为某些事情被贬下凡了。一个是掌管整个山间圣灵的上神凤麟，位居高位，帅哥一枚，与渊华是好兄弟，却是不想与最好的兄弟爱上了同一个小仙，这场恩怨，究竟是应该何去何从，四世流转，能否与倾心之人倾心到老。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072090/11000072090.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "三生劫：无良上神爱上我",
                        "糯米团子220",
                        "女生玄幻\r\n"
                      ],
                      "protagonist": "",
                      "hot": "5060",
                      "clickNum": "5060",
                      "updateTime": 1695715181000,
                      "totalWordSize": "437732",
                      "tagV3": [
                        "摄政王"
                      ],
                      "scoreNum": "7.5",
                      "lastChapterId": "10042480",
                      "lastChapterUtime": "2016-12-12 19:06:02",
                      "bookTypeThreeMap": {
                        "581": "仙侠幻情"
                      }
                    },
                    {
                      "bookId": "11000072076",
                      "bookName": "惹上吸血鬼大人",
                      "bookAlias": "",
                      "author": "沼泽鸢尾",
                      "introduction": "她缓缓张开眼睛。 天空悬浮着黑褐色羽毛状的东东，头顶很远的地方之间黑蒙蒙一片，隐隐透出光，早已不见了以前的青天白日。 空气中弥漫着一股怪味，是尸臭……",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072076/11000072076.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "穿越",
                        "爽文",
                        "恐怖",
                        "异世",
                        "幻想",
                        "诡异"
                      ],
                      "protagonist": "",
                      "hot": "5000",
                      "clickNum": "5000",
                      "updateTime": 1695715181000,
                      "totalWordSize": "247392",
                      "tagV3": [
                        "摄政王"
                      ],
                      "scoreNum": "8.1",
                      "lastChapterId": "10038611",
                      "lastChapterUtime": "2016-12-12 19:02:42",
                      "bookTypeThreeMap": {
                        "584": "魔法异界"
                      }
                    },
                    {
                      "bookId": "11000071997",
                      "bookName": "奇梦缘",
                      "author": "王三先",
                      "introduction": "机缘巧合，“我”获得了外星人赋予的神奇功能，可以遨游宇宙探秘外星生物，也可以拯救地球与人类......",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071997/11000071997.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "奇梦缘",
                        "王三先",
                        "女生科幻"
                      ],
                      "hot": "5002",
                      "clickNum": "5002",
                      "updateTime": 1695715181000,
                      "totalWordSize": "84180",
                      "scoreNum": "8.2",
                      "lastChapterId": "10011132",
                      "lastChapterUtime": "2016-12-12 18:16:19",
                      "bookTypeThreeMap": {
                        "584": "魔法异界"
                      }
                    },
                    {
                      "bookId": "11000071642",
                      "bookName": "妖主降临之夫人请小心",
                      "author": "鹿鹿芦尔",
                      "introduction": "叶曦看着不远处顶着一副好皮囊到处招蜂引蝶的某人，很无语的朝天翻了个大白眼。       自从解开那个自称为妖主的男人的封印之后，不知为何，各路妖魔鬼怪都开始缠上了她，身边灵异诡异的事接连不断的发生，千年血藤，梦中梦的无限循环，暗婴，古墓里千年不老不死的女人，还有突然冒出来的自称为天师的胡小花…简直没有一天安宁的日子。本以为只是恶鬼缠身，但事情似乎并没有那么简单。镇魂石是什么？法则又是什么？那些东西和自己有什么关系，为什么所有人都要找上她？还有那个所谓的妖主竟然是传说中的神兽麒麟？！那既然这么厉害，当初为什么还会被封印呢？       心中的疑虑越来越...",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071642/11000071642.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "妖主降临之夫人请小心",
                        "鹿鹿芦尔",
                        "女生玄幻",
                        "女强",
                        "言情",
                        "爱情"
                      ],
                      "hot": "5004",
                      "clickNum": "5004",
                      "updateTime": 1695715179000,
                      "totalWordSize": "41788",
                      "scoreNum": "7.7",
                      "lastChapterId": "10081160",
                      "lastChapterUtime": "2016-12-17 00:27:15",
                      "bookTypeThreeMap": {
                        "582": "妖精情缘"
                      }
                    },
                    {
                      "bookId": "11000071620",
                      "bookName": "废材逆袭修真记",
                      "bookAlias": "",
                      "author": "晏迟",
                      "introduction": "想让她做炉鼎，没门！哪怕是废材，她的命运也只会掌握自己手中！怀揣仙宝逆天改命，看她将一众天骄踩在脚下，肆意人生！勾勾小手指，上界之王也逃不出她的五指山……",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071620/11000071620.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "爽文",
                        "逆袭",
                        "古言",
                        "修真",
                        "废柴"
                      ],
                      "protagonist": "",
                      "hot": "5007",
                      "clickNum": "5007",
                      "updateTime": 1695715179000,
                      "totalWordSize": "1515215",
                      "tagV3": [],
                      "scoreNum": "7.5",
                      "lastChapterId": "9921365",
                      "lastChapterUtime": "2016-11-29 23:25:10",
                      "bookTypeThreeMap": {
                        "581": "仙侠幻情"
                      }
                    },
                    {
                      "bookId": "11000071613",
                      "bookName": "种一个夫君",
                      "bookAlias": "",
                      "author": "云海",
                      "introduction": "家贫难嫁，禾苗悄悄在地里埋下一颗种子，种出一个夫君。夫君很会来事儿，他上知天文地理，下通鱼虫百兽，懂挖坑埋人，懂种田养鸡，还懂治病疗伤。真是居家旅行必备之神器。“苗苗，你在干什么？”夫君问。“种个儿子。”禾苗笑眯眯的回答，“也许，你喜欢种个女儿？”夫君略心塞，把自己往土里一埋，眼不见为净。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071613/11000071613.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "腹黑",
                        "养成",
                        "轻松",
                        "天才",
                        "幻想",
                        "家长里短"
                      ],
                      "protagonist": "",
                      "hot": "5001",
                      "clickNum": "5001",
                      "updateTime": 1695715180000,
                      "totalWordSize": "1343706",
                      "tagV3": [],
                      "scoreNum": "7.8",
                      "lastChapterId": "10485901",
                      "lastChapterUtime": "2017-01-09 00:03:15",
                      "bookTypeThreeMap": {
                        "582": "妖精情缘"
                      }
                    },
                    {
                      "bookId": "11000071606",
                      "bookName": "神灵之气",
                      "bookAlias": "",
                      "author": "阿束",
                      "introduction": "一个人间普通的小姑娘身上为什么会有神灵之气？神灵之气乃神的灵气之聚集。但她身上的神灵之气又为何这么微弱，像是被一股强大的力量压制，一旦冲破阻碍，即刻会产生巨大的神力。魔界君主到底跟她是什么关系？五行相生相克又到底是什么意思？《上古密卷》的封印被打开，十大魔兽危害世间，到底谁才是终极大boss？具有神灵之气的她到底是人？是魔？还是神？面临最后的选择，她又该何去何从？",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071606/11000071606.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "神灵之气",
                        "阿束",
                        "玄幻"
                      ],
                      "protagonist": "",
                      "hot": "5014",
                      "clickNum": "5014",
                      "updateTime": 1695715180000,
                      "totalWordSize": "439762",
                      "tagV3": [],
                      "scoreNum": "8.1",
                      "lastChapterId": "9915247",
                      "lastChapterUtime": "2016-11-29 23:21:49",
                      "bookTypeThreeMap": {
                        "584": "魔法异界"
                      }
                    }
                  ]
                },
                {
                  "classifyCode": 82,
                  "classifyName": "青春校园",
                  "books": [
                    {
                      "bookId": "11000103412",
                      "bookName": "我欲封天",
                      "bookAlias": "",
                      "author": "测试22",
                      "introduction": "11232",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000103412/11000103412.jpg?t=1694176249044&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "小A",
                      "hot": "5000",
                      "clickNum": "5000",
                      "updateTime": 1696860790000,
                      "totalWordSize": "18990573",
                      "tagV3": [
                        "小妾"
                      ],
                      "scoreNum": "7.7",
                      "lastChapterId": "541957386",
                      "lastChapterUtime": "2023-09-08 20:30:49",
                      "bookTypeThreeMap": {
                        "575": "贵族学院"
                      }
                    },
                    {
                      "bookId": "11000103115",
                      "bookName": "退婚：我的七个未婚妻超护短",
                      "bookAlias": "",
                      "author": "测试",
                      "introduction": "师父把叶秦直接踹出师门，甩手给了七张婚书！女人只会影响出剑速度。叶秦踏上退婚路，却被更多的女人缠上了！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000103115/11000103115.jpg?t=1675944807910&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "",
                      "hot": "5000",
                      "clickNum": "5000",
                      "updateTime": 1695784182000,
                      "totalWordSize": "374717",
                      "tagV3": [
                        "吃货"
                      ],
                      "scoreNum": "8.0",
                      "lastChapterId": "541714339",
                      "lastChapterUtime": "2023-06-15 14:21:57",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    },
                    {
                      "bookId": "11000103013",
                      "bookName": "重生后我母凭子贵上位了",
                      "bookAlias": "",
                      "author": "夜妆",
                      "introduction": "身为尚书府嫡女的慕卿歌，前世被渣男贱女算计失身怀孕，落得个名声尽毁在生子时血崩而死的凄惨下场。重活一世，她定要将前世所受之苦十倍百倍的还给他们！渣男？杀之！让他也尝尝什么叫人为刀俎我为鱼肉的滋味！庶妹？辱之！让她也体会体会锥心刺骨被万人欺辱践踏的痛苦！继母？斗之！让她也知道知道郎心似铁寒夜寂寥的感觉！可没想到一重生却竟然就栽在了那疯疯癫癫的宁王手中。宁王的疯竟然是装疯？还将她宠成了人人艳羡的对象？不仅如此，外祖父重获圣宠？舅舅也屡立奇功？娘亲传授她制香技艺，让她成了首富？",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000103013/11000103013.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "protagonist": "",
                      "hot": "5000",
                      "clickNum": "5000",
                      "updateTime": 1695715197000,
                      "totalWordSize": "1090223",
                      "tagV3": [
                        "大叔"
                      ],
                      "scoreNum": "7.8",
                      "lastChapterId": "528820508",
                      "lastChapterUtime": "2023-03-07 11:50:24",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    },
                    {
                      "bookId": "11000072324",
                      "bookName": "二胎萌纪",
                      "author": "雪之沫",
                      "introduction": "“唐芯同学，让你家长到学校来一趟。”隔天，她就抱着八个月大的舅舅来报道。“唐芯同学，我妹妹萌的不要不要。要不，咋们定个娃娃亲吧？”想也不想，她就把未出生的弟弟，卖给某土豪做上门女婿——美其名曰为父母减轻，经济压力。“唐芯，我和妹妹都是天枰座，你弟弟是什么星座？”几小时后，她含泪抬头望天：“原来，父母是处女座根本不是事儿，最惨的莫过于她还有个处女座弟弟。”“唐芯同学，请简单描述一下你的课余生活。”自从有了弟弟，她的生活好的不得了。每天吃饭、睡觉、打弟弟——完美！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072324/11000072324.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "腹黑",
                        "养成",
                        "契约",
                        "爆笑",
                        "青春",
                        "宝宝"
                      ],
                      "hot": "5001",
                      "clickNum": "5001",
                      "updateTime": 1695715185000,
                      "totalWordSize": "774843",
                      "scoreNum": "7.9",
                      "lastChapterId": "10140545",
                      "lastChapterUtime": "2016-12-20 18:34:20",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    },
                    {
                      "bookId": "11000072010",
                      "bookName": "纸鸢",
                      "author": "伊人",
                      "introduction": "我开始经历青春时光，走自己的青春路了，可是我彷徨了，受伤了，迟疑了。大舅那代人也有他们的青春，写大舅的青春，在物质贫乏的年代，他的青春，穿插我的青春小故事，两个不同时空的“同龄人”通过对话，交流着，体味着，互相鼓励着，就这样我成熟了，也懂得了很多，收获了很多，未来的日子，我会成为“妻子”“母亲”，人生的路更加明晰。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072010/11000072010.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "纸鸢",
                        "伊人",
                        "青春\r\n\r\n"
                      ],
                      "hot": "5000",
                      "clickNum": "5000",
                      "updateTime": 1695715181000,
                      "totalWordSize": "15363",
                      "scoreNum": "7.5",
                      "lastChapterId": "10013300",
                      "lastChapterUtime": "2016-12-12 18:39:10",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    },
                    {
                      "bookId": "11000071641",
                      "bookName": "逆青春",
                      "author": "武渣",
                      "introduction": "姐姐是个白富美，经常欺负我……直到有一天，我发现了她不为人知的秘密……青春的路上，从此逆行！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071641/11000071641.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "逆青春",
                        "武渣",
                        "青春"
                      ],
                      "hot": "5112",
                      "clickNum": "5112",
                      "updateTime": 1695715180000,
                      "totalWordSize": "426024",
                      "scoreNum": "7.6",
                      "lastChapterId": "9935590",
                      "lastChapterUtime": "2016-12-02 09:10:57",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    },
                    {
                      "bookId": "11000071587",
                      "bookName": "她和他的一次演出",
                      "author": "霓简一",
                      "introduction": "大一新生楚佳桃被英俊而沉默的学长萧琦吸引，误打误撞地加入了萧琦所在的“话剧社”。外表完美无缺的萧琦，实际却是从小被奶奶带大、内心敏感，才华横溢的男孩。他在话剧社与学生会之间纠结摇摆，不确定自己未来的方向。楚佳桃与萧琦因话剧社活动渐渐接近的同时，楚又与萧琦的室友，学生会体育部部长，备受欢迎的学生会体育部部长陈时宇邂逅，后者对楚佳桃一见钟情。可看似阳光帅气的陈时宇，却又有着不为人知的秘密……爱情、友谊、梦想、挫折、泪水、成长，时而甜蜜时而忧伤的青春校园恋曲急展开！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071587/11000071587.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "腹黑",
                        "契约",
                        "轻松",
                        "养成",
                        "青春",
                        "校草"
                      ],
                      "hot": "5001",
                      "clickNum": "5001",
                      "updateTime": 1695715179000,
                      "totalWordSize": "664164",
                      "scoreNum": "8.2",
                      "lastChapterId": "10485900",
                      "lastChapterUtime": "2017-01-09 00:03:11",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    },
                    {
                      "bookId": "11000071585",
                      "bookName": "慕慕若子",
                      "author": "冰糖桔",
                      "introduction": "李若子自高一遇见慕悠远开始，从校园到社会，从曾经到如今，一步一步，是他教会自己，爱自己，也爱别人。愿你生命中终有那么一个人出现，抚平你所有的不安和伤痛，带给你幸福和温暖。他改变你，也为你改变。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071585/11000071585.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "1",
                      "statusCn": "完本",
                      "tag": [
                        "养成",
                        "契约",
                        "轻松",
                        "青春",
                        "古灵精怪",
                        "校草"
                      ],
                      "hot": "5002",
                      "clickNum": "5002",
                      "updateTime": 1695715179000,
                      "totalWordSize": "405925",
                      "scoreNum": "8.0",
                      "lastChapterId": "9909436",
                      "lastChapterUtime": "2016-11-29 23:17:23",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    },
                    {
                      "bookId": "11000071579",
                      "bookName": "误惹恶魔校草",
                      "author": "十泉九美",
                      "introduction": "他是人人仰望的名门少爷，她是寄人篱下的落魄女生；一封错送的情书，害她变成全校公敌，还面临被他开除的危机！她只能和他杠上，一番争斗，他收回她的开除令，却勒令她当他跟班随从！恶魔如他，竟还想把她的人生全部掌控！做梦！看谁能笑到最后占上风！就算当众表白也没用，她才不是任他捏圆捏扁的小女佣！",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000071579/11000071579.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "误惹恶魔校草",
                        "十泉九美",
                        "校园"
                      ],
                      "hot": "5001",
                      "clickNum": "5001",
                      "updateTime": 1695715179000,
                      "totalWordSize": "330792",
                      "scoreNum": "8.4",
                      "lastChapterId": "9907605",
                      "lastChapterUtime": "2016-11-29 23:16:41",
                      "bookTypeThreeMap": {
                        "575": "贵族学院"
                      }
                    },
                    {
                      "bookId": "11000050691",
                      "bookName": "无赖校草：求婚恶作剧",
                      "author": "千年",
                      "introduction": "她本来没招他没惹他的做她的顾家千金大小姐，偏偏他忽然莫名其妙的跑来绑架她，而且！理由竟然是因为要和她结婚！拜托……可是她连恋爱都没有恋过，怎么结婚嘛。不会恋爱？没关系，本少教你！鸡飞狗跳的樱华学院生涯在顾美含迷茫的人生之中拉开了序幕。她和他，究竟是友达至上，恋人未满，还是终能甜蜜幸福？青春系列文之，当天然小呆女，遇到帅气单线男。请关注其它系列文：《贵族恶少：一不小心爱上你》、《假面王子与夺心公主》、《贫穷贵公子：不良校草别我》、《追爱大作战：桃花王子赖上门》。感谢恰似一江绮旎同学的封面制作。",
                      "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000050691/11000050691.jpg?t=202101010000&imageView2/0/w/200/h/267",
                      "status": "0",
                      "statusCn": "连载",
                      "tag": [
                        "无赖校草：求婚恶作剧",
                        "千年",
                        "言情"
                      ],
                      "hot": "5081",
                      "clickNum": "5081",
                      "updateTime": 1695715133000,
                      "totalWordSize": "278990",
                      "scoreNum": "7.6",
                      "lastChapterId": "6316925",
                      "lastChapterUtime": "2016-11-15 06:55:25",
                      "bookTypeThreeMap": {
                        "576": "青春纯爱"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "code": 6,
          "seoColumnManageVos": [
            {
              "id": 12,
              "channelId": 4,
              "name": "男生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 1,
              "comment": "男生精选",
              "bookInfos": [
                {
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
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001460/11000001460.jpg?t=1640336747840&imageView2/0/w/200/h/267",
                  "bookName": "冷少的替身妻",
                  "bookId": "11000001460",
                  "introduction": "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……",
                  "introductionList": [
                    "“从今天起，你就是我冷某人的妻子，怎么？不想履行妻子的义务？”冷眸盯着面前缩在床边的新婚妻子。“你不过是我花钱买来的，还想守身如玉？”他是黑白两道闻风丧胆的枭雄，冷酷无情，人人口中的恶魔。她是秦家的养女，为了一场债务，她成了真正秦家掌上明珠的替身。一场欢爱，一场缠绵，心渐渐沉沦，到底能不能守住这份用钱买来的婚姻……"
                  ],
                  "author": "汐汐 晚晴",
                  "totalWordSize": "271万",
                  "totalChapterNum": "1181",
                  "lastChapterId": "551800",
                  "lastChapterName": "念念情深：亲自戴上那枚戒指",
                  "clickNum": "17万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "总裁",
                    "现言",
                    "豪门",
                    "虐文",
                    "虐恋",
                    "邪魅"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "7.5",
                  "wordSize": "271",
                  "wordSizeUnit": "万",
                  "totalReadNum": "17",
                  "totalReadNumUnit": "万",
                  "protagonist": "秦雅滢,冷慕宸",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000001372/11000001372.jpg?t=1668762117850&imageView2/0/w/200/h/267",
                  "bookName": "凤凰错：替嫁弃妃",
                  "bookId": "11000001372",
                  "introduction": "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……",
                  "introductionList": [
                    "试问女子的容颜能有多值钱？她是先帝亲点的皇后，却在颜容半毁时被一纸圣旨从后变妃。一旨双嫁，绝色的妹妹代她入宫为后，而她远嫁给那少年封王，权倾朝野，冷酷残暴的雪亲王……新婚夜，他说她的容颜只配呆在马厩里，虽有王妃之名却只能任人奚落…他中毒命在旦夕，她不顾一切救他，只为让自己活有尊严……以妻子这名，行幕僚之实她伴在他身边，可在滚滚黄河之上他却冷眼看她跌入那万劫不复之地……死而不灭，灵魂的不甘让她得以重生，世间男儿皆爱貌，那么这一世东方宁心定要惊才绝艳，这一世东方宁心定要荣耀满光华，这一世定东方宁心要凌驾九霄之上……"
                  ],
                  "author": "阿彩",
                  "totalWordSize": "425万",
                  "totalChapterNum": "1455",
                  "lastChapterId": "476993",
                  "lastChapterName": "新书试读",
                  "clickNum": "2.36万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "古言",
                    "穿越",
                    "虐文",
                    "权谋",
                    "女强",
                    "宫斗"
                  ],
                  "bookTypeName": "穿越时空",
                  "bookScore": "7.7",
                  "wordSize": "425",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2.36",
                  "totalReadNumUnit": "万",
                  "protagonist": "",
                  "bookTypeThreeMap": {
                    "591": "穿越时空"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000028040/11000028040.jpg?t=1638187074636&imageView2/0/w/200/h/267",
                  "bookName": "丹武至尊",
                  "bookId": "11000028040",
                  "introduction": "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。五域，九境，十方天！顺我者昌！逆我者亡！",
                  "introductionList": [
                    "丹武鬼才宁越，遭人围攻陨落天魔之巅，重生在宁家大少身上，从此踏上一条逆天之路。",
                    "五域，九境，十方天！",
                    "顺我者昌！逆我者亡！"
                  ],
                  "author": "顽石",
                  "totalWordSize": "211万",
                  "totalChapterNum": "868",
                  "lastChapterId": "10495565",
                  "lastChapterName": "第八百七十五章 赶到",
                  "clickNum": "5.8万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "热血",
                    "重生",
                    "至尊",
                    "武道"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.5",
                  "wordSize": "211",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5.8",
                  "totalReadNumUnit": "万",
                  "protagonist": ""
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010033714/11010033714.jpg?t=1627877269000&imageView2/0/w/200/h/267",
                  "bookName": "一念吞天",
                  "bookId": "11010033714",
                  "introduction": "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！",
                  "introductionList": [
                    "一枚神秘黑玉，一段被历史尘封的记忆。一名少年，一条跌宕起伏的成神之路。为了寻找身世之谜，少年横空出世，踏足诸天万界，碾压四方天骄，睥睨天下群雄。古语言，一念成神，一念成魔。而我林羽，一念可吞天噬地！"
                  ],
                  "author": "铁背小强",
                  "totalWordSize": "769万",
                  "totalChapterNum": "3694",
                  "lastChapterId": "522503734",
                  "lastChapterName": "　第三千七百章 无差别进攻",
                  "clickNum": "9402",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.9",
                  "threeTypeTag": [
                    "武修",
                    "废柴流",
                    "传统玄幻",
                    "吞噬",
                    "玄幻1"
                  ],
                  "wordSize": "769",
                  "wordSizeUnit": "万",
                  "totalReadNum": "9402",
                  "totalReadNumUnit": "",
                  "protagonist": "林羽",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056463/11010056463.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "重生狂妻，大佬宠上天",
                  "bookId": "11010056463",
                  "introduction": "上一世的南景痴心错付，付出所有，换来一句你配吗？家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。一朝重生十八岁，强势来袭，打脸复仇虐渣渣！决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！她放火，他添柴。她虐渣，他护航。于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！大佬冷哼：“我愿意！”直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！",
                  "introductionList": [
                    "上一世的南景痴心错付，付出所有，换来一句你配吗？",
                    "家破人亡，遭人暗害，她死在那个无人知晓的凄惨雨夜。",
                    "一朝重生十八岁，强势来袭，打脸复仇虐渣渣！",
                    "决心抱上某个大佬的腿，却一个不留神，被他拐到身边，宠上天！",
                    "她放火，他添柴。",
                    "她虐渣，他护航。",
                    "于是人尽皆知，传闻中权势滔天不近女色的战家六爷，被一个名不见经传的小丫头降得服服帖帖！",
                    "大佬冷哼：“我愿意！”",
                    "直到某一天，她双重身份曝光，无数马甲掉落，众人才知，哪里是什么名不见经传，分明就是两个大佬的强强联手！"
                  ],
                  "author": "如沐清风",
                  "totalWordSize": "335万",
                  "totalChapterNum": "2949",
                  "lastChapterId": "522515376",
                  "lastChapterName": "第2949章",
                  "clickNum": "80万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "复仇",
                    "虐渣",
                    "甜宠",
                    "马甲"
                  ],
                  "bookTypeName": "重生异能",
                  "bookScore": "7.8",
                  "threeTypeTag": [
                    "短篇"
                  ],
                  "wordSize": "335",
                  "wordSizeUnit": "万",
                  "totalReadNum": "80",
                  "totalReadNumUnit": "万",
                  "protagonist": "南景,战北庭",
                  "bookTypeThreeMap": {
                    "579": "重生异能"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057627/11010057627.jpg?t=1640335140092&imageView2/0/w/200/h/267",
                  "bookName": "少年风水师",
                  "bookId": "11010057627",
                  "introduction": "爷爷去世的时候，轰动全城......",
                  "introductionList": [
                    "爷爷去世的时候，轰动全城......"
                  ],
                  "author": "听澜本尊",
                  "totalWordSize": "360万",
                  "totalChapterNum": "2653",
                  "lastChapterId": "514869793",
                  "lastChapterName": "第2653章",
                  "clickNum": "472万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "金钱",
                    "风水",
                    "超能"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.2",
                  "threeTypeTag": [
                    "灵异",
                    "算命"
                  ],
                  "wordSize": "360",
                  "wordSizeUnit": "万",
                  "totalReadNum": "472",
                  "totalReadNumUnit": "万",
                  "protagonist": "吴峥,唐思佳",
                  "bookTypeThreeMap": {
                    "530": "现代武侠",
                    "606": "原创灵异",
                    "607": "悬疑推理"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010030861/11010030861.jpg?t=1634609613707&imageView2/0/w/200/h/267",
                  "bookName": "超级赘婿",
                  "bookId": "11010030861",
                  "introduction": "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了...",
                  "introductionList": [
                    "我遵循母亲的遗言，装成废物去给别人做上门女婿，为期三年。现在，三年时间结束了..."
                  ],
                  "author": "黑夜的瞳",
                  "totalWordSize": "590万",
                  "totalChapterNum": "4459",
                  "lastChapterId": "522505477",
                  "lastChapterName": "第4459章",
                  "clickNum": "1347万",
                  "status": 1,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "王者",
                    "富豪",
                    "女婿",
                    "打脸"
                  ],
                  "bookTypeName": "",
                  "bookScore": "7.6",
                  "threeTypeTag": [
                    "复仇"
                  ],
                  "wordSize": "590",
                  "wordSizeUnit": "万",
                  "totalReadNum": "1347",
                  "totalReadNumUnit": "万",
                  "protagonist": "林阳,将小"
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x0/11000072091/11000072091.jpg?t=202101010000&imageView2/0/w/200/h/267",
                  "bookName": "无敌魔皇",
                  "bookId": "11000072091",
                  "introduction": "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？ 我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路",
                  "introductionList": [
                    "当我醒来的那一天，魔族在哪里？问苍天，问大地，九天九幽之内，我该如何回到魔族圣地？我是向青山，拳打八方，脚踢四宇，谁也阻挡不了我的回家之路"
                  ],
                  "author": "千笔不落",
                  "totalWordSize": "17万",
                  "totalChapterNum": "62",
                  "lastChapterId": "541685693",
                  "lastChapterName": "第62章",
                  "clickNum": "5075",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "无敌魔皇",
                    "千笔不落",
                    "玄幻奇幻"
                  ],
                  "bookTypeName": "东方玄幻",
                  "bookScore": "7.6",
                  "wordSize": "17",
                  "wordSizeUnit": "万",
                  "totalReadNum": "5075",
                  "totalReadNumUnit": "",
                  "bookTypeThreeMap": {
                    "512": "东方玄幻"
                  }
                },
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010057208/11010057208.jpg?t=1639731764926&imageView2/0/w/200/h/267",
                  "bookName": "爱你成瘾：偏执霸总的罪妻",
                  "bookId": "11010057208",
                  "introduction": "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。 她出狱后，却意外招惹上了易瑾离。 她跪在地上求他，“易瑾离，你放过我吧。” 他却笑笑，“阿姐，我永远都不会放过你。” 都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。 然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。” 她冷冷凝视着他，“那么你去死。”",
                  "introductionList": [
                    "深城首富易瑾离的未婚妻死亡，车祸肇事者凌依然被判入狱三年。",
                    "她出狱后，却意外招惹上了易瑾离。",
                    "她跪在地上求他，“易瑾离，你放过我吧。”",
                    "他却笑笑，“阿姐，我永远都不会放过你。”",
                    "都说易瑾离冷心绝情，可是却把一个坐过牢的环卫工宠上了天。",
                    "然而当年的车祸真相，却把她对他所有的爱都摧毁了，她从他身边逃离。",
                    "多年后的一天，他跪在了她的面前，“依然，只要你回到我身边，怎么样都可以。”",
                    "她冷冷凝视着他，“那么你去死。”"
                  ],
                  "author": "顾家小竹",
                  "totalWordSize": "402万",
                  "totalChapterNum": "3814",
                  "lastChapterId": "522482153",
                  "lastChapterName": "第3814章",
                  "clickNum": "312万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "破镜重圆",
                    "虐恋",
                    "先虐后宠",
                    "豪门恩怨"
                  ],
                  "bookTypeName": "总裁豪门",
                  "bookScore": "8.3",
                  "wordSize": "402",
                  "wordSizeUnit": "万",
                  "totalReadNum": "312",
                  "totalReadNumUnit": "万",
                  "protagonist": "凌依然,易瑾离",
                  "bookTypeThreeMap": {
                    "577": "总裁豪门"
                  }
                }
              ],
              "bookPackageId": 3
            },
            {
              "id": 15,
              "channelId": 4,
              "name": "女生精选",
              "sex": 1,
              "type": 1,
              "channelListIds": "1,4,5,6",
              "status": 1,
              "sort": 3,
              "comment": "1",
              "bookInfos": [
                {
                  "unit": "0",
                  "coverWap": "http://qnqat.kuaikandushu.cn/cppartner/1x1/11x0/110x1/11010056959/11010056959.jpg?t=1637748336688&imageView2/0/w/200/h/267",
                  "bookName": "幸孕宠妻：战爷，晚安！",
                  "bookId": "11010056959",
                  "introduction": "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。  惹得战爷肺气炸裂。  就在所有人都以为她会死无葬身之地时。  隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”  “我有条件？”  “说！”  “不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”  “依你！”  路人倒地：这就是传说中的一物降一物？  战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！",
                  "introductionList": [
                    "洛诗涵用了两辈子都没能捂热战寒爵的心，索性顶着草包头衔，不仅设计了他，还拐了他的两个孩子跑路。",
                    "惹得战爷肺气炸裂。",
                    "就在所有人都以为她会死无葬身之地时。",
                    "隔天却发现战爷卑躬屈膝的站在大街上哄小祖宗：“乖，跟我回家！”",
                    "“我有条件？”",
                    "“说！”",
                    "“不许欺负我，不许骗我，更不许对我摆高级厌世脸，永远觉得我是最漂亮的，一想到我就要笑……”",
                    "“依你！”",
                    "路人倒地：这就是传说中的一物降一物？",
                    "战爷表示很无奈：自己调教出来的小狐狸，既然调教无方，那只能一条路摸黑宠到底！"
                  ],
                  "author": "言安",
                  "totalWordSize": "275万",
                  "totalChapterNum": "2472",
                  "lastChapterId": "541685663",
                  "lastChapterName": "第2472章",
                  "clickNum": "2245万",
                  "status": 0,
                  "cp": "",
                  "disclaimer": "本平台经版权方授权使用该作品。如您发现涉黄、涉黑、涉政等内容，或作品内容侵害您的权益，欢迎向本平台客服举报投诉，一经核实，立即删除，本平台不承担任何责任。\r\n本平台由北京点众科技股份有限公司提供支撑服务或运营。",
                  "tagList": [
                    "重生",
                    "萌宝",
                    "甜宠",
                    "豪门恩怨",
                    "先虐后宠"
                  ],
                  "bookTypeName": "现代武侠",
                  "bookScore": "8.4",
                  "wordSize": "275",
                  "wordSizeUnit": "万",
                  "totalReadNum": "2245",
                  "totalReadNumUnit": "万",
                  "protagonist": "洛诗涵,战寒爵",
                  "bookTypeThreeMap": {
                    "530": "现代武侠"
                  }
                }
              ],
              "bookPackageId": 6
            },
            {
              "id": 29,
              "channelId": 4,
              "name": "出版分类",
              "sex": 1,
              "type": 3,
              "channelListIds": "6",
              "status": 1,
              "sort": 5,
              "extend": {
                "classifyCode": "2,3,10",
                "classifyName": "小说,文艺,历史"
              },
              "comment": "",
              "bookTypeVos": [
                {
                  "classifyCode": 2,
                  "classifyName": "小说",
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
                    }
                  ]
                },
                {
                  "classifyCode": 3,
                  "classifyName": "文艺",
                  "books": [
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
                    }
                  ]
                },
                {
                  "classifyCode": 10,
                  "classifyName": "历史",
                  "books": []
                }
              ]
            }
          ]
        }
      ]
    }
  }

  res.status(200).json(result)
}
