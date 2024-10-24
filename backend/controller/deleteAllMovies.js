const movieModel = require('../model/movie');

async function DeleteAllMoviesController(req, res) {

    try {
        const movieData = req.body;
        console.log('deleteAll' + JSON.stringify(movieData));

        movieModel.deleteMany({})
            .then(result => {
                console.log('Delete result:', result);
                console.log(`${result.deletedCount} users deleted successfully`);
            })
            .catch(error => {
                console.error('Error deleting users:', error);
            });
        res.send({ message: "delete All done" })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

}

module.exports = DeleteAllMoviesController
