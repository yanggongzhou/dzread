import React, { FC, useEffect, useState } from 'react'
import { IBookItem } from "@/typings/home.interface";
import NavBar from "@/components/common/navBar/NavBar";
import BookDetail from "@/components/book/bookDetail";
import BrowseList from "@/components/home/browseList";
import FirstChapter from "@/components/book/firstChapter/FirstChapter";
import CatalogBox from "@/components/book/catalogBox";
import Image from "next/image";
import { IChapterListItem } from "@/typings/book.interface";
import { setCatalogVisible } from "@/store/modules/read.module";
import { useAppDispatch } from "@/store";
import BookTabs from "@/components/book/bookTabs/BookTabs";
import { getSessionBook, removeSessionBook, setSessionBook } from "@/utils/sessionStorages";
import styles from "@/components/book/index.module.scss";
import classNames from "classnames";

interface IProps {
  pathCid: string;
  chapterList: IChapterListItem[];
  bookInfo: IBookItem;
}

const WapBook: FC<IProps> = ({ bookInfo, chapterList, pathCid }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
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

  const [isShowTitle, setIsShowTitle] = useState(false);
  const onScroll = (e: Event) => {
    if (window.scrollY > 37) {
      setIsShowTitle(true);
    }
    if (window.scrollY <= 37) {
      setIsShowTitle(false);
    }
  }
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(getSessionBook());
    dispatch(setCatalogVisible(false))
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      removeSessionBook();
    }
  }, []);

  const onSwap = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  const tabList = [
    { value: 'book_info', label: '书籍信息', child: <>
        <FirstChapter bookInfo={bookInfo}/>
        <div className={styles.recommendBox}>
          <div className={styles.columnHead}>
            <h3 className={styles.columnTitle}>{'男生精选'}</h3>
            <button className={styles.columnLink} onClick={() => onSwap()}>
              <span>换一换</span>
              <Image
                className={classNames(styles.linkIcon, loading && styles.linkIconAni)}
                width={24}
                height={24}
                src={'/images/book/refresh.png'}
                alt={''}
              />
            </button>
          </div>

          <BrowseList list={recommendData}/>
        </div>
      </>
    },
    { value: 'catalog_info', label: '目录', child: <CatalogBox chapterList={chapterList} bookInfo={bookInfo}/>},
  ]

  return <main className={styles.bookWrap}>
    <NavBar backHref={'/'} title={isShowTitle ? bookInfo.bookName : ''}/>
    <BookDetail pathCid={pathCid} bookInfo={bookInfo}/>
    <BookTabs
      activeIndex={activeIndex}
      tabList={tabList}
      onChange={(ind) => {
        setSessionBook(String(ind));
        setActiveIndex(ind)
      }}
    />
  </main>
}

export default WapBook;
