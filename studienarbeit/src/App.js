import React, { useState, Component } from "react";
import "./css/App.css";
import Button from "./Buttons/Button";
import USAChart2015 from "./charts/USAChart2015";
import USAChart2016 from "./charts/USAChart2016";
import PoliceKillings2015Provider, {
  PoliceKillings2015Context,
} from "./police-killings-context/police-killings-context-2015";
import PoliceKillings2016Provider from "./police-killings-context/police-killings-context-2016";
import AlabamaChart2015 from "./charts/2015/Alabama";
import "./css/Button.css";
import Map2015 from "./Map/Map2015";
import { render } from "@testing-library/react";
/*0-5: #f4f5ba, 5-20: eded3e, 20-40: f56262, 40-100: e64343, 100-250:*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box header">
          <h1>
            Police Killings in America in 2015
            <hr />
          </h1>
        </div>
        <div className="box text">
          <p>
            In Germany, 10 People died by the hand of the police in 2015,
            Compared to the population, this results in a balance of 1.3 police
            killings per 10.000.000 inhabitants.
            <br />
            For current reasons, the composition of the almost 50-times-bigger
            balance of the USA is shown here.
            <Button />
          </p>
        </div>
        <div className="Map">
          <Map2015></Map2015>
        </div>
      </div>
    );
  }
}

export default App;
