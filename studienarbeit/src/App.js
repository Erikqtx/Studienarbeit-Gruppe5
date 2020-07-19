import React from "react";
import "./css/App.css";
import "./Map/Map.css";
import Button from "./Button";
import MapChart from "./Map/MapChart";
import Dummy from "./dummy";
import { PoliceKillings2015Provider } from "./police-killings-context/police-killings-context-2015";
function App() {
  return (
    <div className="App">
      <div className="box header">
        <h1>
          <PoliceKillings2015Provider>
            Police Killings in America
            <hr />
            <Dummy></Dummy>
          </PoliceKillings2015Provider>
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
