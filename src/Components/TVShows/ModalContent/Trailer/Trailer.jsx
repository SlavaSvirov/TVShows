import React from "react";
import styles from "./Trailer.module.css";

export const Trailer = ({ video }) => {
  if (!video) return <div> loading...</div>;
  console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className={styles.videoPlayer}>
      <iframe src={videoSrc} frameBorder="0"></iframe>
    </div>
  );
};
