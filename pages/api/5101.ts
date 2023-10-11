import type { NextApiRequest, NextApiResponse } from 'next'
import { ownFetch } from "@/server/fetch";
import { INetTagRes } from "@/typings/tag.interface";
import { EBookStatus2 } from "@/typings/book.interface";

// 5001 排行榜页面
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INetTagRes>
) {

  const keys = [
    {
      "id": 20406,
      "keyword": "獸血至尊",
      "pline": "XSYDB",
      "similarKeyword": "神血至尊,凰血至尊,龍血至尊,無上至尊,天生至尊",
      "utime": 1690377766000
    },
    {
      "id": 6653,
      "keyword": "神武至尊",
      "pline": "XSYDB",
      "similarKeyword": "神血至尊,仙武至尊,醫武至尊,靈武至尊,丹武至尊",
      "utime": 1690377763000
    },
    {
      "id": 24599,
      "keyword": "神算至尊",
      "pline": "XSYDB",
      "similarKeyword": "神血至尊,神武至尊,神魂至尊,神啟至尊,神魔至尊",
      "utime": 1690377767000
    },
    {
      "id": 292,
      "keyword": "神血帝尊",
      "pline": "XSYDB",
      "similarKeyword": "神血至尊,神道帝尊,神域帝尊,神體帝尊,神龍帝尊",
      "utime": 1690377761000
    },
    {
      "id": 23105,
      "keyword": "神魂至尊",
      "pline": "XSYDB",
      "similarKeyword": "神血至尊,神武至尊,聖魂至尊,武魂至尊,龍魂至尊",
      "utime": 1690377767000
    }
  ]
  const data = [
    {
      "author": "小妖本仙",
      "bookId": "11000162501",
      "bookName": "我曾愛你，奮不顧身",
      "introduction": "結婚兩年，素手調羹，最終也比不過他心中的那個白月光。\r\n她受夠了，也煩了單向婚姻，可是卻還是被他圈在他的世界裏。\r\n“如果你不愛我，就放開我好嗎！？”\r\n“放開你？這輩子都不可能！”",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000162501/11000162501.jpg?t=20210728144159",
      "tag": "先婚後愛",
      "protagonist": "唐芷淇、沈亦琛",
      "copyrighted": true,
      "recommend": true
    },
    {
      "author": "夏目",
      "bookId": "11000162597",
      "bookName": "撕情裂愛",
      "introduction": "言歡和沈邵城的婚姻，是她祖母死前求了沈家老太太，換來的。\r\n       後來言歡被送進監獄，被廢掉一隻手，眼睛瞎掉，滿目絕望時。\r\n       她想，祖母若還在世，大抵是會後悔的。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000162597/11000162597.jpg?t=20210728115902",
      "tag": "婚約",
      "protagonist": "林言歡、沈邵城",
      "copyrighted": true,
      "recommend": true
    },
    {
      "author": "風一樣",
      "bookId": "11010024453",
      "bookName": "極品贅婿神醫",
      "introduction": "獲得仙醫傳承，重生於蘇家贅婿身份為廚子的黃青身上。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010024453/11010024453.jpg?t=20220711130154",
      "protagonist": "黃青、蘇幼微",
      "copyrighted": true,
      "recommend": true
    },
    {
      "author": "菩提樹下",
      "bookId": "11000000115",
      "bookName": "神血至尊",
      "introduction": "少年雲乾得吞天血脈，闖亡靈禁地，滅魔君神宮，奪通天造化，攜妖族美婢君臨九霄！ ",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000000115/11000000115.jpg?t=20220809093002",
      "tag": "熱血",
      "protagonist": "雲乾、石綰綰",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "晚秋楓客",
      "bookId": "11010093386",
      "bookName": "三個師姐千嬌百媚",
      "introduction": "他是至尊王者，修羅戰神，數十萬鐵騎的王！\r\n今日，他踏血歸來，隻為守護她一人！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010093386/11010093386.jpg?t=20210621130540",
      "protagonist": "陳凡、宋雨薇",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "無良書生",
      "bookId": "11010084380",
      "bookName": "異界仙尊",
      "introduction": "破碎蒼穹，淩渡虛空，九天七界，任我逍遙；以血之途，殺出一條仙道之路，無盡的神通，無窮的責任，三千仙道，誰主浮沉？且看鬥戰聖族的傳承者如何依靠至尊瞳術，超越無數至強血脈，蘊生至尊神體，超脫輪回，永生不死，成就大道，統禦七界......",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010084380/11010084380.jpg?t=20221013132546",
      "protagonist": "慕雪瞳",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "勤勞的蜜蜂",
      "bookId": "11010139136",
      "bookName": "劍仙無敵",
      "introduction": "以殺證道，以血祭魂！昔年至尊重生三百年後，修無上神訣，掌無上神力，締造一個屬於自己的不敗傳說！殺，就殺個屍橫遍野，戰，就戰個天崩地裂！我以我血鑄長生！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010139136/11010139136.jpg?t=20230919191302",
      "protagonist": "林劫",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "魚初見",
      "bookId": "11010054826",
      "bookName": "武神紀元",
      "introduction": "諸神黃昏，人間黎明，亂世信天，不如求魔。\r\n少年獲十萬年前絕世魔神無上傳承，覺醒逆天血脈，凝聚至尊魔紋。\r\n一劍染神血，一念破紀元。\r\n回首縱橫九界仙，魔神歸來血染天。\r\n少年冷眸一凝：你的死兆星，在我眼中閃爍。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010054826/11010054826.jpg?t=20221118173605",
      "protagonist": "蘇逸辭",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "絕對零度",
      "bookId": "11010060441",
      "bookName": "都市不敗修仙",
      "introduction": "最強丹尊重歸都市攪動腥風血雨，橫行都市，這是一代至尊重生之後逆襲打臉的故事。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010060441/11010060441.jpg?t=20210817095435",
      "protagonist": "陳北風",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "寵妻的豬",
      "bookId": "11010111514",
      "bookName": "吞天至尊",
      "introduction": "三年前天才，三年後淪為廢物，三年修煉無所寸進。\r\n闖萬妖山脈身陷絕境，噬妖神之血破繭重生，一路熱血過關斬將，吞噬天下終成一代吞天至尊。\r\n誰敢說我是廢物？那你又是什麼東西？",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010111514/11010111514.jpg",
      "protagonist": "禹辰",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "太上隱者",
      "bookId": "11000079615",
      "bookName": "混沌龍帝",
      "introduction": "龍揚本是曆代龍墓和祖龍血的守護者，與前來搶奪祖龍血的眾多絕世高手同歸於盡，得到祖龍血的認主，重生在一個被逐出家族的子弟身上，在覺醒了混沌祖龍血脈那一刻，震驚了整個萬武大陸，萬族天才紛紛出世，群魔亂舞，也開始了一代龍帝的傳奇人生。\r\n吞化萬氣煉就生命龍泉，洗滌丹藥和靈藥之後功效加倍；\r\n氣禦萬武殺就一代修羅戰神，神擋殺神，佛擋殺佛；\r\n契約萬龍化就萬龍至尊，犯我龍族天威者，雖遠必誅！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000079615/11000079615.jpg?t=20210831163907",
      "tag": "龍帝",
      "protagonist": "龍揚",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "墨明棋妙",
      "bookId": "11010104480",
      "bookName": "諸天神帝",
      "introduction": "神王重生，重走修神路，修至尊神級功法《混沌至尊神靈訣》，快意恩仇，掌控諸天萬界！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010104480/11010104480.jpg?t=20230613160110",
      "tag": "功法",
      "protagonist": "蕭淩雲",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "天風海雨",
      "bookId": "11010107265",
      "bookName": "龍血武神",
      "introduction": "天澤大陸，物競天擇。\r\n武宗之內，以武為尊。\r\n身世悲苦、飽受欺壓的少年葉天，卻因為母親的離世得到了神秘父親的遺物，從此踏上了武道的巔峰之路。\r\n武宗、靈宗、暗宗三分天下，葉天身懷赤龍金血周旋於三大宗族之中。\r\n可道阻且長，母親之死？父親的身份？各大勢力的陰謀？\r\n一步步的踏平障礙，一點點的解開一段塵封百年的往事...\r\n在這期間，他習武學、掌靈力、修陣法，集數家之大成，整合天下最後成為一代武神，鑄就龍影傳說！\r\n",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010107265/11010107265.jpg?t=20221107175615",
      "tag": "複仇",
      "protagonist": "葉天",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "天墓",
      "bookId": "11010077120",
      "bookName": "都市之無敵至尊",
      "introduction": "六年前負氣出走，誓要出人頭地，六年後位列至尊，舉國無雙，然家族企業破產，疼愛他的姐姐抑鬱自殺，僅留下六歲孤女遭人欺淩。\r\n今日我蘇東煌回來了，要這腥風為伴，要那血雨淋身，要那舉世諸敵叩首謝罪......",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010077120/11010077120.jpg?t=20220624152626",
      "protagonist": "蘇東煌、林語仙",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "煞七星",
      "bookId": "11010027406",
      "bookName": "至尊天帝",
      "introduction": "萬古第一人楚青天二十三歲成至尊，攻入仙界後，搶奪無上仙書，逃回九界，家族受到仙罰，九界其他至尊趁虛而入，屠盡億億族人，楚青天帶著祖地‘神荒’逃到第七界，化名楚青。\r\n\r\n　　根基被毀，修為全廢，重新修煉，重回至尊，最終發現天大秘密，殺回仙界。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010027406/11010027406.jpg?t=20230614154341",
      "protagonist": "楚青天",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "紫峰",
      "bookId": "11010054373",
      "bookName": "龍血狂神",
      "introduction": "宗門之中陰謀詭計血雨腥風，為了守護家族榮耀葉昊不懼生死打開萬載秘境，獲得炎龍傳承，從此一飛衝天。\r\n  我要讓這所有的敵人都煙消雲散，以龍血燃燒己身踏星海神域成無上狂神。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010054373/11010054373.jpg?t=20220715144437",
      "protagonist": "葉昊",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "超神筆記本",
      "bookId": "11010116482",
      "bookName": "開局覺醒混沌神體，我有億點強",
      "introduction": "【叮！宿主簽到獲得混沌體、蒼天霸體，是否融合為最強神體？】\r\n【叮！宿主升級，連升五大境，晉升化龍巔峰境，是否繼續升級？】\r\n【叮！宿主簽到獲得鯤鵬鯨吞功，神象鎮獄功，是否進階為至尊神功？】\r\n從至尊混沌神體開始，陽昊天一路橫推，萬界無敵。\r\n九天十地，真龍遇我需匍匐。\r\n仙路爭鋒，天驕見我盡低眉！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010116482/11010116482.jpg?t=20220722172620",
      "protagonist": "陽昊天",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "鍵盤使者",
      "bookId": "11010056374",
      "bookName": "北境強龍",
      "introduction": "被人陷害，養父身死，至尊戰神王者歸來，誓要報血海深仇......",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010056374/11010056374.jpg?t=20200511102529",
      "tag": "反轉",
      "protagonist": "楊天、林飛龍",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "紫葉落楓",
      "bookId": "11000175523",
      "bookName": "至尊劍帝重生都市",
      "introduction": "仙界至尊劍帝身懷至寶，回到卑微平凡的少年時代\r\n從此，以絕對實力逆襲所有，鎮壓一切！\r\n學習不好？我有強橫元神，分心四顧，過目不忘，班級第一，全校第一，嗬嗬\r\n同學欺壓？身懷萬載煞氣，一個眼神，讓你分分鐘哭爹喊娘，屁滾尿流\r\n豪族打殺？長鋒在手，劍光森寒，動一動了，殺他個抄家滅門，血流成河\r\n異族侵擾？劍帝一念，戰！戰！戰！華族傳人，其血玄黃，撼動萬古蒼茫\r\n諸位，與本劍帝攜手一戰，可否？大好男兒，縱橫四方，我意即天意！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x0/11000175523/11000175523.jpg?t=20230614130210",
      "tag": "重生",
      "protagonist": "淩楓",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "獨孤賤",
      "bookId": "11010054459",
      "bookName": "煉魂武神",
      "introduction": "紀元本是王侯家族紀氏一族一脈殿主，卻因為父親身死被奪走至尊武魂，丟入林氏一族做牧奴，卻因星河逆轉神屍隱現獲得逆天至寶星河煉魂塔，凝練天地將一切仇敵踩在腳下。\r\n  踏過無盡妖魔屍骨，碾碎千萬強者之身，最終立於蒼穹之下成為至尊古神。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010054459/11010054459.jpg?t=20210812125208",
      "protagonist": "紀元",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "雲火連城",
      "bookId": "11010125599",
      "bookName": "至尊戰婿：未婚妻是帝國頂流",
      "introduction": "縱橫戰場的至尊戰神，隱匿於都市，本想低調生活，奈何合約老婆是帝國頂流！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010125599/11010125599.jpg?t=20230302122910",
      "protagonist": "楚炫、秦淩韻",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "瀟湘舟子",
      "bookId": "11010137847",
      "bookName": "至尊獄醫",
      "introduction": "寒門小子得祖上醫武傳承，憑著手上九枚金針，笑傲都市，坐擁佳人，成就至尊醫神。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010137847/11010137847.jpg?t=20230123225735",
      "protagonist": "燕宸、秦韻",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "瀟湘舟子",
      "bookId": "11010140710",
      "bookName": "寒門醫聖",
      "introduction": "寒門小子得祖上醫武傳承，憑著手上九枚金針，笑傲都市，坐擁佳人，成就至尊醫神。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010140710/11010140710.jpg?t=20230123225723",
      "protagonist": "燕宸、秦韻",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "一劍證道",
      "bookId": "11010127000",
      "bookName": "僵屍先生：我，最強屍王！",
      "introduction": "一覺睡醒，穿越到僵屍先生電影裏。\r\n開局任家鎮巡捕房，成為和任老爺一起躺屍的屍體。\r\n“叮：至尊屍王係統綁定中。”\r\n“複生倒計時：3:00”\r\n當著九叔麵複生，原地起飛。\r\n縱橫僵屍世界，借助係統一步步崛起，成就至尊屍神之位！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010127000/11010127000.jpg",
      "protagonist": "葉晨",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "星雲大海",
      "bookId": "11010065002",
      "bookName": "都市超級戰神",
      "introduction": "他是國之重器，統軍百萬，征戰沙場，保家衛民，戰定天下！\r\n他一人力斬十國至尊統帥，登頂至尊戰神榜，帝國第一神將！\r\n他為國征戰十年而歸，卻發現哥哥被殺，養父瘋了，家破人亡！\r\n吾怒殺伐席卷天，揮刀斬盡英雄才!\r\n古往今來，一將功成萬骨枯！\r\n戰神回歸，以一己之力吊打一切，誰與爭鋒！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010065002/11010065002.jpg?t=20210308135015",
      "protagonist": "秦帝天",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "講武",
      "bookId": "11010110605",
      "bookName": "不朽劍尊",
      "introduction": "九天大陸，武魂為尊\r\n而想要獲得武魂，唯有舉行祭天儀式，祭拜諸天\r\n少年葉天，卻在祭天儀式上，毅然拒絕覺醒強大天授武魂，從此淪為廢人，但就在葉天絕望之時\r\n一顆神秘石球，一部不朽至尊決，卻讓葉天逆天撅起，覺醒出史無前例的至尊武魂\r\n從此踏諸天，誅神魔\r\n要戰，就戰最強的妖孽\r\n要喝，就喝最烈的美酒\r\n......",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010110605/11010110605.jpg?t=20221219115632",
      "protagonist": "葉天、劉靜",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "雨歌",
      "bookId": "11010092376",
      "bookName": "龍婿戰尊",
      "introduction": "身為天神殿殿主，妻兒卻被關進鐵籠，受盡折磨欺辱；\r\n至尊龍王葉軍臨，嘔血震怒，揮師鐵甲百萬歸來......",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010092376/11010092376.jpg",
      "protagonist": "葉軍臨、蘇映雪",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "斷指",
      "bookId": "11010100101",
      "bookName": "諸神至尊",
      "introduction": "一粒塵，壓塌三千宇宙。\r\n一株蓮，斬盡日月星辰。\r\n一麵碑，永鎮九天十地。\r\n任你號稱不朽，也將在我的手下化作枯骨。\r\n任你法則滔天，也將在我的腳下徹底顫栗。\r\n踏著諸天神屍去證道，踩著萬千魔骨求長生，至尊路，無敵途，唯我陸鳴名傳千古！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010100101/11010100101.jpg?t=20230718172944",
      "protagonist": "陸鳴",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "南憶",
      "bookId": "11010035233",
      "bookName": "無敵戰神",
      "introduction": "（又名：戰神之王，戰神至尊；主角：張小玉,周天）他是護國上將，八年戎馬，聲明赫赫。\r\n為查清自己父母的死因卸甲歸家，沒成想成了大家眼中的廢物......",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010035233/11010035233.jpg",
      "protagonist": "張小玉、周天",
      "copyrighted": true,
      "recommend": false
    },
    {
      "author": "不言不語",
      "bookId": "11010103422",
      "bookName": "道友留步！我兒子問你服不服",
      "introduction": "穿越異世，有兒子，有係統，有美女婢女，有萬千強者朝拜，小日子簡直不要太舒服，妥妥的小資情調！\n聽說某至尊很囂張？關門，放我兒子，保準讓至尊變慫尊！\n某無良兒子：“阿爹，求求您了，就讓九天神女、魔界聖女、仙界女帝她們全給我當媽媽好不好？”",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010103422/11010103422.jpg",
      "protagonist": "梁誌遠",
      "copyrighted": true,
      "recommend": false
    }
  ]


  const result: INetTagRes = {
    searchType: '3',
    bookList: (data || []).map((item, index) => {
      return {
        bookId: item.bookId,
        bookName: item.bookName,
        coverWap: item.cover,
        introduction: item.introduction,
        author: item.author,
        totalWordSize: 'xxx万字数', // 书籍总字数
        clickNum: 'clickNum',
        scoreNum: '7.55', // 书籍评分
        lastChapterId: '最新章节ID', // 最新章节ID
        lastChapterUtime: '章节更新时间', // 章节更新时间
        bookTypeThreeMap: [item.author, '标签2', '标签3' ],
        status: index % 2 == 1 ? EBookStatus2.连载 : EBookStatus2.完结,
        hot: 'xxxx热度',
        totalChapterNum: 'xxxxx总章节数',
      }
    }),
    totalSize: 1000,
    isMore: 1,
    tagName: '神血至尊',
    words: keys.map(val => {
      return {
        id: val.id,
        name: val.keyword,
      }
    })
  }

  res.status(200).json(result)
}
