const mongoose = require("mongoose");

const classesSchema = new mongoose.Schema({
    key: {
        type: String
    },
    classes: [{
        name: {
            type: String
        },
        date: {
            type: Date
        },
        instructor: {
            type: String
        },
        platform: {
            type: String
        },
        studentsEnrolled: [{
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            name: {
                type: String
            }
        }],
        classLink: {
            type: String
        }
    }]
});

const Classes = mongoose.model("Classes", classesSchema);
module.exports = Classes;