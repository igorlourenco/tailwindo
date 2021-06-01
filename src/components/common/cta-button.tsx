import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontColor?: string;
  bgColor?: string;
}

export const CTAButton = ({
  fontColor = "white",
  bgColor = "blue",
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={`rounded px-8 py-3 mt-4 text-md bg-${bgColor}-600 text-${fontColor} uppercase font-semibold hover:bg-${bgColor}-700 hover:shadow-lg focus:bg-${bgColor}-700 focus:shadow-lg focus:ring focus:ring-${bgColor}-400 focus:outline-none active:bg-${bgColor}-700 outline-none transition duration-400`}
      {...props}
    >
      {props.children}
    </button>
  );
};
