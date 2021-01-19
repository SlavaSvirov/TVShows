import React from "react";
import { Spin, Modal } from "antd";
import "./TVShows.css";
import Serial from "./Serial";
import Search from "./Search";
import ModalContent from "./ModalContent";

const TVShows = () => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState(items);
  const [checked, setChecked] = React.useState(false);
  const [text, setText] = React.useState("");
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [currentShow, setCurrentShow] = React.useState();

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://api.tvmaze.com/search/shows?q=man"
        );
        const items = await response.json();
        setItems(items);
        setIsLoaded(true);
        setFilteredItems(items);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    })();
  }, []);

  React.useEffect(() => {
    const filteredItems = items.filter(i => {
      const lowerName = i.show.name.toLowerCase();
      if (checked && !i.show.image) {
        return;
      }
      return lowerName.includes(text.toLowerCase());
    });
    setFilteredItems(filteredItems);
  }, [checked, text]);

  const handleFilterByImg = event => setChecked(event.target.checked);

  const handleFilterByText = event => setText(event.target.value);

  const handleToggleModal = id => {
    if (id) {
      const currentShow = filteredItems.find(i => i.show.id === id);
      setCurrentShow(currentShow);
    }
    setIsModalVisible(prevIsModalVisible => !prevIsModalVisible);
  };

  if (error) {
    return <p>Error {error.message} </p>;
  } else if (!isLoaded) {
    return <Spin />;
  } else {
    return (
      <div>
        <Search
          onChange={handleFilterByText}
          filterByImage={handleFilterByImg}
        />

        {filteredItems.map(item => {
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

export default TVShows;
