import React from "react";
import { Button } from "antd";
import cn from "classnames";
import styles from "./styles.module.css";
import noImg from "../../../img/noPhoto.png";

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
    setIsRollUp((prevIsRollup) => !prevIsRollup);
  };

  return (
    <div className={styles.episodeContainer}>
      <div className={styles.everyEpisode}>
        <img
          className={styles.imageShow}
          src={(img && img.medium) || noImg}
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
