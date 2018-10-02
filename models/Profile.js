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
  list: [
    {
      listName: {
        type: String,
        required: true
      },
      category: {
        type: String
      },
      description: {
        type: String,
        required: true
      },
      videoOne: {
        type: String
      },
      videoTwo: {
        type: String
      },
      videoThree: {
        type: String
      },
      videoFour: {
        type: String
      },
      videoFive: {
        type: String
      },
      videoSix: {
        type: String
      },
      videoSeven: {
        type: String
      },
      videoEight: {
        type: String
      },
      videoNine: {
        type: String
      },
      videoTen: {
        type: String
      },
      lastChange: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
