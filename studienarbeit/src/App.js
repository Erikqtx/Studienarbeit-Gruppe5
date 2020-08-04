import React, { useState, Component } from "react";
import "./css/App.css";
import Button from "./Buttons/Button";
import ButtonState from "./Buttons/ButtonState";
import "./css/Button.css";
import Map2015 from "./Map/Map2015";
import { render } from "@testing-library/react";
import ButtonAlaska from "./Buttons/ButtonAlaska";
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
        <div className="Map"></div>
        <ButtonState></ButtonState>
        <ButtonAlaska></ButtonAlaska>
      </div>
    );
  }
}

export default App;
