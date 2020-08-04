import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import App from "./App";
import Button from "./Buttons/Button";
import USAChart2015 from "./charts/USAChart2015";
import { PoliceKillings2015Provider } from "./police-killings-context/police-killings-context-2015";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("matches the snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders header", () => {
  const { container } = render(<h1 />);
  container.querySelector("box header");
});

it("renders text", () => {
  const { container } = render(<p />);
  container.querySelector("box text");
});

it("renders box map", () => {
  const { container } = render(<Button />);
  container.querySelector("box map");
});

it("renders box info", () => {
  const { container } = render(
    <h2 />,
    <PoliceKillings2015Provider />,
    <USAChart2015 />
  );
  container.querySelector("box info");
});

afterEach(cleanup);
