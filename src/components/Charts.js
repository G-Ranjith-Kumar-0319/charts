import React, { useState } from "react";
import LineCharts from "./LineCharts";
import BarCharts from "./BarCharts";

const Charts = () => {
const [highlightedIndex, sethighlightedIndex]  = useState(null);
  const dataFromBarChart = (data) => {
    sethighlightedIndex(data);
  };
  return (
    <div>
      <h2>Line Chart</h2>

      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <LineCharts highlightedIndex={highlightedIndex}/>
        </div>
        <div style={{ width: "50%" }}>
          <BarCharts dataFromBarChart={dataFromBarChart} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
