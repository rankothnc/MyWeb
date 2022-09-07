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
  Axios.post("");
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
