import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./Button";
import { render, getByTestId, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from 'react-test-renderer';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button/>, div)
})

it("matches the snapshot", () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("captures clicks", () => {
    function handleClick() {
    }
    const { getByTestId } = render(
        <Button onClick={handleClick}>Country</Button>
    );
    const node = getByTestId("country");
    fireEvent.click(node);
});

afterEach(cleanup);
