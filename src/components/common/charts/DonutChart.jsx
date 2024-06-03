import React from 'react';
import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const chartData = {
    series: [41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      colors: ['#006C8D', '#007352', '#B21111'], // Custom colors
      labels: ['Total Attempted', 'Correct', 'Wrong'],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                formatter: function (w) {
                  // Calculate the total value
                  const totalValue = w.globals.seriesTotals.reduce(
                    (a, b) => a + b,
                    0
                  );
                  return `${totalValue}`;
                },
              },
            },
          },
        },
      },
      legend: {
        position: 'right',
        horizontalAlign: 'center',
        fontSize: '16px', // Increase font size
        markers: {
          width: 10,
          height: 10,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'left',
              fontSize: '14px', // Smaller font size for mobile
              itemMargin: {
                horizontal: 0,
                vertical: 0,
              },
            },
          },
        },
      ],
    },
  };

  return (
    <div>
      <div>
        <div className="bg-[#f8f8f8] px-4 rounded py-4 mt-6">
          <div className="flex justify-start items-end">
            <h1 className="text-[18px] px-4 font-medium">Your Score</h1>

            <button className="bg-[#1A202F] px-6 py-1 text-white">24/30</button>
          </div>
        </div>
        <div id="chart" className="bg-[#ffffff]">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
