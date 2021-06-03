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

const feedback = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, scrambled it to make a type specimen book.",
    date: "03/06/21 08:29",
    feedbacker: "Anônimo",
    team: "Foton Tech",
    emoji: "❤",
  },
  {
    text: "Lorem Ipsum is simply dummy.",
    date: "28/05/21 13:22",
    feedbacker: "Lucas Floriani",
    team: "Foton Tech",
    emoji: "😥",
  },
  {
    text: "typesetting industry. Lorem Ipsum has since the 1500s, when an unknown printer",
    date: "19/05/21 12:10",
    feedbacker: "Anônimo",
    team: "Foton Tech",
    emoji: "💡",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "11/05/21 19:42",
    feedbacker: "Daniel Cunha",
    team: "Foton Tech",
    emoji: "❤",
  },
  {
    text: "Lorem Ipsum is simply dummy text standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: "08/05/21 15:59",
    feedbacker: "José Carlos",
    team: "Foton Tech",
    emoji: "❤",
  },
  {
    text: "typesetting industry. Lorem Ipsum has been the industry's printer took a galley of type and scrambled it to make a type specimen book.",
    date: "04/05/21 10:32",
    feedbacker: "Anônimo",
    team: "Foton Tech",
    emoji: "💡",
  },
];

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
        <div className="flex w-5/6 h-28 gap-x-1">
          <Textarea placeholder="O que você está pensando sobre Igor?" />
          <div className="flex flex-col justify-between w-1/3 pl-3 gap-y-2">
            <div className="flex justify-between items-center">
              <button className="p-2 min-w-1/4 border border-gray-300 rounded text-xl focus:outline-none focus:ring focus:ring-blue-500">
                ❤
              </button>
              <button className="p-2 min-w-1/4 border border-gray-300 rounded text-xl focus:outline-none focus:ring focus:ring-blue-500">
                😥
              </button>
              <button className="p-2 min-w-1/4 border border-gray-300 rounded text-xl focus:outline-none focus:ring focus:ring-blue-500">
                💡
              </button>
            </div>
            <SubmitButton textSize="md"> Enviar </SubmitButton>
          </div>
        </div>

        <div className="relative wrap overflow-hidden py-10 h-full w-5/6">
          <div className="border absolute border-opacity-20 border-gray-500 h-full border"></div>
          {feedback.map(({ emoji, text, date, feedbacker, team }, index) => (
            <div className="mb-8 flex items-center ml-8 " key={index}>
              <div className="bg-blue-200 rounded shadow-lg px-6 py-4 w-auto min-w-8/12">
                <p className="text-md font-medium text-gray-800">{text}</p>
                <div className="flex gap-x-3 items-center mt-2">
                  <p className="mt-2 text-md text-gray-800">{emoji}</p>
                  <p className="mt-2 text-xs text-gray-800 font-medium">
                    {feedbacker}, {team}
                  </p>
                  <p className="mt-2 text-xs text-gray-800">{date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
