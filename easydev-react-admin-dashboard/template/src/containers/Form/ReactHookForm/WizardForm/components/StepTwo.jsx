import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { SelectField } from '@/shared/components/form/Select';
import { FormField } from '../../FormHookValidation/components/FormField';
import { StepPropTypes, StepDefaultProps } from './Props';

const StepTwo = ({ onSubmit, previousPage, defaultValues }) => {
  const { handleSubmit, getValues, control } = useForm({ defaultValues });
  const handlePreviousPage = () => previousPage(getValues());
  return (
    <form className="form form--horizontal wizard__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="wizard__title">What’s your address</h3>
      <div className="form__form-group">
        <span className="form__form-group-label">Country</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="country"
            component={SelectField}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
            placeholder="Select country"
            defaultValue=""
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">City</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="city"
            as="input"
            type="text"
            placeholder="City name"
            defaultValue=""
          />
        </div>
      </div>
      <div className="form__form-group form__form-group--address">
        <span className="form__form-group-label">Address</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="street_name"
            as="input"
            type="text"
            placeholder="Street name"
            defaultValue=""
          />
          <FormField
            name="building"
            as="input"
            control={control}
            type="text"
            placeholder="Building"
            defaultValue=""
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">ZIP Code</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="zip"
            component="input"
            type="text"
            defaultValue=""
          />
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" className="previous" onClick={handlePreviousPage}>Back</Button>
        <Button color="primary" type="submit" className="next">Next</Button>
      </ButtonToolbar>
    </form>
  );
};

StepTwo.propTypes = StepPropTypes;
StepTwo.defaultProps = StepDefaultProps;

export default StepTwo;
