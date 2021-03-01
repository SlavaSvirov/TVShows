import React from "react";
import "./Serial.css";
import noImg from "../../../img/noPhoto.png";

function Serial({ name, img, rating, id, openModal }) {
  return (
    <div className="serialContainer">
      <div>
        <img
          className="showImage"
          onClick={() => openModal(id)}
          src={(img && img.medium) || noImg}
          alt={name}
        />
        <div>
          {name} {rating}
        </div>
      </div>
    </div>
  );
}

export default Serial;
