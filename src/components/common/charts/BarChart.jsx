import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import EmptyDataFields from '../../EmptyDataFields/EmptyDataFields';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        background: 'var(--primary-color)',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded',
        },
      },
      colors: ['#1A202F', 'green'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },
  });

  return (
    <div className="mt-6">
      {chartData.series.length > 0 ? (
        <>
          <div className="bg-[var(--primary-color)] px-8 rounded py-2">
            <h1 className="text-[18px] font-medium">Your Progress</h1>
          </div>
          <div id="chart">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="bar"
              height={315}
            />
          </div>
          <div id="html-dist"></div>
        </>
      ) : (
        <EmptyDataFields />
      )}

      {/* <h1>{chartData.series.length}</h1> */}
    </div>
  );
};

export default BarChart;
