import React, { FC, useEffect, useState } from "react";
import styles from '@/components/common/paginationCom/index.module.scss';

interface IProps {
  totalPage: number;
  currentPage: number;
  onJumpChange: (page: number) => void;
}

const JumpInput:FC<IProps> = ({ currentPage, totalPage, onJumpChange }) => {
  const [value, setValue] = useState(currentPage);

  useEffect(() => {
    setValue(currentPage);
  }, [currentPage]);

  return (<div className={styles.jumpInputBox}>
    跳转至
    <input
      className={styles.jumpInput}
      value={value}
      step={1}
      onInput={(e) => {
        const page = e.target?.value && parseInt(e.target?.value) ? parseInt(e.target?.value) : 0;
        setValue(page > totalPage ? totalPage : page);
      }}
      onKeyDown={(e) => {
        if (e.keyCode === 13 || e.code === "Enter") {
          const page = e.target?.value && parseInt(e.target?.value) ? parseInt(e.target?.value) : 0;
          onJumpChange(page > totalPage ? totalPage : page)
        }
      }}
      onBlur={(e) => {
        const page = e.target?.value && parseInt(e.target?.value as string) ? parseInt(e.target?.value as string) : 1;
        if (page !== currentPage) {
          onJumpChange(page)
        }
      }}
      type={"number"}/>
    页
  </div>);
}

export default JumpInput;
