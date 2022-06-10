const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
    size: String,
    colour: String,
    snappy: Boolean,
    species: String,
    isNinja: Boolean,
    born: Date
});

const Turtle = mongoose.model('Turtle', turtleSchema);

module.exports = Turtle;
