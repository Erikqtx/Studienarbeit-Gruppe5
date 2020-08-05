import React from "react";
import { Bar } from "react-chartjs-2";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PoliceKillings2016Provider } from "./../police-killings-context/police-killings-context-2016";
import RaceChart2016 from "./RaceUSAChart2016";

describe("RaceChart2016", () => {
  it("renders the Provider", () => {
    const div = document.createElement("div");
    ReactDOM.render[((<PoliceKillings2016Provider />), div)];
  });

  it("renders USAChart", () => {
    const div = document.createElement("div");
    ReactDOM.render[((<RaceChart2016 />), div)];
  });

  it("renders graph", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Bar />, div);
  });
});

afterEach(cleanup);
