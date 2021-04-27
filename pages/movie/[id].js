import React from "react";
import Head from "next/head";
import Movie from "../../components/Movie";
import { useRouter } from "next/router";

const Movies = ({ Details_Movie, Get_Movie }) => {
  console.log("====================================");
  console.log(Details_Movie);
  console.log("====================================");
  console.log(Get_Movie);

  return (
    <div>
      <Head>
        <title>Movie </title>
      </Head>

      <Movie result={Details_Movie} />
    </div>
  );
};

export default Movies;

export async function getServerSideProps({ query }) {
  const id_peli = query.id;
  const API_KEY = process.env.API_KEY;

  const Details_Movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id_peli}?api_key=${API_KEY}&language=es-MX}`
  ).then((res) => res.json());
  const Get_Movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id_peli}/videos?api_key=${API_KEY}&language=es-MX}`
  ).then((res) => res.json());

  console.log("==xd================================");
  console.log(Details_Movie);
  console.log("====================================");
  /* console.log("====================================");
  console.log(Details_Movie);
  console.log("===================================="); */
  return {
    props: { Details_Movie: Details_Movie, Get_Movie: Get_Movie.results },
  };
}
