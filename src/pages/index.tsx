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
                <a href="/auth/register" className="w-full">
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
