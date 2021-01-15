import React from "react";
import { Input, Checkbox } from "antd";
import "./Search.css";

function Search({ onChange, filterByImage }) {
  return (
    <div className="inputBar">
      <Input placeholder="Введите запрос" onChange={onChange} />
      <Checkbox onChange={filterByImage}>С картинками</Checkbox>
    </div>
  );
}
export default Search;
