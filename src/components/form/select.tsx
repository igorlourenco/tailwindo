import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number;
    label: string;
  }[];
}

export default function Select({ options, ...props }: SelectProps) {
  return (
    <select
      required
      className="appearance-none border border-gray-300 rounded-md w-full px-3 py-2 font-medium text-gray-600 outline-none focus:ring-1 active:ring-1 ring-blue-400"
      {...props}
    >
      <option value={null}> </option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
