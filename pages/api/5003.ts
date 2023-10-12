import type { NextApiRequest, NextApiResponse } from 'next'

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const result = {
    "retCode": 0,
    "data": {
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
      "name": "男生精选",
      "totalSize": 22
    }
  }

  res.status(200).json(result)
}
