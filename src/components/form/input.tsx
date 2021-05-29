import React, { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      required
      className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600 font-semibold outline-none focus:ring-2 focus:ring-blue-400 focus:border-none placeholder:text-gray-300"
      {...props}
    >
      {props.children}
    </input>
  );
};
