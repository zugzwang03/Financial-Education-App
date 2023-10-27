const router = require('express').Router();
const userController = require('../controllers/userController.js');
const isAuthenticated = require("../middlewares/auth.js");

router.route('/login/user').post(userController.login);
router.route('/addUsername/user').post(isAuthenticated, userController.addUsername);
router.route('/levelOfKnowledge/user').post(isAuthenticated, userController.levelOfKnowledge);
router.route('/describesBest/user').post(isAuthenticated, userController.describesBest);

module.exports = router;