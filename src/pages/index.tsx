import Head from "next/head";
import { Layout } from "~/components/Layout";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">
      <Head>
        <title>home page</title>
        <meta name="description" content="homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex w-full flex-row justify-center">hello world</div>
      </main>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
