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
    console.log(movie)
  };

  getMovies();
}
// function Banner() {
//   return (
//     <div>Banner</div>
//   )
// }

export default Movies