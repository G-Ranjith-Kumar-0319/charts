import React, { useState, useEffect } from "react";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";
import generateColors from "./GenerateColors";
import LineChartsSecond from "./LineChartsSecond";
import BarChartsSecond from "./BarChartsSecond";

const Charts: React.FC = () => {
  const [colorsData, setColorsData] = useState<string[] | undefined>(undefined);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const dataFromBarChart = (data: number | null): void => {
    setHighlightedIndex(data);
  };

  const categoryLength = (length: number): void => {
    setColorsData(generateColors(length));
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <LineChartsSecond
            highlightedIndex={highlightedIndex}
            categoryLength={categoryLength}
            colorsData={colorsData || []}
          />
        </div>
        <div style={{ width: "50%" }}>
          <BarChartsSecond
            dataFromBarChart={dataFromBarChart}
            colorsData={colorsData || []}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
