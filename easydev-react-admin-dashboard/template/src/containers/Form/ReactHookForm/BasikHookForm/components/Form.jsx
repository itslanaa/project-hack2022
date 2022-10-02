import React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
} from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { MultiSelectField } from '@/shared/components/form/MultiSelect';
import { SelectField } from '@/shared/components/form/Select';
import { FileInputField } from '@/shared/components/form/FileInput';
import PasswordField from '@/shared/components/form/Password';
import showResults from '@/utils/showResults';

const selectOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];

const Form = ({ isHorizontal }) => {
  const {
    handleSubmit,
    register,
    reset,
    control,
  } = useForm();

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && 'form--horizontal'}`}
            onSubmit={handleSubmit(showResults)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">Default Label</span>
              <div className="form__form-group-field">
                <input
                  name="defaultInput"
                  type="text"
                  placeholder="Default Input"
                  {...register('defaultInput')}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Disabled Field</span>
              <div className="form__form-group-field">
                <input
                  name="disableInput"
                  type="text"
                  placeholder="Disabled Input"
                  disabled
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">E-mail</span>
              <div className="form__form-group-field">
                <input
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  {...register('email')}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <PasswordField
                      input={field}
                      placeholder="Password"
                    />
                  )}
                  defaultValue=""
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Icon Left</span>
              <div className="form__form-group-field">
                <div className="form__form-group-icon">
                  <EmailIcon />
                </div>
                <input
                  name="leftIcon"
                  type="email"
                  placeholder="Icon Left Input"
                  {...register('leftIcon')}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Icon Right</span>
              <div className="form__form-group-field">
                <input
                  name="rightIcon"
                  type="text"
                  {...register('rightIcon')}
                  placeholder="Icon Right Input"
                />
                <div className="form__form-group-icon">
                  <AccountSearchIcon />
                </div>
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Field with description</span>
              <div className="form__form-group-field">
                <input
                  name="descriptionInput"
                  type="text"
                  {...register('descriptionInput')}
                />
              </div>
              <span className="form__form-group-description">
                Zealously now pronounce existence add you instantly say offending.
              </span>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Dropdown</span>
              <div className="form__form-group-field">
                <Controller
                  name="select"
                  render={({ field }) => <SelectField {...field} options={selectOptions} />}
                  defaultValue=""
                  control={control}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Multiselect</span>
              <div className="form__form-group-field">
                <Controller
                  name="multiSelect"
                  control={control}
                  render={({ field }) => <MultiSelectField {...field} options={selectOptions} />}
                  defaultValue=""
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Textarea</span>
              <div className="form__form-group-field">
                <input
                  name="textarea"
                  type="text"
                  {...register('textarea')}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">
                Add file
              </span>
              <div className="form__form-group-field">
                <Controller
                  name="file"
                  control={control}
                  render={({ field }) => <FileInputField {...field} />}
                />

              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
              <Button
                type="button"
                onClick={() => reset({
                  username: '',
                  email: '',
                  url: '',
                  password: '',
                  select: '',
                })}
              >
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

Form.propTypes = {
  isHorizontal: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
};

export default Form;
