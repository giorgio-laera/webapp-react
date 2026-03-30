import style from "../modules/movieCard.module.css"
import { IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";
function reviewsCard ({review}){

    const {name, vote, text}= review;
//  <IoStar /> <IoStarHalf /> <IoStarOutline />
    return(

        <div className={` ${style.card}`}>
            <h4>{name}</h4>
            <div>
                { [1,2,3,4,5].map((element, i)=>{
                    return vote >= element ? <IoStar key={i}/> : <IoStarOutline key={i}/>
                })
                }
              
            </div>
            {/* <span>{vote}</span> */}

           
            <p>{text}</p>
        </div>
    )
}
export default reviewsCard;