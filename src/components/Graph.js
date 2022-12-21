import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Graph = () => {
  // Graph data
  const data = [
    { name: "", value: "" },
    { name: "Total Enrollments", value: 100000 },
    { name: "Completion", value: 65000 },
    { name: "Qualified Candidates", value: 850 },
    { name: "Reached Out", value: 375 },
    { name: "Interview Set", value: 300 },
    { name: "Candidates Hired", value: 150 },
    { name: "", value: "" },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <Area type="monotone" dataKey="value" fill="#665FEF33" stroke="none" />
        <XAxis
          xAxisId={0}
          interval={0}
          tick={{ fontSize: 21, fontWeight: 500 }}
          dataKey="value"
          axisLine={false}
          tickLine={false}
        />
        <XAxis
          xAxisId={1}
          interval={0}
          tick={{ fontSize: 12, fontWeight: 500 }}
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
