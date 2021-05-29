import React, { LabelHTMLAttributes } from "react";

export const CheckboxLabel = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="text-gray-700 font-medium ml-2 text-sm" {...props}>
      {props.children}
    </label>
  );
};
