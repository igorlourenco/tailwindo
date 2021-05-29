import React, { HTMLAttributes } from "react";

export const CenteredBlue = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-blue-300 p-3"
      {...props}
    >
      {props.children}
    </div>
  );
};
