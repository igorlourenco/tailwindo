import React, { HTMLAttributes } from "react";

export const CenteredVertically = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="flex items-center" {...props}>
      {props.children}
    </div>
  );
};
