import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = function (props) {
  const dataPointValues = props.dataPoints.map(
    function(dataPoint) {
    return dataPoint.value
  });
  const totalMaximum = Math.max(...dataPointValues);
  //recieve data points as props
  return (
    <div className="chart">
      {props.dataPoints.map(function (dataPoint) {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
