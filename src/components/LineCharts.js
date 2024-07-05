import React from "react";
import Chart from "react-apexcharts";

const LineCharts = ({ highlightedIndex }) => {
  console.log("highlightedIndex", highlightedIndex);
  const data = [
    {
      lineChartData: {
        lineData1: [10, 20, 30, 40, 50],
        lineData2: [15, 35, 20, 10, 50],
        lineData3: [20, 35, 25, 1, 55],
        lineCategories: ["AA", "BB", "CC", "DD", "EE"],
      },
    },
  ];

  const lineOptions = {
    chart: {
      type: "line",
    },
    markers: {
      size:
        highlightedIndex !== null
          ? [0, 0, 0, 0, 0].map((_, i) => (i === highlightedIndex ? 8 : 3))
          : [3, 3, 3, 3, 3],
      colors:
        highlightedIndex !== null
          ? ["#00E396", "#00E396", "#00E396", "#00E396", "#FF4560"]
          : ["#00E396"],
      strokeWidth: [2],
      hover: {
        sizeOffset: 8,
      },
    },
    xaxis: {
      categories: data[0].lineChartData.lineCategories,
    },
    colors: ["#008FFB", "#00E396", "#265658"],
  };

  const lineSeries = [
    {
      name: "Line Data 1",
      data: data[0].lineChartData.lineData1,
    },
    {
      name: "Line Data 2",
      data: data[0].lineChartData.lineData2,
    },
    {
      name: "Line Data 3",
      data: data[0].lineChartData.lineData3,
    },
  ];

  return (
    <div>
      <Chart
        options={lineOptions}
        series={lineSeries}
        type="line"
        width="1200"
      />
    </div>
  );
};

export default LineCharts;
