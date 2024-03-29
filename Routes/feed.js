const express = require('express');

const router = express.Router();
const feedController = require('../controllers/feed.js')

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', feedController.createPost);

module.exports = router;

