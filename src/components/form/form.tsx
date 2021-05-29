import React, { FormHTMLAttributes } from "react";

export const Form = (props: FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form className="space-y-5" {...props}>
      {props.children}
    </form>
  );
};
