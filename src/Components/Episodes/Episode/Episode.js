import React from "react";
import { Button } from "antd";
import cn from "classnames";
import Search from "../../Search";
import styles from "./styles.module.css";

const Episode = ({ name, img, summary }) => {
  const exactSummary = summary || "без описания";
  const [description, setDescription] = React.useState(
    exactSummary.slice(0, 100)
  );
  const [isRollUp, setIsRollUp] = React.useState(false);
  const toShowRollUpBtn = exactSummary.length > 100;

  const handleRollUp = () => {
    if (!isRollUp) {
      setDescription(exactSummary);
    } else {
      setDescription(exactSummary.slice(0, 100));
    }
    setIsRollUp(prevIsRollup => !prevIsRollup);
  };

  return (
    <div className={styles.episodeContainer}>
      <div className={styles.everyEpisode}>
        <img
          className="showImage"
          src={
            (img && img.medium) ||
            "https://st2.depositphotos.com/2234823/8317/i/600/depositphotos_83178060-stock-photo-digital-camera.jpg"
          }
          alt={name}
        />
        <div>{name}</div>
      </div>
      <p className={cn({ [styles.ellips]: !isRollUp })}>
        {description.replace(/<[^>]*>/g, "")}
      </p>
      <div className="btn">
        {toShowRollUpBtn && (
          <Button type="primary" onClick={handleRollUp}>
            {isRollUp ? "Свернуть" : "Развернуть"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Episode;
