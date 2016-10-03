const router = require('express').Router();
const userController = require('../controllers/userController');
const factoryController = require('../controllers/factoryController');
const executiveController = require('../controllers/executiveController');

router.get('/users', userController.get);
router.get('/factories', factoryController.get);
router.get('/executives', executiveController.get);

module.exports = router;