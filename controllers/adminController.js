const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const crypto = require("crypto");
const sendCookie = require("../utils/sendCookie.js");
const Admin = require("../models/adminModel.js");
const Courses = require("../models/coursesModel.js");

const login = catchAsyncErrors(async (req, res, next) => {
    // name, email, password
    var { name, email, password } = req.body;
    const resetToken = crypto.randomBytes(20).toString('hex');
    var admin = await Admin.findOne({ email });
    if (admin) {
        return res.status(401).json({
            success: false,
            "error message": "admin already exists with same email"
        });
    }
    password = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    admin = await Admin.create({ name, email, password });
    sendCookie(admin, 201, res);
});

const addCategories = catchAsyncErrors(async (req, res, next) => {
    // email, category
    var { email, category } = req.body;
    var admin = await Admin.findOne({ email });
    if (!admin) {
        return res.status(401).json({
            success: false,
            admin
        });
    }
    var courses = await Courses.findOneAndUpdate({ "key": "1" }, { $push: { "categories": category } }, { new: true });
    res.status(200).json({
        success: true,
        courses
    });
});

module.exports = { login, addCategories };