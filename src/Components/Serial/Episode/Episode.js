import React from "react";
import "./Episode.css";

function Episode({ name, img, rating, id, openModal }) {
  return (
    <div className="episodeContainer">
      <div>
        <img
          className="showImage"
          onClick={() => openModal(id)}
          src={
            (img && img.medium) ||
            "https://st2.depositphotos.com/2234823/8317/i/600/depositphotos_83178060-stock-photo-digital-camera.jpg"
            // img
            //   ? img.medium
            //   : "https://st2.depositphotos.com/2234823/8317/i/600/depositphotos_83178060-stock-photo-digital-camera.jpg"
          }
          alt={name}
        />
        <div>
          {name} {rating}
        </div>
      </div>
    </div>
  );
}

export default Episode;
