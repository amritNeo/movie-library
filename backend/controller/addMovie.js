
const movieModel = require('../model/movie');

async function AddMovieController(req, res) {
    const movieData = req.body;
    console.log('req' + JSON.stringify(req.body));

    const data = new movieModel({
        name: req.body.name,
        year: req.body.year
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}

module.exports = AddMovieController
