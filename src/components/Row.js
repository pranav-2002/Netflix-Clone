import React from "react";
import { useState, useEffect } from "react";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
    return movies;
  }, [fetchUrl, movies]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${imgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
