import React from "react";
import "./css/App.css";
import "./Map/Map.css";
import Button from "./Buttons/Button";
import MapChart from "./Map/MapChart";
import USAChart2015, { USAChart2016 } from "./charts/USAChart";
import Dummy from "./dummy";
import PoliceKillings2015Provider from "./police-killings-context/police-killings-context-2015";
import Main from "./main";
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
        <PoliceKillings2015Provider>
          <USAChart2015></USAChart2015>
        </PoliceKillings2015Provider>
      </div>
    </div>
  );
}

export default App;
