import React from "react";
import DiscIcon from "./DiscIcon.jsx";

const FlightChart = (props) => {
  return (
    <div className="flight-chart-container">
      <h2 id="flight-chart-header">Flight Chart</h2>
      <div className="flight-chart">
        {props.currentBag.map((disc) => {
          return <DiscIcon disc={disc} key={disc.id} />;
        })}
      </div>
      <div className="flight-chart-footer">
        <div>OverStable</div>
        <div>Stable</div>
        <div>UnderStable</div>
      </div>
    </div>
  );
};

export default FlightChart;
