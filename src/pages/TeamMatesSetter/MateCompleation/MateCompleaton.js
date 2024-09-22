import React from "react";
import "./matecompleation.css";

import ProgressCircle from "../../../components/progress circle/ProgressCircle";

export default function MateCompleaton({ goals, isLoading, errorFetch }) {
  const actuallPending = goals.filter(
    (goal) => goal.type === "actuall work" && !goal.checked
  );
  return (
    <div className="mate-compleation-container">
      <div className="mate-progress-circle">
        <ProgressCircle
          goals={goals}
          isLoading={isLoading}
          errorFetch={errorFetch}
        />
        <p style={{ marginTop: "10px", fontSize: "12px" }}>Setter Percentage</p>
      </div>
      <p style={{ fontWeight: 400, marginTop: "25px", fontSize: "20px" }}>
        Pending :
        <span style={{ marginLeft: "15px" }}> {actuallPending.length}</span>
      </p>
    </div>
  );
}
