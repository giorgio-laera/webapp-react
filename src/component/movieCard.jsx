import style from "../modules/movieCard.module.css"
function MoviesCard() {
    return (
        <div className={style.card}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg" alt="" />
            <h2>titolo</h2>
            <span>xx-xx-xxxx</span>
            <p>genere</p>
            <p>direttore</p>
        </div>
    )
}
export default MoviesCard;


