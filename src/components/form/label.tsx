import React, { LabelHTMLAttributes } from "react";

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="block mb-1 font-bold text-gray-500" {...props}>
      {props.children}
    </label>
  );
};
