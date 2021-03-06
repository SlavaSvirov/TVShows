import React from "react";
import { connect } from "react-redux";
import { setSerials } from "../../data/redux/actionCreators";
import { Spin, Modal } from "antd";
import "./TVShows.css";
import Serial from "./Serial";
import Search from "../Search";
import ModalContent from "./ModalContent";

const TVShows = (props) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [currentShow, setCurrentShow] = React.useState();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${text}`
        );
        const items = await response.json();
        props.setSerials(items);
        setIsLoaded(true);
        setFilteredItems(items);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    })();
  }, [text]);

  React.useEffect(() => {
    const filteredItems = props.serials.filter((i) => {
      const lowerName = i.show.name.toLowerCase();
      if (checked && !i.show.image) {
        return;
      }
      return lowerName.includes(text.toLowerCase());
    });
    setFilteredItems(filteredItems);
  }, [checked, text]);

  const handleFilterByImg = (event) => setChecked(event.target.checked);

  const handleFilterByText = (event) => setText(event.target.value);

  const handleToggleModal = (id) => {
    if (id) {
      const currentShow = filteredItems.find((i) => i.show.id === id);
      setCurrentShow(currentShow);
    }
    setIsModalVisible((prevIsModalVisible) => !prevIsModalVisible);
  };

  if (error) {
    return <p>Error {error.message} </p>;
  } else if (!isLoaded) {
    return <Spin />;
  } else {
    return (
      <div className="TvShowsContainer">
        <Search
          onChange={handleFilterByText}
          filterByImage={handleFilterByImg}
        />

        {filteredItems.map((item) => {
          return (
            <Serial
              id={item.show.id}
              key={item.show.id}
              name={item.show.name}
              img={item.show.image}
              openModal={handleToggleModal}
            />
          );
        })}

        <Modal
          title="Описание Сериала"
          visible={isModalVisible}
          onOk={handleToggleModal}
          onCancel={handleToggleModal}
        >
          <ModalContent item={currentShow} />
        </Modal>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const { serials } = state;
  return {
    serials,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSerials: (items) => dispatch(setSerials(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShows);
