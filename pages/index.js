import Head from "next/head";
import Results from "../components/Results";
import requests from "../utils/requests";
const index = ({ results }) => {
  return (
    <div className="">
      <Head>
        <title>Peliculas</title>
      </Head>

      <Results results={results} />
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const ganre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[ganre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: { results: request.results },
  };
}
