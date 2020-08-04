import React, { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { PoliceKillings2016Context } from "../../police-killings-context/police-killings-context-2016";
import { extractState } from "../../ChartHelper/FilterData";
export default function IdahoChart2016() {
  //load our data and save it
  const [killings] = useContext(PoliceKillings2016Context);
  //use our filter function
  const state = extractState(killings);
  //To get January entries
  const idaho = state.filter((datapoint) => datapoint === "ID");
  const idahol = idaho.length;

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
    labels: ["Idaho"],
    datasets: [
      {
        label: "Deaths per Year",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",

        data: [idahol],
      },
    ],
  }));

  return (
    <Bar
      data={data}
      width="100"
      height="100"
      options={{
        maintainAspectRatio: true,
      }}
    />
  );
}
