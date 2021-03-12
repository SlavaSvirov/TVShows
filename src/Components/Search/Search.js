import React from "react";
import { Input, Checkbox } from "antd";
import styles from "./Search.module.css";

const { Search } = Input;

export default function SearchBar({ onChange, filterByImage, placeholder }) {
  return (
    <div className={styles.inputBar}>
      <Search ptype="search"
        className={styles.inputRow}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus
        enterButton />
      {/* <Input
        type="search"
        className={styles.inputRow}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus
      /> */}
      <Checkbox className={styles.checkboxCustom} onChange={filterByImage}>
        С изображениями
      </Checkbox>
    </div>
  );
}
