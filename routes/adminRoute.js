const router = require('express').Router();
const adminController = require('../controllers/adminController.js');
const isAuthenticated = require("../middlewares/auth.js");

router.route('/login/admin').post(adminController.login);
router.route('/addCategories/admin').post(isAuthenticated, adminController.addCategories);
router.route('/addCourse/admin').post(isAuthenticated, adminController.addCourse);

module.exports = router;