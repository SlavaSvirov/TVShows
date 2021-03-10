import React from "react";
import { Input, Space, Checkbox } from "antd";
import styles from "./Search.module.css";

function Search({ onChange, filterByImage, placeholder, text }) {
  return (
    <div className={styles.inputBar}>
      <Input
        type="search"
        className={styles.inputRow}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus
      />
      <Checkbox className={styles.checkboxCustom} onChange={filterByImage}>
        С изображениями
      </Checkbox>
    </div>
  );
}
export default Search;
