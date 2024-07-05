import React, { useState } from "react";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";

const Charts: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const dataFromBarChart = (data: number | null): void => {
    setHighlightedIndex(data);
  };

  return (
    <div>
      <h2>Line Chart</h2>

      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <LineCharts highlightedIndex={highlightedIndex} />
        </div>
        <div style={{ width: "50%" }}>
          <BarCharts dataFromBarChart={dataFromBarChart} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
