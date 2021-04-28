import React from "react";
import YouTube from "react-youtube";
import Image from "next/image";

const Movies = ({ result, get_Movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className=" px-5  my-10  shadow-2xl ">
      <div className="  md:flex   ">
        <div className="    bg-white center  w-full md:max-w-[28rem] ">
          <Image
            layout="responsive"
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            alt="poster"
            objectFit="cover"
            width={1000}
            height={1000}
            className="h-full "
          />
        </div>
        <div className="space-y-3 flex-1 space-x-2">
          <h2 className="mt-1 text-2xl text-white px-2 ">
            {result.title || result.original_name}
          </h2>
          <h2>
            Año:{result.media_type && `${result.media_type} -`}{" "}
            {result.release_date && `${result.release_date} `}{" "}
          </h2>
          <h2 className="flex flex-wrap	 space-x-3">
            Generos:
            {result.genres.map((ganre) => (
              <p key={ganre.id}>{ganre.name},</p>
            ))}
          </h2>
          <p className="text-xl">
            Sinopsis:{" "}
            {result.overview ? result.overview : "Sinopsis no disponbile"}
          </p>
          {get_Movie.length ? (
            <YouTube
              className="w-full "
              videoId={`${get_Movie[0].key}`}
              opts={opts}
            />
          ) : (
            <p>Trailer no disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
