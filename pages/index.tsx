import type { NextPage } from "next";
import From from "../components/form";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <>
    <Head>
      <title>Check chances of your successful love relationship Game</title>
      <meta name="description" content="Check chances of your successful love relationship Game" />
    </Head>
     <div className="mainWraper">
      <From />
     </div>
    </>
  );
};

export default Home;
