"use client";

import Image from "next/image";
import React from "react";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    name: "Janv",
    revenus: 4000,
    dépenses: 2400,
  },
  {
    name: "Fév",
    revenus: 3000,
    dépenses: 1398,
  },
  {
    name: "Mar",
    revenus: 2000,
    dépenses: 9800,
  },
  {
    name: "Avr",
    revenus: 2780,
    dépenses: 3908,
  },
  {
    name: "Mai",
    revenus: 1890,
    dépenses: 4800,
  },
  {
    name: "Juin",
    revenus: 2390,
    dépenses: 3800,
  },
  {
    name: "Juill",
    revenus: 3490,
    dépenses: 4300,
  },
  {
    name: "Août",
    revenus: 3490,
    dépenses: 4300,
  },
  {
    name: "Sept",
    revenus: 3490,
    dépenses: 4300,
  },
  {
    name: "Oct",
    revenus: 3490,
    dépenses: 4300,
  },
  {
    name: "Nov",
    revenus: 3490,
    dépenses: 4300,
  },
  {
    name: "Dec",
    revenus: 3490,
    dépenses: 4300,
  },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-kafedu-950 text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="revenus"
            stroke="#ea670c"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="dépenses"
            stroke="#fb8a3c"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
