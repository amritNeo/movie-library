
const movieModel = require('../model/movie');

async function DeleteMovieController(req, res) {

    try {
        const movieData = req.body;
        console.log('deleteMovie' + JSON.stringify(movieData._id));

        const options = { new: true };
        const result = await movieModel.findByIdAndDelete(movieData._id)
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}

module.exports = DeleteMovieController
