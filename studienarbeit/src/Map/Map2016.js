import React, { Component, render } from "react";
import USAMap from "react-usa-map";
class Map2016 extends Component {
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  statesCustomConfig = () => {
    return {
      AL: {
        fill: "#f56262",
        clickHandler: (event) =>
          render("Alabama Deaths: 27", event.target.dataset),
      },
      AK: {
        fill: "#ffff87",
        clickHandler: (event) =>
          alert("Alaska Deaths: 8", event.target.dataset),
      },
      AZ: {
        fill: "#e64343",
        clickHandler: (event) =>
          alert("Arizona Deaths: 50", event.target.dataset),
      },
      AR: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Arkansas Deaths: 22", event.target.dataset),
      },
      CA: {
        fill: "#d10a0a",
        clickHandler: (event) =>
          alert("California Deaths: 161", event.target.dataset),
      },
      CO: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Colorado Deaths: 32", event.target.dataset),
      },
      CT: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Conneticut Deaths: 5", event.target.dataset),
      },
      DE: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Delaware Deaths: 1", event.target.dataset),
      },
      FL: {
        fill: "#e64343",
        clickHandler: (event) =>
          alert("Florida Deaths: 73", event.target.dataset),
      },
      GA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Georgia Deaths: 30", event.target.dataset),
      },
      HI: {
        fill: "#ffff87",
        clickHandler: (event) =>
          alert("Hawaii Deaths: 7", event.target.dataset),
      },
      ID: {
        fill: "#f4f5ba",
        clickHandler: (event) => alert("Idaho Deaths: 5", event.target.dataset),
      },
      IL: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Illinois Deaths: 29", event.target.dataset),
      },
      IN: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Indiana Deaths: 20", event.target.dataset),
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
          alert("Kentucky Deaths: 22", event.target.dataset),
      },
      LA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Louisiana Deaths: 22", event.target.dataset),
      },
      ME: {
        fill: "#ffff87",
        clickHandler: (event) => alert("Maine Deaths: 2", event.target.dataset),
      },
      MD: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Maryland Deaths: 16", event.target.dataset),
      },
      MA: {
        fill: "#ffff87",
        clickHandler: (event) =>
          alert("Massachusetts Deaths: 14", event.target.dataset),
      },
      MI: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Michigan Deaths: 16", event.target.dataset),
      },
      MN: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Minnesota Deaths: 14", event.target.dataset),
      },
      MS: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Mississippi Deaths: 11", event.target.dataset),
      },
      MO: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Missouri Deaths: 23", event.target.dataset),
      },
      MT: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Montana Deaths: 5", event.target.dataset),
      },
      NE: {
        fill: "#ffff87",
        clickHandler: (event) =>
          alert("Nebraska Deaths: 8", event.target.dataset),
      },
      NV: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Nevada Deaths: 15", event.target.dataset),
      },
      NH: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("New Hampshire Deaths: 2", event.target.dataset),
      },
      NJ: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("New Jersey Deaths: 14", event.target.dataset),
      },
      NM: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("New Mexico Deaths: 22", event.target.dataset),
      },
      NY: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("New York Deaths: 25", event.target.dataset),
      },
      NC: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("North Carolina Deaths: 36", event.target.dataset),
      },
      ND: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("North Dakota Deaths: 1", event.target.dataset),
      },
      OH: {
        fill: "#f56262",
        clickHandler: (event) => alert("Ohio Deaths: 28", event.target.dataset),
      },
      OK: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Oklahoma Deaths: 32", event.target.dataset),
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
          alert("Rhode Island Deaths: 2", event.target.dataset),
      },
      SC: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("South Carolina Deaths: 18", event.target.dataset),
      },
      SD: {
        fill: " #ffff87",
        clickHandler: (event) =>
          alert("South Dakota Deaths: 6", event.target.dataset),
      },
      TN: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Tennessee Deaths: 25", event.target.dataset),
      },
      TX: {
        fill: "#e64343",
        clickHandler: (event) =>
          alert("Texas Deaths: 93", event.target.dataset),
      },
      UT: {
        fill: "#ffff87",
        clickHandler: (event) => alert("Utah Deaths: 8", event.target.dataset),
      },
      VT: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Vermont Deaths: 2", event.target.dataset),
      },
      VA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Virginia Deaths: 19", event.target.dataset),
      },
      WA: {
        fill: "#f56262",
        clickHandler: (event) =>
          alert("Washington Deaths: 27", event.target.dataset),
      },
      WV: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("West Virginia Deaths: 13", event.target.dataset),
      },
      WI: {
        fill: "#eded3e",
        clickHandler: (event) =>
          alert("Wisconsin Deaths: 18", event.target.dataset),
      },
      WY: {
        fill: "#f4f5ba",
        clickHandler: (event) =>
          alert("Wyoming Deaths: 2", event.target.dataset),
      },
    };
  };
  render() {
    return (
      <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
    );
  }
}
export default Map2016;
