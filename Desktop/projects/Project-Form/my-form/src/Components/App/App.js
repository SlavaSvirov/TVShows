import "./App.css";
import "antd/dist/antd.css";
import LoginForm from "../LoginForm";
import ApplicationForm from "../ApplicationForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <div className="header-wrapper">
            <span className="logo">f</span>
            <span className="logo">o</span>
            <span className="logo">r</span>
            <span className="logo">m</span>
          </div>
        </div>
        <LoginForm />
        <ApplicationForm />
      </div>
    </div>
  );
}

export default App;
