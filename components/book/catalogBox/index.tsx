import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";
import { IBookItem } from "@/typings/home.interface";
import styles from "@/components/book/catalogBox/index.module.scss";
import classNames from "classnames";

interface IProps {
  bookInfo: IBookItem;
}

const CatalogBox: FC<IProps> = ({ bookInfo }) => {
  const chapterList = [
    {
      "id": "33338367",
      "chapterName": "第一章:輸血",
      "isCharge": false
    },
    {
      "id": "33338370",
      "chapterName": "第二章：供血自願書",
      "isCharge": false
    },
    {
      "id": "33338372",
      "chapterName": "第三章：心甘情願的婚禮",
      "isCharge": false
    },
    {
      "id": "33338373",
      "chapterName": "第四章：一廂情願的愛情",
      "isCharge": false
    },
    {
      "id": "33338376",
      "chapterName": "第五章：不解釋",
      "isCharge": false
    },
    {
      "id": "33338378",
      "chapterName": "第六章：替身",
      "isCharge": false
    },
    {
      "id": "33338380",
      "chapterName": "第七章：他回來了",
      "isCharge": false
    },
    {
      "id": "33338382",
      "chapterName": "第八章：離婚",
      "isCharge": false
    },
    {
      "id": "33338383",
      "chapterName": "第九章：哪裏都不許去",
      "isCharge": true
    },
    {
      "id": "33338385",
      "chapterName": "第十章：耍花招沒用",
      "isCharge": true
    },
    {
      "id": "33338388",
      "chapterName": "第十一章：兒時夥伴",
      "isCharge": true
    },
    {
      "id": "33338390",
      "chapterName": "第十二章：出事",
      "isCharge": true
    },
    {
      "id": "33338392",
      "chapterName": "第十三章：借錢",
      "isCharge": true
    },
    {
      "id": "33338393",
      "chapterName": "第十四章：病床上的老師",
      "isCharge": true
    },
    {
      "id": "33338394",
      "chapterName": "第十五章：懷孕了",
      "isCharge": true
    },
    {
      "id": "33338397",
      "chapterName": "第十六章：被軟禁",
      "isCharge": true
    },
    {
      "id": "33338399",
      "chapterName": "第十七章：我帶你離開",
      "isCharge": true
    },
    {
      "id": "33338401",
      "chapterName": "第十八章：失去孩子",
      "isCharge": true
    }
  ];

  return <div className={styles.catalogBox}>
    { chapterList.map(item => {
      return <Link href={`/chapter/${bookInfo.bookId}/${item.id}`} key={item.id} className={styles.catalogItem}>
        <span className={classNames(styles.itemTxt, item.isCharge && styles.lockTxt)}>{ item.chapterName }</span>
        {item.isCharge ? <Image
          className={styles.itemIcon}
          width={44}
          height={44}
          src={'/images/book/lock.png'}
          alt={'>'}
        /> : null }
      </Link>
    })}
  </div>
}

export default CatalogBox;
