import React from "react";
import { Input, Checkbox } from "antd";
import "./Search.css";

function Search({ onChange, filterByImage, placeholder }) {
  return (
    <div className="inputBar">
      <Input
        className="input-row"
        onChange={onChange}
        placeholder={placeholder}
        size="800px"
      />
      <Checkbox className="checkboxCustom" onChange={filterByImage}>
        С изображениями
      </Checkbox>
    </div>
  );
}
export default Search;
