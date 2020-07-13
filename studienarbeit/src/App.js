import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import "./Map/Map.css";
import Button from "./Button";
import MapChart from "./Map/MapChart";
import data_fifteen from "./Database/json files/data_fifteen.json";
import data_sixteen from "./Database/json files/data_sixteen.json";

//Testlogs
console.log(data_fifteen);
console.log(data_sixteen);
function App() {
  return (
    <div className="App">
      <div className="box header">
        <h1>
          Police Killings in America
          <hr />
        </h1>
      </div>
      <div class="box text">
        <p>Hallo ich bin ein Text</p>
      </div>

      <div className="box map">
        <Button />
        <MapChart />
      </div>
      <div className="box info">
        <p>Info</p>
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
