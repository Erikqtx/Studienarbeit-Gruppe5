import React, { useState, Component } from "react";
import "./css/App.css";
import USAChart2015 from "./charts/USAChart2015";
import USAChart2016 from "./charts/USAChart2016";
import PoliceKillings2015Provider, {
  PoliceKillings2015Context,
} from "./police-killings-context/police-killings-context-2015";
import PoliceKillings2016Provider from "./police-killings-context/police-killings-context-2016";
import AlabamaChart2015 from "./charts/2015/Alabama";
import "./css/Button.css";
import USAMap from "react-usa-map";
import { render } from "@testing-library/react";
/*0-5: #f4f5ba, 5-20: eded3e, 20-40: f56262, 40-100: e64343, 100-250:*/
class App extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  statesCustomConfig = () => {
    return {
      AL: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Alabama Deaths: 19", event.target.dataset),
      },
      AK: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Alaska Deaths: 5", event.target.dataset),
      },
      AZ: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Arizona Deaths: 44", event.target.dataset),
      },
      AR: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Arkansas Deaths: 5", event.target.dataset),
      },
      CA: {
        fill: "#d10a0a",
        clickHandler: (event) =>
          alert("California Deaths: 211", event.target.dataset),
      },
      CO: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Colorado Deaths: 32", event.target.dataset),
      },
      CT: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Conneticut Deaths: 4", event.target.dataset),
      },
      DE: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Delaware Deaths: 4", event.target.dataset),
      },
      FL: {
        fill: "#e64343",
        clickHandler: (event) =>
          alert("Florida Deaths: 71", event.target.dataset),
      },
      GA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Georgia Deaths: 39", event.target.dataset),
      },
      HI: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Hawaii Deaths: 5", event.target.dataset),
      },
      ID: {
        fill: "#ffff87",
        clickHandler: (event) => alert("Idaho Deaths: 8", event.target.dataset),
      },
      IL: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Illinois Deaths: 23", event.target.dataset),
      },
      IN: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Indiana Deaths: 21", event.target.dataset),
      },
      IA: {
        fill: "#ffff87",
        clickHandler: (event) => alert("Iowa Deaths: 5", event.target.dataset),
      },
      KS: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Kansas Deaths: 11", event.target.dataset),
      },
      KY: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Kentucky Deaths: 19", event.target.dataset),
      },
      LA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Louisiana Deaths: 27", event.target.dataset),
      },
      ME: {
        fill: "#ffff87",
        clickHandler: (event) => alert("Maine Deaths: 2", event.target.dataset),
      },
      MD: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Maryland Deaths: 17", event.target.dataset),
      },
      MA: {
        fill: "#ffff87",
        clickHandler: (event) =>
          alert("Massachusetts Deaths: 10", event.target.dataset),
      },
      MI: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Michigan Deaths: 20", event.target.dataset),
      },
      MN: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Minnesota Deaths: 13", event.target.dataset),
      },
      MS: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Mississippi Deaths: 12", event.target.dataset),
      },
      MO: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Missouri Deaths: 21", event.target.dataset),
      },
      MT: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Montana Deaths: 4", event.target.dataset),
      },
      NE: {
        fill: "#ffff87",
        clickHandler: (event) =>
          alert("Nebraska Deaths: 9", event.target.dataset),
      },
      NV: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Nevada Deaths: 19", event.target.dataset),
      },
      NH: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("New Hampshire Deaths: 3", event.target.dataset),
      },
      NJ: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("New Jersey Deaths: 24", event.target.dataset),
      },
      NM: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("New Mexico Deaths: 21", event.target.dataset),
      },
      NY: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("New York Deaths: 27", event.target.dataset),
      },
      NC: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("North Carolina Deaths: 26", event.target.dataset),
      },
      ND: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("North Dakota Deaths: 1", event.target.dataset),
      },
      OH: {
        fill: "#f56262",
        clickHandler: (event) => alert("Ohio Deaths: 36", event.target.dataset),
      },
      OK: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Oklahoma Deaths: 37", event.target.dataset),
      },
      OR: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Oregon Deaths: 17", event.target.dataset),
      },
      PA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Pennsylvania Deaths: 24", event.target.dataset),
      },
      RI: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Rhode Island Deaths: 1", event.target.dataset),
      },
      SC: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("South Carolina Deaths: 21", event.target.dataset),
      },
      SD: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("South Dakota Deaths: 2", event.target.dataset),
      },
      TN: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Tennessee Deaths: 21", event.target.dataset),
      },
      TX: {
        fill: "#d10a0a",
        clickHandler: (event) =>
          alert("Texas Deaths: 112", event.target.dataset),
      },
      UT: {
        fill: "#ffff87",
        clickHandler: (event) => alert("Utah Deaths: 10", event.target.dataset),
      },
      VT: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Vermont Deaths: 1", event.target.dataset),
      },
      VA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Virginia Deaths: 22", event.target.dataset),
      },
      WA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Washington Deaths: 22", event.target.dataset),
      },
      WV: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("West Virginia Deaths: 12", event.target.dataset),
      },
      WI: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Wisconsin Deaths: 12", event.target.dataset),
      },
      WY: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Wyoming Deaths: 6", event.target.dataset),
      },
    };
  };
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
            <PoliceKillings2015Provider>
              <USAChart2015></USAChart2015>
            </PoliceKillings2015Provider>
          </p>
        </div>
        <div className="Map">
          <USAMap
            customize={this.statesCustomConfig()}
            onClick={this.mapHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
