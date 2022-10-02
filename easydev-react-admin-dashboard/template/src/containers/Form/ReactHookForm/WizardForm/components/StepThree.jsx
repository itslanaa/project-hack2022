import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { ToggleButtonField } from '@/shared/components/form/ToggleButton';
import { SelectField } from '@/shared/components/form/Select';
import { useForm } from 'react-hook-form';
import { FormField } from '../../FormHookValidation/components/FormField';
import { StepPropTypes, StepDefaultProps } from './Props';

const StepThree = ({ onSubmit, previousPage, defaultValues }) => {
  const { handleSubmit, getValues, control } = useForm({ defaultValues });
  const handlePreviousPage = () => previousPage(getValues());
  return (
    <form className="form form--horizontal wizard__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="wizard__title">Set the preferences</h3>
      <div className="form__form-group">
        <span className="form__form-group-label">Change Plan</span>
        <div className="form__form-group-field">
          <FormField
            name="plan"
            control={control}
            component={SelectField}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
            placeholder="Choose plan"
            defaultValue=""
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">E-Mail Notifications</span>
        <div className="form__form-group-field">
          <FormField
            name="email_notifications"
            control={control}
            component={ToggleButtonField}
            defaultValue
          />
        </div>
        <p className="wizard__description">Agreement offending commanded my an. Change wholly say why eldest
          period.
        </p>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Phone Notifications</span>
        <div className="form__form-group-field">
          <FormField
            name="phone_notifications"
            control={control}
            component={ToggleButtonField}
            defaultValue=""
          />
        </div>
        <p className="wizard__description">Are projection put celebrated particular unreserved joy unsatiable its. In
          then dare good am rose bred or.
        </p>
      </div>
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" className="previous" onClick={handlePreviousPage}>Back</Button>
        <Button color="primary" type="submit">Submit</Button>
      </ButtonToolbar>
    </form>
  );
};

StepThree.propTypes = StepPropTypes;
StepThree.defaultProps = StepDefaultProps;

export default StepThree;
