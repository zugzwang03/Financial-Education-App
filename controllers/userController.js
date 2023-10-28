const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/userModel");
const sendCookie = require("../utils/sendCookie.js");
const crypto = require("crypto");

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
    if(!user) {
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
})

module.exports = { login, addUsername, levelOfKnowledge, describesBest, ageGroup, primaryFinancialGoal, incomeGoal, currentGoal, addAttendance, addTasksAndExams, addQuiz, addGrades, statistics };