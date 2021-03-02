import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import youtube from "../../Api/youtube";
import { Trailer } from "./Trailer/Trailer";
import "./style.css";

const ModalContent = ({ item }) => {
  const [video, setVideo] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const description = item.show.summary.replace(/<[^>]*>/g, "");
  const year = new Date(item.show.premiered);

  React.useEffect(() => {
    (async () => {
      const trailer = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResult: 5,
          key: "AIzaSyBE_1QtDxWI9VT1qqLvc8R6YdQmx5lVONU",
          q: `${item.show.name}`,
        },
      });
      console.log(trailer.data.items[0]);
      setVideo(trailer.data.items);
      setSelectedVideo(trailer.data.items[0]);
    })();
    console.log(selectedVideo);
  }, []);

  return (
    <div>
      <div className="trailer">
        <Trailer video={selectedVideo} />
      </div>
      <span>year: {year.toLocaleDateString("ru")}</span>

      <div>{description}</div>
      <div className="btn">
        <Button type="primary" onClick={() => {}}>
          <NavLink to={`/episodes/${item.show.id}`}>Список серий</NavLink>
        </Button>
      </div>
    </div>
  );
};

export default ModalContent;
