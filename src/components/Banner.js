import React from "react";
import "./Banner.css";
import { useState } from "react";

function Banner() {
  function truncate(string, n) {
    if (string.length > n) {
      return string.substr(0, n - 1) + "...";
    } else {
      return string;
    }
  }

  const baseUrl =
    "https://api.themoviedb.org/3/trending/all/week?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US";

  const imgUrl = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState([]);

  useState(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovie(
          data.results[Math.floor(Math.random() * data.results.length - 1)]
        );
      });
    return movie;
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imgUrl + movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.original_title || movie?.title || movie?.original_name}
        </h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </div>
  );
}

export default Banner;
