const router = require('express').Router();
const adminController = require('../controllers/adminController.js');
const isAuthenticated = require("../middlewares/auth.js");

router.route('/login/admin').post(adminController.login);
router.route('/addCategories/admin').post(isAuthenticated, adminController.addCategories);
router.route('/addCourse/admin').post(isAuthenticated, adminController.addCourse);
router.route('/addCourseDetails/admin').post(isAuthenticated, adminController.addCourseDetails);
router.route('/addClasses/admin').post(isAuthenticated, adminController.addClasses);
router.route('/addProject/admin').post(isAuthenticated, adminController.addProject);
router.route('/addMentorToProject/admin').post(isAuthenticated, adminController.addMentorToProject);

module.exports = router;