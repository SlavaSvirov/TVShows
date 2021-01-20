import React from "react";
import { Input, Checkbox } from "antd";
import "./Search.css";

function Search() {
  return (
    <div className="inputBar">
      <Input placeholder="Введите запрос" />
      <Checkbox>С картинками</Checkbox>
    </div>
  );
}
export default Search;
