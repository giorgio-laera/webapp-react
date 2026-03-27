import { useEffect, useState } from "react";
import MovieCard from "../component/movieCard";
import style from "../modules/Movies.module.css";
import axios from "axios";

function moviesPage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/movies").then(respose => {
      console.log(respose.data)
      setMovies(respose.data)
    }).catch(error => { console.error(error.message) })
  }, [])
  return (
    <div className={style.movies}>
      <h1>MoviesPage</h1>
      <div className="d-flex movieCard-Container">
        
        {movies.map((film, i)=> <MovieCard key ={i} movie ={film} />)}
      </div>


    </div>
  );
}

export default moviesPage;


