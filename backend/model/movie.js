const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Movie', dataSchema)