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

// Update a comment
router.put('/comments/:id', async (req, res) => {
  const { rating, comment } = req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { rating, comment },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update comment' });
  }
});

// Delete a comment
router.delete('/comments/:id', async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete comment' });
  }
});

module.exports = router;
