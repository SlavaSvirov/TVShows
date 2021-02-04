import React from "react";
import { Input } from "antd";
import styles from "./styles.module.css";

const CustomInput = ({ onChange, type = "text", name, placeholder, value }) => {
  return (
    <label className={styles.labelName}>
      {name === "date" && "Дата рождения"}
      <p className={styles.inputWrapper}>
        <Input
          className={styles.formControl}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          required
        />
      </p>
    </label>
  );
};

export default CustomInput;
