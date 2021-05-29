import React, { HTMLAttributes } from "react";

export const Header = (props: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className="font-bold text-2xl text-blue-900 mb-4" {...props}>
      {props.children}
    </h2>
  );
};
