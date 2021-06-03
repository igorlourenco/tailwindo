import React from "react";
import { Logo } from "../../components/common";
import { FaUsers, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function User() {
  return (
    <div className="flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
      <div className="w-full flex justify-center">
        <Logo />
      </div>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 text-lg font-semibold text-gray-800">
          John Doe
        </h4>
        <p className="mx-2 mt-1 text-md font-medium text-gray-600">
          Front-end Developer
        </p>
        <h5 className="mx-2 mt-1 text-xs font-medium text-gray-600">
          13 avaliações
        </h5>
      </div>

      <div className="flex flex-col items-start mt-6">
        <div className="flex items-center px-4 py-2 text-gray-700" href="#">
          <FaUsers size={22} />

          <span className="mx-4 text-sm font-medium">Foton Tech</span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100  hover:underline"
            href="#"
          >
            <FaGithub size={22} />

            <span className="mx-4 text-sm font-medium">igorlrnc</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100  hover:underline"
            href="#"
          >
            <FaTwitter size={22} />

            <span className="mx-4 text-sm font-medium">igorlouren_co</span>
          </a>
          <a
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100  hover:underline"
            href="#"
          >
            <FaLinkedin size={22} />

            <span className="mx-4 text-sm font-medium">igorlrnc</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
