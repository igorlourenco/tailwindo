import React, { TextareaHTMLAttributes } from "react";

export default function Textarea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      className="border border-gray-300 rounded-md w-full px-3 py-2 font-medium text-gray-600 outline-none focus:ring-1 active:ring-1 ring-blue-400"
      {...props}
    />
  );
}
