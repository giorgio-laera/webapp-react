import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewsCard from "../component/ReviewsCard";
import ReviewsForm from "../component/ReviewsForm"

import axios from "axios";

function MovieDetailsPage() {

  const { id } = useParams()

  const [reviews, setReviews] = useState([]);
  const apiUrl= `http://localhost:3000/api/movies/${id}`

function getMovieData(){
  axios.get(apiUrl).then(respose => {
      console.log(respose.data)
      setReviews(respose.data);
    }).catch(error => { console.error(error.message) })
}
  useEffect(() => {

    getMovieData();
  
  },[id]);
  return (
    <div>

      <h1>Details Page</h1>
      <div className="d-flex">

        {reviews.map((recenzione, i) => < ReviewsCard key={i} review={recenzione} />)}
      </div>
      <Link to="/movies/">Torna ai film</Link>

      <h2>aggungei una recenzione</h2>

      <ReviewsForm onNewReview={getMovieData}/>
    </div>
  )
}
export default MovieDetailsPage;

