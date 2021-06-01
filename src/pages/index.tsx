import Head from "next/head";
import { CTAButton } from "../components/common";

export default function Home() {
  return (
    <div>
      <Head>
        <title>feedba.co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white dark:bg-gray-800">
        <nav>
          <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div>
                <a
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  feedba.co
                </a>
              </div>

              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="items-center md:flex">
              <div className="flex flex-col md:flex-row md:mx-6">
                <a
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Shop
                </a>
                <a
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0"
                  href="#"
                >
                  About
                </a>
              </div>

              <div className="flex justify-center md:block">
                <a
                  className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full"></span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center md:flex">
            <div className="w-full md:w-1/2">
              <div className="max-w-lg">
                <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white md:text-2xl">
                  aumente o desempenho e a satisfação do seu time
                </h1>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Promova o{" "}
                  <span className="font-semibold">engajamento interno</span>,
                  desenvolva{" "}
                  <span className="font-semibold">
                    dinâmicas de reconhecimento entre membros
                  </span>{" "}
                  da equipe e deixe seus colaboradores atualizados por meio de
                  feedback! O resultado?{" "}
                  <span className="font-bold text-blue-800">
                    Mais felicidade e eficiência na equipe
                  </span>
                  .
                </p>
                <a href="/auth/register">
                  <CTAButton>Quero começar agora!</CTAButton>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
              <img
                className="w-full h-full max-w-2xl"
                src="images/landing/work-chat.svg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
