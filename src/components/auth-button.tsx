import React, { HTMLAttributes, ReactElement } from "react";
import { useAuth } from "../contexts/auth";
import { MdTouchApp } from "react-icons/md";

interface AuthButtonProps extends HTMLAttributes<HTMLDivElement> {
  icon?: "touch";
}

export default function AuthButton({ icon, ...props }: AuthButtonProps) {
  const { signInWithGoogle } = useAuth();

  return (
    <div
      role="button"
      tabIndex={999}
      className="flex gap-x-3 border justify-center items-center text-lg p-3 w-full cursor-pointer rounded-full shadow-md font-medium text-gray-700 outline-none focus:ring-1 active:ring-1 ring-blue-300"
      onClick={signInWithGoogle}
      {...props}
    >
      {icon === "touch" && <MdTouchApp size={22} className="text-blue-500" />}
      {props.children}
    </div>
  );
}
