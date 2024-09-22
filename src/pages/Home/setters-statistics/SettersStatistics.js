import React from "react";
import "./settersstatistics.css";
import Statistics from "../../../components/statistics/Statistics";

export default function SettersStatistics() {
  return (
    <div className="card-3">
      <p style={{ fontSize: "20px", fontWeight: "600" }}>Setters Statistics</p>
      <div
        className="Statistics-container"
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <Statistics />
      </div>
    </div>
  );
}
