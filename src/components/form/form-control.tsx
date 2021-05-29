import React, { HTMLAttributes } from "react";

export const FormControl = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{props.children}</div>;
};
