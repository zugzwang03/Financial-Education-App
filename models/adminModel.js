const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const validator = require("validator");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Please enter a valid email id"],
        required: true
    },
    password: {
        type: String
    }
});

adminSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

//Generating password reset token
adminSchema.methods.getResetPasswordToken = function () {
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

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;