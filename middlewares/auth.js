const User = require("../models/userModel.js");
const Admin = require("../models/adminModel.js");
const catchAsyncErrors = require("./catchAsyncErrors.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        res.status(401).json({
            success: false,
            "error message": "Please Login to access this resource"
        });
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    if(req.params.person == 'user')
        req.user = await User.findById(decodedData.id);
    else    
        req.user = await Admin.findById(decodedData.id);
    next();
});

module.exports = isAuthenticated;