import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="block w-full rounded p-3 text-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:ring focus:ring-blue-400 focus:outline-none active:bg-blue-700 outline-none transition duration-400"
      {...props}
    >
      {props.children}
    </button>
  );
};
