import React from "react";
import styles from "./Serial.module.css";
import noImg from "../../../img/noPhoto.png";

function Serial({ name, img, id, openModal, genres }) {
  return (
    <div className={styles.serialContainer}>
      <div>
        <img
          className={styles.showImage}
          onClick={() => openModal(id)}
          src={(img && img.medium) || noImg}
          alt={name}
        />
        <div className={styles.title}>
          {name} 
        </div>
        <div>
          {genres.toString()}
        </div>
      </div>
    </div>
  );
}

export default Serial;
