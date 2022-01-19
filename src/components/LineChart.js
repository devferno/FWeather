import { LineChart, Line, Tooltip, XAxis, ResponsiveContainer } from "recharts";

export const RenderLineChart = ({ data }) => {
  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text x={x} y={y} fill="#666" fontSize={14} dy={27} dx={-8}>
        {value}°
      </text>
    );
  };

  return (
    <ResponsiveContainer height={200}>
      <LineChart data={data}>
        <Line
          type="monotone"
          stroke="#396EB0"
          label={renderCustomBarLabel}
          dataKey="Temperature"
          strokeWidth={4}
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
