import Head from "next/head";
import { Header } from "../components/Header";
import Navbar from "../components/NavBar";
import Results from "../components/Results";
import requests from "../utils/requests";
const index = ({ results }) => {
  console.log("====================================");
  console.log(results);
  console.log("====================================");
  return (
    <div className="">
      <Head>
        <title>Peliculas</title>
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const ganre = context.query.genre;
  console.log("ganre:");
  console.log(`https://api.themoviedb.org/3${requests[ganre]?.url}`);

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[ganre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: { results: request.results },
  };
}
