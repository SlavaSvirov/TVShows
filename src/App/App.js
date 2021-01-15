import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Serial from "../Components/Serial";

function App() {
  return (
    <div className="App">
      <div className="content">
        <section className="serialList">
          <Serial />
        </section>
      </div>
    </div>
  );
}

export default App;
