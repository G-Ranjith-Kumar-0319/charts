import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface BarChartsSecondProps {
  dataFromBarChart: (index: number | null) => void;
  colorsData: string[];
}

const BarChartsSecond: React.FC<BarChartsSecondProps> = ({ dataFromBarChart, colorsData }) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // Sample data
  const barData = [50, 50, 55, 89, 25, 56, 89];
  const barCategories = ["A", "B", "C", "D", "E", "F", "G"];

  const getColors = (colors: string[], clickedIndex: number | null): string[] => {
    return colors?.map((color, index) =>
      index === 0 || index === clickedIndex ? color : `${color}80`
    );
  };

  const barOptions = {
    chart: {
      type: "bar",
      events: {
        dataPointSelection: (event: any, chartContext: any, config: any) => {
          setClickedIndex(config.dataPointIndex);
        },
      },
    },
    plotOptions: {
      bar: {
        distributed: true, // This enables different colors for each bar
      },
    },
    colors: getColors(colorsData, clickedIndex),
    xaxis: {
      categories: barCategories,
    },
  };

  useEffect(() => {
    dataFromBarChart(clickedIndex);
  }, [clickedIndex, dataFromBarChart]);

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

export default BarChartsSecond;
