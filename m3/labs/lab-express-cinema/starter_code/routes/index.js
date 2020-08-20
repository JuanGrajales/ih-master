const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get("/", (req, res) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res) => {
  Movie.find()
  .then(resDB => {
    console.log('retrieved movies list')
    res.json(resDB);
  })
  .catch(err => console.log(err))
});

router.get("/movie/:movieID", (req, res) => {
  console.log(req.params.movieID)
  Movie.findById({_id: req.params.movieID})
  .then(resDB => {
    console.log('retrieved the movie details', resDB)
    res.json(resDB);
  })
  .catch(err => console.log(err))
});

router.post("/movie/add", (req, res) => {
  console.log('made it mum!', req.body)
  Movie.create(req.body)
  .then(resDB => {
    console.log('db success', resDB)
    res.json(resDB);
  })
  .catch(err => console.log(err))
});

module.exports = router;