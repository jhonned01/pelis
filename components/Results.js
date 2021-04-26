import React from "react";
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Link from "next/link";
const Results = ({ results }) => {
  return (
    <FlipMove
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 
      3xl:flex  flex-wrap justify-center
    "
    >
      {results.map((result) => (
        <Link key={result.id} href={`/movie/${result.id}`}>
          <a>
            <Thumbnail key={result.id} result={result}></Thumbnail>
          </a>
        </Link>
      ))}
    </FlipMove>
  );
};

export default Results;
