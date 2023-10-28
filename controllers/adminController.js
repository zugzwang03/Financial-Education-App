const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const crypto = require("crypto");
const sendCookie = require("../utils/sendCookie.js");
const Admin = require("../models/adminModel.js");

const login = catchAsyncErrors(async (req, res, next) => {
    // name, email, password
    var { name, email, password } = req.body;
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
    // category

});

module.exports = { login, addCategories };