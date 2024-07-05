import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface BarChartsProps {
  dataFromBarChart: (index: number | null) => void;
}

const BarCharts: React.FC<BarChartsProps> = ({ dataFromBarChart }) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  // Sample data
  const barData: number[] = [50, 50, 55];
  const barCategories: string[] = ["A", "B", "C", "D", "E"];

  const barOptions = {
    chart: {
      type: "bar",
      events: {
        dataPointSelection: (event: any, chartContext: any, config: any) => {
          setHighlightedIndex(config.dataPointIndex);
        },
        dataPointMouseEnter: (event: any, chartContext: any, config: any) => {
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
