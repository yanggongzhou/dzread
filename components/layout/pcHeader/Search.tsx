import React, { FC, useEffect, useState } from 'react'
import styles from '@/components/layout/pcHeader/Search.module.scss'
import { useRouter } from "next/router";
import Image from "next/image";
import { Toast } from "antd-mobile";

interface IProps {

}

const HeaderSearch: FC<IProps> = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router.query?.searchValue || '');
  useEffect(() => {
    const _searchValue = router.query?.searchValue || ''
    setSearchValue(_searchValue);
  }, [router.locale, router]) // eslint-disable-line
  const onSearch = () => {
    if (searchValue) {
      router.push({ pathname: '/so', query: { searchValue } })
    } else {
      Toast.show('请输入搜索内容')
    }
  }

  return <div className={styles.navRight}>
    <Image
      onClick={() => onSearch()}
      className={styles.navRightIcon}
      width={16}
      height={16}
      src={'/images/home/search.png'}
      alt={""}
    />
    <input
      className={styles.navRightInput}
      type="search"
      value={searchValue}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          onSearch()
        }
      }}
      onInput={(e) => {
        // @ts-ignore
        setSearchValue(e.target.value)
      }}
      placeholder={"请输入书籍名或作者名"}
    />
  </div>
}

export default HeaderSearch
