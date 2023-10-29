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
        },
        noOfStudentsEnrolled: {
            type: Number
        },
        course_id: {
            type: Number
        }
    }],
    courseDetails: [{
        course_id: {
            type: Number
        },
        name: {
            type: String
        },
        category: {
            type: String
        },
        price: {
            type: String
        },
        stars: {
            type: Number
        },
        noOfClasses: {
            type: Number
        },
        noOfHours: {
            type: Number
        },
        about: {
            type: String
        },
        instructor: {
            type: String
        },
        noOfLessons: {
            type: Number
        },
        level: {
            type: String
        },
        isAudioBook: {
            type: Boolean
        },
        isLifetimeAccess: {
            type: Boolean
        },
        noOfQuizzes: {
            type: Number
        },
        isCompletionCertificate: {
            type: Boolean
        },
        reviews: [{
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            comment: {
                type: String
            },
            stars: {
                type: Number
            },
            date: {
                type: Date
            },
            noOfLikes: {
                type: Number
            }
        }],
        usersEnrolled: [{
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            name: {
                type: String
            }
        }]
    }]
});

const Courses = mongoose.model('Courses', coursesSchema);
module.exports = Courses;