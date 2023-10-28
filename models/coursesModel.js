const mongoose = require("mongoose");
const validator = require("validator");

const coursesSchema = new mongoose.Schema({
    key: {
        type: String
    },
    categories: [{
        type: String
    }]
});

const Courses = mongoose.model('Courses', coursesSchema);
module.exports = Courses;