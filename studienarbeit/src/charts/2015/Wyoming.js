import React, { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { PoliceKillings2015Context } from "../../police-killings-context/police-killings-context-2015";
import { extractState } from "../../ChartHelper/FilterData";
export default function WyomingChart2015() {
  //load our data and save it
  const [killings] = useContext(PoliceKillings2015Context);
  //use our filter function
  const state = extractState(killings);
  //To get January entries
  const wyoming = state.filter((datapoint) => datapoint === "WY");
  const wyomingl = wyoming.length;

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
    labels: ["Wyoming"],
    datasets: [
      {
        label: "Deaths per Year",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",

        data: [wyomingl],
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
