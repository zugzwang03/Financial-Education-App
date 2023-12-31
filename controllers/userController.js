const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/userModel");
const Courses = require("../models/coursesModel.js");
const sendCookie = require("../utils/sendCookie.js");
const crypto = require("crypto");
const Classes = require("../models/classesModel");
const Project = require("../models/projectModel.js");

const login = catchAsyncErrors(async (req, res, next) => {
    // name, email, password
    var { name, email, password } = req.body;
    const resetToken = crypto.randomBytes(20).toString('hex');
    password = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    var user = await User.findOne({ email });
    if (user) {
        return res.status(401).json({
            success: false,
            "error message": "user account already exists with same email"
        });
    }
    user = await User.create({ name, email, password });
    sendCookie(user, 201, res);
});

const addUsername = catchAsyncErrors(async (req, res, next) => {
    // email, username
    var { email, username } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { username }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const levelOfKnowledge = catchAsyncErrors(async (req, res, next) => {
    // email, levelOfKnowledge
    var { email, levelOfKnowledge } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { levelOfKnowledge }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const describesBest = catchAsyncErrors(async (req, res, next) => {
    // email, describesBest
    var { email, describesBest } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { describesBest }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const ageGroup = catchAsyncErrors(async (req, res, next) => {
    // email, ageGroup
    var { email, ageGroup } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { ageGroup }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const primaryFinancialGoal = catchAsyncErrors(async (req, res, next) => {
    // email, primaryFinancialGoal
    var { email, primaryFinancialGoal } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { primaryFinancialGoal }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const incomeGoal = catchAsyncErrors(async (req, res, next) => {
    // email, incomeGoal
    var { email, incomeGoal } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { incomeGoal }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const currentGoal = catchAsyncErrors(async (req, res, next) => {
    // email, currentGoal
    var { email, currentGoal } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { currentGoal }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addAttendance = catchAsyncErrors(async (req, res, next) => {
    // email, attendance
    var { email, attendance } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { attendance }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addTasksAndExams = catchAsyncErrors(async (req, res, next) => {
    // email, tasksAndExams
    var { email, tasksAndExams } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { tasksAndExams }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addQuiz = catchAsyncErrors(async (req, res, next) => {
    // email, quiz
    var { email, quiz } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { quiz }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addGrades = catchAsyncErrors(async (req, res, next) => {
    // email, grades
    var { email, grades } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { grades }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const statistics = catchAsyncErrors(async (req, res, next) => {
    var user = req.user;
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    res.status(200).json({
        success: true,
        "grades": user.grades,
        "tasksAndExams": user.tasksAndExams,
        "quiz": user.quiz,
        "attendance": user.attendance
    });
});

const addToDo = catchAsyncErrors(async (req, res, next) => {
    // email, toDoUserTask, toDoUserDate
    var { email, toDoUserTask, toDoUserDate } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { $push: { "toDoList.toDo": { task: toDoUserTask, date: toDoUserDate } } }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addAlreadyDone = catchAsyncErrors(async (req, res, next) => {
    // email, alreadyDoneTask, alreadyDoneDate
    var { email, alreadyDoneTask, alreadyDoneDate } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { $push: { "toDoList.alreadyDone": { task: alreadyDoneTask, date: alreadyDoneDate } } }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addNotification = catchAsyncErrors(async (req, res, next) => {
    // email, notification, date
    var { email, notification, date } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { $push: { "dropDownNotification": { notification, date } } }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addDownload = catchAsyncErrors(async (req, res, next) => {
    // email, name, format, size
    var { email, name, format, size } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findByIdAndUpdate(user._id, { $push: { "downloads": { name, format, size } } }, { new: true });
    res.status(200).json({
        success: true,
        user
    });
});

const addReview = catchAsyncErrors(async (req, res, next) => {
    // email, course_id, comment, stars, date
    var { email, course_id, comment, stars, date } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    var course = await Courses.findOne({ "courseDetails.course_id": course_id });
    if (!course) {
        return res.status(500).json({
            success: false,
            "error message": "course id does not exist"
        });
    }
    var noOfStars = 0;
    if (course.courseDetails) {
        for (var courseDetails of course.courseDetails) {
            let id = courseDetails.course_id;
            id = id.toString();
            if (id == course_id) {
                noOfStars = (Number(courseDetails.stars) + Number(stars)) / 2;
            }
        }
    }
    course = await Courses.findOneAndUpdate({ "courseDetails.course_id": course_id }, { $push: { "courseDetails.$.reviews": { comment, stars, date, noOfLikes: 0, user_id: user._id } } }, { new: true });
    course = await Courses.findOneAndUpdate({ "courseDetails.course_id": course_id }, { "courseDetails.$.stars": noOfStars }, { new: true });
    course = await Courses.findOneAndUpdate({ "courses.course_id": course_id }, { "courses.$.stars": noOfStars }, { new: true });
    res.status(200).json({
        success: true,
        course
    });
});

const enrollCourse = catchAsyncErrors(async (req, res, next) => {
    // email, course_id
    var { email, course_id } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findOneAndUpdate({ _id: user._id }, { $push: { "coursesEnrolled": { course_id } } }, { new: true });
    var course = await Courses.findOneAndUpdate({ "key": "1", "courseDetails.course_id": course_id }, { $push: { "courseDetails.$.usersEnrolled": { user_id: user._id, name: user.name } } }, { new: true });
    res.status(200).json({
        success: true,
        user,
        course
    });
});

const getCategories = catchAsyncErrors(async (req, res, next) => {
    // 
    var user = req.user;
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    var course = await Courses.findOne({ "key": "1" });
    res.status(200).json({
        success: true,
        user,
        "categories": course.categories
    });
});

const getCoursesOfSpecificCategory = catchAsyncErrors(async (req, res, next) => {
    // category
    var user = req.user;
    var category = req.query.category;
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    var course = await Courses.findOne({ "key": "1" });
    var categorySpecificCourses = [];
    for (var courses of course.courses) {
        if (courses.category == category) {
            categorySpecificCourses.push(courses);
        }
    }
    res.status(200).json({
        success: true,
        categorySpecificCourses
    });
});

const getCourseDetails = catchAsyncErrors(async (req, res, next) => {
    // course_id
    var user = req.user;
    var course_id = req.query.course_id;
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    var course = await Courses.findOne({ "key": "1" });
    var courseDetails = [];
    for (var courses of course.courseDetails) {
        if (courses.course_id == course_id) {
            courseDetails.push(courses);
        }
    }
    res.status(200).json({
        success: true,
        courseDetails
    });
});

const addLikeToReview = catchAsyncErrors(async (req, res, next) => {
    // email, course_id, review_id
    var { email, course_id, review_id } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    var course = await Courses.findOne({ "key": "1" });
    var newNoOfLikes = 0;
    var id = 0;
    var review_idx = 0;
    for (var course of course.courseDetails) {
        id = 0;
        for (var review of course.reviews) {

            if (review._id == review_id) {
                newNoOfLikes = review.noOfLikes + 1;
                review_idx = id;
                console.log(newNoOfLikes);
                console.log(review_idx);
            }
            id++;
        }
    }
    var course = await Courses.findOneAndUpdate({ "key": "1", "courseDetails.course_id": course_id }, { $set: { [`courseDetails.$.reviews.${review_idx}.noOfLikes`]: newNoOfLikes } }, { new: true });
    res.status(200).json({
        success: true,
        course
    });
});

const addTaskProgress = catchAsyncErrors(async (req, res, next) => {
    // email, course_id, youDid, totalToBeDone
    var { email, course_id, youDid, totalToBeDone } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    var nuser = await User.findOne({ _id: user._id, "taskProgress.course_id": course_id });
    if (!nuser) {
        nuser = await User.findByIdAndUpdate(user._id, { $push: { "taskProgress": { course_id, youDid, totalToBeDone } } }, { new: true });
    }
    else {
        nuser = await User.findOneAndUpdate({ _id: user._id, "taskProgress.course_id": course_id }, { "taskProgress.$.course_id": course_id, "taskProgress.$.youDid": youDid, "taskProgress.$.totalToBeDone": totalToBeDone }, { new: true });
    }
    res.status(200).json({
        success: true,
        nuser
    });
});

const enrollClass = catchAsyncErrors(async (req, res, next) => {
    // email, class_id
    var { email, class_id } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findOneAndUpdate({ _id: user._id }, { $push: { "classesEnrolled": { class_id } } }, { new: true });
    var classes = await Classes.findOneAndUpdate({ "key": "1", "classes._id": class_id }, { $push: { "classes.$.studentsEnrolled": { user_id: user._id, name: user.name } } }, { new: true });
    res.status(200).json({
        success: true,
        user,
        classes
    });
});

const enrollProject = catchAsyncErrors(async (req, res, next) => {
    // email, project_id
    var { email, project_id } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            "error message": "user not logged in yet"
        });
    }
    user = await User.findOneAndUpdate({ _id: user._id }, { $push: { "projectsEnrolled": { project_id } } }, { new: true });
    var project = await Project.findOneAndUpdate({ "key": "1", "projects._id": project_id }, { $push: { "projects.$.members": { user_id: user._id, name: user.name } } }, { new: true });
    res.status(200).json({
        success: true,
        user,
        project
    });
});

module.exports = { login, addUsername, levelOfKnowledge, describesBest, ageGroup, primaryFinancialGoal, incomeGoal, currentGoal, addAttendance, addTasksAndExams, addQuiz, addGrades, statistics, addToDo, addAlreadyDone, addNotification, addDownload, addReview, enrollCourse, getCategories, getCoursesOfSpecificCategory, getCourseDetails, addLikeToReview, addTaskProgress, enrollClass, enrollProject };