import React from "react";
import { Input, Checkbox } from "antd";
import "./Search.css";

function Search({ onChange, filterByImage }) {
  return (
    <div className="inputBar">
      <Input
        className="input-row"
        onChange={onChange}
        placeholder="Введите запрос"
      />
      <Checkbox className="checkboxCustom" onChange={filterByImage}>
        С картинками
      </Checkbox>
    </div>
  );
}
export default Search;
