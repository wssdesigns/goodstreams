const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// List model
const List = require('../../models/List');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validateListInput = require('../../validation/list');

// @route   GET api/lists/test
// @desc    Tests list route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Lists Works' }));

// @route   GET api/lists
// @desc    Get lists
// @access  Public
router.get('/', (req, res) => {
  List.find()
    .sort({ date: -1 })
    .then(lists => res.json(lists))
    .catch(err => res.status(404).json({ nolistsfound: 'No lists found' }));
});

// @route   GET api/lists/:id
// @desc    Get list by id
// @access  Public
router.get('/:id', (req, res) => {
  List.findById(req.params.id)
    .then(list => res.json(list))
    .catch(err =>
      res.status(404).json({ nolistfound: 'No list found with that ID' })
    );
});

// @route   POST api/lists
// @desc    Create list
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateListInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newList = new List({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newList.save().then(list => res.json(list));
  }
);

// @route   DELETE api/lists/:id
// @desc    Delete list
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      List.findById(req.params.id)
        .then(list => {
          // Check for post owner
          if (list.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          list.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ listnotfound: 'No list found' }));
    });
  }
);

// @route   POST api/lists/like/:id
// @desc    Like list
// @access  Private
router.post(
  '/like/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      List.findById(req.params.id)
        .then(list => {
          if (
            list.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'User already liked this list' });
          }

          // Add user id to likes array
          list.likes.unshift({ user: req.user.id });

          list.save().then(list => res.json(list));
        })
        .catch(err => res.status(404).json({ listnotfound: 'No list found' }));
    });
  }
);

// @route   POST api/lists/unlike/:id
// @desc    Unlike list
// @access  Private
router.post(
  '/unlike/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      List.findById(req.params.id)
        .then(list => {
          if (
            list.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: 'You have not yet liked this list' });
          }

          // Get remove index
          const removeIndex = list.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          list.likes.splice(removeIndex, 1);

          // Save
          list.save().then(list => res.json(list));
        })
        .catch(err => res.status(404).json({ listnotfound: 'No list found' }));
    });
  }
);

// @route   POST api/lists/comment/:id
// @desc    Add comment to list
// @access  Private
router.post(
  '/comment/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateListInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    List.findById(req.params.id)
      .then(list => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        // Add to comments array
        list.comments.unshift(newComment);

        // Save
        list.save().then(list => res.json(list));
      })
      .catch(err => res.status(404).json({ listnotfound: 'No list found' }));
  }
);

// @route   DELETE api/lists/comment/:id/:comment_id
// @desc    Remove comment from list
// @access  Private
router.delete(
  '/comment/:id/:comment_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    List.findById(req.params.id)
      .then(list => {
        // Check to see if comment exists
        if (
          list.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: 'Comment does not exist' });
        }

        // Get remove index
        const removeIndex = list.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        list.comments.splice(removeIndex, 1);

        list.save().then(list => res.json(list));
      })
      .catch(err => res.status(404).json({ listnotfound: 'No list found' }));
  }
);

module.exports = router;
