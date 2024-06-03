import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ series, colors, heading }) => {
  const [chartData, setChartData] = useState({
    series,
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      legend: {
        show: false, // Initially show legend
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          endingShape: "rounded",
        },
      },
      colors,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },

      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div>
      <div>
        <div className="bg-[#f8f8f8] px-4  rounded py-4 mt-6">
          <h1 className="text-[18px] px-4 font-medium">{heading}</h1>
        </div>
        <div id="chart" className="bg-[#ffffff] ">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarChart;
