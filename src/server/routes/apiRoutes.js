const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/users', userController.get);

module.exports = router;