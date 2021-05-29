import React, { InputHTMLAttributes } from "react";

export const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      required
      type="checkbox"
      className="focus:ring-1 focus:ring-blue-400 focus:outline-none"
      {...props}
    />
  );
};