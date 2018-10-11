const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  favoriteMovie: {
    type: String
  },
  favoriteShow: {
    type: String
  },
  watchlist: [
    {
      videoName: {
        type: String,
        required: true
      },
      category: {
        type: String
      },
      videoSource: {
        type: String
      },
      notes: {
        type: String
      },
      addedTime: {
        type: Date
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
