"use client";

import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";
import { ChartDataPoint } from "../../types";

interface ChartProps {
  title: string;
  type: "line" | "bar";
  data: ChartDataPoint[];
  accentColor: string;
}

const euroFormat = (val: number) => val.toLocaleString("de-DE");
const euroFormatFull = (val: number) => `${val.toLocaleString("de-DE")} €`;
const monoTick = { fontSize: 10, fill: "var(--color-placeholder)", fontFamily: "var(--font-jetbrains), monospace" };

export default function Chart({ title, type, data, accentColor }: ChartProps) {
  const chartData = data.map((d) => ({ name: d.label, value: d.value }));

  const tooltipStyle = {
    contentStyle: { background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 6, fontSize: 11 },
    labelStyle: { color: "var(--color-muted)" },
    itemStyle: { color: accentColor },
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="text-xs text-placeholder mb-3">{title}</div>
      <ResponsiveContainer width="100%" height={120}>
        {type === "bar" ? (
          <BarChart data={chartData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface)" />
            <XAxis dataKey="name" tick={monoTick} axisLine={false} tickLine={false} />
            <YAxis tick={monoTick} tickFormatter={euroFormat} tickCount={4} axisLine={false} tickLine={false} />
            <Tooltip {...tooltipStyle} formatter={(v) => [euroFormatFull(Number(v)), ""]} />
            <Bar dataKey="value" fill={accentColor} radius={[3, 3, 0, 0]} />
          </BarChart>
        ) : (
          <LineChart data={chartData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface)" />
            <XAxis dataKey="name" tick={monoTick} axisLine={false} tickLine={false} />
            <YAxis tick={monoTick} tickFormatter={euroFormat} tickCount={4} axisLine={false} tickLine={false} />
            <Tooltip {...tooltipStyle} formatter={(v) => [euroFormatFull(Number(v)), ""]} />
            <Line type="monotone" dataKey="value" stroke={accentColor} strokeWidth={2} dot={{ r: 3, fill: accentColor }} activeDot={{ r: 4 }} />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
