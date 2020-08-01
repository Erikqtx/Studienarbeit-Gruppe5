import React from 'react';
import ReactDOM from 'react-dom';
import MapChart from "./../MapChart";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MapChart/>, div)
})
