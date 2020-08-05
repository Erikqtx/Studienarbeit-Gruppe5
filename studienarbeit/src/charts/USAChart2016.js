import React, { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { PoliceKillings2016Context } from "../police-killings-context/police-killings-context-2016";
import { extractMonths } from "../ChartHelper/FilterData";
export default function USAChart2016() {
  const [killings] = useContext(PoliceKillings2016Context);
  const months = extractMonths(killings);
  const january = months.filter((datapoint) => datapoint === "January");
  const januaryl = january.length;

  const february = months.filter((datapoint) => datapoint === "February");
  const februaryl = february.length;

  const march = months.filter((datapoint) => datapoint === "March");
  const marchl = march.length;

  const april = months.filter((datapoint) => datapoint === "April");
  const aprill = april.length;

  const may = months.filter((datapoint) => datapoint === "May");
  const mayl = may.length;

  const june = months.filter((datapoint) => datapoint === "June");
  const junel = june.length;

  const july = months.filter((datapoint) => datapoint === "July");
  const julyl = july.length;

  const august = months.filter((datapoint) => datapoint === "August");
  const augustl = august.length;

  const september = months.filter((datapoint) => datapoint === "September");
  const septemberl = september.length;

  const october = months.filter((datapoint) => datapoint === "October");
  const octoberl = october.length;

  const november = months.filter((datapoint) => datapoint === "November");
  const novemberl = november.length;

  const december = months.filter((datapoint) => datapoint === "December");
  const decemberl = december.length;

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
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Deaths per Month",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",

        data: [
          januaryl,
          februaryl,
          marchl,
          aprill,
          mayl,
          junel,
          julyl,
          augustl,
          septemberl,
          octoberl,
          novemberl,
          decemberl,
        ],
      },
    ],
  }));

  return (
    <div
      style={{
        responsive: "true",
        width: "40vw",
        height: "50vh",
      }}
    >
      <Bar
        data={data}
        width={700}
        height={700}
        options={{
          maintainAspectRatio: false,
          responsive: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 70,
                  max: 110,
                },
                display: true,
              },
            ],
          },
        }}
      />
    </div>
  );
}
