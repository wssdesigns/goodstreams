const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateListInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 1, max: 600 })) {
    errors.text = 'Post must be between 10 and 600 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};




// const Validator = require('validator');
// const isEmpty = require('./is-empty');

// module.exports = function validateListInput(data) {
//   let errors = {};

//   data.title = !isEmpty(data.title) ? data.title : '';
//   data.company = !isEmpty(data.company) ? data.company : '';

//   if (Validator.isEmpty(data.listName)) {
//     errors.listName = 'List name field is required';
//   }

//   if (Validator.isEmpty(data.category)) {
//     errors.category = 'Category field is required';
//   }

//   if (Validator.isEmpty(data.description)) {
//     errors.description = 'Description is required';
//   }

//   return {
//     errors,
//     isValid: isEmpty(errors)
//   };
// };
