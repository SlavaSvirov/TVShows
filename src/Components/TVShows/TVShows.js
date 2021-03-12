import React, { Suspense } from "react";
import { connect } from "react-redux";
import { setSerials, setText } from "../../data/redux/actionCreators";
import { Spin, Modal } from "antd";
import SearchBar from "../Search";
import Serial from "./Serial";
import ModalContent from "./ModalContent";
import { filterSerialsByImg } from "../../services/filterSerialsByImg";
import styles from "./TVShows.module.css";
import { Genres } from "./Genres/Genres";


const TVShows = ({serials, setSerials, text, setText}) => {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [genres, setGenres] = React.useState([])
  const [checked, setChecked] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [currentShow, setCurrentShow] = React.useState();


  React.useEffect(() => {
    (async () => {
        try {
          const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${text}`
          );
        
          const items = await response.json();
          const preparedItems = filterSerialsByImg(items, checked);
          setSerials(preparedItems);
          setIsLoaded(true);
          setFilteredItems(preparedItems);
        } catch (error) {
          setIsLoaded(true);
          setError(error);
        }
      
    })();
  }, [text]);

  React.useEffect(() => {
    const filteredItems = serials.filter((serial) => {
      const lowerName = serial.show.name.toLowerCase();
      if (checked && !serial.show.image) {
        return;
      }
      return lowerName.includes(text.toLowerCase());
    });
    setFilteredItems(filteredItems);
    
  }, [checked, text]);

  React.useEffect(() => {
    console.log(genres);
    if (!genres.length) {
      setFilteredItems(serials)
    } else {
      // let filteredGenres = serials.filter((el) => {
      //   return el.show.genres.find((genre, i) => {
      //     return genre.includes(genres[i])
      //   })
      // });
      let filteredGenres = serials.filter((el) => {
        for (let i = 0; i < genres.length; i++){
          if (el.show.genres.length === 0) {
              return false
            }
          for (let j = 0; j < el.show.genres.length; j++){
            if (el.show.genres.includes(genres[i])) {
            return true;
            }
            if (i === genres.length - 1) {
              return false
            }
            }
        }
        // 
        //   debugger;
        //   if (el.show.genres.indexOf(genres[i] !== -1)) {
        //    return true
        //  }
          return true
      });
      console.log(serials);
      console.log(filteredGenres);
      setFilteredItems(filteredGenres);
    }
  },[genres])

  const handleFilterByImg = (event) => setChecked(event.target.checked);

  const handleFilterByText = (event) => setText(event.target.value);

  const handleFilterbyGenres = (event) => setGenres(event);

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
      <div className={styles.TvShowsContainer}>
          <SearchBar
          onChange={handleFilterByText}
          filterByImage={handleFilterByImg}
          placeholder={"Введите название сериала"}
          text={text}
        />
        <Genres onChange={ handleFilterbyGenres}/>
        <div className={styles.serialsContainer}>
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
        </div>
       
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
  const { serials, text } = state;
  return {
    serials,
    text
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSerials: (items) => dispatch(setSerials(items)),
    setText: (items) => dispatch(setText(items))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShows);
