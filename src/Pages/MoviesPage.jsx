import { Link } from "react-router-dom";
import MoviesCard from "../component/movieCard"
import style from "../modules/Movies.module.css"
function moviesPage() {
  return (
    <div className={style.movies}>
      <h1>MoviesPage</h1>
      <MoviesCard/>
      <Link to="/">Go reviews</Link>
    </div>
  );
}

export default moviesPage;

{/* <div>
        image
        titolo
        anno 
        genere
        direttore

      </div> */}
