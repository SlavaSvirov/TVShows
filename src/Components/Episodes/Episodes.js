import React from "react";
import "./Episodes.css";

const Episodes = ({ id }) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://api.tvmaze.com/shows/${this.props.id}/episodes`
        );
        const items = await response.json();
        setItems(items);
        setIsLoaded(true);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    })();
  }, []);

   if (error) {
    return <p>Error {error.message} </p>;
  } else if (!isLoaded) {
    return <Spin />;
  } else {
  return (
    <div className="episodeContainer">
      <div>
        <img
          src={
            (items && items.image) ||
            "https://st2.depositphotos.com/2234823/8317/i/600/depositphotos_83178060-stock-photo-digital-camera.jpg"
          }
          alt="#"
        />
        <div>{items.name}</div>
      </div>
    </div>
  );
};

export default Episodes;
