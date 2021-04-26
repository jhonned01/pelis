import React from "react";
import Head from "next/head";
import { Header } from "../../components/Header";
import Navbar from "../../components/NavBar";
import Movie from "../../components/Movie";
import { useRouter } from "next/router";

const Movies = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Movie </title>
      </Head>
      <Header />
      <Navbar />
      <Movie />

      <p>{id}</p>
    </div>
  );
};

export default Movies;
