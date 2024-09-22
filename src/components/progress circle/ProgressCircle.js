import React from "react";
import "./progresscircle.css";

export default function ProgressCircle({ goals, errorFetch, isLoading }) {
  const doneTasks = goals.filter((goal) => goal.checked);

  const percentage =
    goals.length > 0 ? (doneTasks.length / goals.length) * 100 : 0;
  const circleWidth = 200;
  const radius = 75;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stopColor="#6DCFFA" />
            <stop offset="40%" stopColor="#0F55E8 " />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="35px"
          r={radius}
          className="circle-background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="35px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: errorFetch || isLoading ? dashArray : dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
          fill="white"
        >
          {isLoading || errorFetch ? "Loading..." : `${percentage.toFixed(0)}%`}
        </text>
      </svg>
    </div>
  );
}
