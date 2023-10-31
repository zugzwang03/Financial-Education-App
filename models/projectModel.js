const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    key: {
        type: String
    },
    projects: [{
        name: {
            type: String
        },
        dueDate: {
            type: Date
        },
        description: {
            type: String
        },
        members: [{
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            name: {
                type: String
            }
        }],
        mentors: [{
            type: String
        }],
        projectProgress: {
            type: String
        }
    }]
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;