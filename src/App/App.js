import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import TVShows from "../Components/TVShows";

function App() {
  return (
    <div className="App">
      <div className="content">
        <section className="serialList">
          <TVShows />
        </section>
      </div>
    </div>
  );
}

export default App;
