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



module.exports = { login };