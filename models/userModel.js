const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please enter a valid email address"],
        required: true
    },
    password: {
        type: String,
    },
    username: {
        type: String
    },
    levelOfKnowledge: {
        type: String
    },
    describesBest: {
        type: String
    },
    ageGroup: {
        type: String
    },
    primaryFinancialGoal: {
        type: String
    },
    incomeGoal: {
        type: String
    },
    currentGoal: {
        type: String
    },
    attendance: {
        type: String
    },
    tasksAndExams: {
        type: String
    },
    quiz: {
        type: String
    },
    grades: {
        type: String
    },
    toDoList: {
        toDo: [{
            task: {
                type: String
            },
            date: {
                type: Date
            }
        }],
        alreadyDone: [{
            task: {
                type: String
            },
            date: {
                type: Date
            }
        }]
    },
    dropDownNotification: [{
        notification: {
            type: String
        },
        date: {
            type: Date
        }
    }],
    downloads: [{
        name: {
            type: String
        },
        format: {
            type: String
        },
        size: {
            type: String
        }
    }],
    taskProgress: [{
        course_id: {
            type: String
        },
        youDid: {
            type: Number
        },
        totalToBeDone: {
            type: Number
        }
    }],
    coursesEnrolled: [{
        course_id: {
        type: Number
        }
    }],
    classesEnrolled: [{
        class_id: {
            type: String
        }
    }],
    projectsEnrolled: [{
        project_id: {
            type: String
        }
    }]
});

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

//Generating password reset token
userSchema.methods.getResetPasswordToken = function () {
    //Generating Token
    const resetToken = crypto.randomBytes(20).toString('hex');
    //Hashing and adding to resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

const User = mongoose.model("User", userSchema);
module.exports = User;