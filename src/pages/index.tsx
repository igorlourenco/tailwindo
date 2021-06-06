import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>definir o nome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-gradient-to-b from-white to-brand-papaya">
          <div className="flex flex-row h-90">
            <div className="w-1/2 z-20 flex items-center">
              <div className="-mr-20 bg-brand-blue-light p-8 shadow-xl flex items-start flex-col gap-y-2">
                <h1 className="text-white text-4xl font-bold">
                  O sucesso do seu time é o seu sucesso
                </h1>
                <h2 className="text-white text-lg font-medium text-justify">
                  Uma solução completa para cuidar do seu time e promover um
                  bem-estar real na sua empresa.
                </h2>
                <a className="mt-4 bg-brand-yellow py-3 px-12 rounded-full font-semibold text-white text-lg">
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
        <img src=" images/landing/base-section-1.svg"></img>

        <section id="employee-success" className="-mt-32">
          <p>IGRO</p>
        </section>
      </main>
    </div>
  );
}
