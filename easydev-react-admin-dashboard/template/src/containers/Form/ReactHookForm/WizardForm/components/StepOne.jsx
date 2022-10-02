import React from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import PasswordField from '@/shared/components/form/Password';
import { FormField } from '../../FormHookValidation/components/FormField';
import { StepPropTypes, StepDefaultProps } from './Props';

const StepOne = ({ onSubmit, defaultValues }) => {
  const { handleSubmit, control } = useForm({ defaultValues });
  return (
    <form className="form form--horizontal wizard__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="wizard__title">Fill your personal data</h3>
      <div className="form__form-group">
        <span className="form__form-group-label">Username</span>
        <div className="form__form-group-field">
          <FormField
            name="username"
            as="input"
            placeholder="Name"
            control={control}
            defaultValue=""
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">E-mail</span>
        <div className="form__form-group-field">
          <FormField
            name="email"
            as="input"
            type="email"
            placeholder="example@mail.com"
            control={control}
            defaultValue=""
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Url</span>
        <div className="form__form-group-field">
          <FormField
            name="url"
            as="input"
            control={control}
            type="url"
            placeholder="https://themeforest.net"
            defaultValue=""
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => <PasswordField input={field} placeholder="Password" />}
          />
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" disabled className="previous">Back</Button>
        <Button color="primary" type="submit" className="next">Next</Button>
      </ButtonToolbar>
    </form>
  );
};

StepOne.propTypes = StepPropTypes;
StepOne.defaultProps = StepDefaultProps;

export default StepOne;
