import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>definir o nome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <div>
            <h1 className="text-brand-red">
              O sucesso do seu time é o seu sucesso
            </h1>
            <h2>
              Uma solução completa para cuidar do seu time e promover um
              bem-estar real na sua empresa.
            </h2>
            <a>Vamos lá!</a>
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
}
