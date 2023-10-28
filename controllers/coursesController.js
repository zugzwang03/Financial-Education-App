const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const addCategories = catchAsyncErrors(async (req, res, next) => {
    // category

});

module.exports = { addCategories };