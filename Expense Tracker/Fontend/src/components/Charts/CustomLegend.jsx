import React from "react";

const CustomLegend = ({ payload }) => {
  if (!payload || !payload.length) return null;
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {payload.map((entry, index) => (
        // console.log(entry.value);
        <div key={`legend-${index}`} className="flex items-center space-x-2">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-xs text-gray-700 font-medium">
            {entry.payload?.name || entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
