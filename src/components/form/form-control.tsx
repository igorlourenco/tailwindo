import React, { HTMLAttributes } from "react";

export default function FormControl(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col w-full gap-y-1" {...props}>
      {props.children}
    </div>
  );
}
