import React, { FC } from 'react'
import Link from "next/link";
import Image from "next/image";
import { IBookItem } from "@/typings/home.interface";
import NavBar from "@/components/common/navBar/NavBar";
import BookDetail from "@/components/book/bookDetail";
import { useRouter } from "next/router";
import classNames from "classnames";
import BrowseList from "@/components/home/browseList";
import styles from "@/components/book/index.module.scss";

interface IProps {
  bookInfo: IBookItem;
}

const MBook: FC<IProps> = ({ bookInfo }) => {
  const router = useRouter()
  const recommendData = [
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
      "viewCount": "12245"
    },
    {
      "author": "黑白",
      "bookId": "11010030838",
      "bookName": "這個贅婿有點強",
      "introduction": "三年時間都被人認為是一個混吃等死的廢物。\r\n被自己的老婆看不起，被自己的小姨子掃地出門。\r\n一朝崛起，那些看不起自己的人都要折服在自己的腳下。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010030838/11010030838.jpg?t=20210825134337",
      "viewCountDisplay": "3603",
      "lastChapterUtime": "2019-11-29 11:30:43",
      "ratings": "7.3",
      "chapterCount": "437",
      "writeStatus": "完本",
      "viewCount": "3603"
    },
    {
      "author": "林雨的魚",
      "bookId": "11010033052",
      "bookName": "神體帝尊",
      "introduction": "囚禁籠中三年，百般淩辱，親情散，婚約毀，餘子秋生不如死。\r\n一朝脫困，鑄煉神體，失去了一切，他都將親手拿回來。\r\n這萬古世間，他是最強的帝尊。",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010033052/11010033052.jpg?t=20220715104449",
      "viewCountDisplay": "3905",
      "lastChapterUtime": "2020-03-31 11:30:23",
      "ratings": "8.6",
      "chapterCount": "559",
      "writeStatus": "完本",
      "viewCount": "3905"
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
      "viewCount": "123156"
    },
    {
      "author": "李餘生",
      "bookId": "11010047868",
      "bookName": "戰神歸來",
      "introduction": "戎馬十載，一戰封神！\r\n卻突聞至親兄弟被人所害，含恨而終.....\r\n如今攜無上神威，強勢歸來，讓仇人粉身碎骨！讓所有人向他低頭！",
      "cover": "https://nbookimg.klynf.com/cppartner/1x1/11x0/110x1/11010047868/11010047868.jpg?t=20221018121356",
      "viewCountDisplay": "20.9萬",
      "lastChapterUtime": "2022-10-25 19:10:13",
      "ratings": "8.4",
      "chapterCount": "6554",
      "writeStatus": "完本",
      "viewCount": "209473"
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
      "viewCount": "84336"
    }
  ]

  return <div className={styles.bookWrap}>
    <NavBar backHref={'/'} />

    <BookDetail bookInfo={bookInfo}/>

    <div className={styles.firstChapterBox}>
      <nav className={styles.navMenu}>
        <Link
          className={classNames(styles.navItem, router.pathname === '/book/[bookId]' && styles.active)}
          href={`/book/${bookInfo.bookId}`}>
          书籍信息
        </Link>
        <Link
          className={classNames(styles.navItem, router.pathname !== '/book/[bookId]' && styles.active)}
          href={`/catalog/${bookInfo.bookId}`}>
          目录
        </Link>
      </nav>

      <div className={styles.updateCatalogTitle}>
        <span>最新章节</span>
        <span>更新时间：2023-07-06 23:2</span>
      </div>
      <div className={styles.updateCatalog}>
        <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十一章</Link>
        <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十er章</Link>
        <Link href={`/chapter/${bookInfo.bookId}/xxxxxx`}>第九百八十san章</Link>
      </div>

      <div className={styles.firstChapter}>
        <h4>第1章</h4>
        <p>36号字周三晚上7点，苏溪准时出现的府酒店门外。</p>
        <p>手机响了一下，苏溪打开微信，是苏俄正荣：【西西，谢谢你肯帮爸爸，我这里吃有点堵车，你先进去。】</p>
        <p>苏溪放慢脚步，想着等下见道林九则佛该怎么打招呼。</p>
        <p> 结婚三年，他们从来没见过面，不用费手机响了一下，苏溪打开微信，是苏俄正荣：【西西，谢谢你肯帮爸爸，我这里吃有点堵车，你先进去。】</p>
        <div className={styles.mark}/>
      </div>
      <Link href={'/'} className={styles.chapterLink}>
        剩余未加载内容，点击继续阅读
        <Image
          className={styles.icon}
          width={24}
          height={24}
          src={'/images/common/search/backIcon.png'}
          alt={''}
        />
      </Link>
    </div>

    <div className={styles.recommendBox}>
      <div className={styles.columnHead}>
        <h3 className={styles.columnTitle}>{'男生精选'}</h3>
        <button className={styles.columnLink}>
          <span>换一换  <i> > </i></span>
        </button>
      </div>
      <BrowseList list={recommendData}/>
    </div>
  </div>
}

export default MBook;
