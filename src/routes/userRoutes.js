const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

const userController = new UserController();

router.get('/', userController.getAll.bind(userController));
router.get('/:id', userController.getById.bind(userController));
router.post('/', userController.create.bind(userController));

module.exports = router;
