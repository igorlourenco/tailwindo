import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>definir o nome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section
          id="home"
          className="bg-gradient-to-b from-white to-brand-papaya"
        >
          <div className="flex flex-row h-90">
            <div className="w-1/2 z-20 flex items-center">
              <div className="-mr-20 bg-brand-blue-dark px-8 py-12 shadow-xl flex items-start flex-col gap-y-2">
                <h1 className="text-white text-4xl font-bold font-brand">
                  O sucesso do seu time é o seu sucesso
                </h1>
                <h2 className="text-white text-md text-justify">
                  Uma solução completa para cuidar do seu time e promover um
                  bem-estar real na sua empresa.
                </h2>
                <a className="mt-4 bg-yellow-500 py-3 px-12 rounded-full font-semibold text-white text-lg cursor-pointer shadow-md hover:bg-brand-yellow transform hover:scale-105 ease-in-out transition duration-500">
                  Vamos lá!
                </a>
              </div>
            </div>
            <div className="w-1/2 z-10 pl-20 pr-4">
              <img src="/images/landing/team.svg" className="object-cover" />
            </div>
          </div>
          <div className="flex justify-center p-5">
            <a
              href="#employee-success"
              className="animate-bounce font-semibold text-sm text-brand-blue-dark"
            >
              Conhecer melhor
            </a>
          </div>
        </section>
        <img src="images/landing/base-section-1.svg"></img>

        <section
          id="employee-success"
          className="-mt-72 z-20 px-10 -pb-44 pt-10"
        >
          <h1 className="text-brand-blue-dark text-4xl font-bold font-brand">
            A importância da experiência do colaborador
          </h1>
          <div className="flex flex-row items-stretch gap-x-8 mt-8">
            <div className="w-1/2 h-100 p-5 rounded shadow-xl bg-gradient-to-tl from-brand-papaya to-white">
              <h1 className="text-2xl font-bold font-brand text-brand-blue-dark">
                Melhora das relações interpessoais
              </h1>
              <p className="mt-2 text-brand-blue-dark">
                Se sentindo confortáveis com o ambiente de trabalho, os
                colaboradores tendem a fortalecer os valores da empresa, aplicar
                boas práticas e desenvolver uma melhor relação com os colegas.
              </p>
            </div>
            <div className="w-1/2 h-100 p-5 rounded shadow-xl bg-gradient-to-tl from-brand-papaya to-white">
              <h1 className="text-2xl font-bold font-brand text-brand-blue-dark">
                Desenvolvimento da marca
              </h1>
              <p className="mt-2 text-brand-blue-dark">
                Sendo um melhor lugar para trabalhar, a empresa se torna mais
                competitiva, pois atrai os melhores talentos do mercado e retém
                os que já estão engajados com a marca.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between gap-x-8 mt-8">
            <div className="w-1/2 p-5 rounded shadow-xl bg-gradient-to-tl from-brand-papaya to-white">
              <h1 className="text-2xl font-bold font-brand text-brand-blue-dark">
                Redução de evasão e de custos
              </h1>
              <p className="mt-2 text-brand-blue-dark">
                Com uma cultura de cuidado bem implementada, a saída de
                colaboradores é reduzida, resultando em economia com custos de
                contratação e treinamentos de novos funcionários.
              </p>
            </div>
            <img src="images/landing/success.svg" className="w-5/12 z-20" />
          </div>
        </section>
        <section className="-mt-96 z-10">
          <img src="images/landing/base-section-2.svg" className="z-10"></img>
          <div className="bg-gradient-to-b from-brand-blue-dark via-brand-blue-dark  to-brand-blue-dark px-10">
            <h1 className="text-white text-4xl font-bold font-brand -mt-8">
              Por que a (nome)?
            </h1>
            <div className="flex mt-8 pb-16 gap-x-8 items-center">
              <div className="h-64 w-1/3 overflow-hidden">
                <img src="images/landing/tool.svg" className="object-cover" />
              </div>
              <div className="w-1/3">
                <p className="text-lg text-white font-semibold">
                  A (nome) ajuda sua empresa a garantir que o que seus
                  colaboradores sentem ao trabalhar na sua empresa se alinha com
                  os valores que você prometeu entregar a eles por meio de uma
                  ferramenta simples e fácil de usar, sempre visando o sucesso
                  da sua marca e de seus colaboradores.
                </p>
              </div>
              <div className="w-1/3">
                <p className="text-lg text-white font-semibold">
                  A (nome) ajuda sua empresa a garantir que o que seus
                  colaboradores sentem ao trabalhar na sua empresa se alinha com
                  os valores que você prometeu entregar a eles por meio de uma
                  ferramenta simples e fácil de usar, sempre visando o sucesso
                  da sua marca e de seus colaboradores.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
