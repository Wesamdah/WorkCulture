import React from "react";
import "./teamgoals.css";
import Goals from "../../Home/goalscontent/Goals";

export default function TeamGoals({ goals, isLoading, errorFetch }) {
  return (
    <div className="mate-goals-container">
      <div className="actuall-goal">
        <p>GOALS</p>
        <div className="actuall-mate-goals">
          <Goals
            actual
            goals={goals}
            errorFetch={errorFetch}
            isLoading={isLoading}
          />
          <Goals
            goals={goals}
            errorFetch={errorFetch}
            isLoading={isLoading}
            actual
            done
          />
        </div>
      </div>
      <div className="x-goal">
        <p>X-POINT</p>
        <div className="x-mate-goals">
          <Goals goals={goals} errorFetch={errorFetch} isLoading={isLoading} />
          <Goals
            goals={goals}
            errorFetch={errorFetch}
            isLoading={isLoading}
            done
          />
        </div>
      </div>
    </div>
  );
}
