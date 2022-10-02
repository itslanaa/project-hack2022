import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import { Button, ButtonToolbar } from 'reactstrap';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import FormField from '@/shared/components/form/FormField';
import validate from './validate';

const renderDatePicker = ({ dueDate, handleDateChange }) => (
  <DatePicker
    dateFormat="MM/dd/yyyy"
    selected={dueDate}
    onChange={handleDateChange}
    minDate={new Date()}
  />
);

renderDatePicker.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  dueDate: PropTypes.shape().isRequired,
};

const ItemEditModalForm = ({
  onSubmit, dueDate, handlePriorityChange, priority,
  handleDateChange, currentEditItem, changeShowEditModal, priorityOptions,
}) => (
  <Form onSubmit={onSubmit} validate={validate} initialValues={currentEditItem}>
    {({ handleSubmit }) => (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label typography-message">Title</span>
          <div className="form__form-group-field">
            <Field
              name="title"
              type="text"
              component={FormField}
              placeholder="Title.."
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Description</span>
          <div className="form__form-group-field">
            <Field
              component="textarea"
              name="description"
              placeholder="What to do.."
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Due Date</span>
          <div className="form__form-group-field priority">
            <Field
              name="dueDate"
              type="text"
              dueDate={dueDate}
              handleDateChange={handleDateChange}
              component={renderDatePicker}
              required
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Priority</span>
          <div className="form__form-group-field">
            <Select
              className="react-select"
              classNamePrefix="react-select"
              onChange={handlePriorityChange}
              options={priorityOptions}
              defaultValue={priority}
              clearable={false}
            />
          </div>
        </div>
        <ButtonToolbar className="form__button-toolbar">
          <Button color="primary" type="submit">
            {!currentEditItem ? 'Add' : 'Edit'}
          </Button>
          <Button type="button" onClick={changeShowEditModal}>Cancel</Button>
        </ButtonToolbar>
      </form>
    )}
  </Form>
);

ItemEditModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  changeShowEditModal: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handlePriorityChange: PropTypes.func.isRequired,
  currentEditItem: PropTypes.shape(),
  dueDate: PropTypes.shape().isRequired,
  priority: PropTypes.shape().isRequired,
  priorityOptions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

ItemEditModalForm.defaultProps = {
  currentEditItem: null,
};

export default ItemEditModalForm;
