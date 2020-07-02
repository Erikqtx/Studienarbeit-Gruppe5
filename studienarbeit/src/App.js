import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import "./Map/Map.css";
import MapChart from "./Map/MapChart";
function App() {
  return (
    <div className="App">
      <h1 className="header">
        Police Killings in America
        <hr />
      </h1>
      <div className="Content">
        <MapChart />
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
