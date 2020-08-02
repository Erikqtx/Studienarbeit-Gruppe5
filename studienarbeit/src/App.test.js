import React from "react";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from "./App";
import renderer from 'react-test-renderer';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div)
})

it("matches the snapshot", () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
})

it("renders header", () => {
    const {container} = render(<h1/>)
    container.querySelector('box header')
  });
