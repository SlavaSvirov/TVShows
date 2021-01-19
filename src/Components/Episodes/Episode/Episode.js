import React from "react";
import styles from "./styles.module.css";

const Episode = ({ name, img, summary }) => {
  const [description, setDescription] = React.useState(summary.slice(0, 100));
  // .replace(/<[^>]*>/g, "");
  const [isRollUp, setIsRollUp] = React.useState(false);

  const handleRollUp = () => {
    if (!isRollUp) {
      setDescription(summary);
    } else {
      setDescription(summary.slice(0, 100));
    }
    setIsRollUp(prevIsRollup => !prevIsRollup);
  };

  return (
    <div className={styles.episodeContainer}>
      <div className={styles.everyEpisode}>
        <img
          className="showImage"
          src={
            img ||
            "https://st2.depositphotos.com/2234823/8317/i/600/depositphotos_83178060-stock-photo-digital-camera.jpg"
          }
          alt={name}
        />
        <div>{name}</div>
      </div>
      <p>{description.replace(/<[^>]*>/g, "")}</p>
      <button onClick={handleRollUp}>Развернуть</button>
    </div>
  );
};

export default Episode;
