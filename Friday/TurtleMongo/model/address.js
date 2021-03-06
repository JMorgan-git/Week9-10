const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    streetNumber: {
        type: Number,
        min: 1,
        required: [true, 'House number required']
    },
    addressLineOne: {
        type: String,
        min: 2,
        trim: true
    },
    turtles: {
        type: Schema.Types.ObjectId,
        ref: 'Turtle',
        unique: true
    }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;