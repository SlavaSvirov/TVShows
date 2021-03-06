import React from "react";
import { Input, Checkbox } from "antd";
import styles from "./Search.module.css";

function Search({ onChange, filterByImage, placeholder, text }) {
  return (
    <div className={styles.inputBar}>
      <Input
        className={styles.inputRow}
        onChange={onChange}
        placeholder={placeholder}
        size="800px"
      />
      <Checkbox className={styles.checkboxCustom} onChange={filterByImage}>
        С изображениями
      </Checkbox>
    </div>
  );
}
export default Search;
