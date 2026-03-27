import style from "../modules/movieCard.module.css"
function reviewsCard ({review}){

    const {name, vote, text}= review;

    return(

        <div className={` ${style.card}`}>
            <h4>{name}</h4>
            <span>{vote}</span>
            <p>{text}</p>
        </div>
    )
}
export default reviewsCard;