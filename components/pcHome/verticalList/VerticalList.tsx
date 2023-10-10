import React, { FC } from "react";
import { IRankVo } from "@/typings/home.interface";
import styles from "@/components/pcHome/verticalList/VerticalList.module.scss";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { ESexType, IRankBookDataVo } from "@/typings/ranking.interface";

interface IProps {
  rankVos: IRankVo[];
  sex: ESexType;
}

const rankData = [
  { color: '#AB7B00', bg: "/images/home/rank-bg0.png", icon: "/images/home/rank-more0.png" },
  { color: '#A76A00', bg: "/images/home/rank-bg1.png", icon: "/images/home/rank-more1.png" },
  { color: '#CF6300', bg: "/images/home/rank-bg2.png", icon: "/images/home/rank-more2.png" },
]

const VerticalItem: FC<{ list: IRankBookDataVo[] }> = ({ list }) => {

  return <div className={styles.verticalItemBox}>
    {list.map((item, itemInd) => {
      const routerToBookInfo = `/book/${item.bookId}`

      return <div key={item.bookId} className={styles.itemBox}>
        <Link href={routerToBookInfo} className={styles.bookIndex}>
          {itemInd + 1}
        </Link>
        <Link href={routerToBookInfo} className={styles.imageBox}>
          <Image
            className={styles.bookImage}
            onError={onImgError}
            placeholder="blur"
            blurDataURL={item.coverWap || '/images/defaultBook.png'}
            width={60}
            height={80}
            src={item.coverWap}
            alt={item.bookName}
          />
        </Link>

        <div className={styles.rightColumn}>
          <Link href={routerToBookInfo} className={styles.bookName}>{item.bookName}</Link>
          <Link href={routerToBookInfo} className={styles.viewCountDisplay}>
            {item.num}
          </Link>
          <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
            {item.threeTypeTag.join(' · ')}
          </Link>
        </div>
      </div>
    })}
  </div>
}

const VerticalList: FC<IProps> = ({ rankVos = [], sex= ESexType.Male }) => {

  return <div className={styles.verticalListBox}>
    { rankVos.map((rank, index) => {
      return <div key={1} className={styles.rankItemBox}>
        <Image
          className={styles.rankItemBg}
          width={364}
          height={396}
          src={rankData[index].bg}
          alt={''}
        />

        <Link className={styles.rankTitle} href={`/ranking/${sex}-${rank.rankId}`}>
          <h3 className={styles.titleText} style={{ color: rankData[index].color }}>{rank.rankName}</h3>
          <Image
            className={styles.titleIcon}
            width={24}
            height={24}
            src={rankData[index].icon}
            alt={'更多'}
          />
        </Link>
        <div className={styles.rankContent}>
          <VerticalItem list={rank.bookInfos.slice(0, 3)}/>
        </div>
      </div>
    }) }
  </div>
}


export default VerticalList;
