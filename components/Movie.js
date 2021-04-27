import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";

const Movies = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className=" px-5  my-10 bg-red-900 ">
      <div className="  md:flex   ">
        <div className=" bg-red-300 w-full md:max-w-[23rem] ">
          <Image
            layout="responsive"
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            height={1089}
            width={1920}
            alt="poster"
          />

          <button className="h-10 width-screen ">trailer</button>
        </div>
        <div className="space-y-3 bg-blue-900 flex-1 space-x-2">
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
          <p className="text-xl">Sinopsis: {result.overview}</p>

          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=L2n3lBHiZRs&ab_channel=YemiAladeVEVO"
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
