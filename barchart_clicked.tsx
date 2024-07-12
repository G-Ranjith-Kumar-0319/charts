import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface BarChartsProps {
  dataFromBarChart: (index: number | null) => void;
  colorsData: string[];
}

const BarCharts: React.FC<BarChartsProps> = ({
  dataFromBarChart,
  colorsData,
}) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // Sample data
  const barData: number[] = [50, 50, 55, 89, 25, 56, 89];
  const barCategories: string[] = ["A", "B", "C", "d", "e", "f", "g"];

  const barOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      events: {
        dataPointSelection: (event, chartContext, config) => {
          setClickedIndex(config.dataPointIndex);
        },
      },
    },
    plotOptions: {
      bar: {
        distributed: true, // This enables different colors for each bar
      },
    },
    colors: colorsData,
    xaxis: {
      categories: barCategories,
    },
  };

  useEffect(() => {
    dataFromBarChart(clickedIndex);
  }, [clickedIndex]);

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
