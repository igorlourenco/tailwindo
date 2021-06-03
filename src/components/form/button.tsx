import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textSize?: string;
}

export const Button = ({ textSize = "lg", ...props }: ButtonProps) => {
  return (
    <button
      className={`block w-full rounded p-3 text-${textSize} bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:ring focus:ring-blue-400 focus:outline-none active:bg-blue-700 outline-none transition duration-400`}
      {...props}
    >
      {props.children}
    </button>
  );
};
