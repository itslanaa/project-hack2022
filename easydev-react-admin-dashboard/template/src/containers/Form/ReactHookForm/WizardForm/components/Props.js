import PropTypes from 'prop-types';

export const StepPropTypes = {
  onSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func,
  defaultValues: PropTypes.shape({}).isRequired,
};

export const StepDefaultProps = {
  previousPage: () => {},
};
