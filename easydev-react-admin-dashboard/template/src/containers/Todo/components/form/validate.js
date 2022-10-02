const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Title field shouldn’t be empty';
  } else if (values && values.title.length > 50) {
    errors.title = 'Max length is 50 symbols';
  }
  return errors;
};

export default validate;
