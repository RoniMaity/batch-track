import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div
        style={{
          backgroundColor: "white",
          color: "rgb(22, 65, 194)",
          padding: "8px 12px",
          border: "1px solid rgb(22, 65, 194)",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <p style={{ margin: 0 }}>
          {name}: {value}
        </p>
      </div>
    );
  }
  return null;
};

const AttendancePieChart = ({ present, width, height, outerRadius }) => {
  const total = 100;
  const absent = Math.round(total - present);

  const data = [
    { name: "Present", value: present },
    { name: "Absent", value: absent },
  ];

  return (
    <PieChart width={width} height={height}>
      <defs>
        <radialGradient
          id="presentGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        <radialGradient
          id="absentGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#b91c1c" />
        </radialGradient>
      </defs>

      {/* Pie Chart */}
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={outerRadius}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        dataKey="value"
      >
        <Cell fill="rgb(22, 65, 194)" />
        <Cell fill="grey" />
      </Pie>

      <Tooltip content={CustomTooltip} />
      <Legend />
    </PieChart>
  );
};

export default AttendancePieChart;
