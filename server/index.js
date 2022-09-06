//create express server
const express = require("express");
//create app through express server
const app = express();

const mysql = require('mysql');

//create DB
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Rmnb%468",
    database: "cruddatabase"
})

app.get("/", (req, res) => {

    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES('inception', 'good movie')"
   
    //to enter sql commantds
    //result-send information to frontend  
    db.query(sqlInsert, (err, result) => {
        //when enter data to the table, it'll display this
        res.send("Hii chinthani");
        })
});

app.listen(3001, () => {
    console.log("Running on port 3001")
});

