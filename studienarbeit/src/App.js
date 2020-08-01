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
        <p>In Germany, 10 People died by the hand of the Police in 2015, in 2016 there where 11. Compared to the population, this results in a balance of 1.3 per 10.000.000 inhabitants. 
          <br></br>
          For current reasons, the composition of the almost 50-times-bigger balance of the USA is shown here.</p>
      </div>

      <div className="box map">
        <Button />
        <MapChart />
      </div>
      <div className="box info">
        <h2>Info</h2>
        <PoliceKillings2015Provider>
          <USAChart2015></USAChart2015>
        </PoliceKillings2015Provider>
      </div>
    </div>
  );
}

export default App;
