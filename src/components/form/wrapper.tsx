import React, { HTMLAttributes } from "react";

export const Wrapper = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="rounded-lg bg-white p-8 shadow-2xl lg:w-2/5 sm:w-2/6"
      {...props}
    >
      {props.children}
    </div>
  );
};
