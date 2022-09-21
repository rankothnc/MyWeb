//create express server
const express = require("express");
//create app through express server

//to avoid input errors
const app = express();

const cors  = require('cors')

//a middleware that formats everything to json format 
const bodyParser = require('body-parser')

const mysql = require('mysql');

//create DB
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Rmnb%468",
    database: "cruddatabase"
});

app.use(cor)

//apply middleware
//body pa
app.use(bodyParser.urlencoded({extended:true}));


// app.get("/", (req, res) => {

//     const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES('inception', 'good movie')"
   
//     //to enter sql commantds
//     //result-send information to frontend  
//     db.query(sqlInsert, (err, result) => {
//         //when enter data to the table, it'll display this
//         res.send("Hii chinthani");
//         })
// });



//enter data to the DB
app.post("/api/insert",(req,res)=>{

    //request the information we got from the frontend
    //variable to catch name
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    //? Don't want to enter varibles directly
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES(?,?)"
    db.query(sqlInsert,[movieName, movieReview], (err, result)=>{
        console.log(result);
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001")
});

