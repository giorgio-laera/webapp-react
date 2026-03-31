import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewsCard from "../component/ReviewsCard";
import ReviewsForm from "../component/ReviewsForm";
import { IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";

import axios from "axios";

function MovieDetailsPage() {

  const { id } = useParams()

  const [movies, setMovies] = useState([]);
  const apiUrl= `http://localhost:3000/api/movies/${id}`


function getMovieData(){
  axios.get(apiUrl).then(respose => {
      console.log("resp",respose.data)
      setMovies(respose.data);
    }).catch(error => { console.error(error.message) })
}
  useEffect(() => {

    getMovieData();
  
  },[id]);
  console.log("movies",movies)
  return (
    <div>

      <h1>{movies.title}</h1>
       <div>
                      { [1,2,3,4,5].map((element, i)=>{
                          return movies.average_review >= element ? <IoStar key={i}/> : <IoStarOutline key={i}/>
                      })
                      }
                    
                  </div>
   
      <div className="d-flex">

        {movies.reviews?.map((recenzione, i) => < ReviewsCard key={i} review={recenzione} />)}
      </div>
      <Link to="/movies/">Torna ai film</Link>

      <h2>aggungei una recenzione</h2>

      <ReviewsForm onNewReview={getMovieData}/>
    </div>
  )
}
export default MovieDetailsPage;

