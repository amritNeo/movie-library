const movieModel = require('../model/movie');

async function GetMovieListController(req, res){
    try {
        const data = await movieModel.find();
        res.json(data)
      }
      catch (error) {
        res.status(500).json({ message: error.message })
      }
}

module.exports = GetMovieListController
