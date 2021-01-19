import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import TVShows from "../Components/TVShows";
import Episodes from "../Components/Episodes";

function App() {
  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <section className="serialList">
            <Route exact path="/" component={TVShows} />
            <Route path="/episodes/:id" component={Episodes} />
          </section>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
