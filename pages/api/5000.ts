import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import {
  EChannelCode,
  EColumnType,
  ERankSex,
  IBookInfo,
  INetHomeRes,
  ISeoBannerManageVo,
  ISeoChannelListVo,
} from "@/typings/home.interface";
import { ERankVoSex, IRankBookDataVo } from "@/typings/ranking.interface";
import { IBookSearchVo } from "@/typings/browse.interface";
import { EBookStatus2 } from "@/typings/book.interface";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetHomeRes>
) {

  const homeData =[
    {
      "position": 0,
      "bookList": [
        {
          "author": "勤奮的螃蟹",
          "bookId": "11010080493",
          "bookName": "鬼手醫妃：王爺休書請拿好",
          "introduction": "二十二世紀的醫學天才美女穿越，成為花癡大草包棄妃。\r\n大婚當日，寒王妻妾同娶，讓她被世人恥笑，嘲諷。\r\n“論陰險，無人能比得上你。謝瑤，你讓本王惡心至極！”\r\n“再廢話下去，良辰吉日都錯過了，我祝你們夫唱婦隨，白頭偕老。”\r\n棄妃就棄妃唄，誰休誰還不一定呢！\r\n她也樂得清靜，卻不料寒王出爾反爾，一次次的找上門......\r\n幾個月後，有眼無珠又別扭的寒王：“愛妃，本王錯了。”\r\n謝瑤笑盈盈的鬆開了獵犬，“把人趕走！”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010080493/11010080493.jpg?t=20201215105138",
          "bannerPic": "https://hws3.klynf.com/1666063876294banner-鬼手醫妃：王爺休書請拿好_.jpg",
          "viewCountDisplay": "11.4萬",
          "lastChapterUtime": "2023-08-17 11:03:19",
          "ratings": "9.7",
          "chapterCount": "3841",
          "writeStatus": "完本",
          "viewCount": "114478"
        },
        {
          "author": "絕代天驕",
          "bookId": "11010091629",
          "bookName": "神王婿",
          "introduction": "他消失的五年，世界上多了兩塊神秘的令牌，一塊閻王令，見之必死；一塊神王令，雞犬升天，而他，便是兩塊令牌唯一的主人......",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010091629/11010091629.jpg",
          "bannerPic": "https://hws3.klynf.com/1666063969420banner-神王婿.jpg",
          "viewCountDisplay": "8.4萬",
          "lastChapterUtime": "2023-09-05 17:05:17",
          "ratings": "7.3",
          "chapterCount": "5479",
          "writeStatus": "完本",
          "viewCount": "83999"
        },
        {
          "author": "青海長雲",
          "bookId": "11010076840",
          "bookName": "重生之一世梟龍",
          "introduction": "他攜一身本領回歸，為妻女撐起一片天，重戰江湖，登巔峰，掌生死，掀起一番江湖風雲！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010076840/11010076840.jpg",
          "bannerPic": "https://hws3.klynf.com/1666064076795banner-重生之一世梟龍.jpg",
          "viewCountDisplay": "8.2萬",
          "lastChapterUtime": "2023-10-11 10:02:58",
          "ratings": "7.1",
          "chapterCount": "3706",
          "writeStatus": "連載",
          "viewCount": "81767"
        }
      ]
    },
    {
      "position": 1,
      "bookList": [
        {
          "author": "小妖本仙",
          "bookId": "11000162501",
          "bookName": "我曾愛你，奮不顧身",
          "introduction": "結婚兩年，素手調羹，最終也比不過他心中的那個白月光。\r\n她受夠了，也煩了單向婚姻，可是卻還是被他圈在他的世界裏。\r\n“如果你不愛我，就放開我好嗎！？”\r\n“放開你？這輩子都不可能！”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000162501/11000162501.jpg?t=20210728144159",
          "viewCountDisplay": "10.6萬",
          "lastChapterUtime": "2018-09-30 20:29:01",
          "ratings": "9.0",
          "chapterCount": "46",
          "writeStatus": "完本",
          "viewCount": "106068"
        },
        {
          "author": "夏目",
          "bookId": "11000162597",
          "bookName": "撕情裂愛",
          "introduction": "言歡和沈邵城的婚姻，是她祖母死前求了沈家老太太，換來的。\r\n       後來言歡被送進監獄，被廢掉一隻手，眼睛瞎掉，滿目絕望時。\r\n       她想，祖母若還在世，大抵是會後悔的。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000162597/11000162597.jpg?t=20210728115902",
          "viewCountDisplay": "13.5萬",
          "lastChapterUtime": "2018-09-30 01:02:20",
          "ratings": "9.3",
          "chapterCount": "40",
          "writeStatus": "完本",
          "viewCount": "134856"
        },
        {
          "author": "風一樣",
          "bookId": "11010024453",
          "bookName": "極品贅婿神醫",
          "introduction": "獲得仙醫傳承，重生於蘇家贅婿身份為廚子的黃青身上。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010024453/11010024453.jpg?t=20220711130154",
          "viewCountDisplay": "3.7萬",
          "lastChapterUtime": "2019-11-28 11:44:33",
          "ratings": "7.4",
          "chapterCount": "498",
          "writeStatus": "完本",
          "viewCount": "37488"
        },
        {
          "author": "孤存",
          "bookId": "11010027727",
          "bookName": "垂釣超能力",
          "introduction": "陳解放畢業回鄉承包魚塘，卻偶得一套垂釣係統，擁有了能夠垂釣各種超能力的神奇本領。\r\n　　可以看破情緒的眼鏡，能噴出水火的葫蘆。\r\n　　還死人肉白骨的丹藥，能百日飛升成就大神的秘籍。\r\n　　陳解放垂釣萬界，樂在其中，直到有一天，他釣上來一個口口聲聲自稱自己是龍王三公主的妹子，非要去拯救龜丞相。\r\n　　陳解...",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010027727/11010027727.jpg?t=20210104174427",
          "viewCountDisplay": "7805",
          "lastChapterUtime": "2019-11-06 13:20:22",
          "ratings": "9.3",
          "chapterCount": "218",
          "writeStatus": "完本",
          "viewCount": "7805"
        },
        {
          "author": "肆零八",
          "bookId": "11010030841",
          "bookName": "逆極巔峰",
          "introduction": "被社會摧殘，無力翻身的小人物，因一次意外重活一世。這裏的世界與前世大不相同，他能依靠自己的力量，逆極而行，攀登巔峰嗎？\r\n       如果能讓你重來一世，如果能讓你有掌控自己命運的能力。\r\n       你會怎麼做？\r\n       是披荊斬棘，不留遺憾；還是美酒美人，掌禦蒼生？\r\n       看逆...",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010030841/11010030841.jpg?t=20201231181717",
          "viewCountDisplay": "2156",
          "lastChapterUtime": "2019-10-03 10:02:14",
          "ratings": "7.6",
          "chapterCount": "146",
          "writeStatus": "完本",
          "viewCount": "2156"
        },
        {
          "author": "燎原",
          "bookId": "11010030842",
          "bookName": "至尊仙帝",
          "introduction": "淩天風，一個繼承了華夏複興使命的青年，掌握萬世銅母之力，凝聚九天星沙，滅蠻夷，殺仇寇，聚華夏之力破滅毀滅星族，成就仙界至尊。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010030842/11010030842.jpg?t=20201231154156",
          "viewCountDisplay": "1263",
          "lastChapterUtime": "2019-11-19 12:03:48",
          "ratings": "7.7",
          "chapterCount": "248",
          "writeStatus": "完本",
          "viewCount": "1263"
        }
      ]
    },
    {
      "position": 2,
      "bookList": [
        {
          "author": "葉缺",
          "bookId": "11010024332",
          "bookName": "兵王神醫在都市",
          "introduction": "兵王之王退隱花都，本想照料戰友，沒想與一美女總裁有了交集！既為強龍，就不枉此生，我選擇驚豔四座！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010024332/11010024332.jpg?t=20211202135215",
          "viewCountDisplay": "1.2萬",
          "lastChapterUtime": "2020-03-08 14:30:23",
          "ratings": "7.7",
          "chapterCount": "798",
          "writeStatus": "完本",
          "viewCount": "12286"
        },
        {
          "author": "黑白",
          "bookId": "11010030838",
          "bookName": "這個贅婿有點強",
          "introduction": "三年時間都被人認為是一個混吃等死的廢物。\r\n被自己的老婆看不起，被自己的小姨子掃地出門。\r\n一朝崛起，那些看不起自己的人都要折服在自己的腳下。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010030838/11010030838.jpg?t=20210825134337",
          "viewCountDisplay": "3605",
          "lastChapterUtime": "2019-11-29 11:30:43",
          "ratings": "7.3",
          "chapterCount": "437",
          "writeStatus": "完本",
          "viewCount": "3605"
        },
        {
          "author": "林雨的魚",
          "bookId": "11010033052",
          "bookName": "神體帝尊",
          "introduction": "囚禁籠中三年，百般淩辱，親情散，婚約毀，餘子秋生不如死。\r\n一朝脫困，鑄煉神體，失去了一切，他都將親手拿回來。\r\n這萬古世間，他是最強的帝尊。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010033052/11010033052.jpg?t=20220715104449",
          "viewCountDisplay": "3907",
          "lastChapterUtime": "2020-03-31 11:30:23",
          "ratings": "8.6",
          "chapterCount": "559",
          "writeStatus": "完本",
          "viewCount": "3907"
        },
        {
          "author": "風華絕代",
          "bookId": "11010034030",
          "bookName": "虎婿",
          "introduction": "世界第一大神秘組織龍門之主當了上門女婿。五年後，考核結束！曾經因我而讓你飽受恥辱，如今我定許你光芒萬丈...",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010034030/11010034030.jpg",
          "viewCountDisplay": "12.3萬",
          "lastChapterUtime": "2022-07-01 01:10:15",
          "ratings": "7.2",
          "chapterCount": "5750",
          "writeStatus": "完本",
          "viewCount": "123378"
        },
        {
          "author": "李餘生",
          "bookId": "11010047868",
          "bookName": "戰神歸來",
          "introduction": "戎馬十載，一戰封神！\r\n卻突聞至親兄弟被人所害，含恨而終.....\r\n如今攜無上神威，強勢歸來，讓仇人粉身碎骨！讓所有人向他低頭！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010047868/11010047868.jpg?t=20221018121356",
          "viewCountDisplay": "21.0萬",
          "lastChapterUtime": "2022-10-25 19:10:13",
          "ratings": "8.4",
          "chapterCount": "6554",
          "writeStatus": "完本",
          "viewCount": "209763"
        },
        {
          "author": "細雨無聲",
          "bookId": "11010054138",
          "bookName": "毒後重生：邪王，本宮又闖禍了！",
          "introduction": "“王爺！王妃把皇後打了！”\r\n男人冷眼微眯，危險釋放，“都是死人？王妃的手不疼？”\r\n家丁傻眼，啥……意思，讓他打？\r\n“王爺，王妃把宮牆城門砸了！”\r\n某男批閱折子動作不停，“由她去，保護好王妃。”\r\n“王爺，王妃被抓了！”\r\n“好大的狗膽！”\r\n屋內冷風四起，再睜眼，某王爺已消失在原地。\r\n自那之後，某妃心痛反省，看著某男因自己重傷，她淚眼婆娑保證，“夫君我錯了，下次絕對不會這樣。”\r\n然——\r\n好景不長。\r\n“王爺，本宮又闖禍了！”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010054138/11010054138.jpg?t=20200407110505",
          "viewCountDisplay": "8.4萬",
          "lastChapterUtime": "2021-02-16 08:10:25",
          "ratings": "9.2",
          "chapterCount": "1553",
          "writeStatus": "完本",
          "viewCount": "84418"
        }
      ]
    },
    {
      "position": 3,
      "bookList": [
        {
          "author": "不言不語",
          "bookId": "11010130363",
          "bookName": "獄帝歸來當奶爸",
          "introduction": "葉七絕被人下套，入獄五年歸來，獲得高人指點！\n本想給未婚妻全世界的他，沒想到卻遭受未婚妻背叛，嫁給了施暴者。\n然而，卻不知美女總裁卻為他偷偷生下了呆萌女兒，並且等了他五年，受盡了苦難。\n從此，葉七絕開啟了寵妻帶娃的悠閑人生，恣意都市！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010130363/11010130363.jpg?t=20230412094532",
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
          "viewCountDisplay": "2.8萬",
          "lastChapterUtime": "2021-09-17 11:10:30",
          "ratings": "9.7",
          "chapterCount": "2010",
          "writeStatus": "完本",
          "viewCount": "28433"
        }
      ]
    },
    {
      "position": 4,
      "bookList": [
        {
          "author": "赤溪",
          "bookId": "11010167038",
          "bookName": "絕色醫仙，廢柴庶女殺瘋了",
          "introduction": "廢柴庶女慘遭暗算，靈根被斷，容顏盡毀，殞命於荒山。\n等再次睜眼，末世第一女軍官樓雲溪穿了過來。\n她鬼火護體，醫術一絕！\n靈獸爭寵，大宗師都馴服不了的靈獸都在她腳下匍匐！\n境界突破，鍛造的曠世兵器可抵百萬雄師！\n天女顯聖，隻有她一人可以沐浴神輝！\n才貌雙全，惹桃花不斷......\n九州之巔，帝君溫柔撫她眉眼：“那些都是爛桃花，不好。”\n她輕笑：“那誰好？”\n帝君耳朵通紅：“我好！”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010167038/11010167038.jpg",
          "viewCountDisplay": "162",
          "lastChapterUtime": "2023-10-10 20:37:19",
          "ratings": "9.0",
          "chapterCount": "469",
          "writeStatus": "連載",
          "viewCount": "162"
        },
        {
          "author": "思無邪",
          "bookId": "11010167050",
          "bookName": "爸媽賣我掙彩禮",
          "introduction": "爸媽重男輕女，哥哥是寶，我和妹妹是草。\r\n距高考還有一個月的妹妹在電話裏泣不成聲：\r\n「姐，爸媽讓我退學。」\r\n我爸訓斥：「哭什麼哭，女人讀什麼書，不把你嫁出去怎麼給你哥娶媳婦。」",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010167050/11010167050.jpg",
          "viewCountDisplay": "132",
          "lastChapterUtime": "2023-08-30 18:51:12",
          "ratings": "7.1",
          "chapterCount": "8",
          "writeStatus": "完本",
          "viewCount": "132"
        },
        {
          "author": "真庸懶人",
          "bookId": "11010073240",
          "bookName": "奇門至尊",
          "introduction": "第一天進城的山村少年，被美女處處嫌棄。\r\n她卻不知，少年握有上古龜甲，占卜相麵，醫藥符籙，無所不通。\r\n從此逍遙都市，白手起家，一不下心成了個世界首富。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010073240/11010073240.jpg?t=20220121095223",
          "viewCountDisplay": "3.2萬",
          "lastChapterUtime": "2022-07-22 11:10:38",
          "ratings": "9.8",
          "chapterCount": "3858",
          "writeStatus": "完本",
          "viewCount": "31506"
        },
        {
          "author": "浮涼",
          "bookId": "11010167046",
          "bookName": "遇上綠茶我男友這樣說",
          "introduction": "學校迎新晚會，台上唱歌的校草盡顯風光，給他伴奏的院花滿臉嬌羞。\r\n在後台，我聽見院花說：\r\n“就這樣的男生，不出一周，我就能讓他乖乖給我當舔狗。”\r\n校草就在她身後：“不是大姐，你這話給我本人聽到了，和在大街上拉屎有什麼區別啊?”\r\n“上完廁所記得擦嘴，別到處噴糞好嗎?”\r\n我一陣感慨，我的精分男友可真是妙語連珠啊。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010167046/11010167046.jpg",
          "viewCountDisplay": "122",
          "lastChapterUtime": "2023-08-31 11:20:29",
          "ratings": "9.8",
          "chapterCount": "11",
          "writeStatus": "完本",
          "viewCount": "122"
        },
        {
          "author": "葉缺",
          "bookId": "11010060678",
          "bookName": "無敵王者",
          "introduction": "五年前，他無力保護愛人，離家五年！五年後，他一手創建的麒麟營令全世界強者聞風喪膽，十六位部下皆被授予至尊戰神封號，過千成員被授予至強兵王，他成為名副其實的無敵王者！從現在起，我不會再讓任何人欺辱你……",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010060678/11010060678.jpg?t=20200807182058",
          "viewCountDisplay": "5.0萬",
          "lastChapterUtime": "2022-06-01 10:40:24",
          "ratings": "9.1",
          "chapterCount": "5070",
          "writeStatus": "完本",
          "viewCount": "50083"
        },
        {
          "author": "風華絕代",
          "bookId": "11010037617",
          "bookName": "龍門狂婿",
          "introduction": "入贅三年，所有人都以為可以把我踩在腳下，三年後，考核結束，我為世界第一大神秘組織龍門之主！執子之手，許你一世榮光...",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010037617/11010037617.jpg",
          "viewCountDisplay": "7.9萬",
          "lastChapterUtime": "2022-07-05 00:40:16",
          "ratings": "9.4",
          "chapterCount": "5783",
          "writeStatus": "完本",
          "viewCount": "78808"
        }
      ]
    },
    {
      "position": 5,
      "bookList": [
        {
          "author": "長風破浪",
          "bookId": "11010133057",
          "bookName": "狂龍出獄",
          "introduction": "三年前，秦風含冤入獄，得到神秘老者的傳承，如今王者歸來，誓要掃平一切敵！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010133057/11010133057.jpg?t=20230711152720",
          "viewCountDisplay": "4452",
          "lastChapterUtime": "2023-10-11 19:26:09",
          "ratings": "8.5",
          "chapterCount": "2485",
          "writeStatus": "連載",
          "viewCount": "4452"
        },
        {
          "author": "梔子盼",
          "bookId": "11010165424",
          "bookName": "秦總，太太說再不離婚就拆家了",
          "introduction": "結婚三年，夏尋星終於醒悟，秦斯年那個狗男人就是塊焐不熱邦邦硬的臭石頭。\r\n不，應該說能焐熱他的從來不是自己。\r\n她預約了離婚手續，被工作人員詢問原因時，笑著反問：男方無法履行夫妻義務算不算？\r\n這個理由如同長了腿般傳遍整個南城。\r\n秦斯年走到哪裏都被損友調侃：聽說你老婆嫌棄你？\r\n男人俊臉黑如墨：他現在就回去！\r\n隻是......他怎麼被那女人拉黑了？",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010165424/11010165424.jpg?t=20230919191541",
          "viewCountDisplay": "1227",
          "lastChapterUtime": "2023-09-30 19:32:58",
          "ratings": "8.8",
          "chapterCount": "626",
          "writeStatus": "連載",
          "viewCount": "1227"
        },
        {
          "author": "楊石夫",
          "bookId": "11010164617",
          "bookName": "全家大佬，那我外掛強點很合理吧",
          "introduction": "“陸少宗，大事不妙啦！東洲三大聖王，都被您爹給一劍斬啦！”“陸少宗，大事不妙啦！西疆六大仙朝，一夜之間便傾覆於您爺爺手上啦！”“陸少宗，大事不妙啦，太爺爺他老人昨夜夢遊的時候，不小心收服了三千大千世界！”問聽急報，陸淵疲憊地揉了揉眉心，不禁發出一聲長歎，還真是沒一個能讓人省心的。果然，千算萬算，他萬萬沒有算到，家人各個都是修仙界的頂級大佬。自從天才跌落神壇，一朝淪為廢人，換來的卻並非是至親們的冷眼、淡漠和疏離。恰恰相反，高層的鼓勵，同門的愛戴，以及三位聖女的傾慕和關懷......這讓陸淵覺得有些不可思議。此時，陸淵低頭，望著手中那可吞噬世間一切妖魔血肉，熔煉其精血，能助增通天修為的‘神秘黑鼎’，不禁陷入了漫長的沉思之中。他在思考一個問題。“我給這幫老家夥擦屁股，那誰來給我擦屁股呢？”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010164617/11010164617.jpg",
          "viewCountDisplay": "122",
          "lastChapterUtime": "2023-07-31 19:28:00",
          "ratings": "8.7",
          "chapterCount": "103",
          "writeStatus": "完本",
          "viewCount": "122"
        },
        {
          "author": "封喉",
          "bookId": "11010133054",
          "bookName": "高手下山：開局休掉高冷女總裁",
          "introduction": "通過出師考驗後，師父扔給他九張婚書，命他把九個女人全都娶了。沈煉卻隻想娶自己看得上的，他決定碰碰運氣，於是挨個找上門。美女總裁很不屑：你個鄉下來的土包子，有什麼資格娶我？沈煉深表遺憾：看不起人的女人我不要，對不起，你被我淘汰了。各位看官，且看沈煉如何龍傲都市，瀟灑世間！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010133054/11010133054.jpg",
          "viewCountDisplay": "2101",
          "lastChapterUtime": "2023-04-12 19:46:12",
          "ratings": "8.2",
          "chapterCount": "712",
          "writeStatus": "完本",
          "viewCount": "2101"
        },
        {
          "author": "唐暖",
          "bookId": "11010164679",
          "bookName": "孕妻出逃：冷欲總裁霸愛成癮",
          "introduction": "“我懷孕了，你讓位吧！”\n小三挺著大肚子上門挑釁，蘇聽雲微笑離婚。\n離婚前，陸亦寒認定蘇聽雲心思惡毒，另有所圖，終於離婚了，他卻慌了神。\n“乖，叫老公！”\n“誰是我老公......唔......”\n他們不是已經離婚，幹嘛總圍著她轉？",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010164679/11010164679.jpg",
          "viewCountDisplay": "3269",
          "lastChapterUtime": "2023-10-11 11:38:06",
          "ratings": "8.7",
          "chapterCount": "474",
          "writeStatus": "連載",
          "viewCount": "3269"
        },
        {
          "author": "秋風秋韻",
          "bookId": "11010165295",
          "bookName": "帝師九千歲",
          "introduction": "前世身為一個白手創業的企業家。\n李善穿越到了一個同名同姓的太監身上。\n這是一個和前世曆史時空平行的曆史世界。\n才來，李善就目睹了太監總管殺人，嚇得差點尿了。\n一番恭維之下，沒引得太監總管放過，反倒是把他推入更危險的深淵。\n踏入到太後寢宮那一刻，李善心知已經沒有回旋的餘地。\n直到走上太後床榻，他決定此生命由己。\n這軟飯，吃定了！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010165295/11010165295.jpg",
          "viewCountDisplay": "1130",
          "lastChapterUtime": "2023-09-04 11:37:46",
          "ratings": "8.3",
          "chapterCount": "481",
          "writeStatus": "完本",
          "viewCount": "1130"
        }
      ]
    },
    {
      "position": 6,
      "bookList": [
        {
          "author": "入夢離陽",
          "bookId": "11010024452",
          "bookName": "護花狂婿",
          "introduction": "當年因為和父親鬧翻，辛陽成為了普通人入贅秦家，而如今，為了自己的老婆，他重新拿回家產。\r\n“你失去的，我億倍補償給你！”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010024452/11010024452.jpg?t=20210810152001",
          "viewCountDisplay": "7.2萬",
          "lastChapterUtime": "2020-06-09 16:30:24",
          "ratings": "7.3",
          "chapterCount": "964",
          "writeStatus": "完本",
          "viewCount": "71571"
        },
        {
          "author": "公子無雙",
          "bookId": "11010030849",
          "bookName": "最強修真奶爸",
          "introduction": "我，奶爸，修仙者，星空之下第一帶娃PK強者！不服來戰！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010030849/11010030849.jpg?t=20220803113828",
          "viewCountDisplay": "1981",
          "lastChapterUtime": "2020-02-25 10:30:36",
          "ratings": "8.4",
          "chapterCount": "616",
          "writeStatus": "完本",
          "viewCount": "1981"
        },
        {
          "author": "番茄燉土豆",
          "bookId": "11010035276",
          "bookName": "我的爺爺是富商",
          "introduction": "家境不富裕的大學生李萬，辛苦打工被人看不起，參加同學會也被富二代嘲諷、欺辱。\n直到有一天，他突然接到個神秘的電話：“我是你失散多年的二爺爺，孩子啊，咱家錢太多了，你趕緊出去敗家吧！”\n從此，李萬逆襲成功，有了錢太多不知道該咋花的煩惱。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010035276/11010035276.jpg?t=20230428103732",
          "viewCountDisplay": "1659",
          "lastChapterUtime": "2020-03-12 11:30:25",
          "ratings": "7.8",
          "chapterCount": "589",
          "writeStatus": "完本",
          "viewCount": "1659"
        },
        {
          "author": "一壺清酒",
          "bookId": "11010050854",
          "bookName": "農女致富：山裏漢寵妻無度",
          "introduction": "蘇紅珊一睜眼發現自己穿越到了古代，茅草屋，破院子，吃了上頓沒下頓，還附贈了個壯漢子夫君和一對麵黃肌瘦的兒女。\r\n       可誰能告訴她，她的人設為什麼是惡毒繼母？\r\n       努力改了人設，修複了母子關係，做美食，開酒樓，發家致富，把日子過的蒸蒸日上。\r\n       可為什麼這好好的繼子繼女忽然搖身一變成了皇子公主？就連自家這壯漢子夫君都成了將軍？\r\n       隻是這將軍也實在太虎，蘇紅珊忍無可忍大怒：“韓夜霖，你無恥！這日子沒法過了！”韓夜霖：“娘子，一品夫人給你掙到了，為夫還得給自己掙個娃。”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010050854/11010050854.jpg?t=20230524144048",
          "viewCountDisplay": "13.3萬",
          "lastChapterUtime": "2022-03-19 13:10:13",
          "ratings": "9.4",
          "chapterCount": "3732",
          "writeStatus": "完本",
          "viewCount": "132628"
        },
        {
          "author": "風華絕代",
          "bookId": "11010055345",
          "bookName": "蓋世無雙",
          "introduction": "一代傳奇戰神上門入贅，人人皆把我當作笑話！殊不知，五年後當我站起來之際，整個世界都將在我腳下戰栗！庇我家族，護我愛妻！ 江山如畫不如你眉眼清淺，山河千秋不及你泛笑風華。",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010055345/11010055345.jpg?t=20200616174658",
          "viewCountDisplay": "4.6萬",
          "lastChapterUtime": "2021-10-31 03:40:18",
          "ratings": "9.0",
          "chapterCount": "3322",
          "writeStatus": "完本",
          "viewCount": "46169"
        },
        {
          "author": "顧家小竹",
          "bookId": "11010057208",
          "bookName": "愛你成癮：偏執霸總的罪妻",
          "introduction": "深城首富易瑾離的未婚妻死亡，車禍肇事者淩依然被判入獄三年。 \r\n她出獄後，卻意外招惹上了易瑾離。 \r\n她跪在地上求他，“易瑾離，你放過我吧。” \r\n他卻笑笑，“阿姐，我永遠都不會放過你。” \r\n都說易瑾離冷心絕情，可是卻把一個坐過牢的環衛工寵上了天。 \r\n然而當年的車禍真相，卻把她對他所有的愛都摧毀了，她從他身邊逃離。\r\n多年後的一天，他跪在了她的麵前，“依然，隻要你回到我身邊，怎麼樣都可以。” \r\n她冷冷凝視著他，“那麼你去死。”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010057208/11010057208.jpg?t=20210705101358",
          "viewCountDisplay": "5.2萬",
          "lastChapterUtime": "2023-10-11 20:01:14",
          "ratings": "9.3",
          "chapterCount": "4302",
          "writeStatus": "連載",
          "viewCount": "52415"
        }
      ]
    },
    {
      "position": 7,
      "bookList": [
        {
          "author": "寶書生",
          "bookId": "11010067979",
          "bookName": "天醫歸來",
          "introduction": "他有絕世醫術，滔天戰力，卻為報師恩忍辱十年。\r\n十年後，曾經鄙視他的人，隻配匍匐在他腳下！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010067979/11010067979.jpg?t=20210305182330",
          "viewCountDisplay": "11.1萬",
          "lastChapterUtime": "2022-09-05 10:10:26",
          "ratings": "7.6",
          "chapterCount": "5672",
          "writeStatus": "完本",
          "viewCount": "110934"
        },
        {
          "author": "笑飲血",
          "bookId": "11010068277",
          "bookName": "修羅殿",
          "introduction": "七年前，他因得罪大人物，猶如喪家之犬，落荒而逃。七年後，他化身修羅君主，權勢滔天，為報仇雪恨，強勢歸來。卻發現昔日好友因他而慘死，這一切的幕後黑手竟是……",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010068277/11010068277.jpg?t=20200624223841",
          "viewCountDisplay": "10.5萬",
          "lastChapterUtime": "2022-06-07 18:10:28",
          "ratings": "9.5",
          "chapterCount": "4892",
          "writeStatus": "完本",
          "viewCount": "104851"
        },
        {
          "author": "豆豆豆包",
          "bookId": "11010161194",
          "bookName": "萌寶一加一，總裁爹地放肆寵",
          "introduction": "“離婚吧。”\n一紙婚姻不及白月光的驀然回首，左薇揣著心碎遠赴國外。\n三年後，作為大賽評委，她再次踏上心碎之地。\n殊不知兩個萌寶也悄然來到了臨城，開啟了他們的秘密計劃。\n藺商手捧玫瑰，“左栩栩，我來找你媽咪。”\n“渣男出門左拐，哪裏是個公廁。”左栩栩關上門。\n“左栩栩，是我。”\n“威廉叔叔，快點進來，媽咪做好點心等你了。”\n藺商氣瘋了，“左栩栩，你要氣死你爹！”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010161194/11010161194.jpg?t=20230919191441",
          "viewCountDisplay": "1884",
          "lastChapterUtime": "2023-10-11 20:34:42",
          "ratings": "7.4",
          "chapterCount": "825",
          "writeStatus": "連載",
          "viewCount": "1884"
        },
        {
          "author": "貝瑤瑤",
          "bookId": "11010095477",
          "bookName": "王牌狂妻：偏執薄爺總扒我馬甲",
          "introduction": "相依為命的姐姐在懷胎九月時，突然遭遇意外，成了植物人。 \r\n貝雲瑤偶然得知了真相後，決定向害她姐姐的渣男賤女複仇。 \r\n於是，她抱上了薄爺的金大腿，瘋狂虐渣。 可虐著、虐著，怎麼開始撒起狗糧了？ \r\n傳聞，薄家大少爺權勢滔天，禁欲清冷，不好女色。 \r\n卻娶了一個從鄉下回來的小村姑為妻。 \r\n眾人都覺得她不配，天天盼著薄爺早點和她離婚。 \r\n薄大少爺霸氣護妻，摟住貝雲瑤的小蠻腰，“誰說我老婆不配？” \r\n天才畫家，妙手神醫，金牌編劇，頂級賽車手，第一黑客...... \r\n他老婆的小馬甲多的數不清！\r\n哪個眼瞎的敢說他老婆不配，要了他小命！",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010095477/11010095477.jpg?t=20230526150253",
          "viewCountDisplay": "1366",
          "lastChapterUtime": "2021-08-19 14:31:39",
          "ratings": "7.7",
          "chapterCount": "360",
          "writeStatus": "完本",
          "viewCount": "1366"
        },
        {
          "author": "宛輕吟",
          "bookId": "11010110171",
          "bookName": "權寵卦妃：攝政王的心上嬌",
          "introduction": "風水大祭司一朝慘死，重生成人蠢貌醜、受辱自盡的攝政王妃！\r\n世人辱她譏諷她，夫君鄙夷厭棄她，就連好妹妹也設計她，害她卑賤如牲畜。\r\n可笑！她堂堂萬人敬仰的大祭司重生而來，還能容爾等雜碎欺辱？\r\n看相算卦，風水堪輿，祖傳的天命羅盤算盡天下事。\r\n醫毒雙絕，一雙鬼手醫死人肉白骨，起死回生。\r\n一朝美貌蛻變，名動京都，引無數王公貴族折腰，攝政王不愛就不愛，自有無數好兒郎任她挑選。\r\n她瀟灑揮手，“休書一封，你我今後再無瓜葛。”\r\n豈料那位王爺卻說：“本王方才起了一卦，卦象說不能和離。”\r\n“為何？”\r\n“因為本王命中缺你。”",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010110171/11010110171.jpg?t=20220328110759",
          "viewCountDisplay": "4.3萬",
          "lastChapterUtime": "2023-10-11 11:15:28",
          "ratings": "7.7",
          "chapterCount": "3025",
          "writeStatus": "連載",
          "viewCount": "43207"
        },
        {
          "author": "剛剛好",
          "bookId": "11010102974",
          "bookName": "靈異事件簿",
          "introduction": "風小成，滿月之日，狐妖化身大闖入宴席。\r\n獨眼老道看透世仇，救下風小成，帶回山中修煉學藝，待下山之時了結前世宿仇。\r\n十年未經世事，風小成無意中救人渡劫，觸動了道門中人的利益，同時也被修煉邪術，逆天改命的李氏父子視為眼中釘，多次交手後，徹底與李氏父子結下仇恨。\r\n加之狐妖一脈並未就此滅亡，暗中勾結李氏對風小成進行圍剿。\r\n同時，風小成在多次九死一生後，發現了自己師傅，黃衍的門派之事以及身份背景，都與李氏父子還有邪門一派，包括狐妖有著千絲萬縷的關係，風小成本想一味躲避李氏和狐妖等人的追擊。\r\n但發現秘密後，心態大變，誓要將狐妖一脈產除幹淨，並要消滅邪門之術的李氏父子等人......",
          "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010102974/11010102974.jpg?t=20220711090033",
          "viewCountDisplay": "1925",
          "lastChapterUtime": "2022-03-06 15:12:25",
          "ratings": "7.2",
          "chapterCount": "1792",
          "writeStatus": "完本",
          "viewCount": "1925"
        }
      ]
    }
  ]
  // const homeData = await ownFetch('/index.do');
  const seoBannerManageVos = (homeData[0]?.bookList ?? []).map(item => {
    return {
      id: item.bookId,
      name: item.bookName,
      bookId: item.bookId,
      pcUrl: item?.bannerPic || item.cover,
      wapUrl: item?.bannerPic || item.cover,
    }
  }) as ISeoBannerManageVo[];

  const bookInfoList: IBookInfo[] = homeData[1].bookList.map(item => {
    return {
      bookId: item.bookId,
      bookName: item.bookName,
      coverWap: item.cover,
      introduction: item.introduction,
      protagonist: item.author || '主角名',
      author: item.author,
      bookTypeThreeMap: [item.author, '标签2', '标签3' ],
      totalChapterNum: item.chapterCount + '',
      totalWordSize: item.chapterCount + '1111xx字',
    }
  })

  const rankBookInfos: IRankBookDataVo[] = homeData[2].bookList.map(item => {
    return {
      bookId: item.bookId,
      bookName: item.bookName,
      coverWap: item.cover,
      bookTypeThreeMap: [item.author, '标签2', '标签3' ],
      num: item.viewCount + '影响力值',
    }
  })

  const browseBookInfos: IBookSearchVo[] = homeData[3].bookList.map((item, index) => {
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
      lastChapterUtime: item.lastUpdateTime, // 章节更新时间
      bookTypeThreeMap: [item.author, '标签2', '标签3' ],
      status: index % 2 == 1 ? EBookStatus2.连载 : EBookStatus2.完结,
      hot: 'xxxx热度',
      totalChapterNum: 'string; // 总章节数'
    }
  })

  const result: INetHomeRes = {
    seoBannerManageVos,
    seoChannelListVos: [] as ISeoChannelListVo[],
    seoColumnVos: [
      {
        code: EChannelCode.首页, // 1-首页  4-男生  5-女生  6-出版
        seoColumnManageVos: [
          {
            id: 1,
            channelId: 1,
            name: '男生精选',
            sex: ERankVoSex.男频,
            type: EColumnType.书籍类型,
            sort: 1,
            bookInfos: bookInfoList, // type=1时下发-书籍类型
            bookPackageId: 1,
          },
          {
            rankSex: ERankSex.Male,
            bookPackageId: 2,
            id: 2,
            channelId: 2,
            name: '排行榜',
            sex: ERankVoSex.男频,
            type: EColumnType.排行榜,
            sort: 1,
            rankVos: [
              {
                rankId: 12,
                rankName: '新书榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 13,
                rankName: '畅销榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 14,
                rankName: '完本榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 15,
                rankName: '好评榜',
                bookInfos: rankBookInfos,
              },
            ], // type=2时下发
          },
          {
            id: 4,
            channelId: 1,
            name: '女生精选',
            sex: ERankVoSex.女频,
            type: EColumnType.书籍类型,
            sort: 1,
            bookInfos: bookInfoList, // type=1时下发-书籍类型
            bookPackageId: 1,
          },
          {
            rankSex: ERankSex.Male,
            bookPackageId: 2,
            id: 5,
            channelId: 2,
            name: '排行榜',
            sex: ERankVoSex.女频,
            type: EColumnType.排行榜,
            sort: 1,
            rankVos: [
              {
                rankId: 12,
                rankName: '新书榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 13,
                rankName: '畅销榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 14,
                rankName: '完本榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 15,
                rankName: '好评榜',
                bookInfos: rankBookInfos,
              },
            ], // type=2时下发
          },
          {
            id: 7,
            channelId: 1,
            name: '出版精选',
            sex: ERankVoSex.出版,
            type: EColumnType.书籍类型,
            sort: 1,
            bookInfos: bookInfoList, // type=1时下发-书籍类型
            bookPackageId: 1,
          }
        ],
      },
      {
        code: EChannelCode.男生, // 1-首页  4-男生  5-女生  6-出版
        seoColumnManageVos: [
          {
            id: 1,
            channelId: 1,
            name: '男生精选',
            sex: ERankVoSex.男频,
            type: EColumnType.书籍类型,
            sort: 1,
            bookInfos: bookInfoList, // type=1时下发-书籍类型
            bookPackageId: 1,
          },
          {
            rankSex: ERankSex.Male,
            bookPackageId: 2,
            id: 2,
            channelId: 2,
            name: '排行榜',
            sex: ERankVoSex.男频,
            type: EColumnType.排行榜,
            sort: 1,
            rankVos: [
              {
                rankId: 12,
                rankName: '新书榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 13,
                rankName: '畅销榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 14,
                rankName: '完本榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 15,
                rankName: '好评榜',
                bookInfos: rankBookInfos,
              },
            ], // type=2时下发
          },
          {
            bookPackageId: 3,
            id: 3,
            channelId: 3,
            name: '分类推荐',
            sex: ERankVoSex.男频,
            type: EColumnType.分类推荐,
            sort: 1,
            bookTypeVos: [
              { classifyCode: 31, classifyName: '都市', books: browseBookInfos },
              { classifyCode: 32, classifyName: '玄幻', books: browseBookInfos },
              { classifyCode: 33, classifyName: '仙侠', books: browseBookInfos },
              { classifyCode: 34, classifyName: '历史', books: browseBookInfos },
              { classifyCode: 35, classifyName: '悬疑', books: browseBookInfos },
            ]
          }
        ],
      },
      {
        code: EChannelCode.女生, // 1-首页  4-男生  5-女生  6-出版
        seoColumnManageVos: [
          {
            id: 1,
            channelId: 1,
            name: '男生精选',
            sex: ERankVoSex.女频,
            type: EColumnType.书籍类型,
            sort: 1,
            bookInfos: bookInfoList, // type=1时下发-书籍类型
            bookPackageId: 1,
          },
          {
            rankSex: ERankSex.Male,
            bookPackageId: 2,
            id: 2,
            channelId: 2,
            name: '排行榜',
            sex: ERankVoSex.女频,
            type: EColumnType.排行榜,
            sort: 1,
            rankVos: [
              {
                rankId: 12,
                rankName: '新书榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 13,
                rankName: '畅销榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 14,
                rankName: '完本榜',
                bookInfos: rankBookInfos,
              },
              {
                rankId: 15,
                rankName: '好评榜',
                bookInfos: rankBookInfos,
              },
            ], // type=2时下发
          },
          {
            bookPackageId: 3,
            id: 3,
            channelId: 3,
            name: '分类推荐',
            sex: ERankVoSex.女频,
            type: EColumnType.分类推荐,
            sort: 1,
            bookTypeVos: [
              { classifyCode: 31, classifyName: '都市', books: browseBookInfos },
              { classifyCode: 32, classifyName: '玄幻', books: browseBookInfos },
              { classifyCode: 33, classifyName: '仙侠', books: browseBookInfos },
              { classifyCode: 34, classifyName: '历史', books: browseBookInfos },
              { classifyCode: 35, classifyName: '悬疑', books: browseBookInfos },
            ]
          }
        ],
      },
      {
        code: EChannelCode.出版, // 1-首页  4-男生  5-女生  6-出版
        seoColumnManageVos: [
          {
            id: 1,
            channelId: 1,
            name: '男生精选',
            sex: ERankVoSex.男频,
            type: EColumnType.书籍类型,
            sort: 1,
            bookInfos: bookInfoList, // type=1时下发-书籍类型
            bookPackageId: 1,
          }
        ],
      }
    ],
  }

  res.status(200).json(result)
}
