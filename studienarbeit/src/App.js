import React, { useState, Component } from "react";
import "./css/App.css";
import Button from "./Buttons/Button";
import "./css/Button.css";
import { render } from "@testing-library/react";
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
          </p>
        </div>
        <div className="Map"></div>
        <Button />
        <div className="States"></div>
      </div>
    );
  }
}

export default App;
