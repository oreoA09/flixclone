import React, {useState, useEffect} from 'react'
import './Banner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const ApiKey = "1cf3362c675fc58269a5bd2f0860ee6b";

const url = `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}`;

const Movies = () => {
  const [movie, setMovie] = useState([]);

  const getMovies = async () =>{
    const response = await fetch(url);
    const movie = await response.json();
    
    setMovie(movie[
      Math.floor(Math.random() * movie.length - 1)
    ]);

    // console.log(`https://image.tmdb.org/t/p/original${movie.backdrop_path}`)
  };

  useEffect(() =>{
    getMovies();
  }, []);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return(
    <div>
      {/* <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/> */}

      <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>

        <div className='btns'>
        <button className="banner__button">
          <PlayArrowIcon/> Play</button>

        <button className="banner__button">
          <InfoIcon/> My List</button>
        </div>
      </div>
      
      <div className="banner__fadeBottom"></div>
    </header>
      
    </div>
  )
  
}

export default Movies