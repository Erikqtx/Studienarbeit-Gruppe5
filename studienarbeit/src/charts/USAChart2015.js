import React, { useContext, useMemo } from "react";
import { Bar } from "react-chartjs-2";
import { PoliceKillings2015Context } from "../police-killings-context/police-killings-context-2015";
import { extractMonths } from "../ChartHelper/FilterData";
export default function USAChart2015() {
  //load our data and save it
  const [killings] = useContext(PoliceKillings2015Context);
  //use our filter function
  const months = extractMonths(killings);
  //To get January entries
  const january = months.filter((datapoint) => datapoint === "January");
  const januaryl = january.length;
  //February
  const february = months.filter((datapoint) => datapoint === "February");
  const februaryl = february.length;
  //March
  const march = months.filter((datapoint) => datapoint === "March");
  const marchl = march.length;
  //April
  const april = months.filter((datapoint) => datapoint === "April");
  const aprill = april.length;
  //May
  const may = months.filter((datapoint) => datapoint === "May");
  const mayl = may.length;
  //June
  const june = months.filter((datapoint) => datapoint === "June");
  const junel = june.length;
  //July
  const july = months.filter((datapoint) => datapoint === "July");
  const julyl = july.length;
  //August
  const august = months.filter((datapoint) => datapoint === "August");
  const augustl = august.length;
  //September
  const september = months.filter((datapoint) => datapoint === "September");
  const septemberl = september.length;
  //October
  const october = months.filter((datapoint) => datapoint === "October");
  const octoberl = october.length;
  //November
  const november = months.filter((datapoint) => datapoint === "November");
  const novemberl = november.length;
  //December
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
    <Bar
      data={data}
      width={700}
      height={700}
      options={{
        maintainAspectRatio: true,
        responsive: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 70,
              },
              display: true,
            },
          ],
        },
      }}
    />
  );
}
