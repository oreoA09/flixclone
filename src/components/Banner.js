import React, {useState, useEffect} from 'react'
import './Banner.css'

const ApiKey = "1cf3362c675fc58269a5bd2f0860ee6b";

const url = `https://api.themoviedb.org/3/movie/550?api_key=${ApiKey}`;

const Movies = () => {
  const [movie, setMovie] = useState([]);

  const getMovies = async () =>{
    const response = await fetch(url);
    const movie = await response.json();
    
    setMovie(movie);
    // console.log(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`)
  };

  useEffect(() =>{
    getMovies();
  }, []);

  // const truncate = (str, n) => {
  //   return str.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  return(
    <div>
      {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/> */}

      <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
        <h1 className="banner__description">
          {/* {truncate(movie.overview, 200)} */}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
      
    </div>
  )
  
}
// function Banner() {
//   return (
//     <div>Banner</div>
//   )
// }

export default Movies