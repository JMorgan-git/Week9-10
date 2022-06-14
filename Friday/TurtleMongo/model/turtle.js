const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turtleSchema = new Schema({
    size: {
        type: String,
        enum: ['LARGE', 'MEDIUM', 'SMALL'], // only allows these values
        trim: true, //remove whitespace before and after string(does not remove spaces inbetween words)
        required:[true, 'Size is required'] //makes required field and passes error is skipped
    },
    colour: {
        type: String,
        minLength: 4,
        maxLength: 16,
    },
    snappy: {
        type: Boolean,
        default: false
    },
    species: String,
    isNinja: {
        type: Boolean,
        default: false
    },
    born: {
        type: Date,
        required: [true, 'Birth date is required']
    },
    addresses: {
        type: mongoose.SchemaTypes.ObjectId,
        red: 'Address',
        unique: true,
        select: false
    }
});

const Turtle = mongoose.model('Turtle', turtleSchema);

module.exports = Turtle;
