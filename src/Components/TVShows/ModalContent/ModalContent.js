import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import "./style.css";

const ModalContent = ({ item }) => {
  const description = item.show.summary.replace(/<[^>]*>/g, "");
  const year = new Date(item.show.premiered);

  return (
    <div>
      year: {year.toLocaleDateString("ru")} {description}
      <div className="btn">
        <Button type="primary" onClick={() => {}}>
          <NavLink to={`/episodes/${item.show.id}`}>Список серий</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default ModalContent;
