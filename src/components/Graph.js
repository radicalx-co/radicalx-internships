import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Button from "./Button";
import CalendarIcon from "../assets/calendar-2.png";
import "../styles/graph.css"
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
    <div style={{ flexDirection: "column", display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#F2F2F2",
          padding: ".5em",
          borderRadius: "12px",
          margin: "0 .5em",
        }}
      >
        <div className="week_month">
          <Button bgColor={"#793EF5"} textColor="white">
            This week
          </Button>
          <Button>This month</Button>
        </div>
        <div>
          <Button>
            <img src={CalendarIcon} alt="" />
            Select Dates
          </Button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="value"
            fill="#665FEF33"
            stroke="none"
          />
          <CartesianGrid strokeDasharray="" horizontal="" vertical="true"/>
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
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
