import React from "react";
import { Logo } from "../../components/common";
import {
  FaUsers,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaLink,
  FaInstagram,
} from "react-icons/fa";
import { SubmitButton, Textarea } from "../../components/form";

export default function User() {
  return (
    <div className="flex">
      <aside className="flex flex-col justify-center min-w-1/5 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
        <div className="w-full flex justify-center">
          <Logo />
        </div>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src="https://github.com/igorlrnc.png"
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 text-md font-semibold text-gray-800">
            Igor Lourenço
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
            Front-end Developer
          </p>
          <h5 className="mx-2 mt-1 text-xs font-medium text-gray-600">
            13 avaliações
          </h5>
        </div>

        <div className="flex flex-col items-start mt-6">
          <div className="flex items-center px-4 py-2 text-gray-700">
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
              <FaEnvelope size={22} />

              <span className="mx-4 text-sm font-medium">
                igorlourenco.dev@gmail.com
              </span>
            </a>
            <a
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100  hover:underline"
              href="#"
            >
              <FaLink size={22} />

              <span className="mx-4 text-sm font-medium">igorlouren.co/</span>
            </a>
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
            <a
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100  hover:underline"
              href="#"
            >
              <FaInstagram size={22} />

              <span className="mx-4 text-sm font-medium">igorlrnc</span>
            </a>
          </nav>
        </div>
      </aside>
      <main className="flex items-center flex-col py-8 px-16 w-4/5">
        <div className="flex w-4/5 h-28 gap-x-0.5">
          <Textarea placeholder="O que você está pensando sobre Igor?" />
          <div className="flex flex-col justify-between w-1/3 pl-3">
            <div className="flex justify-between items-center">
              <button className="p-2 min-w-1/4 border border-gray-300 rounded text-2xl">
                ☹
              </button>
              <button className="p-2 min-w-1/4 border border-gray-300 rounded text-2xl">
                😁
              </button>
              <button className="p-2 min-w-1/4 border border-gray-300 rounded text-2xl">
                💡
              </button>
            </div>
            <SubmitButton textSize="md"> Enviar </SubmitButton>
          </div>
        </div>
      </main>
      ''
    </div>
  );
}
