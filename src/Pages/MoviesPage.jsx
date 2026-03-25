
import MovieCard from "../component/movieCard"
import style from "../modules/Movies.module.css"
function moviesPage() {
  const fakemovie = {
    id: '1',
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg",
    title : ' titolo',
    relase_year : 'anno',
    genre:'genere',
    director:'direttore'
  };
  const moviese =[
    fakemovie,
    fakemovie
  ]
  console.log(moviese)
  console.log(fakemovie)
  return (
    <div className={style.movies}>
      <h1>MoviesPage</h1>
<div className="d-flex movieCard-Container">
  
      {moviese.map(film=> < MovieCard movie={film} />)}
</div>

      
    </div>
  );
}

export default moviesPage;


