import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
const Search = ({ Search, setSearch }) => {
  const handleSubmit = (e) => {
    /*     e.preventDefault();
     */
    let cont = 0;
    cont + 1;

    return console.log(`render:${cont}`);
  };

  const valueSearch = (e) => {
    console.log("====================================");
    console.log(Search);
    console.log("====================================");
    setSearch(e.target.value);

    /*    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("Has dejado de escribir en el input");
      setSearch(e.target.value);

      clearTimeout(timeout);
    }, 1000); */
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex-1 max-w-sm flex   items-center"
      >
        <input
          className="  w-full list-none	text-black  outline-none my-5 p-3 ring-1   focus:ring-blue-800 rounded-lg py-3 focus:shadow-lg "
          type="search"
          value={Search}
          onChange={(e) => valueSearch(e)}
          placeholder="Buscador de peliculas"
        />{" "}
        <SearchIcon className=" h-5 w-8  " />
        <button className="hidden">buscar</button>
      </form>
    </div>
  );
};

export default Search;
