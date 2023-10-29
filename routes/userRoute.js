const router = require('express').Router();
const userController = require('../controllers/userController.js');
const isAuthenticated = require("../middlewares/auth.js");

router.route('/login/user').post(userController.login);
router.route('/addUsername/user').post(isAuthenticated, userController.addUsername);
router.route('/levelOfKnowledge/user').post(isAuthenticated, userController.levelOfKnowledge);
router.route('/describesBest/user').post(isAuthenticated, userController.describesBest);
router.route('/ageGroup/user').post(isAuthenticated, userController.ageGroup);
router.route('/primaryFinancialGoal/user').post(isAuthenticated, userController.primaryFinancialGoal);
router.route('/incomeGoal/user').post(isAuthenticated, userController.incomeGoal);
router.route('/currentGoal/user').post(isAuthenticated, userController.currentGoal);
router.route('/addAttendance/user').post(isAuthenticated, userController.addAttendance);
router.route('/addTasksAndExams/user').post(isAuthenticated, userController.addTasksAndExams);
router.route('/addQuiz/user').post(isAuthenticated, userController.addQuiz);
router.route('/addGrades/user').post(isAuthenticated, userController.addGrades);
router.route('/statistics/user').get(isAuthenticated, userController.statistics);
router.route('/addToDo/user').post(isAuthenticated, userController.addToDo);
router.route('/addAlreadyDone/user').post(isAuthenticated, userController.addAlreadyDone);
router.route('/addDropDownNotification/user').post(isAuthenticated, userController.addNotification);
router.route('/addDownloads/user').post(isAuthenticated, userController.addDownload);
router.route('/addReview/user').post(isAuthenticated, userController.addReview);

module.exports = router;