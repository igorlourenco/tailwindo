import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 p-0">
        <section className="px-10">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-6xl font-bold text-left">
              Atribuímos qualidade ao seu{" "}
              <span className="text-indigo-600">evento de lançamento.</span>
            </h1>
            <h3 className="text-3xl font-semibold text-left">
              ASKGa asgasg asg asgasgasgasg asgasgasgas
            </h3>
          </div>
          <button
            type="button"
            className="px-3 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-700  hover:from-indigo-700 hover:to-blue-500"
          >
            Crie seu primeiro evento
          </button>
        </section>
      </main>
    </div>
  );
}
