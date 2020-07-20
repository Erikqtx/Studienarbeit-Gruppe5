import React, { useContext, useMemo } from "react";
import { Chart } from "react-charts";
import { PoliceKillings2015Context } from "../police-killings-context/police-killings-context-2015";

//Function for 2015
export default function USAChart2015() {
  const [killings2015Data] = useContext(PoliceKillings2015Context);
  const month = killings2015Data.map((data) => {
    return data.month;
  });
  const tuples = month.map((string, index) => {
    return [string, index];
  });
  console.log(tuples);

  const data = React.useMemo(
    () => [
      {
        label: "Deaths per Month in the year 2015",
        data: tuples,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "600px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
  return lineChart;
}
//Function for 2016
export function USAChart2016() {
  const data = useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "600px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
  return lineChart;
}
