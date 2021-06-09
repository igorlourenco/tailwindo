import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { MdTouchApp } from "react-icons/md";

interface AuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: "touch";
}

export default function ButtonWithIcon({ icon, ...props }: AuthButtonProps) {
  return (
    <button
      className="flex gap-x-3 border justify-center items-center text-md p-3 w-full cursor-pointer rounded-full uppercase shadow-md font-bold bg-blue-500 text-white outline-none focus:outline-none focus:ring-1 focus:ring-blue-400"
      {...props}
    >
      {icon === "touch" && <MdTouchApp size={22} className="text-white" />}
      {props.children}
    </button>
  );
}
