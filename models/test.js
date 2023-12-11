const { Schema, model } = require("mongoose");

const testSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    creationDate: {
        type: Date,
        default: new Date()
    }
},{strict: false});

const Test = model("Test",testSchema,"test");

module.exports = Test;