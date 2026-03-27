import { Link, useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import ReviewsCard from "../component/reviewsCard";

import axios from "axios";

function MovieDetailsPage() {

  const {id} =useParams()

const [reviews, setReviews]= useState([]);


        useEffect(()=>{
  axios.get(`http://localhost:3000/api/movies/${id}`).then( respose=>{
    console.log(respose.data)
    setReviews(respose.data);
  }).catch(error=>{console.error(error.message)})
},[])
return (
    <div>
  
      <h1>Details Page</h1>
      <div className="d-flex">
        
      {reviews.map((recenzione , i)=> < ReviewsCard key= {i} review={recenzione} />)}
      </div>
      <Link to="/movies/">Torna ai film</Link>
    </div>
  );
}
export default MovieDetailsPage;

