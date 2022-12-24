import React, { useEffect, useState } from "react";
import "./Row.css";

const url = "https://api.themoviedb.org/3";

function Row({ title, movieUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const getList = async () => {
    const response = await fetch(url + movieUrl);

    const movies = await response.json();

    // console.log(movies.results)
    setMovies(movies.results);
  };

  useEffect(() => {
    getList();
  });



//   const movieCard = movies.map(movie => movie.backdrop_path)

  return (
    <div className="row">
      <h2 style={{textAlign: 'left'}}>{title}</h2>
      {/* {movieCard} */}
      
      <div className="row-posters">
      {movies.map((movie) => movie.backdrop_path !== null && (
          <img
            key={movie.id}
            className= {`row-poster ${isLargeRow && 'row-posterLarge'}`}
            src={`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            } alt={movie.name} />
      )
            // <h3>{movie.title}</h3>
        )}
    </div>
    </div>
  );
}

export default Row;
