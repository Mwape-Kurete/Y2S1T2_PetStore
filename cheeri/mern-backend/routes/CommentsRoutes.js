const express = require('express');
const router = express.Router();
const Comment = require('../models/Comments');

// Fetch comments for a specific product
router.get('/comments/:productId', async (req, res) => {
  try {
    const comments = await Comment.find({ productId: req.params.productId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

// Post a new comment
router.post('/comments', async (req, res) => {
  const { productId, userName, rating, comment } = req.body;
  try {
    const newComment = new Comment({ productId, userName, rating, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to post comment' });
  }
});

module.exports = router;
