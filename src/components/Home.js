import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";

function Home() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=86ed3de4398a639b0830f1b0d2efb577&with_networks=213"
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=2"
      />
      <Row
        title="Top Rated"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US"
      />
      <Row  
        title="Action Movies"
        fetchUrl="http://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&with_geners=28"
      />
      <Row  
        title="Avengers Movies"
        fetchUrl="https://api.themoviedb.org/3/search/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&query=avengers&page=1&include_adult=false"
      />
      <Row
        title="Comedy Movies"
        fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=3"
      />
      <Row
        title="Horror Movies"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=86ed3de4398a639b0830f1b0d2efb577&with_genres=27"
      />
      <Row
        title="Romance Movies"
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=9"
      />
      <Row
        title="Documentaries"
        fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=86ed3de4398a639b0830f1b0d2efb577&language=en-US&page=10"
      />
    </div>
  );
}

export default Home;
