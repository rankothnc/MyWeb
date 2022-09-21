import './App.css';
import React, { useState,useEffect } from "react"
import Axios from 'axios';

function App() {

const [movieName, setMovieName]=useState('');
const [review, setReview]=useState('');

//function to be called when clicked submit button
const submitReview = () =>{
  //post request on axios
  //backend URL
  Axios.post("http://localhost:3001/api/insert", {
    //sending an object with the movie name and review to grab that in the backend
    movieName: movieName, 
    movieReview: review
  }).then(()=>{
    alert("Successful insert")
  });
  //create a promise after inserting data
}

  return (
    <div className="App">
     <h1>CRUD APPLICATION</h1>
     <div className="form">
      <label>Movie Name:</label>
     <input type="text" name='movieName' onChange={(e)=>{
      setMovieName(e.target.value)
     }}/>
     <label>Review:</label>
     <input type="text" name='review' onChange={(e)=>{
      setReview(e.target.value)
     }}/>
     <button onClick={submitReview}>Submit</button>
     </div>
    </div>
  );
}

export default App;
