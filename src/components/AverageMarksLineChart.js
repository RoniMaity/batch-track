"use client";

import { Flex } from "antd";
import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ComposedChart,
  Bar,
  Cell,
  Area,
  CartesianGrid,
} from "recharts";
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
const AverageMarksLineChart = ({ data, subject }) => {
  return (
    <>
      <Flex vertical>
        <h2 style={{ padding: 10 }}>{subject}</h2>
        <ComposedChart width={400} height={350} data={data}>
          <XAxis dataKey="name" stroke="grey" />
          <YAxis stroke="grey" />
          <Tooltip content={CustomTooltip} />
          <Legend />
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <Bar dataKey="Average_score" barSize={20} >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === "MidSems" ? "rgb(5, 24, 82)" : "rgb(22, 65, 194)"} // yellow for MidSems, blue for others
              />
            ))}
          </Bar>
          {/* <Line type="monotone" dataKey="Average_score" stroke="#00879E" /> */}
        </ComposedChart>
      </Flex>
    </>
  );
};

export default AverageMarksLineChart;
