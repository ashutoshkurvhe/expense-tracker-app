import React from "react";
import CustomTooltip from "../../components/Charts/CustomTooltip";
import CustomLegend from "../../components/Charts/CustomLegend";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
const CustomePieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  const renderCenterLabel = ({ cx, cy }) => (
    <>
      <text x={cx} y={cy - 25} textAnchor="middle" fill="#666" fontSize="14px">
        {label}
      </text>
      <text
        x={cx}
        y={cy + 8}
        textAnchor="middle"
        fill="#333"
        fontSize="24px"
        fontWeight="600"
      >
        {totalAmount}
      </text>
    </>
  );
  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
          label={showTextAnchor ? renderCenterLabel : false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomePieChart;
