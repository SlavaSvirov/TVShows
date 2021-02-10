import React from "react";
import { Spin } from "antd";
import { connect } from "react-redux";
import { setEpisodes } from "../../data/redux/actionCreators";
import styles from "./styles.module.css";
import Search from "../Search";
import Episode from "./Episode";

const Episodes = props => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://api.tvmaze.com/shows/${props.match.params.id}/episodes`
        );
        const items = await response.json();
        props.setEpisodes(items);
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
        <Search />
        <div>{props.valueFromStore}</div>
        <button onClick={props.changeValue}>Тест</button>
        <div>
          {props.episodes.map(episode => {
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
    episodes
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setEpisodes: items => dispatch(setEpisodes(items))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
