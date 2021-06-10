import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { MdTouchApp } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
interface ButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: "touch" | "google";
  bgColorIntensity?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  textColor?: "white" | "blue-700";
}

export default function ButtonWithIcon({
  icon,
  bgColorIntensity = 500,
  textColor = "white",
  ...props
}: ButtonWithIconProps) {
  return (
    <button
      className={`flex gap-x-3 border justify-center items-center text-md p-3 w-full cursor-pointer rounded-full uppercase shadow-md font-bold bg-blue-${bgColorIntensity} text-${textColor} outline-none focus:outline-none focus:ring-1 focus:ring-blue-400`}
      {...props}
    >
      {icon === "touch" && <MdTouchApp size={22} className="text-white" />}
      {icon === "google" && <FcGoogle size={22} className="text-white" />}

      {props.children}
    </button>
  );
}
