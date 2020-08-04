import React, { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { PoliceKillings2015Context } from "../../../police-killings-context/police-killings-context-2016";
import { extractState } from "../../../ChartHelper/FilterData";
export default function FloridaChart2016() {
  //load our data and save it
  const [killings] = useContext(PoliceKillings2016Context);
  //use our filter function
  const state = extractState(killings);
  //To get January entries
  const florida = state.filter((datapoint) => datapoint === "FL");
  const florida = florida.length;

  const data = useMemo(() => ({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
            },
          },
        ],
      },
    },
    labels: ["Florida"],
    datasets: [
      {
        label: "Deaths per Year",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",

        data: [floridal],
      },
    ],
  }));

  return (
    <Bar
      data={data}
      width="300"
      height="200"
      options={{
        maintainAspectRatio: true,
      }}
    />
  );
}
