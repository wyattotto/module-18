const { Post } = require('../models');

const postController = {
// delete a post by id
deletePost({ params }, res) {
  Post.findOneAndDelete({ _id: params.id })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => res.status(500).json(err));
},

  // update a post by id
updatePost({ params, body }, res) {
  Post.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => res.status(500).json(err));
},

  createPost({ body }, res) {
    Post.create(body)
      .then(dbPostData => res.json(dbPostData))
      .catch(err => res.status(500).json(err));
  },

  getPostById(req, res) {
    Post.findOne({ _id: req.params.id })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getAllPosts(req, res) {
    Post.find({})
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add reaction to post
  createReaction({ params, body }, res) {
    Post.findOneAndUpdate(
      { _id: params.postId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => res.json(err));
  },

  // remove reaction from post
  deleteReaction({ params }, res) {
    Post.findOneAndUpdate(
      { _id: params.postId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.json(err));
  }
};

module.exports = postController;