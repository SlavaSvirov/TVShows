import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../data/redux/store";
import "antd/dist/antd.css";
import styles from "./App.module.css";
import TVShows from "../TVShows";
import Episodes from "../Episodes";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <div className={styles.content}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <section className={styles.serialList}>
              <Route exact path="/" component={TVShows} />
              <Route path="/episodes/:id" component={Episodes} />
            </section>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
