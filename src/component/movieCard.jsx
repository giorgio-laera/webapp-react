
import { Link } from "react-router-dom";
import style from "../modules/movieCard.module.css"
function MovieCard({movie}) {
    const {id, image, title, relase_year, genre, director } = movie;
    console.log("questo e id",movie)
    return (
        <div  className={style.card} key={id}>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <span>{relase_year}</span>
            <p>{genre}</p>
            <p>{director}</p>
            <Link to ={`/movies/:${id}`}>vai alle recenzioni</Link>
        </div>
    )
}
export default MovieCard;


