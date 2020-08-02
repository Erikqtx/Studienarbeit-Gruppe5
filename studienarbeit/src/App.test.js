import React from "react";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from "./App";
import renderer from 'react-test-renderer';

test("renders Police Killings Header", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div)
})

it("matches the snapshot", () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
})
