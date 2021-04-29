import Head from "next/head";
import Results from "../components/Results";
import requests from "../utils/requests";
import Searchs from "../components/Search";
import React, { useState, useEffect } from "react";
const index = ({ results }) => {
  const [Search, setSearch] = useState("");
  const [updateItem, setUpdateItem] = useState([]);

  useEffect(async () => {
    if (Search.length > 1) {
      const valueSearch = await fetch(
        `${requests.fetchSearch?.url}${Search}&page=1&include_adult=true`
      ).then((res) => res.json());
      console.log("...");
      console.log(valueSearch.results);
      setUpdateItem(valueSearch.results);
    }
    if (Search.length < 1) {
      setUpdateItem([]);
    }
  }, [Search]);

  const showMovie = updateItem.length ? updateItem : results;

  return (
    <div className="">
      <Head>
        <title>Peliculas</title>
      </Head>
      <Searchs Search={Search} setSearch={setSearch} />
      <Results results={showMovie} />
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

  console.log("=====mm=============================");
  console.log(requests.ganre);
  console.log("====================================");
  return {
    props: { results: request.results },
  };
}
