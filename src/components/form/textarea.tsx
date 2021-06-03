import React, { TextareaHTMLAttributes } from "react";

export const Textarea = (
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return (
    <textarea
      required
      className="w-4/6 border border-gray-300 rounded px-3 py-2 resize-none text-gray-600 font-semibold outline-none focus:ring-2 focus:ring-blue-400 focus:border-none placeholder:text-gray-300"
      {...props}
    >
      {props.children}
    </textarea>
  );
};
