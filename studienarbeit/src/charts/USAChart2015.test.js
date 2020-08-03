import React from 'react';
import { Bar } from "react-chartjs-2";
import ReactDOM from 'react-dom';
import USAChart2015 from "./USAChart2015";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import {PoliceKillings2015Provider} from "./../police-killings-context/police-killings-context-2015";

describe ('USAChart2015', () => {
   
    it("renders the Provider", () =>{
        const div = document.createElement("div");
        ReactDOM.render[<PoliceKillings2015Provider/>, div];
    });
    
    it("renders USAChart", () =>{
        const div = document.createElement("div");
        ReactDOM.render[<USAChart2015/>, div];
    });

    it("renders graph", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Bar/>, div);
    });


})


afterEach(cleanup);