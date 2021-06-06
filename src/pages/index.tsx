import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>definir o nome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white dark:bg-gray-800">
        <nav>
          <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <p>IGOR</p>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
