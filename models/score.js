const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    name: String,
    time: Number,
    image: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Score", ScoreSchema);