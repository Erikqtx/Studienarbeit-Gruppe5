Von Elissa Rimovecz an alle:  09:00 PM
import React from "react";
import ReactDOM from "react-dom";
import Map2015 from "./Map2015";
import Map2016 from "./Map2016";



it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Map2015 />, div);
});

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Map2016 />, div);
  });
