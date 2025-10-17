import React from "react";

export default function KpiCard({ title, value, delta }) {
  const isNegative = delta && delta.startsWith("-");
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex items-baseline justify-between mt-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        <span
          className={`text-sm ${
            isNegative ? "text-red-600" : "text-green-600"
          }`}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}
