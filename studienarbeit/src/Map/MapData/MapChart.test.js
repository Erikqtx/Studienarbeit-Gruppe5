import React from 'react';
import ReactDOM from 'react-dom';
import MapChart from "./../MapChart";
import "@testing-library/jest-dom";
import renderer from 'react-test-renderer';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MapChart/>, div)
})

it("matches the snapshot", () => {
    const tree = renderer.create(<MapChart/>).toJSON();
    expect(tree).toMatchSnapshot();
})