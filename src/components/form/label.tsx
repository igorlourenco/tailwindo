import React, { LabelHTMLAttributes } from "react";

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="text-gray-600 font-semibold" {...props}>
      {props.children}
    </label>
  );
}
