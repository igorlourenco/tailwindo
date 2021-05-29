import React from "react";

interface GoToAnotherAuthPageProps {
  message: string;
  redirectLabel: string;
  redirectUrl: string;
}

export const GoToAnotherAuthPage = ({
  message,
  redirectLabel,
  redirectUrl,
}: GoToAnotherAuthPageProps) => {
  return (
    <div className="mt-8 flex items-center justify-center w-full text-sm">
      <p className="font-medium text-gray-700">
        {message}{" "}
        <a
          href={redirectUrl}
          className="font-semibold text-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
        >
          {redirectLabel}
        </a>
      </p>
    </div>
  );
};
