const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: String,
    image: String,
    x: Number,
    y: Number
});

module.exports = mongoose.model("Character", characterSchema);