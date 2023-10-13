import React, { FC } from "react";
import { ERankSex, IRankVo } from "@/typings/home.interface";
import styles from "@/components/pcHome/verticalList/VerticalList.module.scss";
import Link from "next/link";
import Image from "next/image";
import { onImgError } from "@/components/common/image/ImageCover";
import { IRankBookDataVo } from "@/typings/ranking.interface";

interface IProps {
  rankVos: IRankVo[];
  rankSex: ERankSex;
}

const rankData = [
  { color: '#AB7B00', bg: "/images/home/rank-bg0.png", icon: "/images/home/rank-more0.png" },
  { color: '#A76A00', bg: "/images/home/rank-bg1.png", icon: "/images/home/rank-more1.png" },
  { color: '#CF6300', bg: "/images/home/rank-bg2.png", icon: "/images/home/rank-more2.png" },
]

const rankColors = [
  { color: "#E0B20A", icon: '/images/ranking/rank0.png'},
  { color: "#98B2CE", icon: '/images/ranking/rank1.png'},
  { color: "#CB857C", icon: '/images/ranking/rank2.png'},
  { color: "#B1B1B1", icon: '/images/ranking/rank3.png'}
]


const VerticalItem: FC<{ list: IRankBookDataVo[] }> = ({ list }) => {

  return <div className={styles.verticalItemBox}>
    {list.map((item, itemInd) => {
      const routerToBookInfo = `/book/${item.bookId}`

      return <div key={item.bookId} className={styles.itemBox}>
        <Link href={routerToBookInfo} className={styles.bookIndex}>
          <Image
            className={styles.rankIcon}
            width={27}
            height={32}
            src={itemInd > 2 ? rankColors[3].icon : rankColors[itemInd].icon}
            alt={item.bookName}
          />
          <span style={{ color: itemInd > 2 ? rankColors[3].color : rankColors[itemInd].color }}>{itemInd + 1}</span>
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
          {item?.bookTypeThree ? <Link href={`/book/${item.bookId}`} className={styles.bookAuthor}>
            {item?.bookTypeThree.map((val, ind) => {
              if (ind === 0) return val.name;
              return ` · ${val.name}`
            })}
          </Link> : null}
        </div>
      </div>
    })}
  </div>
}

const VerticalList: FC<IProps> = ({ rankVos = [], rankSex = ERankSex.Male }) => {

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

        <Link className={styles.rankTitle} href={`/ranking/${rankSex}-${rank.rankCode}`}>
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
