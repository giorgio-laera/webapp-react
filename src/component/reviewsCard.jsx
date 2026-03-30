import style from "../modules/movieCard.module.css"
import { IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";
function reviewsCard ({review}){

    const {name, vote, text}= review;
//  <IoStar /> <IoStarHalf /> <IoStarOutline />
    return(

        <div className={` ${style.card}`}>
            <h4>{name}</h4>
            <div>
               {vote >= 1 ? <IoStar /> : <IoStarOutline />}
               {vote >= 2 ? <IoStar /> : <IoStarOutline />}
               {vote >= 3 ? <IoStar /> : <IoStarOutline />}
               {vote >= 4 ? <IoStar /> : <IoStarOutline />}
               {vote == 5 ? <IoStar /> : <IoStarOutline />}
            </div>
            {/* <span>{vote}</span> */}

           
            <p>{text}</p>
        </div>
    )
}
export default reviewsCard;