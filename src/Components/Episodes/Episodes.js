import React from "react";
import { Spin } from "antd";
import { connect } from "react-redux";
import { setEpisodes } from "../../data/redux/actionCreators";
import styles from "./styles.module.css";
import Search from "../Search";
import Episode from "./Episode";

const Episodes = (props) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/shows/${props.match.params.id}/episodes`
        );
        const items = await response.json();
        props.setEpisodes(items);
        setIsLoaded(true);
        setFilteredItems(items);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    })();
  }, []);

  React.useEffect(() => {
    const filteredEpisodes = props.episodes.filter((i) => {
      const lowerName = i.name.toLowerCase();
      if (checked && !i.image) {
        return;
      }
      return lowerName.includes(text.toLowerCase());
    });

    setFilteredItems(filteredEpisodes);
  }, [checked, text]);

  const handleFilterByImg = (event) => setChecked(event.target.checked);

  const handleFilterByText = (event) => setText(event.target.value);

  if (error) {
    return <p>Error {error.message} </p>;
  } else if (!isLoaded) {
    return <Spin />;
  } else {
    return (
      <div className={styles.episodeContainer}>
        <Search
          onChange={handleFilterByText}
          filterByImage={handleFilterByImg}
        />
        <div>{props.valueFromStore}</div>
        <div>
          {filteredItems.map((episode) => {
            return (
              <Episode
                name={episode.name}
                img={episode.image}
                key={episode.id}
                summary={episode.summary}
              />
            );
          })}
          <div>name</div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { episodes } = state;
  return {
    episodes,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEpisodes: (items) => dispatch(setEpisodes(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
