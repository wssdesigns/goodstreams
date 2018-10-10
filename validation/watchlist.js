const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateWatchlistInput(data) {
  let errors = {};

  data.videoName = !isEmpty(data.videoName) ? data.videoName : '';

  if (Validator.isEmpty(data.videoName)) {
    errors.videoName = 'Video name is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
