import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReviewsCard from "../component/ReviewsCard";
import ReviewsForm from "../component/ReviewsForm";

import axios from "axios";

function MovieDetailsPage() {

  const { id } = useParams()

  const [reviews, setReviews] = useState([]);
  const apiUrl= `http://localhost:3000/api/movies/${id}`

  useEffect(() => {
    axios.get(apiUrl).then(respose => {
      console.log(respose.data)
      setReviews(respose.data);
    }).catch(error => { console.error(error.message) })
  },[]);
  return (
    <div>

      <h1>Details Page</h1>
      <div className="d-flex">

        {reviews.map((recenzione, i) => < ReviewsCard key={i} review={recenzione} />)}
      </div>
      <Link to="/movies/">Torna ai film</Link>

      <h2>aggungei una recenzione</h2>

      <ReviewsForm />
    </div>
  )
}
export default MovieDetailsPage;

