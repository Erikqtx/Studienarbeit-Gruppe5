import React, { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { PoliceKillings2016Context } from "../police-killings-context/police-killings-context-2016";
import { extractRace } from "../ChartHelper/FilterData";
export default function RaceChart2016() {
  const [killings] = useContext(PoliceKillings2016Context);
  const race = extractRace(killings);
  const white = race.filter((datapoint) => datapoint === "White");
  const whitel = white.length;

  const black = race.filter((datapoint) => datapoint === "Black");
  const blackl = black.length;

  const hispanic = race.filter((datapoint) => datapoint === "Hispanic/Latino");
  const hispanicl = hispanic.length;

  const asian = race.filter(
    (datapoint) => datapoint === "Asian/Pacific Islander"
  );
  const asianl = asian.length;

  const native = race.filter((datapoint) => datapoint === "Native American");
  const nativel = native.length;

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
    labels: [
      "White",
      "Black",
      "Hispanic/Latino",
      "Asian/Pacific Islander",
      "Native American",
    ],
    datasets: [
      {
        label: "Deaths in 2016",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",

        data: [whitel, blackl, hispanicl, asianl, nativel],
      },
    ],
  }));

  return (
    //Änderbar mit nen div style { } aber responsive keine Chance
    <Bar
      data={data}
      width={800}
      height={800}
      options={{
        maintainAspectRatio: false,
        responsive: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 600,
              },
              display: true,
            },
          ],
        },
      }}
    />
  );
}
