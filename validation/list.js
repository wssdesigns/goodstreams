const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateListInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';

  if (Validator.isEmpty(data.listName)) {
    errors.listName = 'List name field is required';
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
