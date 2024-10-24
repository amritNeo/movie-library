const express = require('express');
var bodyParser = require('body-parser')

const router = express.Router()
var jsonParser = bodyParser.json()

const GetMovieListController = require('../controller/getMovieList')
router.get('/movie-list', GetMovieListController)

const AddMovieController = require('../controller/addMovie')
router.post('/addMovie', jsonParser,AddMovieController)

const DeleteMovieController = require('../controller/deleteMovie')
router.post('/deleteMovie', jsonParser, DeleteMovieController)

const DeleteAllMoviesController = require('../controller/deleteAllMovies')
router.post('/deleteAll', jsonParser, DeleteAllMoviesController)

module.exports = router