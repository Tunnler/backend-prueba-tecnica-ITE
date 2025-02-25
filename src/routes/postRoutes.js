const express = require('express');
const PostController = require('../controllers/PostController');
const router = express.Router();

const postController = new PostController();

router.get('/', postController.getAll.bind(postController));
router.post('/', postController.create.bind(postController));

module.exports = router;
