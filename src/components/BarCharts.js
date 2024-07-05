import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
const BarCharts = ({ dataFromBarChart }) => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  // Sample data
  const barData = [50, 50, 55];
  const barCategories = ["A", "B", "C", "D", "E"];

  const barOptions = {
    chart: {
      type: "bar",
      events: {
        dataPointSelection: (event, chartContext, config) => {
          setHighlightedIndex(config.dataPointIndex);
        },
        dataPointMouseEnter: (event, chartContext, config) => {
          setHighlightedIndex(config.dataPointIndex);
        },
        dataPointMouseLeave: () => {
          setHighlightedIndex(null);
        },
      },
    },
    colors: ["#00E396", "#00E396", "#00E396"],
    xaxis: {
      categories: barCategories,
    },
  };

  useEffect(() => {
    dataFromBarChart(highlightedIndex);
  }, [highlightedIndex]);
  return (
    <div>
      <h2>Bar Chart</h2>
      <Chart
        options={barOptions}
        series={[{ name: "Bar Data", data: barData }]}
        type="bar"
        width="1200"
      />
    </div>
  );
};

export default BarCharts;
