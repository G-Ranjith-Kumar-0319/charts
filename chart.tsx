import React, { useState } from "react";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";
import generateColors from "./GenerateColors";

interface ChartsProps {}

const Charts: React.FC<ChartsProps> = () => {
  const [colorsData, setColorsData] = useState<string[] | undefined>();
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const dataFromBarChart = (data: number) => {
    setHighlightedIndex(data);
  };

  const categoryLength = (length: number) => {
    setColorsData(generateColors(length));
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <LineCharts
            highlightedIndex={highlightedIndex}
            categoryLength={categoryLength}
            colorsData={colorsData}
          />
        </div>
        <div style={{ width: "50%" }}>
          <BarCharts
            dataFromBarChart={dataFromBarChart}
            colorsData={colorsData}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
