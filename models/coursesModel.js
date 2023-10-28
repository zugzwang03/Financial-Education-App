const mongoose = require("mongoose");
const validator = require("validator");

const coursesSchema = new mongoose.Schema({
    key: {
        type: String
    },
    categories: [{
        type: String
    }],
    courses: [{
        category: {
            type: String
        },
        name: {
            type: String
        },
        price: {
            type: Number
        },
        stars: {
            type: Number
        }
    }]
});

const Courses = mongoose.model('Courses', coursesSchema);
module.exports = Courses;