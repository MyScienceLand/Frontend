import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";

const generateDayWiseTimeSeries = (baseVal, count, yrange) => {
  let series = [];
  let x = baseVal;
  let y =
    Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

  for (let i = 0; i < count; i++) {
    series.push([x, y]);
    x += 86400000; // Increment by one day
    y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  }

  return series;
};

const ApexChart = () => {
  const [series] = useState([
    {
      name: "South",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 60,
        }
      ),
    },
    {
      name: "North",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 20,
        }
      ),
    },
    {
      name: "Central",
      data: generateDayWiseTimeSeries(
        new Date("11 Feb 2017 GMT").getTime(),
        20,
        {
          min: 10,
          max: 15,
        }
      ),
    },
  ]);

  const [options] = useState({
    chart: {
      type: "area",
      height: 350,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
      },
    },
    colors: ["#008FFB", "#00E396", "#CED4DC"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "monotoneCubic",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      type: "datetime",
    },
  });

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default ApexChart;
