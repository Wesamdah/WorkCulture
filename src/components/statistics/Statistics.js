import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./statistics.css";

export default function Statistics() {
  const goals = [
    {
      month: "Jun",
      percentage: 50,
      active: false,
    },
    {
      month: "Jul",
      percentage: 75,
      active: false,
    },
    {
      month: "Aug",
      percentage: 40,
      active: false,
    },
    {
      month: "Sep",
      percentage: 80,
      active: true,
    },
    {
      month: "Oct",
      percentage: 60,
      active: false,
    },
    {
      month: "Nov",
      percentage: 35,
      active: false,
    },
    {
      month: "Dec",
      percentage: 100,
      active: false,
    },
  ];
  const [nameMonth, setNameMonth] = useState("");

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart width={600} height={400} data={goals}>
        <XAxis
          dataKey="month"
          axisLine={{ stroke: "transparent" }}
          stroke="white"
          tickLine={false}
          tickMargin={12}
        />
        <YAxis
          axisLine={{ stroke: "transparent" }}
          stroke="white"
          tickFormatter={(value) => `${value}%`}
          tickLine={false}
          tickMargin={20}
        />
        <Tooltip
          wrapperStyle={{
            backgroundColor: "#023047",
            borderRadius: "8px",
            padding: "5px 10px",
            textAlign: "start",
          }}
          content={<CustomTooltip nameMonth={nameMonth} />}
          shared={false}
        />
        <Bar dataKey="percentage" radius={8} barSize={35}>
          {goals.map((goal, index) => (
            <Cell
              fill={goal.active ? "#23C1FF" : " #0002FF"}
              key={`cell-${index}`}
              onMouseEnter={() => setNameMonth(goal.month)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload, label, nameMonth }) => {
  if (active && payload.length && payload) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          color: "white",
          backgroundColor: "transparent",
          textTransform: "capitalize",
          fontWeight: "600",
        }}
      >
        <p>
          month :
          <span
            style={{
              color: "#ffb703",
              textTransform: "capitalize",
              fontWeight: "600",
              marginLeft: "5px",
            }}
          >
            {nameMonth}
          </span>
        </p>
        <p>
          percentage :
          <span
            style={{
              color: "#e9c46a",
              textTransform: "capitalize",
              fontWeight: "600",
              marginLeft: "5px",
            }}
          >
            {payload[0].value}%
          </span>
        </p>
      </div>
    );
  }
};
