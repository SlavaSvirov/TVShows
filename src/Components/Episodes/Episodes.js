import React from "react";
import styles from "./styles.module.css";
import { Spin } from "antd";
import Episode from "./Episode";

const Episodes = props => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://api.tvmaze.com/shows/${props.match.params.id}/episodes`
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
      <div className={styles.episodeContainer}>
        <div>
          {items.map(item => {
            return (
              <Episode
                name={item.name}
                img={item.image.medium}
                key={item.id}
                summary={item.summary}
              />
            );
          })}
          <div>name</div>
        </div>
      </div>
    );
  }
};
export default Episodes;
