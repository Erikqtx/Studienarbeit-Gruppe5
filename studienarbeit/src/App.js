import React from "react";
import "./css/App.css";
import Button from "./Buttons/Button";
import MapChart from "./Map/MapChart";
import USAChart2015 from "./charts/USAChart2015";
import USAChart2016 from "./charts/USAChart2016";
import PoliceKillings2015Provider from "./police-killings-context/police-killings-context-2015";
import PoliceKillings2016Provider from "./police-killings-context/police-killings-context-2016";
function App() {
  return (
    <div className="App">
      <div className="box header">
        <h1>
          Police Killings in America
          <hr />
        </h1>
      </div>
      <div className="box text">
        <p>
          In Germany, 10 People died by the hand of the police in 2015, in 2016
          there where 11. Compared to the population, this results in a balance
          of 1.3 police killings per 10.000.000 inhabitants.
          <br />
          For current reasons, the composition of the almost 50-times-bigger
          balance of the USA is shown here.
        </p>
      </div>

      <div className="box map">
        <Button />
        <PoliceKillings2016Provider>
          <USAChart2016 />
        </PoliceKillings2016Provider>
        <PoliceKillings2015Provider>
          <USAChart2015 />
        </PoliceKillings2015Provider>
        <MapChart></MapChart>
      </div>
      <div className="box info">
        <h2>Info</h2>
      </div>
    </div>
  );
}

export default App;
