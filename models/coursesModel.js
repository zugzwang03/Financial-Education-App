const mongoose = require("mongoose");
const validator = require("validator");

const coursesSchema = new mongoose.Schema({
    categories: [{
        type: String
    }]
});

const courses = new mongoose.model('Courses', coursesSchema);
module.exports = courses;