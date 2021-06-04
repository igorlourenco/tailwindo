import React from "react";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";

export default function Team() {
  return (
    <div className="flex justify-center">
      <main className="flex items-center flex-col px-16 w-full">
        <div className="shadow-lg px-6 py-4 w-auto min-w-8/12">
          <div className="flex flex items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://github.com/fotontech.png"
              alt="avatar"
            />
            <div className="flex flex-col gap-y-1 ml-2">
              <h4 className="text-md font-semibold text-gray-800">
                Foton Tech
              </h4>
              <div className="flex gap-x-2 mt-1 items-center">
                <FaMapMarkerAlt />
                <h5 className="text-sm font-medium text-gray-600">
                  Santa Catarina, Brasil
                </h5>
              </div>
              <div className="flex gap-x-2 mt-1 items-center">
                <FaUsers />
                <h6 className="text-xs font-medium text-gray-600">
                  24 membros
                </h6>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
