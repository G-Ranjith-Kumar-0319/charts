import React, { useEffect } from "react";
import Chart from "react-apexcharts";

interface LineChartsSecondProps {
  highlightedIndex: number;
  categoryLength: (length: number) => void;
  colorsData: string[];
}

const LineChartsSecond: React.FC<LineChartsSecondProps> = ({ highlightedIndex, categoryLength, colorsData }) => {
  const data = [
    {
      lineChartData: {
        lineData1: [10, 20, 30, 40, 50],
        lineData2: [15, 35, 20, 10, 50],
        lineData3: [20, 35, 25, 1, 55],
        lineData4: [2, 3, 2, 1, 5],
        lineData5: [0, 5, 5, 1, 5],
        lineData6: [10, 115, 15, 16, 51],
        lineData7: [35, 505, 15, 200, 225],
        lineCategories: ["AA", "BB", "CC", "DD", "EE", "FF", "GG"],
      },
    },
  ];

  const lengthData = data[0].lineChartData.lineCategories.length;

  const getColors = (colors: string[], highlightedIndex: number): string[] => {
    return colors?.map((color, index) =>
      index === 0 || index === highlightedIndex ? color : `${color}20`
    );
  };

  const lineOptions = {
    chart: {
      type: "line",
    },
    stroke: {
      width: [4, 2, 2, 2, 2, 2, 2].map((width, i) =>
        i === highlightedIndex || i === 0 ? 4 : 2
      ),
      curve: "smooth" as const,
    },
    xaxis: {
      categories: data[0].lineChartData.lineCategories,
    },
    colors: getColors(colorsData, highlightedIndex),
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
    {
      name: "Line Data 4",
      data: data[0].lineChartData.lineData4,
    },
    {
      name: "Line Data 5",
      data: data[0].lineChartData.lineData5,
    },
    {
      name: "Line Data 6",
      data: data[0].lineChartData.lineData6,
    },
    {
      name: "Line Data 7",
      data: data[0].lineChartData.lineData7,
    },
  ];

  useEffect(() => {
    categoryLength(lengthData);
  }, [lengthData, categoryLength]);

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

export default LineChartsSecond;
