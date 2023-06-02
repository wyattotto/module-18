const router = require('express').Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  createReaction,
  deleteReaction
} = require('../controllers/post-controller');

// Set up GET all and POST at /api/posts
router
  .route('/')
  .get(getAllPosts)
  .post(createPost);

// Set up GET one, PUT, and DELETE at /api/posts/:id
router
  .route('/:id')
  .get(getPostById)
  .put(updatePost)
  .delete(deletePost);

// Set up POST and DELETE at /api/posts/:postId/reactions/:reactionId
router
  .route('/:postId/reactions/:reactionId')
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;