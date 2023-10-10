import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IBookInfoItem } from "@/typings/book.interface";
import styles from "@/components/book/firstChapter/FirstChapter.module.scss";

interface IProps {
  bookInfo: IBookInfoItem;
}

const FirstChapter: FC<IProps> = ({ bookInfo }) => {

  return <div className={styles.firstChapterBox}>

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

      {/*<h4>第1章</h4>*/}
      {/*<p>36号字周三晚上7点，苏溪准时出现的府酒店门外。</p>*/}
      {/*<p>手机响了一下，苏溪打开微信，是苏俄正荣：【西西，谢谢你肯帮爸爸，我这里吃有点堵车，你先进去。】</p>*/}
      {/*<p>苏溪放慢脚步，想着等下见道林九则佛该怎么打招呼。</p>*/}
      {/*<p> 结婚三年，他们从来没见过面，不用费手机响了一下，苏溪打开微信，是苏俄正荣：【西西，谢谢你肯帮爸爸，我这里吃有点堵车，你先进去。】</p>*/}
      <div className={styles.mark}/>
    </div>
    <Link href={`/chapter/${bookInfo.bookId}/${'next chapterid xxxx'}`} className={styles.chapterLink}>
      剩余未加载内容，点击继续阅读
      <Image
        className={styles.icon}
        width={24}
        height={24}
        src={'/images/book/more.png'}
        alt={''}
      />
    </Link>
  </div>
}

export default FirstChapter;
