import React, { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
	required
	className="border border-gray-300 rounded-md w-full px-3 py-2 font-medium text-gray-600 outline-none focus:ring-1 active:ring-1 ring-blue-400"
	{...props}
	/>
  );
}
