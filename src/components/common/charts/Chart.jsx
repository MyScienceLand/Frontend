import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import EmptyDataFields from '../../EmptyDataFields/EmptyDataFields';

const ApexChart = ({ subjectGraphData }) => {
  const [series, setSeries] = useState(subjectGraphData?.series || []);

  useEffect(() => {
    setSeries(subjectGraphData?.series || []);
  }, [subjectGraphData]);
  const [options] = useState({
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      background: 'var(--primary-color)',
      events: {
        selection: function (chart, e) {
          // console.log(new Date(e.xaxis.min));
        },
      },
    },
    colors: ['#739AFF', '#'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'monotoneCubic',
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
  });
  return (
    <>
      {series.length > 0 ? (
        <div>
          <div className="bg-[var(--primary-color)] px-8 rounded py-2">
            <h1 className="text-[18px] font-medium">Your Progress</h1>
          </div>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      ) : (
        <EmptyDataFields title={'Subjects'} message={'No data found'} />
      )}
    </>
  );
};

export default ApexChart;
