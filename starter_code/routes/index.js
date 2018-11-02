const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find()
  .then(moviesFromDb => {
    console.log("DEBUG", moviesFromDb)
    console.log(moviesFromDb)
    res.render("movies", {
      listOfMovies:moviesFromDb
    }) 
})
.catch(err =>{
  console.log("AHHHHHHHHHH")
})
})



router.get('/movies/:id', (req, res, next) => {
  let id = req.params.id //the id from the url
  Movie.findById(id)
  .then (moviesFromDb => {
    res.render('see-more', {
   moviesFromDb
  })
  })
  .catch (error => {
    console.log("ERROR")
  })
    })
module.exports = router;
