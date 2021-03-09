import React from "react";
import { Spin } from "antd";
import styles from "./Trailer.module.css";

export const Trailer = ({ video }) => {
  if (!video)
    return (
      <div>
        <Spin />
      </div>
    );
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className={styles.videoPlayer}>
      <iframe
        className={styles.video}
        src={videoSrc}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
